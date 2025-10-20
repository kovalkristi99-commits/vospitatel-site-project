export const familyValuesSections = [
  {
    id: 'traditions',
    title: 'Семейные традиции',
    description: 'Создание и поддержка семейных традиций помогает укрепить связь между поколениями',
    content: 'Совместные праздники, воскресные обеды, семейные игры - все это создает теплую атмосферу и воспоминания на всю жизнь.',
    icon: 'Heart'
  },
  {
    id: 'communication',
    title: 'Общение',
    description: 'Важность открытого и доверительного общения в семье',
    content: 'Регулярные беседы, совместное обсуждение событий дня, внимание к переживаниям ребенка формируют доверие.',
    icon: 'MessageCircle'
  },
  {
    id: 'together',
    title: 'Совместное время',
    description: 'Качественное время, проведенное вместе',
    content: 'Совместные прогулки, игры, чтение книг, творчество - важные моменты для укрепления семейных связей.',
    icon: 'Users'
  },
  {
    id: 'support',
    title: 'Поддержка',
    description: 'Взаимная поддержка и понимание',
    content: 'Умение поддержать в трудную минуту, порадоваться успехам, быть рядом - основа крепкой семьи.',
    icon: 'Hand'
  }
];

export const ageGroups = ['all', 'Вторая младшая группа (3-4 года)', 'Средняя группа (4-5 лет)', 'Старшая группа (5-6 лет)', 'Подготовительная группа (6-7 лет)'];

export const educationalAreas = ['all', 'Художественно-эстетическое развитие', 'Познавательное развитие', 'Познавательное развитие (ФЭМП)', 'Социально-коммуникативное развитие'];

export interface LessonPlan {
  title: string;
  age: string;
  area: string;
  description: string;
  icon: string;
  fullContent?: {
    type: string;
    practice: string;
    context: string;
    goal: string;
    tasks: {
      learning: string[];
      developing: string[];
      educational: string[];
    };
    equipment: string;
    stages: Array<{
      name: string;
      activity: string;
      result: string;
      type: string;
    }>;
  };
}
