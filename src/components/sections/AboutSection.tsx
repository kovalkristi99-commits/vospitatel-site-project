import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 relative z-10">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Обо мне</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
          <div className="space-y-4">
            <p className="text-lg text-foreground leading-relaxed">
              Моя профессия — это не просто работа, это призвание. Каждый день я с радостью встречаю своих воспитанников, помогаю им открывать мир, учиться и развиваться.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              Педагогический стаж более 7 лет позволяет мне находить индивидуальный подход к каждому ребёнку, учитывая его особенности и потребности.
            </p>
            <div className="flex flex-wrap gap-2 pt-4">
              <Badge variant="secondary" className="text-base py-2 px-4">
                <Icon name="Award" size={16} className="mr-2" />
                Высшая категория
              </Badge>
              <Badge variant="secondary" className="text-base py-2 px-4">
                <Icon name="Calendar" size={16} className="mr-2" />
                Стаж 7+ лет
              </Badge>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-xl">
              <img 
                src="https://cdn.poehali.dev/files/c9898b08-5d74-4e6e-b8f4-270fb1554edd.jpg" 
                alt="Воспитатель"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mt-12">
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="GraduationCap" size={24} className="text-primary" />
                Образование
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Средне‑профессиональное образование</h4>
                <p className="text-muted-foreground">Специальность: Воспитатель детей дошкольного возраста</p>
                <p className="text-sm text-muted-foreground">Год окончания: 2022</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Курсы повышения квалификации</h4>
                <p className="text-muted-foreground">Регулярное обучение по ФГОС ДО и современным методикам</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Target" size={24} className="text-primary" />
                Квалификация
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Высшая квалификационная категория</h4>
                <p className="text-muted-foreground">Владение современными образовательными технологиями</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Опыт работы с детьми разных возрастных групп</h4>
                <p className="text-muted-foreground">От 3 до 7 лет</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
