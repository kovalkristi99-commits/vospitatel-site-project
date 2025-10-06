import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Methodology = () => {
  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <Icon name="Sparkles" className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">Пушминка</span>
          </Link>
          <Link to="/">
            <Button variant="ghost">
              <Icon name="ArrowLeft" className="mr-2 h-4 w-4" />
              На главную
            </Button>
          </Link>
        </div>
      </nav>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl font-bold text-center mb-4 text-foreground">Методические материалы</h1>
          <p className="text-center text-muted-foreground mb-12">Технологическая карта занятия (педагогического мероприятия)</p>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Литературная викторина для детей старшего возраста «Знатоки сказок»</CardTitle>
              <CardDescription>Образовательная ситуация «закрепление ранее приобретенных знаний»</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">Культурная практика</h3>
                  <p className="text-muted-foreground">Коммуникативная деятельность. Восприятие художественной литературы.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">Культурно-смысловой контекст</h3>
                  <p className="text-muted-foreground">Для использования при оформлении и работе в «Книжном уголке», помощь сказочному герою - вспомнить сказки.</p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">Цель</h3>
                <p className="text-muted-foreground">Обобщение и систематизирование знаний детей старшей группы об отечественной и зарубежной литературной сказки в процессе игры-викторины.</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3 text-foreground">Задачи</h3>
                <div className="space-y-4">
                  <Card className="border-l-4 border-l-primary">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base">Обучающие</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        <li>Закрепить знания о сказках, пополнить словарный запас</li>
                        <li>Совершенствовать умение узнавать сказки по литературным фрагментам, иллюстрациям, ключевым словам</li>
                        <li>Активизировать в речи названия сказок, имена сказочных героев</li>
                        <li>Анализировать и различать эмоциональное состояние героев и передавать его интонацией</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-secondary">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base">Развивающие</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        <li>Формировать умение согласовывать свои действия с партнерами, желание преодолевать препятствия</li>
                        <li>Оценить и понимать смысл образных выражений в загадках</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-accent">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base">Воспитательные</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        <li>Способствовать уважению к книге, желание знать и читать</li>
                        <li>Оценить умение работать в команде, поддерживать друг друга</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">Оборудование</h3>
                <p className="text-muted-foreground">Костюм Бабы Яги, волшебный ларец, жетоны, медали, сюжетные картинки («Гуси-лебеди», «Царевна-лягушка»), карточки для д/и «Живая сказка», мнемотаблицы, яблоко, зеркало, яйцо, игла, аудио проигрыватель.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Ход занятия</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div className="border-l-4 border-l-primary pl-6">
                  <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <Icon name="Play" className="h-5 w-5 text-primary" />
                    1. Мотивационный этап
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium mb-2">Деятельность педагога:</p>
                      <p className="text-muted-foreground mb-4">В группу к детям под музыку входит воспитатель в костюме Бабы Яги.</p>
                      <div className="bg-muted p-4 rounded-lg space-y-2">
                        <p className="italic">Беседа:</p>
                        <p className="text-sm">-Вы меня узнали?</p>
                        <p className="text-sm">-Как вы думаете, почему я пришла именно в детский сад? Хочу рассказать о сказках (перечислят неправильно названия сказок, путает сюжет). Разве так правильно? Такое бывает? (дети исправляют ошибки).</p>
                        <p className="text-sm">-Я слышала, что в детском саду все дети очень умные и сообразительные, а потому я прошу вас помочь мне вспомнить сказки, которые я, наверное, забыла, когда столкнулась в полёте со Змеем Горынычем.</p>
                        <p className="font-medium mt-4">Акцентные вопросы:</p>
                        <p className="text-sm">-А вы знаете сказки? Наверное, и мне поможете?</p>
                        <p className="text-sm">-А кто из вас знает больше всех сказок? Проверим?</p>
                      </div>
                    </div>
                    <div>
                      <p className="font-medium mb-2">Деятельность обучающихся:</p>
                      <p className="text-muted-foreground">Коммуникативная</p>
                    </div>
                    <div>
                      <p className="font-medium mb-2">Планируемые результаты:</p>
                      <p className="text-muted-foreground">Сформулировать «детскую» цель – Помочь Бабе яге вспомнить сказки.</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-l-secondary pl-6">
                  <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <Icon name="Users" className="h-5 w-5 text-secondary" />
                    2. Организационный этап
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium mb-2">Деятельность педагога:</p>
                      <div className="bg-muted p-4 rounded-lg space-y-2">
                        <p className="italic">Беседа:</p>
                        <p className="text-sm">-Как же проверить кто из вас лучший знаток сказок? Может сыграем в интересную игру- викторину. Что такое викторина?</p>
                        <p className="text-sm">-Но игра должна быть честной! Дети обсуждают и предлагают правила игры (за правильный ответ команда получает жетон).</p>
                        <p className="text-sm">Нам нужно разделиться на две команды.</p>
                        <p className="text-sm">Деление на две команды (Баба Яга шепчет детям на ухо слова «собака» и «кошка» и просит детей изобразить, каких животных они услышали, таким образом дети делятся на команды).</p>
                        <p className="text-sm">Баба Яга предлагает придумать названия своим командам.</p>
                        <p className="text-sm">-Ну что названия придумали, правила ясны, начинаем?</p>
                        <p className="text-sm">-Готовы?</p>
                      </div>
                    </div>
                    <div>
                      <p className="font-medium mb-2">Деятельность обучающихся:</p>
                      <p className="text-muted-foreground">Коммуникативная</p>
                    </div>
                    <div>
                      <p className="font-medium mb-2">Планируемые результаты:</p>
                      <p className="text-muted-foreground">Составить и обсудить правила игры, не перебивать друг друга, дослушивать до конца, следовать правилам игры.</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <Link to="/">
              <Button size="lg">
                <Icon name="Home" className="mr-2 h-4 w-4" />
                Вернуться на главную
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Methodology;
