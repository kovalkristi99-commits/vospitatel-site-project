import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from typing import Dict, Any
from pydantic import BaseModel, Field
import psycopg2

class ContactRequest(BaseModel):
    name: str = Field(..., min_length=1, max_length=100)
    email: str = Field(..., min_length=1)
    phone: str = Field(default='', max_length=20)
    message: str = Field(..., min_length=1, max_length=1000)

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Обработка формы обратной связи с отправкой на email
    Args: event с httpMethod, body; context с request_id
    Returns: HTTP response с результатом отправки
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'isBase64Encoded': False,
            'body': json.dumps({'error': 'Method not allowed'})
        }
    
    try:
        body_data = json.loads(event.get('body', '{}'))
        contact = ContactRequest(**body_data)
        
        headers = event.get('headers', {})
        ip_address = headers.get('X-Forwarded-For', '').split(',')[0].strip() or headers.get('X-Real-IP', 'unknown')
        user_agent = headers.get('User-Agent', 'unknown')
        
        database_url = os.environ.get('DATABASE_URL')
        if database_url:
            conn = psycopg2.connect(database_url)
            cur = conn.cursor()
            
            cur.execute(
                """
                INSERT INTO t_p95327751_vospitatel_site_proj.contact_messages 
                (name, email, phone, message, ip_address, user_agent)
                VALUES (%s, %s, %s, %s, %s, %s)
                """,
                (contact.name, contact.email, contact.phone, contact.message, ip_address, user_agent)
            )
            
            conn.commit()
            cur.close()
            conn.close()
        
        smtp_host = os.environ.get('SMTP_HOST')
        smtp_port = os.environ.get('SMTP_PORT')
        smtp_user = os.environ.get('SMTP_USER')
        smtp_password = os.environ.get('SMTP_PASSWORD')
        
        email_sent = False
        email_error = None
        
        if all([smtp_host, smtp_port, smtp_user, smtp_password]):
            try:
                msg = MIMEMultipart()
                msg['From'] = smtp_user
                msg['To'] = 'kriskova@yandex.ru'
                msg['Subject'] = f'Новое сообщение с сайта от {contact.name}'
                
                body = f"""
Новое сообщение с сайта воспитателя!

Имя: {contact.name}
Email: {contact.email}
Телефон: {contact.phone or 'Не указан'}

Сообщение:
{contact.message}

---
IP: {ip_address}
                """
                
                msg.attach(MIMEText(body, 'plain', 'utf-8'))
                
                server = smtplib.SMTP(smtp_host, int(smtp_port))
                server.starttls()
                server.login(smtp_user, smtp_password)
                server.send_message(msg)
                server.quit()
                email_sent = True
                print(f'Email sent successfully to kriskova@yandex.ru')
            except Exception as smtp_error:
                email_error = str(smtp_error)
                print(f'SMTP Error: {email_error}')
        else:
            print(f'SMTP config incomplete: host={smtp_host}, port={smtp_port}, user={smtp_user}, password={"***" if smtp_password else None}')
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'isBase64Encoded': False,
            'body': json.dumps({
                'success': True,
                'message': 'Сообщение успешно отправлено'
            })
        }
        
    except Exception as e:
        return {
            'statusCode': 400,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'isBase64Encoded': False,
            'body': json.dumps({'error': str(e)})
        }