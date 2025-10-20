import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import Navigation from '@/components/sections/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ContactsSection from '@/components/sections/ContactsSection';

// Импорт данных
import { achievements, methodologies, galleryImages, methodologicalWorks, educationalActivities, developmentEnvironment, videoLibrary } from '@/data/portfolioData';
import { familyValuesSections, ageGroups, educationalAreas } from '@/data/contentData';

// Импорт остальных компонентов (будут созданы позже)
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

// ВРЕМЕННО: все данные о планах уроков остаются здесь (будут вынесены позже)
const lessonPlans = [/* ... ваши планы уроков из оригинального файла ... */];

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://functions.poehali.dev/e7a7cb4f-c113-49ca-9293-d219d231a66e', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (response.ok && data.success) {
        toast({
          title: 'Сообщение отправлено!',
          description: 'Спасибо за обращение. Я свяжусь с вами в ближайшее время.',
        });
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        toast({
          title: 'Ошибка отправки',
          description: 'Попробуйте позже или свяжитесь по телефону',
          variant: 'destructive'
        });
      }
    } catch (error) {
      toast({
        title: 'Ошибка отправки',
        description: 'Попробуйте позже или свяжитесь по телефону',
        variant: 'destructive'
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>
      
      <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <AboutSection />
      
      {/* ВРЕМЕННО: Все остальные секции остаются встроенными пока не создадим компоненты */}
      {/* Portfolio, Parents, Gallery, Videos, FamilyValues, Methodical sections */}
      {/* ... весь остальной JSX из оригинального файла ... */}
      
      <ContactsSection 
        formData={formData}
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
      />

      <footer className="border-t border-border py-8 px-4 relative z-10 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">© 2024 Сайт воспитателя. Создано с любовью к детям ❤️</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
