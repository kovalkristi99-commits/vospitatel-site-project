import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface NavigationProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const Navigation = ({ activeSection, scrollToSection }: NavigationProps) => {
  const menuItems = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'about', label: 'Обо мне', icon: 'User' },
    { id: 'portfolio', label: 'Портфолио', icon: 'Award' },
    { id: 'parents', label: 'Родителям', icon: 'Users' },
    { id: 'gallery', label: 'Галерея', icon: 'Images' },
    { id: 'video', label: 'Видео', icon: 'Video' },
    { id: 'family-values', label: 'Семейные ценности', icon: 'Heart' },
    { id: 'methodical', label: 'Методическая копилка', icon: 'BookOpen' },
    { id: 'contacts', label: 'Контакты', icon: 'Mail' }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Icon name="Sun" size={32} className="text-primary" />
            <span className="font-bold text-xl text-foreground hidden sm:inline">Сайт воспитателя</span>
          </div>
          <div className="flex flex-wrap gap-2 justify-end">
            {menuItems.map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? 'default' : 'ghost'}
                size="sm"
                onClick={() => scrollToSection(item.id)}
                className="text-xs sm:text-sm"
              >
                <Icon name={item.icon as any} size={16} className="mr-1" />
                <span className="hidden sm:inline">{item.label}</span>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
