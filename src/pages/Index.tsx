import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { useToast } from '@/hooks/use-toast';

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

  const achievements = [
    {
      icon: "Award",
      title: "Квалификация",
      description: "Первая квалификационная категория"
    },
    {
      icon: "GraduationCap",
      title: "Образование",
      description: "Высшее педагогическое образование"
    },
    {
      icon: "Calendar",
      title: "Опыт работы",
      description: "Более 15 лет в дошкольном образовании"
    },
    {
      icon: "Users",
      title: "Методист",
      description: "Наставник молодых специалистов"
    }
  ];

  const methodologies = [
    {
      icon: "Palette",
      title: "Игровые технологии",
      description: "Обучение через игру и творчество"
    },
    {
      icon: "Brain",
      title: "Развивающие методики",
      description: "Комплексное развитие способностей"
    },
    {
      icon: "Heart",
      title: "Индивидуальный подход",
      description: "Учет особенностей каждого ребенка"
    },
    {
      icon: "Sparkles",
      title: "STEAM образование",
      description: "Интеграция науки, технологий и искусства"
    }
  ];

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800",
      alt: "Творческие занятия"
    },
    {
      src: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800",
      alt: "Игровая деятельность"
    },
    {
      src: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=800",
      alt: "Развивающие игры"
    },
    {
      src: "https://images.unsplash.com/photo-1609619385002-f40bc4e3684d?w=800",
      alt: "Занятия на свежем воздухе"
    },
    {
      src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800",
      alt: "Музыкальные занятия"
    },
    {
      src: "https://images.unsplash.com/photo-1599296832143-e1270e4d2c62?w=800",
      alt: "Художественное творчество"
    },
    {
      src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800",
      alt: "Познавательная деятельность"
    },
    {
      src: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=800",
      alt: "Физическое развитие"
    }
  ];

  const methodologicalWorks = [
    {
      title: "Планирование образовательной деятельности",
      description: "Рабочие программы и календарно-тематическое планирование",
      items: ["Рабочая программа для младшей группы", "Рабочая программа для средней группы", "Календарно-тематическое планирование"]
    },
    {
      title: "Проектная деятельность",
      description: "Реализованные образовательные проекты",
      items: ["Проект 'Времена года'", "Проект 'Моя семья'", "Проект 'Мир вокруг нас'"]
    },
    {
      title: "Диагностика и мониторинг",
      description: "Материалы для оценки развития воспитанников",
      items: ["Карты индивидуального развития", "Диагностические материалы", "Мониторинг достижений"]
    }
  ];

  const educationalActivities = [
    {
      title: "Конспекты занятий",
      description: "Разработки образовательной деятельности",
      count: "50+ конспектов"
    },
    {
      title: "Дидактические игры",
      description: "Авторские развивающие игры",
      count: "30+ игр"
    },
    {
      title: "Наглядные материалы",
      description: "Картотеки и демонстрационный материал",
      count: "100+ карточек"
    }
  ];

  const developmentEnvironment = [
    {
      title: "Центр познания",
      description: "Материалы для исследовательской деятельности",
      icon: "Microscope"
    },
    {
      title: "Центр творчества",
      description: "Материалы для художественной деятельности",
      icon: "Palette"
    },
    {
      title: "Центр игры",
      description: "Сюжетно-ролевые и театрализованные игры",
      icon: "Drama"
    },
    {
      title: "Центр книги",
      description: "Библиотека и материалы для чтения",
      icon: "BookOpen"
    },
    {
      title: "Центр движения",
      description: "Материалы для физического развития",
      icon: "Dumbbell"
    },
    {
      title: "Центр конструирования",
      description: "Различные виды конструкторов",
      icon: "Blocks"
    }
  ];

  const videoLibrary = [
    {
      title: "Открытое занятие 'Осенние краски'",
      description: "Интегрированное занятие по художественно-эстетическому развитию",
      thumbnail: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400",
      duration: "25 мин"
    },
    {
      title: "Мастер-класс для педагогов",
      description: "Использование ТРИЗ-технологий в работе с дошкольниками",
      thumbnail: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400",
      duration: "45 мин"
    },
    {
      title: "Утренник 'Здравствуй, лето!'",
      description: "Итоговое мероприятие учебного года",
      thumbnail: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400",
      duration: "30 мин"
    }
  ];

  const familyValuesSections = [
    {
      title: "Семейные традиции",
      icon: "Home",
      content: "Семья - это основа воспитания ребенка. Важно создавать и поддерживать семейные традиции, которые объединяют поколения и формируют семейные ценности."
    },
    {
      title: "Взаимодействие с родителями",
      icon: "Users",
      content: "Активное участие родителей в жизни группы способствует гармоничному развитию детей и укреплению детско-родительских отношений."
    },
    {
      title: "Консультации для родителей",
      icon: "MessageCircle",
      content: "Регулярные консультации помогают родителям лучше понимать возрастные особенности детей и применять эффективные методы воспитания."
    }
  ];

  const ageGroups = [
    { value: "2-3", label: "2-3 года" },
    { value: "3-4", label: "3-4 года" },
    { value: "4-5", label: "4-5 лет" },
    { value: "5-6", label: "5-6 лет" },
    { value: "6-7", label: "6-7 лет" }
  ];

  const educationalAreas = [
    { value: "cognitive", label: "Познавательное развитие" },
    { value: "speech", label: "Речевое развитие" },
    { value: "social", label: "Социально-коммуникативное" },
    { value: "artistic", label: "Художественно-эстетическое" },
    { value: "physical", label: "Физическое развитие" }
  ];

  const lessonPlans = [
    {
      id: 1,
      title: "Осенние листочки",
      age: "3-4",
      area: "artistic",
      duration: "20 минут",
      goals: ["Развитие творческих способностей", "Знакомство с осенними красками", "Развитие мелкой моторики"],
      materials: ["Листья деревьев", "Краски", "Кисти", "Бумага"],
      stages: [
        {
          name: "Организационный момент",
          duration: "3 мин",
          description: "Приветствие, мотивация к деятельности"
        },
        {
          name: "Основная часть",
          duration: "15 мин",
          description: "Рассматривание листьев, выбор красок, создание отпечатков"
        },
        {
          name: "Заключительная часть",
          duration: "2 мин",
          description: "Рефлексия, выставка работ"
        }
      ]
    },
    {
      id: 2,
      title: "Путешествие в страну геометрических фигур",
      age: "4-5",
      area: "cognitive",
      duration: "25 минут",
      goals: ["Закрепление знаний о геометрических фигурах", "Развитие логического мышления", "Формирование пространственных представлений"],
      materials: ["Геометрические фигуры", "Дидактические игры", "Рабочие листы"],
      stages: [
        {
          name: "Вводная часть",
          duration: "5 мин",
          description: "Загадки о геометрических фигурах, мотивация"
        },
        {
          name: "Основная часть",
          duration: "17 мин",
          description: "Дидактические игры, практические задания"
        },
        {
          name: "Итог",
          duration: "3 мин",
          description: "Подведение итогов, поощрение"
        }
      ]
    },
    {
      id: 3,
      title: "Моя семья",
      age: "5-6",
      area: "social",
      duration: "30 минут",
      goals: ["Формирование представлений о семье", "Воспитание уважения к близким", "Развитие речи и коммуникативных навыков"],
      materials: ["Семейные фотографии", "Картинки", "Материалы для творчества"],
      stages: [
        {
          name: "Организационный момент",
          duration: "5 мин",
          description: "Беседа о семье, рассматривание фотографий"
        },
        {
          name: "Основная часть",
          duration: "20 мин",
          description: "Рассказы детей о своих семьях, творческая деятельность"
        },
        {
          name: "Заключение",
          duration: "5 мин",
          description: "Презентация работ, рефлексия"
        }
      ]
    },
    {
      id: 4,
      title: "Звуки весны",
      age: "5-6",
      area: "speech",
      duration: "25 минут",
      goals: ["Развитие фонематического слуха", "Обогащение словарного запаса", "Формирование связной речи"],
      materials: ["Аудиозаписи природных звуков", "Картинки", "Дидактические игры"],
      stages: [
        {
          name: "Введение",
          duration: "5 мин",
          description: "Прослушивание звуков весны"
        },
        {
          name: "Основная часть",
          duration: "17 мин",
          description: "Игры на развитие фонематического слуха, составление рассказов"
        },
        {
          name: "Завершение",
          duration: "3 мин",
          description: "Подведение итогов"
        }
      ]
    },
    {
      id: 5,
      title: "Веселая физкультура",
      age: "6-7",
      area: "physical",
      duration: "30 минут",
      goals: ["Развитие физических качеств", "Формирование правильной осанки", "Воспитание интереса к физкультуре"],
      materials: ["Мячи", "Обручи", "Скакалки", "Музыкальное сопровождение"],
      stages: [
        {
          name: "Вводная часть",
          duration: "5 мин",
          description: "Разминка, построение"
        },
        {
          name: "Основная часть",
          duration: "20 мин",
          description: "Общеразвивающие упражнения, подвижные игры"
        },
        {
          name: "Заключительная часть",
          duration: "5 мин",
          description: "Игра малой подвижности, релаксация"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>
      
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-sm z-50 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Sparkles" className="text-primary" size={24} />
              <span className="font-bold text-lg">Сайт воспитателя</span>
            </div>
            
            <div className="hidden md:flex space-x-1">
              {[
                { id: 'home', label: 'Главная', icon: 'Home' },
                { id: 'about', label: 'Обо мне', icon: 'User' },
                { id: 'portfolio', label: 'Портфолио', icon: 'Award' },
                { id: 'parents', label: 'Родителям', icon: 'Users' },
                { id: 'gallery', label: 'Галерея', icon: 'Image' },
                { id: 'videos', label: 'Видео', icon: 'Video' },
                { id: 'family-values', label: 'Семейные ценности', icon: 'Heart' },
                { id: 'methodical', label: 'Методическая копилка', icon: 'BookOpen' },
                { id: 'contacts', label: 'Контакты', icon: 'Mail' }
              ].map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center space-x-1"
                >
                  <Icon name={item.icon as any} size={16} />
                  <span>{item.label}</span>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 relative z-10">
        <div className="container mx-auto text-center">
          <div className="mb-8 relative">
            <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center relative overflow-hidden border-4 border-white shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400" 
                alt="Фото воспитателя"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/10 rounded-full blur-xl animate-pulse delay-700"></div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Иванова Мария Петровна
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Воспитатель высшей категории
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="text-lg px-4 py-2">
              <Icon name="Award" size={16} className="mr-2" />
              15+ лет опыта
            </Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              <Icon name="Heart" size={16} className="mr-2" />
              Люблю детей
            </Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              <Icon name="Sparkles" size={16} className="mr-2" />
              Творческий подход
            </Badge>
          </div>
          
          <div className="mt-12">
            <Button size="lg" onClick={() => scrollToSection('contacts')} className="mr-4">
              <Icon name="Mail" size={20} className="mr-2" />
              Связаться со мной
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection('portfolio')}>
              <Icon name="Award" size={20} className="mr-2" />
              Моё портфолио
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 relative z-10">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Обо мне
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-white/80 backdrop-blur-sm border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="GraduationCap" className="text-primary" />
                  <span>Образование и квалификация</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Высшее педагогическое образование по специальности "Дошкольная педагогика и психология". 
                  Регулярно повышаю квалификацию, участвую в семинарах и мастер-классах. 
                  Имею первую квалификационную категорию.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="Heart" className="text-primary" />
                  <span>Педагогическая философия</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Верю, что каждый ребенок уникален и талантлив. Моя задача - создать условия для раскрытия 
                  потенциала каждого воспитанника через игру, творчество и познание мира.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {achievements.map((achievement, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-2 hover:shadow-lg transition-all hover:-translate-y-1">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <Icon name={achievement.icon as any} className="text-primary" size={32} />
                  </div>
                  <h3 className="font-bold mb-2">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-white/80 backdrop-blur-sm border-2">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Icon name="Lightbulb" className="text-primary" />
                <span>Методики и подходы</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {methodologies.map((method, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <Icon name={method.icon as any} className="text-primary" size={24} />
                    </div>
                    <h4 className="font-semibold mb-2">{method.title}</h4>
                    <p className="text-sm text-muted-foreground">{method.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-white/40 backdrop-blur-sm relative z-10">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Портфолио
          </h2>

          <Tabs defaultValue="achievements" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
              <TabsTrigger value="achievements">Достижения</TabsTrigger>
              <TabsTrigger value="projects">Проекты</TabsTrigger>
              <TabsTrigger value="publications">Публикации</TabsTrigger>
              <TabsTrigger value="certificates">Сертификаты</TabsTrigger>
            </TabsList>

            <TabsContent value="achievements">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Победитель конкурса 'Воспитатель года'",
                    year: "2023",
                    description: "Муниципальный этап",
                    icon: "Trophy"
                  },
                  {
                    title: "Благодарность Министерства образования",
                    year: "2022",
                    description: "За вклад в развитие дошкольного образования",
                    icon: "Award"
                  },
                  {
                    title: "Разработка авторской программы",
                    year: "2021",
                    description: "Программа 'Творческая мастерская'",
                    icon: "BookOpen"
                  }
                ].map((achievement, index) => (
                  <Card key={index} className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                          <Icon name={achievement.icon as any} className="text-primary" size={24} />
                        </div>
                        <Badge>{achievement.year}</Badge>
                      </div>
                      <CardTitle className="mt-4">{achievement.title}</CardTitle>
                      <CardDescription>{achievement.description}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="projects">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Проект 'Эколята-дошколята'",
                    description: "Формирование экологической культуры у дошкольников через практическую деятельность",
                    duration: "Сентябрь 2023 - Май 2024",
                    participants: "Дети 5-6 лет, родители",
                    results: ["Создание экологической тропы", "Проведение 12 тематических занятий", "Участие в региональном конкурсе"]
                  },
                  {
                    title: "Проект 'Моя малая Родина'",
                    description: "Патриотическое воспитание через знакомство с историей и культурой родного края",
                    duration: "Январь - Апрель 2024",
                    participants: "Дети 6-7 лет, педагоги, родители",
                    results: ["Создание мини-музея", "Экскурсии по городу", "Выставка детских работ"]
                  }
                ].map((project, index) => (
                  <Card key={index} className="bg-white/80 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2 text-sm">
                          <Icon name="Calendar" size={16} className="text-muted-foreground" />
                          <span>{project.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <Icon name="Users" size={16} className="text-muted-foreground" />
                          <span>{project.participants}</span>
                        </div>
                        <div>
                          <p className="text-sm font-semibold mb-2">Результаты:</p>
                          <ul className="text-sm space-y-1">
                            {project.results.map((result, idx) => (
                              <li key={idx} className="flex items-start space-x-2">
                                <Icon name="CheckCircle" size={16} className="text-primary mt-0.5" />
                                <span>{result}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="publications">
              <div className="space-y-4">
                {[
                  {
                    title: "Использование ТРИЗ-технологий в работе с дошкольниками",
                    journal: "Дошкольное воспитание",
                    year: "2023",
                    type: "Статья"
                  },
                  {
                    title: "Развитие творческих способностей через нетрадиционные техники рисования",
                    journal: "Воспитатель ДОУ",
                    year: "2022",
                    type: "Методическая разработка"
                  },
                  {
                    title: "Игровые технологии в познавательном развитии",
                    journal: "Педагогический вестник",
                    year: "2022",
                    type: "Статья"
                  }
                ].map((publication, index) => (
                  <Card key={index} className="bg-white/80 backdrop-blur-sm">
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold mb-2">{publication.title}</h3>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <span className="flex items-center space-x-1">
                              <Icon name="BookOpen" size={14} />
                              <span>{publication.journal}</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <Icon name="Calendar" size={14} />
                              <span>{publication.year}</span>
                            </span>
                          </div>
                        </div>
                        <Badge variant="outline">{publication.type}</Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="certificates">
              <div className="grid md:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((cert) => (
                  <Card key={cert} className="bg-white/80 backdrop-blur-sm overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-[3/4] bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                      <Icon name="Award" size={48} className="text-primary/30" />
                    </div>
                    <CardContent className="pt-4">
                      <p className="text-sm font-semibold">Сертификат {cert}</p>
                      <p className="text-xs text-muted-foreground">Повышение квалификации</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="parents" className="py-20 px-4 relative z-10">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Родителям
          </h2>

          <Tabs defaultValue="consultations" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
              <TabsTrigger value="consultations">Консультации</TabsTrigger>
              <TabsTrigger value="recommendations">Рекомендации</TabsTrigger>
              <TabsTrigger value="games">Игры дома</TabsTrigger>
              <TabsTrigger value="reading">Что читать</TabsTrigger>
            </TabsList>

            <TabsContent value="consultations">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Адаптация ребенка к детскому саду",
                    description: "Как помочь малышу привыкнуть к новой обстановке",
                    icon: "Home",
                    topics: ["Подготовка к детскому саду", "Режим дня", "Эмоциональная поддержка"]
                  },
                  {
                    title: "Возрастные кризисы",
                    description: "Понимание и преодоление сложных периодов",
                    icon: "TrendingUp",
                    topics: ["Кризис 3 лет", "Кризис 7 лет", "Способы взаимодействия"]
                  },
                  {
                    title: "Развитие речи",
                    description: "Как способствовать речевому развитию ребенка",
                    icon: "MessageCircle",
                    topics: ["Артикуляционная гимнастика", "Расширение словаря", "Развитие связной речи"]
                  },
                  {
                    title: "Подготовка к школе",
                    description: "Что важно знать и уметь будущему первокласснику",
                    icon: "GraduationCap",
                    topics: ["Интеллектуальная готовность", "Психологическая готовность", "Социальная готовность"]
                  }
                ].map((consultation, index) => (
                  <Card key={index} className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-12 h-12 mb-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                        <Icon name={consultation.icon as any} className="text-primary" size={24} />
                      </div>
                      <CardTitle>{consultation.title}</CardTitle>
                      <CardDescription>{consultation.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {consultation.topics.map((topic, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-sm">
                            <Icon name="CheckCircle" size={16} className="text-primary" />
                            <span>{topic}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="recommendations">
              <div className="space-y-6">
                <Card className="bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle>Режим дня дошкольника</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { time: "7:00-8:00", activity: "Подъем, утренняя гимнастика, гигиенические процедуры" },
                        { time: "8:00-9:00", activity: "Завтрак" },
                        { time: "9:00-12:00", activity: "Занятия, прогулка" },
                        { time: "12:00-13:00", activity: "Обед" },
                        { time: "13:00-15:00", activity: "Дневной сон" },
                        { time: "15:00-16:00", activity: "Полдник, спокойные игры" },
                        { time: "16:00-18:00", activity: "Прогулка, свободная деятельность" },
                        { time: "18:00-19:00", activity: "Ужин" },
                        { time: "19:00-21:00", activity: "Спокойные игры, чтение, подготовка ко сну" }
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start space-x-3 pb-3 border-b last:border-0">
                          <Badge variant="outline" className="shrink-0">{item.time}</Badge>
                          <span className="text-sm">{item.activity}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle>Организация домашних занятий</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {[
                        "Выберите удобное время, когда ребенок не устал",
                        "Продолжительность занятия - не более 20-25 минут",
                        "Создайте комфортное рабочее место с хорошим освещением",
                        "Чередуйте виды деятельности",
                        "Обязательно хвалите ребенка за старание",
                        "Не сравнивайте с другими детьми",
                        "Делайте физкультминутки"
                      ].map((tip, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <Icon name="Star" size={16} className="text-primary mt-1 shrink-0" />
                          <span className="text-sm">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="games">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Найди пару",
                    age: "3-4 года",
                    description: "Развитие памяти и внимания",
                    materials: "Парные картинки или карточки"
                  },
                  {
                    title: "Что изменилось?",
                    age: "4-5 лет",
                    description: "Развитие наблюдательности",
                    materials: "Игрушки или предметы"
                  },
                  {
                    title: "Рифмы",
                    age: "5-6 лет",
                    description: "Развитие речи и фонематического слуха",
                    materials: "Не требуется"
                  },
                  {
                    title: "Математические раскраски",
                    age: "5-7 лет",
                    description: "Развитие математических представлений",
                    materials: "Раскраски с примерами"
                  },
                  {
                    title: "Истории по картинкам",
                    age: "4-6 лет",
                    description: "Развитие связной речи",
                    materials: "Сюжетные картинки"
                  },
                  {
                    title: "Лабиринты",
                    age: "4-7 лет",
                    description: "Развитие логического мышления",
                    materials: "Листы с лабиринтами"
                  }
                ].map((game, index) => (
                  <Card key={index} className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary">{game.age}</Badge>
                      </div>
                      <CardTitle className="text-lg">{game.title}</CardTitle>
                      <CardDescription>{game.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-start space-x-2 text-sm">
                        <Icon name="Package" size={16} className="text-muted-foreground mt-0.5" />
                        <span className="text-muted-foreground">{game.materials}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="reading">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    age: "2-3 года",
                    books: [
                      "Сказки К. Чуковского",
                      "Стихи А. Барто",
                      "Русские народные сказки",
                      "Сказки В. Сутеева"
                    ]
                  },
                  {
                    age: "3-4 года",
                    books: [
                      "Сказки С. Маршака",
                      "Рассказы Н. Носова",
                      "Стихи С. Михалкова",
                      "Сказки Г.Х. Андерсена"
                    ]
                  },
                  {
                    age: "4-5 лет",
                    books: [
                      "Сказки А. Пушкина",
                      "Рассказы В. Драгунского",
                      "Стихи Б. Заходера",
                      "Приключения Незнайки"
                    ]
                  },
                  {
                    age: "5-7 лет",
                    books: [
                      "Сказки П. Бажова",
                      "Рассказы о природе В. Бианки",
                      "Былины и легенды",
                      "Энциклопедии для детей"
                    ]
                  }
                ].map((section, index) => (
                  <Card key={index} className="bg-white/80 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Icon name="BookOpen" className="text-primary" />
                        <span>{section.age}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {section.books.map((book, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <Icon name="Book" size={16} className="text-primary mt-1 shrink-0" />
                            <span className="text-sm">{book}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4 bg-white/40 backdrop-blur-sm relative z-10">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Фотогалерея
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <div className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group">
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <Icon name="ZoomIn" className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={32} />
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <img src={image.src} alt={image.alt} className="w-full h-auto" />
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      <section id="videos" className="py-20 px-4 relative z-10">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Видеотека
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoLibrary.map((video, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative aspect-video bg-gradient-to-br from-primary/10 to-secondary/10">
                  <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center cursor-pointer hover:bg-white transition-colors">
                      <Icon name="Play" className="text-primary ml-1" size={32} />
                    </div>
                  </div>
                  <Badge className="absolute top-2 right-2">{video.duration}</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{video.title}</CardTitle>
                  <CardDescription>{video.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="family-values" className="py-20 px-4 bg-white/40 backdrop-blur-sm relative z-10">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Семейные ценности
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {familyValuesSections.map((section, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 mb-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <Icon name={section.icon as any} className="text-primary" size={24} />
                  </div>
                  <CardTitle>{section.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{section.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Рекомендации по воспитанию семейных ценностей</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center space-x-2">
                    <Icon name="Heart" className="text-primary" size={20} />
                    <span>Любовь и забота</span>
                  </h4>
                  <ul className="space-y-2 text-sm">
                    {[
                      "Проявляйте любовь словами и действиями",
                      "Обнимайте детей каждый день",
                      "Говорите о своих чувствах",
                      "Показывайте пример заботы о близких"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <Icon name="Check" size={16} className="text-primary mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 flex items-center space-x-2">
                    <Icon name="Users" className="text-primary" size={20} />
                    <span>Совместная деятельность</span>
                  </h4>
                  <ul className="space-y-2 text-sm">
                    {[
                      "Проводите семейные вечера",
                      "Готовьте вместе",
                      "Читайте книги всей семьей",
                      "Занимайтесь спортом вместе"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <Icon name="Check" size={16} className="text-primary mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="methodical" className="py-20 px-4 relative z-10">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Методическая копилка
          </h2>

          <Tabs defaultValue="plans" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
              <TabsTrigger value="plans">Планы занятий</TabsTrigger>
              <TabsTrigger value="materials">Материалы</TabsTrigger>
              <TabsTrigger value="environment">Развивающая среда</TabsTrigger>
              <TabsTrigger value="work">Работа с родителями</TabsTrigger>
            </TabsList>

            <TabsContent value="plans">
              <div className="mb-6 flex flex-wrap gap-4">
                <div className="flex-1 min-w-[200px]">
                  <label className="text-sm font-medium mb-2 block">Возрастная группа</label>
                  <select className="w-full border border-border rounded-md px-3 py-2 bg-white">
                    <option value="">Все возрасты</option>
                    {ageGroups.map(group => (
                      <option key={group.value} value={group.value}>{group.label}</option>
                    ))}
                  </select>
                </div>
                <div className="flex-1 min-w-[200px]">
                  <label className="text-sm font-medium mb-2 block">Образовательная область</label>
                  <select className="w-full border border-border rounded-md px-3 py-2 bg-white">
                    <option value="">Все области</option>
                    {educationalAreas.map(area => (
                      <option key={area.value} value={area.value}>{area.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-4">
                {lessonPlans.map((plan) => (
                  <Card key={plan.id} className="bg-white/80 backdrop-blur-sm">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="mb-2">{plan.title}</CardTitle>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline">{ageGroups.find(g => g.value === plan.age)?.label}</Badge>
                            <Badge variant="outline">{educationalAreas.find(a => a.value === plan.area)?.label}</Badge>
                            <Badge variant="outline">
                              <Icon name="Clock" size={12} className="mr-1" />
                              {plan.duration}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2 flex items-center space-x-2">
                            <Icon name="Target" size={16} className="text-primary" />
                            <span>Цели и задачи:</span>
                          </h4>
                          <ul className="space-y-1">
                            {plan.goals.map((goal, idx) => (
                              <li key={idx} className="flex items-start space-x-2 text-sm">
                                <Icon name="CheckCircle" size={14} className="text-primary mt-1 shrink-0" />
                                <span>{goal}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2 flex items-center space-x-2">
                            <Icon name="Package" size={16} className="text-primary" />
                            <span>Материалы:</span>
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {plan.materials.map((material, idx) => (
                              <Badge key={idx} variant="secondary">{material}</Badge>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-3 flex items-center space-x-2">
                            <Icon name="List" size={16} className="text-primary" />
                            <span>Ход занятия:</span>
                          </h4>
                          <div className="space-y-3">
                            {plan.stages.map((stage, idx) => (
                              <div key={idx} className="border-l-2 border-primary pl-4">
                                <div className="flex items-center space-x-2 mb-1">
                                  <Badge variant="outline">{stage.duration}</Badge>
                                  <span className="font-medium">{stage.name}</span>
                                </div>
                                <p className="text-sm text-muted-foreground">{stage.description}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        <Button className="w-full">
                          <Icon name="Download" size={16} className="mr-2" />
                          Скачать полный конспект
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="materials">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {educationalActivities.map((activity, index) => (
                  <Card key={index} className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg">{activity.title}</CardTitle>
                      <CardDescription>{activity.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Badge variant="secondary" className="w-full justify-center py-2">
                        {activity.count}
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="space-y-4">
                {methodologicalWorks.map((work, index) => (
                  <Card key={index} className="bg-white/80 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle>{work.title}</CardTitle>
                      <CardDescription>{work.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {work.items.map((item, idx) => (
                          <li key={idx} className="flex items-center justify-between p-2 hover:bg-accent rounded-md transition-colors cursor-pointer">
                            <span className="flex items-center space-x-2">
                              <Icon name="FileText" size={16} className="text-primary" />
                              <span className="text-sm">{item}</span>
                            </span>
                            <Icon name="Download" size={16} className="text-muted-foreground" />
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="environment">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {developmentEnvironment.map((center, index) => (
                  <Card key={index} className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-12 h-12 mb-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                        <Icon name={center.icon as any} className="text-primary" size={24} />
                      </div>
                      <CardTitle className="text-lg">{center.title}</CardTitle>
                      <CardDescription>{center.description}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>

              <Card className="mt-8 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Принципы организации развивающей среды</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Доступность материалов для детей",
                      "Безопасность и комфорт",
                      "Соответствие возрасту",
                      "Вариативность и полифункциональность",
                      "Трансформируемость пространства",
                      "Эстетическое оформление"
                    ].map((principle, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <Icon name="CheckCircle" size={16} className="text-primary mt-1 shrink-0" />
                        <span className="text-sm">{principle}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="work">
              <div className="space-y-6">
                <Card className="bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle>Формы работы с родителями</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      {[
                        {
                          title: "Родительские собрания",
                          frequency: "1 раз в квартал",
                          description: "Обсуждение вопросов воспитания и развития детей"
                        },
                        {
                          title: "Индивидуальные консультации",
                          frequency: "По запросу",
                          description: "Помощь в решении конкретных ситуаций"
                        },
                        {
                          title: "Мастер-классы",
                          frequency: "1 раз в месяц",
                          description: "Обучение практическим навыкам"
                        },
                        {
                          title: "Совместные мероприятия",
                          frequency: "По плану",
                          description: "Праздники, экскурсии, проекты"
                        }
                      ].map((form, idx) => (
                        <div key={idx} className="p-4 border border-border rounded-lg">
                          <h4 className="font-semibold mb-2">{form.title}</h4>
                          <Badge variant="outline" className="mb-2">{form.frequency}</Badge>
                          <p className="text-sm text-muted-foreground">{form.description}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle>Информационные стенды</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { title: "Режим дня", icon: "Clock" },
                        { title: "Меню на неделю", icon: "UtensilsCrossed" },
                        { title: "План образовательной деятельности", icon: "Calendar" },
                        { title: "Советы специалистов", icon: "Lightbulb" },
                        { title: "Объявления и новости", icon: "Bell" }
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-3 p-3 bg-accent/50 rounded-lg">
                          <Icon name={item.icon as any} size={20} className="text-primary" />
                          <span className="font-medium">{item.title}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-white/40 backdrop-blur-sm relative z-10">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Контакты
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Свяжитесь со мной</CardTitle>
                <CardDescription>
                  Буду рада ответить на ваши вопросы
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="MapPin" className="text-primary mt-1" size={20} />
                  <div>
                    <p className="font-medium">Адрес:</p>
                    <p className="text-sm text-muted-foreground">МБДОУ "Детский сад №15"<br />г. Москва, ул. Примерная, д. 10</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Icon name="Phone" className="text-primary mt-1" size={20} />
                  <div>
                    <p className="font-medium">Телефон:</p>
                    <p className="text-sm text-muted-foreground">+7 (999) 123-45-67</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Icon name="Mail" className="text-primary mt-1" size={20} />
                  <div>
                    <p className="font-medium">Email:</p>
                    <p className="text-sm text-muted-foreground">ivanova.maria@example.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Icon name="Clock" className="text-primary mt-1" size={20} />
                  <div>
                    <p className="font-medium">Режим работы:</p>
                    <p className="text-sm text-muted-foreground">Пн-Пт: 7:00 - 19:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Напишите мне</CardTitle>
                <CardDescription>
                  Заполните форму, и я свяжусь с вами
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">Имя *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full border border-border rounded-md px-3 py-2"
                      placeholder="Ваше имя"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-1 block">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full border border-border rounded-md px-3 py-2"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-1 block">Телефон</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full border border-border rounded-md px-3 py-2"
                      placeholder="+7 (999) 123-45-67"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-1 block">Сообщение *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full border border-border rounded-md px-3 py-2"
                      placeholder="Ваше сообщение..."
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    <Icon name="Send" size={16} className="mr-2" />
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8 px-4 relative z-10 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">© 2024 Сайт воспитателя. Создано с любовью к детям ❤️</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
