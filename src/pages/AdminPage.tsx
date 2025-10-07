import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface ContactMessage {
  id: number;
  name: string;
  email: string;
  phone: string;
  message: string;
  created_at: string;
  ip_address: string;
}

export default function AdminPage() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    if (password === 'admin123') {
      setIsAuthenticated(true);
      loadMessages();
    } else {
      alert('Неверный пароль!');
    }
  };

  const loadMessages = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://functions.poehali.dev/e7a7cb4f-c113-49ca-9293-d219d231a66e?action=list');
      const data = await response.json();
      setMessages(data.messages || []);
    } catch (error) {
      console.error('Ошибка загрузки:', error);
    }
    setLoading(false);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-center">Админ-панель</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <input
              type="password"
              placeholder="Введите пароль"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
            />
            <button
              onClick={handleLogin}
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Войти
            </button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Заявки с сайта</h1>
          <button
            onClick={loadMessages}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            <Icon name="RefreshCw" size={20} />
            Обновить
          </button>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin inline-block w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full"></div>
            <p className="mt-4 text-gray-600">Загрузка...</p>
          </div>
        ) : messages.length === 0 ? (
          <Card>
            <CardContent className="text-center py-12">
              <Icon name="Inbox" size={48} className="mx-auto text-gray-400 mb-4" />
              <p className="text-gray-600">Пока нет заявок</p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-4">
            {messages.map((msg) => (
              <Card key={msg.id} className="hover:shadow-lg transition">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{msg.name}</CardTitle>
                      <p className="text-sm text-gray-500">
                        {new Date(msg.created_at).toLocaleString('ru-RU')}
                      </p>
                    </div>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                      Новая
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-gray-700">
                    <Icon name="Mail" size={16} />
                    <a href={`mailto:${msg.email}`} className="hover:text-blue-600">
                      {msg.email}
                    </a>
                  </div>
                  {msg.phone && (
                    <div className="flex items-center gap-2 text-gray-700">
                      <Icon name="Phone" size={16} />
                      <a href={`tel:${msg.phone}`} className="hover:text-blue-600">
                        {msg.phone}
                      </a>
                    </div>
                  )}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-800 whitespace-pre-wrap">{msg.message}</p>
                  </div>
                  <div className="text-xs text-gray-400 flex items-center gap-1">
                    <Icon name="MapPin" size={12} />
                    {msg.ip_address}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
