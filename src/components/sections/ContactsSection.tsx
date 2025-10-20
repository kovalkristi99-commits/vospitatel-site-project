import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

interface ContactsSectionProps {
  formData: {
    name: string;
    email: string;
    phone: string;
    message: string;
  };
  handleSubmit: (e: React.FormEvent) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const ContactsSection = ({ formData, handleSubmit, handleInputChange }: ContactsSectionProps) => {
  return (
    <section id="contacts" className="py-20 px-4 relative z-10">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Контакты</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-2">
            <CardHeader>
              <CardTitle>Контактная информация</CardTitle>
              <CardDescription>Свяжитесь со мной удобным способом</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Icon name="Mail" size={20} className="text-primary" />
                <div>
                  <p className="font-semibold">Email</p>
                  <a href="mailto:kristina.pushmina@example.com" className="text-muted-foreground hover:text-primary">
                    kristina.pushmina@example.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Phone" size={20} className="text-primary" />
                <div>
                  <p className="font-semibold">Телефон</p>
                  <a href="tel:+79001234567" className="text-muted-foreground hover:text-primary">
                    +7 (900) 123-45-67
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="MapPin" size={20} className="text-primary" />
                <div>
                  <p className="font-semibold">Местоположение</p>
                  <p className="text-muted-foreground">Иркутская область, г. Усолье-Сибирское</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Clock" size={20} className="text-primary" />
                <div>
                  <p className="font-semibold">Режим работы</p>
                  <p className="text-muted-foreground">Понедельник - Пятница: 7:00 - 19:00</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <CardTitle>Напишите мне</CardTitle>
              <CardDescription>Задайте вопрос или оставьте отзыв</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Имя</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Сообщение</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Напишите ваш вопрос или пожелание..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Отправить сообщение
                  <Icon name="Send" size={18} className="ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
