import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Сообщение отправлено!',
      description: 'Спасибо за обращение. Я свяжусь с вами в ближайшее время.',
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
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

  const achievements: Array<{
    title: string;
    year: string;
    description: string;
    image?: string;
    images?: string[];
  }> = [
    {
      title: 'Воспитатель года',
      year: '2019',
      description: 'Призер III степени районного профессионального конкурса "Воспитатель года 2019"',
      image: 'https://cdn.poehali.dev/files/3a0bd295-b390-43d2-903c-ffb38b55c31b.jpeg'
    },
    {
      title: 'Благодарность Министерства образования Иркутской области',
      year: '2025',
      description: 'За вклад в развитие дошкольного образования',
      image: 'https://cdn.poehali.dev/files/5ab25420-41b8-48d5-858c-8d6afb143903.jpg'
    },
    {
      title: 'Сертификат участника',
      year: '2023',
      description: 'Региональная школа Университета Детства кампуса Иркутской области',
      image: 'https://cdn.poehali.dev/files/9d5ac945-e46f-4cb9-adac-cb7206e078a7.jpg'
    },
    {
      title: 'Благодарность Университета Детства',
      year: '2023',
      description: 'За участие и представление опыта на Региональной школе Университета Детства кампуса Иркутской области',
      image: 'https://cdn.poehali.dev/files/ad311eee-a38f-4f8d-b30a-81dc6eec45fc.jpg'
    },
    {
      title: 'Сертификат Федерального центра тестирования',
      year: '2024',
      description: 'Участие в апробации модели оценки компетенций воспитателей дошкольных образовательных организаций',
      image: 'https://cdn.poehali.dev/files/98b61dbb-6ae6-4178-b8aa-96678bca0e01.jpg'
    },
    {
      title: 'Грамота Всероссийской Ярмарки',
      year: '2023',
      description: 'Участник XIII регионального этапа Всероссийской Ярмарки социально-педагогических инноваций',
      image: 'https://cdn.poehali.dev/files/768679a4-af0d-4972-86b4-a3fad9248ff2.jpg'
    },
    {
      title: 'Грамота Департамента образования',
      year: '2024',
      description: 'За добросовестный труд, профессиональное мастерство и активную жизненную позицию',
      image: 'https://cdn.poehali.dev/files/4147c286-4074-4ab4-b1b2-ac52aae5bb31.jpg'
    },
    {
      title: 'Благодарность Департамента образования',
      year: '2024',
      description: 'За активное участие в работе профессионального сообщества педагогических работников ДОУ',
      image: 'https://cdn.poehali.dev/files/dae04174-06b6-492a-bb1f-a4f84b95d312.jpg'
    },
    {
      title: 'Сертификат за мастер-класс',
      year: '2025',
      description: 'Использование дидактических игр со стаканчиками по формированию нравственно-патриотических чувств',
      image: 'https://cdn.poehali.dev/files/787e6e5d-caf3-4df2-8e80-545c769c871b.jpg'
    },
    {
      title: 'Благодарность за мастер-класс',
      year: '2025',
      description: 'Игры со стаканчиками как эффективный приём развития познавательных способностей дошкольников',
      image: 'https://cdn.poehali.dev/files/c23105d2-919c-4d34-9856-57fdd26bead9.jpg'
    },
    {
      title: 'Грамота "Сказка на окошке"',
      year: '2021',
      description: 'За победу в конкурсе детского сада комбинированного вида №1 "Лесная полянка"',
      image: 'https://cdn.poehali.dev/files/8ea6b267-f6c7-4d20-9307-914ad08609a3.jpg'
    },
    {
      title: 'Победитель конкурсов методических разработок',
      year: '',
      description: 'Победитель областных и районных конкурсов методических разработок',
      images: [
        'https://cdn.poehali.dev/files/13702a46-6b89-4f40-8882-e05432586d9a.jpg',
        'https://cdn.poehali.dev/files/f1b34b63-ae24-42a4-8786-5fb2128462a3.jpg',
        'https://cdn.poehali.dev/files/f6c3d578-e555-4cf2-9d5e-4b1a85cba0fc.jpg',
        'https://cdn.poehali.dev/files/9fcef69e-14f0-4dc4-b6c2-460bf3067214.jpg',
        'https://cdn.poehali.dev/files/63771b6c-5b30-4c89-ba1f-dbdc8d00aa50.jpg'
      ]
    }
  ];

  const methodologies = [
    {
      icon: 'Palette',
      title: 'Творческое развитие',
      description: 'Рисование, лепка, аппликация для развития воображения'
    },
    {
      icon: 'BookOpen',
      title: 'Чтение и грамота',
      description: 'Развитие речи и подготовка к обучению грамоте'
    },
    {
      icon: 'Music',
      title: 'Музыкальные занятия',
      description: 'Развитие слуха, ритма и творческих способностей'
    },
    {
      icon: 'Heart',
      title: 'Социально-эмоциональное развитие',
      description: 'Формирование навыков общения и эмпатии'
    }
  ];

  const galleryImages = [
    { title: 'Достижения воспитанников', description: 'Занятие по рисованию' },
    { title: 'Музыкальный праздник', description: 'Новогодний утренник' },
    { title: 'Спортивные игры', description: 'День здоровья' },
    { title: 'Театральная постановка', description: 'Выступление детей' }
  ];

  const lessonPlans = [
    {
      title: 'Литературная викторина «Знатоки сказок»',
      age: 'Старшая группа (5-6 лет)',
      area: 'Речевое развитие',
      description: 'Обобщение и систематизация знаний детей об отечественной и зарубежной литературной сказке в процессе игры-викторины',
      icon: 'BookOpen',
      fullContent: {
        type: 'Образовательная ситуация «закрепление ранее приобретенных знаний»',
        practice: 'Коммуникативная деятельность. Восприятие художественной литературы.',
        context: 'Для использования при оформлении и работе в «Книжном уголке», помощь сказочному герою - вспомнить сказки.',
        goal: 'Обобщение и систематизирование знаний детей старшей группы об отечественной и зарубежной литературной сказки в процессе игры-викторины.',
        tasks: {
          learning: [
            'Закрепить знания о сказках, пополнить словарный запас',
            'Совершенствовать умение узнавать сказки по литературным фрагментам, иллюстрациям, ключевым словам',
            'Активизировать в речи названия сказок, имена сказочных героев',
            'Анализировать и различать эмоциональное состояние героев и передавать его интонацией'
          ],
          developing: [
            'Формировать умение согласовывать свои действия с партнерами, желание преодолевать препятствия',
            'Оценить и понимать смысл образных выражений в загадках'
          ],
          educational: [
            'Способствовать уважению к книге, желание знать и читать',
            'Оценить умение работать в команде, поддерживать друг друга'
          ]
        },
        equipment: 'Костюм Бабы Яги, волшебный ларец, жетоны, медали, сюжетные картинки («Гуси-лебеди», «Царевна-лягушка»), карточки для д/и «Живая сказка», мнемотаблицы, яблоко, зеркало, яйцо, игла, аудио проигрыватель.',
        stages: [
          {
            name: 'Мотивационный',
            activity: 'В группу к детям под музыку входит воспитатель в костюме Бабы Яги. Беседа о сказках, исправление ошибок Бабы Яги.',
            result: 'Сформулировать «детскую» цель – Помочь Бабе яге вспомнить сказки.',
            type: 'Коммуникативная'
          },
          {
            name: 'Организационный', 
            activity: 'Деление на команды (Баба Яга шепчет детям слова «собака» и «кошка»), придумывание названий команд, обсуждение правил игры.',
            result: 'Составить и обсудить правила игры, не перебивать друг друга, дослушивать до конца, следовать правилам игры.',
            type: 'Коммуникативная'
          },
          {
            name: 'Деятельностный',
            activity: '**1-ый конкурс: «Отгадывание загадок»** - Баба Яга загадывает командам загадки про сказочных героев.\n\n**2-ой конкурс: «Живая сказка»** - Баба Яга предлагает командам сюжетную картинку для театрализации, дети распределяют роли, обсуждают способ показа отрывка из сказки.\n\n**3-ий конкурс: Рассказ по мнемотаблицам «Зашифрованные сказки»** - Баба Яга предлагает командам угадать название сказки и коротко рассказать сказку по схеме.\n\n**Физкультминутка «Баба Яга»** - Дети под музыку повторяют движения за Бабой Ягой.\n\n**4-ый конкурс: Игра «Отгадай предмет»** - Баба Яга предлагает командам по словесному описанию отгадать предмет, лежащий в ларце.\n\n**5-ый конкурс: «Помоги сказочному герою»** - Баба Яга предлагает собрать целую картинку из частей, рассмотреть и определить лишнего героя.',
            result: 'Смогут работать в команде, помогать друг другу. Отгадать загадки. Распределить и обыграть сюжет по выбранным ролям. Составить рассказ по мнемотаблицам. Повторить ритмические движения под музыку. Представить и отгадать предмет по названным признакам. Обладать воображением, которое реализуется в игре и в театрализованной деятельности.',
            type: 'Коммуникативная, Игровая, Театрализованная, Восприятие художественной литературы и фольклора'
          },
          {
            name: 'Рефлексивный',
            activity: 'Наша викторина подходит к концу! Какая команда победила? Дети считают жетоны, определяют команду-победителя.\n\n- Как вы думаете, я вспомнила сказки?\n- Удалось помочь Бабе Яге? Рассуждение детей.\n- А как помогали? Баба Яга благодарит детей за помощь, награждает детей медалями за 1 и 2 место.\n\nРефлексия «Колокольчики» - Дети около стола с колокольчиками. Пусть колокольчик зазвенит у того...Кто получил удовольствие от совместной работы. Кому было трудно и в чем? У кого все получилось? Кто считает, что мы одна дружная команда? И т.д.',
            result: 'Делиться своими впечатлениями, обсуждать. Признавать поражение. Понимать, что главное уметь помогать и поддерживать друг друга, не победа, а участие.',
            type: 'Коммуникативная'
          }
        ]
      }
    },
    {
      title: 'Интеллектуально-познавательная игра "Что? Где? Когда?"',
      age: 'Старшая группа (5-6 лет)',
      area: 'Познавательное развитие (ФЭМП)',
      description: 'Приобретение опыта командной игровой деятельности через интеллектуально-познавательную игру',
      icon: 'Calculator',
      fullContent: {
        type: 'Интеллектуально-познавательная игра математического содержания',
        practice: 'Коммуникативная деятельность',
        context: 'Одержать победу над командой соперников «Умники», заработать шесть очков.',
        goal: 'Приобретение опыта командной игровой деятельности через новую для детей интеллектуально-познавательную игру «Что? Где? Когда?» в коммуникативной деятельности',
        tasks: {
          learning: [
            'Познакомиться с новой игрой «Что? Где? Когда?», ее правилами',
            'Обобщить навык сравнения конкретных множеств, умение понимать отношения рядом стоящих чисел, способа воссоздания фигуры из частей, деления фигуры на части',
            'Совершенствовать умение считать в прямом и обратном порядке (в пределах 10)',
            'Оценить умение работать в команде, выполнять определенные действия в соответствии с предлагаемым алгоритмом'
          ],
          developing: [],
          educational: []
        },
        equipment: 'Юбочки тетради, черный ящик, мультимедийное оборудование, медали «Бундерфинды», математический танцер, помпоны, значки музыкой совы',
        stages: [
          {
            name: 'Организационно-мотивационный',
            activity: 'Включается музыка гимн игры «Что? Где? Когда?», дети заходят в группу.\n\nВ: Дорогие ребята! А какие интеллектуальные игры вы знаете? Какие игры вы видели по телевизору? А что вы знаете про игру «Что? Где? Когда?». Хотите познакомиться с этой игрой? Эта игра командная и требует слаженной игры, как как против вас будет играть другая команда. Попробуем сыграть в игру «Что? Где? Когда?»\n\nАкцентные вопросы:\nВ: - как вы считаете, получится ли у вас выиграть в игре? Ведь сегодня против вас играет команда взрослых «Умники».',
            result: 'Сформулировать «детскую» цель- одержать победу над командой «Умники».\n\nСоставить и обсудить правила игры, не перебивать друг друга, следовать правилам игры, помогать другим участникам в случае затруднения.',
            type: 'Фронтально'
          },
          {
            name: 'Информационно-практический',
            activity: '**Первый раунд** - Ребенок крутит волчок.\nВ: на экране вопрос от Светланы Львовны: «Я очень люблю заниматься оригинаниям и для этого использую различные геометрические фигуры. Ребята, а вы сможете создать красивое панно с помощью геометрических фигур?»\nВ: предлагает приступить к выполнению задания, создать панно с помощью геометрических фигур\n\n**Д/И «Панно из геометрических фигур»** - Проверяем ответ\nВ: очко достается команде детей. Счет 1:0 в пользу детей.\n\n**Второй раунд** - Ребенок крутит волчок\nВ: на экране вопрос от мамы Марии Олеговны: «Моя работа связана с числами и цифрами, я работаю бухгалтером. Я знаю как числа расположены по порядку, а могу числа сравнивать, и знаю много знаков. А вы знаете математические знаки? А знаете соседей числа? Ребята, определите соседей числа и сравните неравенства с помощью знаков»\nВ: предлагает ответить на этот вопрос с помощью числовых домиков.\n\n**Д/И «Соседи числа»** - Проверяем ответ',
            result: 'Устанавливают последовательность дней недели и называют их.\n\nНазывают части полученные от деления круга, сравнивают целое и части.',
            type: 'Фронтально'
          },
          {
            name: 'Деятельностный',
            activity: '**Д/И «Сравни множества»** - Проверяем ответ\nВ: игра, счет 2:0 в пользу команды детей\n\n**Третий раунд** - Ребенок крутит волчок\nВ: на экране задание от Любовь Александровны: «Ребята я знаю, что в вашей группе есть необычный математический танцер. Попробуйте посчитате от1 до 10 в прямом и обратном порядке с помощью танцера, получится ли у вас это сделать?».\nВ: предлагает выполнить задание. Просит капитана выбрать участника команды, который будет выполнять задание.\n\nПроверяем ответ. В: счет становится 3:0 в пользу команды детей.\n\n**Четвертый раунд** - Ребенок крутит волчок\nВ: на экране задание от Татьяны Николаевны:«Я дома и на работе успеваю всё сделать быстро и правильно. Ребаты, успеете повторить мою фигуркупт минутку».\nВ: предлагает детям пройти на ковер и немного отдохнуть, выполнив физкультминутку\n\n**Физминутка «Рассчитайтесь по порядку»** - В: и с этим заданием вы справились и получаете еще одно очко. Счет 4:0\n\n**Пятый раунд** - Ребенок крутит волчок\nВ: следующий вопрос вам задает Нина Николаевна: «Ребята, календарь помогает ответить на множество вопросов: какое сегодня число, какой год, какой месяц и какой день недели. Я, хорошо знаю дни недели и месяцы, а в каком порядке они идут. А вы знаете? Для вас я приготовила волшебное паровозик, его вагончики — это дни недели, расположите их в правильном порядке».\nВ: предлагает детям приступить к выполнению задания. Просит капитана команды выбрать участника, который назовет дни недели по порядку.\n\n**Д/И «Паровозик недельки»** - Проверяем ответ\nВ: счет 5:0 в пользу команды детей',
            result: 'Демонстрируют навыки ориентировки на листе бумаги.\n\nВ результате работы воспитанники смогут назвать не менее1-2 характеристик сравнения конкретных множеств.\n\nДемонстрируют умение прямого и обратного счета в пределах 10.\n\nСтремятся выиграть в игре: правильно ответить на вопросы и выполнить задания.\n\nМогут взаимодействовать в коллективе сообща.',
            type: 'Фронтально'
          },
          {
            name: 'Рефлексивно-оценочный',
            activity: '**Шестой раунд** - Ребенок крутит волчок\nВ: внимание! Вылез сектор «черный ящик». Нужно угадать что в нем лежит, загадывает загадку.\nВ: вопрос от Дарьи Андреевны: «Я очень люблю печь пироги и встречать гостей, гостей бывает много, и свой вкусный пирог я делю так чтобы всем достались по маленькому его части. Ребята, мой вопрос таков: сможете ли вы разделить свой пирог на четыре равные части?».\nВ: предлагает выполнить задание.\n\n**Д/И «Раздели круг на части»** - Проверяем ответ\nВ: вы правильно выполнили задание и зарабатываете еще одно очко. Счет 6:0\n\nВ: Наша игра подошла к концу. Сколько очков вы заработали? Что это значит? Поздравляю вас с победой! С какой игрой вы сегодня познакомились? Какая эта игра?\nС какими заданиями вы справились и получаете сегодня?\nКакое задание «Умников» было самым трудным? Интересным?\nВ: Нам нужно выбрать лучшего игрока по итогам игры. Для этого предлагаю вам взять звездочки и отдать их тому, кто сегодня, по вашему мнению, был самым лучшим игроком.\n\nДетям вручаются памятные медальки «Бундерфинд»',
            result: 'Сформулировать не менее 1 условия, которого позволило достичь цели.\n\nОценить лучшего игрока в команде (смогут обосновать свой ответ).\n\nДемонстрируют навыки рефлексивной деятельности',
            type: 'Фронтально'
          }
        ]
      }
    },
    {
      title: 'Времена года',
      age: 'Младшая группа (3-4 года)',
      area: 'Познавательное развитие',
      description: 'Знакомство с сезонными изменениями в природе через наблюдение и экспериментирование',
      icon: 'Cloud'
    },
    {
      title: 'Моя семья',
      age: 'Средняя группа (4-5 лет)',
      area: 'Социально-коммуникативное развитие',
      description: 'Формирование представлений о семье, семейных традициях и ценностях',
      icon: 'Users'
    },
    {
      title: 'Рисуем осень',
      age: 'Старшая группа (5-6 лет)',
      area: 'Художественно-эстетическое развитие',
      description: 'Развитие творческих способностей через нетрадиционные техники рисования',
      icon: 'Palette'
    },
    {
      title: 'Весёлая физкультура',
      age: 'Подготовительная группа (6-7 лет)',
      area: 'Физическое развитие',
      description: 'Укрепление здоровья и развитие физических качеств через подвижные игры',
      icon: 'Activity'
    }
  ];

  const [showLessons, setShowLessons] = useState(false);
  const [selectedLesson, setSelectedLesson] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted to-background">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                <Icon name="Sun" size={24} className="text-primary-foreground" />
              </div>
              <h1 className="text-2xl font-bold text-foreground">Сайт воспитателя</h1>
            </div>
            <div className="hidden md:flex gap-4">
              <Button variant="ghost" onClick={() => scrollToSection('home')}>Главная</Button>
              <Button variant="ghost" onClick={() => scrollToSection('about')}>Обо мне</Button>
              <Button variant="ghost" onClick={() => scrollToSection('portfolio')}>Портфолио</Button>
              <Button variant="ghost" onClick={() => scrollToSection('parents')}>Родителям</Button>
              <Button variant="ghost" onClick={() => scrollToSection('gallery')}>Галерея</Button>
              <Button variant="ghost" onClick={() => scrollToSection('methodical')}>Методическая копилка</Button>
              <Button variant="ghost" onClick={() => scrollToSection('contacts')}>Контакты</Button>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-block mb-6 animate-fade-in">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-primary/20">
              <img 
                src="https://cdn.poehali.dev/files/c9898b08-5d74-4e6e-b8f4-270fb1554edd.jpg" 
                alt="Воспитатель"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h2 className="text-5xl font-bold mb-6 text-foreground animate-fade-in">
            Добро пожаловать!
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
            Я — воспитатель с любовью к детям и призванием помогать им расти и развиваться
          </p>
          <Button size="lg" className="animate-scale-in" onClick={() => scrollToSection('about')}>
            Узнать больше
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Обо мне</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Моя профессия — это не просто работа, это призвание. Каждый день я с радостью встречаю своих воспитанников, помогаю им открывать мир, учиться и развиваться.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
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
                  <h4 className="font-semibold text-foreground">Средне-профессиональное образование</h4>
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
                  <Icon name="Award" size={24} className="text-secondary" />
                  Квалификация
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" size={20} className="text-primary mt-1" />
                  <p className="text-muted-foreground">Высшая квалификационная категория</p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" size={20} className="text-primary mt-1" />
                  <p className="text-muted-foreground">Владение современными образовательными технологиями</p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" size={20} className="text-primary mt-1" />
                  <p className="text-muted-foreground">Опыт работы с детьми разных возрастных групп</p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" size={20} className="text-primary mt-1" />
                  <p className="text-muted-foreground">Участие в профессиональных конкурсах</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Портфолио</h2>
          <p className="text-center text-muted-foreground mb-12">Мои награды и достижения</p>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {achievements.map((achievement, index) => (
              <Card key={index} className="hover-scale border-2 hover:border-primary transition-all duration-300 overflow-hidden">
                <CardHeader>
                  {achievement.image ? (
                    <Dialog>
                      <DialogTrigger asChild>
                        <div className="w-full aspect-[3/4] mb-4 rounded-lg overflow-hidden shadow-lg cursor-pointer hover:opacity-90 transition-opacity">
                          <img 
                            src={achievement.image} 
                            alt={achievement.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[90vh] p-0">
                        <div className="relative w-full h-full overflow-auto">
                          <img 
                            src={achievement.image} 
                            alt={achievement.title}
                            className="w-full h-auto"
                          />
                        </div>
                      </DialogContent>
                    </Dialog>
                  ) : achievement.images ? (
                    <Dialog>
                      <DialogTrigger asChild>
                        <div className="w-full aspect-[3/4] mb-4 rounded-lg overflow-hidden shadow-lg cursor-pointer hover:opacity-90 transition-opacity relative">
                          <img 
                            src={achievement.images[0]} 
                            alt={achievement.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                            +{achievement.images.length - 1}
                          </div>
                        </div>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[90vh]">
                        <Carousel className="w-full">
                          <CarouselContent>
                            {achievement.images.map((img: string, idx: number) => (
                              <CarouselItem key={idx}>
                                <div className="relative w-full overflow-auto">
                                  <img 
                                    src={img} 
                                    alt={`${achievement.title} ${idx + 1}`}
                                    className="w-full h-auto"
                                  />
                                </div>
                              </CarouselItem>
                            ))}
                          </CarouselContent>
                          <CarouselPrevious />
                          <CarouselNext />
                        </Carousel>
                      </DialogContent>
                    </Dialog>
                  ) : (
                    <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mb-4 mx-auto">
                      <Icon name="Award" size={32} className="text-white" />
                    </div>
                  )}
                  <CardTitle className="text-center">{achievement.title}</CardTitle>
                  <CardDescription className="text-center text-lg font-semibold text-primary">
                    {achievement.year}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-card">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Благодарности</h2>
          <p className="text-center text-muted-foreground mb-12">От родителей и коллег</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "Огромная благодарность за чуткое отношение к детям! Наш ребёнок с радостью идёт в садик и с восторгом рассказывает о занятиях."
                </p>
                <p className="font-semibold text-foreground">— Семья Ивановых</p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "Профессионал своего дела! Умеет найти подход к каждому ребёнку, создаёт тёплую атмосферу в группе."
                </p>
                <p className="font-semibold text-foreground">— Родители воспитанников</p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "Благодарим за творческий подход к развитию детей. Видно, что работаете с душой и любовью!"
                </p>
                <p className="font-semibold text-foreground">— Семья Петровых</p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "Спасибо за терпение, доброту и профессионализм. Наши дети многому научились благодаря вам!"
                </p>
                <p className="font-semibold text-foreground">— Родительский комитет</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="parents" className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Родителям</h2>
          <Tabs defaultValue="tips" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="tips">Советы</TabsTrigger>
              <TabsTrigger value="schedule">Режим дня</TabsTrigger>
              <TabsTrigger value="info">Полезная информация</TabsTrigger>
            </TabsList>
            <TabsContent value="tips" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Lightbulb" size={24} className="text-accent" />
                    Как подготовить ребёнка к детскому саду
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-muted-foreground">• Заранее установите режим дня, близкий к детсадовскому</p>
                  <p className="text-muted-foreground">• Развивайте навыки самообслуживания</p>
                  <p className="text-muted-foreground">• Общайтесь с другими детьми на площадке</p>
                  <p className="text-muted-foreground">• Читайте книги о детском саде</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="schedule" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Clock" size={24} className="text-secondary" />
                    Распорядок дня в группе
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <span className="font-semibold">7:00 - 8:30</span>
                    <span className="text-muted-foreground">Приём детей, игры</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <span className="font-semibold">8:30 - 9:00</span>
                    <span className="text-muted-foreground">Завтрак</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <span className="font-semibold">9:00 - 11:00</span>
                    <span className="text-muted-foreground">Занятия, прогулка</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <span className="font-semibold">12:00 - 15:00</span>
                    <span className="text-muted-foreground">Обед, тихий час</span>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="info" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Info" size={24} className="text-primary" />
                    Важная информация
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-muted-foreground">• Обязательно сообщайте о болезни ребёнка</p>
                  <p className="text-muted-foreground">• Приносите сменную одежду и обувь</p>
                  <p className="text-muted-foreground">• Участвуйте в жизни группы и детского сада</p>
                  <p className="text-muted-foreground">• Следите за объявлениями и новостями</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Галерея</h2>
          <p className="text-center text-muted-foreground mb-12">Моменты из жизни нашей группы</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {galleryImages.map((image, index) => (
              <Card key={index} className="overflow-hidden hover-scale transition-all duration-300">
                <div className="aspect-square bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 flex items-center justify-center">
                  <Icon name="Image" size={64} className="text-primary/40" />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{image.title}</CardTitle>
                  <CardDescription>{image.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="methodical" className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Методическая копилка</h2>
          <p className="text-center text-muted-foreground mb-12">Полезные материалы для работы с детьми</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="hover-scale border-2 hover:border-primary transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4">
                  <Icon name="BookOpen" size={32} className="text-white" />
                </div>
                <CardTitle>Конспекты занятий</CardTitle>
                <CardDescription>Готовые планы и сценарии занятий</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Подробные конспекты занятий по различным образовательным областям</p>
                <Dialog open={showLessons} onOpenChange={setShowLessons}>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full">
                      <Icon name="FileText" className="mr-2 h-4 w-4" />
                      Смотреть материалы
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">Конспекты занятий</h3>
                        <p className="text-muted-foreground">Готовые методические разработки для различных возрастных групп</p>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        {lessonPlans.map((lesson, index) => (
                          <Card 
                            key={index} 
                            className="border-2 cursor-pointer hover:border-primary transition-all"
                            onClick={() => setSelectedLesson(index)}
                          >
                            <CardHeader>
                              <div className="flex items-start gap-3">
                                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                                  <Icon name={lesson.icon} size={24} className="text-white" />
                                </div>
                                <div className="flex-1">
                                  <CardTitle className="text-lg mb-1">{lesson.title}</CardTitle>
                                  <div className="flex flex-wrap gap-2 mt-2">
                                    <Badge variant="secondary" className="text-xs">{lesson.age}</Badge>
                                    <Badge variant="outline" className="text-xs">{lesson.area}</Badge>
                                  </div>
                                </div>
                              </div>
                            </CardHeader>
                            <CardContent>
                              <p className="text-sm text-muted-foreground">{lesson.description}</p>
                              {lesson.fullContent && (
                                <Button variant="ghost" size="sm" className="mt-3 w-full">
                                  <Icon name="Eye" className="mr-2 h-4 w-4" />
                                  Открыть полный конспект
                                </Button>
                              )}
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>

                <Dialog open={selectedLesson !== null} onOpenChange={() => setSelectedLesson(null)}>
                  <DialogContent className="max-w-5xl max-h-[85vh] overflow-y-auto">
                    {selectedLesson !== null && lessonPlans[selectedLesson]?.fullContent && (
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-3xl font-bold mb-2">{lessonPlans[selectedLesson].title}</h2>
                          <div className="flex flex-wrap gap-2 mb-4">
                            <Badge variant="secondary">{lessonPlans[selectedLesson].age}</Badge>
                            <Badge variant="outline">{lessonPlans[selectedLesson].area}</Badge>
                          </div>
                          <p className="text-muted-foreground">{lessonPlans[selectedLesson].fullContent.type}</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <Card>
                            <CardHeader>
                              <CardTitle className="text-lg">Культурная практика</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <p className="text-sm text-muted-foreground">{lessonPlans[selectedLesson].fullContent.practice}</p>
                            </CardContent>
                          </Card>

                          <Card>
                            <CardHeader>
                              <CardTitle className="text-lg">Культурно-смысловой контекст</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <p className="text-sm text-muted-foreground">{lessonPlans[selectedLesson].fullContent.context}</p>
                            </CardContent>
                          </Card>
                        </div>

                        <Card>
                          <CardHeader>
                            <CardTitle>Цель занятия</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-muted-foreground">{lessonPlans[selectedLesson].fullContent.goal}</p>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardHeader>
                            <CardTitle>Задачи</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <div>
                              <h4 className="font-semibold mb-2 text-primary">Обучающие:</h4>
                              <ul className="list-disc list-inside space-y-1">
                                {lessonPlans[selectedLesson].fullContent.tasks.learning.map((task, i) => (
                                  <li key={i} className="text-sm text-muted-foreground">{task}</li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-2 text-secondary">Развивающие:</h4>
                              <ul className="list-disc list-inside space-y-1">
                                {lessonPlans[selectedLesson].fullContent.tasks.developing.map((task, i) => (
                                  <li key={i} className="text-sm text-muted-foreground">{task}</li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-2 text-accent">Воспитательные:</h4>
                              <ul className="list-disc list-inside space-y-1">
                                {lessonPlans[selectedLesson].fullContent.tasks.educational.map((task, i) => (
                                  <li key={i} className="text-sm text-muted-foreground">{task}</li>
                                ))}
                              </ul>
                            </div>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardHeader>
                            <CardTitle>Оборудование</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground">{lessonPlans[selectedLesson].fullContent.equipment}</p>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardHeader>
                            <CardTitle>Ход занятия</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            {lessonPlans[selectedLesson].fullContent.stages.map((stage, i) => (
                              <div key={i} className="border-l-4 border-l-primary pl-4">
                                <h4 className="font-semibold mb-2">{i + 1}. {stage.name} этап</h4>
                                {stage.type && (
                                  <p className="text-xs text-muted-foreground mb-2">
                                    <Badge variant="outline" className="text-xs">{stage.type}</Badge>
                                  </p>
                                )}
                                <div className="text-sm text-muted-foreground mb-2">
                                  <strong>Деятельность педагога:</strong>
                                  <div className="mt-1 whitespace-pre-line">{stage.activity}</div>
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  <strong>Планируемые результаты:</strong>
                                  <div className="mt-1">{stage.result}</div>
                                </div>
                              </div>
                            ))}
                          </CardContent>
                        </Card>
                      </div>
                    )}
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>

            <Card className="hover-scale border-2 hover:border-primary transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Palette" size={32} className="text-white" />
                </div>
                <CardTitle>Дидактические игры</CardTitle>
                <CardDescription>Развивающие игры и упражнения</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Коллекция игр для развития внимания, памяти, мышления</p>
                <Button variant="outline" className="w-full">
                  <Icon name="Sparkles" className="mr-2 h-4 w-4" />
                  Посмотреть игры
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-scale border-2 hover:border-primary transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center mb-4">
                  <Icon name="FileCheck" size={32} className="text-white" />
                </div>
                <CardTitle>Картотеки</CardTitle>
                <CardDescription>Систематизированные материалы</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Картотеки прогулок, наблюдений, опытов и экспериментов</p>
                <Button variant="outline" className="w-full">
                  <Icon name="FolderOpen" className="mr-2 h-4 w-4" />
                  Открыть картотеки
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-scale border-2 hover:border-primary transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Presentation" size={32} className="text-white" />
                </div>
                <CardTitle>Презентации</CardTitle>
                <CardDescription>Мультимедийные материалы</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Интерактивные презентации для занятий и родительских собраний</p>
                <Button variant="outline" className="w-full">
                  <Icon name="Monitor" className="mr-2 h-4 w-4" />
                  Смотреть презентации
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-scale border-2 hover:border-primary transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Users" size={32} className="text-white" />
                </div>
                <CardTitle>Работа с родителями</CardTitle>
                <CardDescription>Консультации и рекомендации</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Памятки, буклеты и консультации для родителей</p>
                <Button variant="outline" className="w-full">
                  <Icon name="Heart" className="mr-2 h-4 w-4" />
                  Материалы для родителей
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-scale border-2 hover:border-primary transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-secondary rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Star" size={32} className="text-white" />
                </div>
                <CardTitle>Проектная деятельность</CardTitle>
                <CardDescription>Долгосрочные проекты</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Описание проектов и методические разработки</p>
                <Button variant="outline" className="w-full">
                  <Icon name="Lightbulb" className="mr-2 h-4 w-4" />
                  Посмотреть проекты
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Контакты</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="MessageCircle" size={24} className="text-primary" />
                  Свяжитесь со мной
                </CardTitle>
                <CardDescription>Буду рада ответить на ваши вопросы</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Телефон</p>
                    <p className="text-muted-foreground">+7 (___) ___-__-__</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-muted-foreground">educator@example.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Адрес</p>
                    <p className="text-muted-foreground">Детский сад №__, г. ________</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Send" size={24} className="text-secondary" />
                  Форма обратной связи
                </CardTitle>
                <CardDescription>Оставьте ваше сообщение</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Ваше имя</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Как вас зовут?"
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

      <footer className="bg-card border-t border-border py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">© 2024 Сайт воспитателя. Создано с любовью к детям ❤️</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;