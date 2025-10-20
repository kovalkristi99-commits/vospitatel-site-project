import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section id="home" className="py-20 px-4 relative z-10">
      <div className="container mx-auto text-center">
        <div className="inline-block mb-6 animate-fade-in">
          <div className="w-64 h-64 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-primary/20">
            <img 
              src="https://cdn.poehali.dev/files/3d40e234-6408-4b1c-97ea-39e4504d5a4c.jpg" 
              alt="Воспитатель"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <h2 className="text-5xl font-bold mb-6 text-foreground animate-fade-in">
          Добро пожаловать на мой сайт!
        </h2>
        <p className="text-2xl font-semibold text-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
          Я, Пушмина Кристина Геннадьевна-педагог с любовью к детям и стремлением обеспечить их рост и развитие!
        </p>
        <Button size="lg" className="animate-scale-in" onClick={() => scrollToSection('about')}>
          Узнать больше
          <Icon name="ArrowRight" size={20} className="ml-2" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
