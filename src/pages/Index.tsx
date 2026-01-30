import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [calcService, setCalcService] = useState('windows');
  const [calcArea, setCalcArea] = useState([10]);
  const [calcMaterial, setCalcMaterial] = useState('pvc');
  const [calcInstallation, setCalcInstallation] = useState('standard');

  const calculatePrice = () => {
    const basePrices: Record<string, number> = {
      windows: 3000,
      doors: 5000,
      blinds: 1500,
      sills: 2000,
    };
    const materialMultiplier: Record<string, number> = {
      pvc: 1,
      wood: 1.5,
      aluminum: 1.3,
    };
    const installationMultiplier: Record<string, number> = {
      standard: 1,
      express: 1.3,
      premium: 1.6,
    };

    const basePrice = basePrices[calcService] || 3000;
    const area = calcArea[0];
    const materialCoef = materialMultiplier[calcMaterial] || 1;
    const installCoef = installationMultiplier[calcInstallation] || 1;

    return Math.round(basePrice * area * materialCoef * installCoef);
  };

  const services = [
    {
      icon: 'RectangleVertical',
      title: 'Окна',
      description: 'Установка пластиковых, деревянных и алюминиевых окон любой сложности',
      features: ['Энергоэффективность', 'Шумоизоляция', 'Гарантия 10 лет'],
    },
    {
      icon: 'DoorOpen',
      title: 'Двери',
      description: 'Монтаж входных и межкомнатных дверей с профессиональной отделкой',
      features: ['Надежность', 'Быстрый монтаж', 'Гарантия 5 лет'],
    },
    {
      icon: 'Blinds',
      title: 'Жалюзи',
      description: 'Горизонтальные, вертикальные и рулонные жалюзи под любой интерьер',
      features: ['Любые размеры', 'Индивидуальный дизайн', 'Гарантия 3 года'],
    },
    {
      icon: 'Square',
      title: 'Подоконники',
      description: 'Широкий выбор подоконников из различных материалов с установкой',
      features: ['Влагостойкость', 'Прочность', 'Гарантия 5 лет'],
    },
  ];

  const portfolio = [
    {
      title: 'Панорамные окна в загородном доме',
      category: 'Окна',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
    },
    {
      title: 'Входная дверь с отделкой',
      category: 'Двери',
      image: 'https://images.unsplash.com/photo-1499916078039-922301b0eb9b?w=800',
    },
    {
      title: 'Римские шторы в офисе',
      category: 'Жалюзи',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800',
    },
    {
      title: 'Мраморный подоконник',
      category: 'Подоконники',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
    },
  ];

  const reviews = [
    {
      name: 'Анна Смирнова',
      rating: 5,
      text: 'Установили окна за один день! Работа выполнена безупречно, в квартире стало теплее и тише.',
      date: '15 января 2026',
    },
    {
      name: 'Дмитрий Волков',
      rating: 5,
      text: 'Отличное качество дверей и профессиональный монтаж. Рекомендую всем!',
      date: '10 января 2026',
    },
    {
      name: 'Елена Кузнецова',
      rating: 4,
      text: 'Жалюзи смотрятся прекрасно, единственное - ждали доставку чуть дольше обещанного.',
      date: '5 января 2026',
    },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Icon name="Home" className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              ОконПро
            </span>
          </div>
          <div className="hidden md:flex gap-6">
            {['Главная', 'Услуги', 'Портфолио', 'Калькулятор', 'Отзывы', 'Контакты'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-foreground/80 hover:text-primary transition-colors font-medium"
              >
                {item}
              </button>
            ))}
          </div>
          <Button className="bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90">
            <Icon name="Phone" size={18} className="mr-2" />
            Заказать звонок
          </Button>
        </nav>
      </header>

      <main className="pt-20">
        <section
          id="главная"
          className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10"
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <Badge className="mb-6 text-lg py-2 px-4 bg-gradient-to-r from-primary to-secondary text-white">
                <Icon name="Award" size={18} className="mr-2" />
                Более 10 лет на рынке
              </Badge>
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 animate-slide-up">
                Монтаж окон, дверей <br />и жалюзи{' '}
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  под ключ
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-up">
                Профессиональная установка с гарантией качества. Бесплатный замер и расчёт стоимости за 24 часа.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
                <Button
                  size="lg"
                  className="text-lg py-6 px-8 bg-gradient-to-r from-primary to-secondary text-white hover:shadow-xl transition-all"
                  onClick={() => scrollToSection('калькулятор')}
                >
                  <Icon name="Calculator" size={24} className="mr-2" />
                  Рассчитать стоимость
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg py-6 px-8 border-2 hover:bg-primary/10"
                  onClick={() => scrollToSection('портфолио')}
                >
                  <Icon name="Eye" size={24} className="mr-2" />
                  Посмотреть работы
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
                {[
                  { icon: 'Users', value: '5000+', label: 'Довольных клиентов' },
                  { icon: 'Award', value: '10', label: 'Лет опыта' },
                  { icon: 'CheckCircle2', value: '100%', label: 'Гарантия качества' },
                  { icon: 'Clock', value: '24ч', label: 'Быстрый расчёт' },
                ].map((stat, idx) => (
                  <Card key={idx} className="text-center hover:shadow-lg transition-shadow animate-scale-in">
                    <CardContent className="pt-6">
                      <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                        <Icon name={stat.icon as any} className="text-white" size={24} />
                      </div>
                      <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="услуги" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary">Наши услуги</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Что мы предлагаем</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Полный спектр услуг по установке окон, дверей, жалюзи и подоконников
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, idx) => (
                <Card
                  key={idx}
                  className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-t-transparent hover:border-t-primary"
                >
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4">
                      <Icon name={service.icon as any} className="text-white" size={32} />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Icon name="CheckCircle2" className="text-primary" size={18} />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="портфолио" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary">Наши работы</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Портфолио проектов</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Более 5000 завершённых проектов по всей России
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {portfolio.map((project, idx) => (
                <Card key={idx} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="relative overflow-hidden h-64">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <Badge className="bg-white text-foreground">{project.category}</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button size="lg" variant="outline" className="border-2">
                <Icon name="Image" size={20} className="mr-2" />
                Показать все работы
              </Button>
            </div>
          </div>
        </section>

        <section id="калькулятор" className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-accent/10 text-accent border-accent">Калькулятор</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Рассчитайте стоимость</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Узнайте примерную стоимость монтажа за 1 минуту
              </p>
            </div>

            <Card className="max-w-3xl mx-auto shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl">Параметры расчёта</CardTitle>
                <CardDescription>Заполните данные для получения точной оценки</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="service" className="text-base font-semibold">
                    Тип услуги
                  </Label>
                  <Select value={calcService} onValueChange={setCalcService}>
                    <SelectTrigger id="service">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="windows">Окна</SelectItem>
                      <SelectItem value="doors">Двери</SelectItem>
                      <SelectItem value="blinds">Жалюзи</SelectItem>
                      <SelectItem value="sills">Подоконники</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="material" className="text-base font-semibold">
                    Материал
                  </Label>
                  <Select value={calcMaterial} onValueChange={setCalcMaterial}>
                    <SelectTrigger id="material">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pvc">ПВХ</SelectItem>
                      <SelectItem value="wood">Дерево</SelectItem>
                      <SelectItem value="aluminum">Алюминий</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="area" className="text-base font-semibold">
                    Площадь: {calcArea[0]} м²
                  </Label>
                  <Slider
                    id="area"
                    min={1}
                    max={50}
                    step={1}
                    value={calcArea}
                    onValueChange={setCalcArea}
                    className="py-4"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="installation" className="text-base font-semibold">
                    Тип монтажа
                  </Label>
                  <Select value={calcInstallation} onValueChange={setCalcInstallation}>
                    <SelectTrigger id="installation">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="standard">Стандартный</SelectItem>
                      <SelectItem value="express">Экспресс (+30%)</SelectItem>
                      <SelectItem value="premium">Премиум (+60%)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="bg-gradient-to-r from-primary to-secondary p-6 rounded-xl text-white">
                  <div className="text-center">
                    <div className="text-sm font-medium mb-2">Примерная стоимость</div>
                    <div className="text-5xl font-bold mb-2">{calculatePrice().toLocaleString('ru-RU')} ₽</div>
                    <div className="text-sm opacity-90">Финальная цена после замера</div>
                  </div>
                </div>

                <Button size="lg" className="w-full text-lg py-6" variant="outline">
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Записаться на бесплатный замер
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="отзывы" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary">Отзывы клиентов</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Что говорят о нас</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Более 5000 довольных клиентов по всей России
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {reviews.map((review, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{review.name}</CardTitle>
                        <CardDescription>{review.date}</CardDescription>
                      </div>
                      <div className="flex gap-1">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={18} />
                        ))}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{review.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button size="lg" variant="outline" className="border-2">
                <Icon name="MessageSquare" size={20} className="mr-2" />
                Оставить отзыы
              </Button>
            </div>
          </div>
        </section>

        <section id="контакты" className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-accent/10 text-accent border-accent">Контакты</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Оставьте заявку и мы свяжемся с вами в течение 15 минут
              </p>
            </div>

            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl">Обратная связь</CardTitle>
                  <CardDescription>Заполните форму и мы вам перезвоним</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Ваше имя</Label>
                    <Input id="name" placeholder="Иван Иванов" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Сообщение</Label>
                    <Textarea id="message" placeholder="Опишите вашу задачу..." rows={4} />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary text-white" size="lg">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card className="shadow-xl">
                  <CardContent className="pt-6 space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                        <Icon name="Phone" className="text-white" size={24} />
                      </div>
                      <div>
                        <div className="font-semibold">Телефон</div>
                        <div className="text-muted-foreground">+7 (800) 555-35-35</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                        <Icon name="Mail" className="text-white" size={24} />
                      </div>
                      <div>
                        <div className="font-semibold">Email</div>
                        <div className="text-muted-foreground">info@okonpro.ru</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                        <Icon name="MapPin" className="text-white" size={24} />
                      </div>
                      <div>
                        <div className="font-semibold">Адрес</div>
                        <div className="text-muted-foreground">г. Москва, ул. Примерная, д. 1</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                        <Icon name="Clock" className="text-white" size={24} />
                      </div>
                      <div>
                        <div className="font-semibold">Время работы</div>
                        <div className="text-muted-foreground">Пн-Вс: 9:00 - 21:00</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-xl bg-gradient-to-br from-primary to-secondary text-white">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-2">Бесплатная консультация</h3>
                    <p className="mb-4 opacity-90">Оставьте заявку прямо сейчас и получите скидку 10%</p>
                    <Button size="lg" variant="secondary" className="w-full">
                      <Icon name="Gift" size={20} className="mr-2" />
                      Получить скидку
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon name="Home" className="text-white" size={24} />
                </div>
                <span className="text-2xl font-bold">ОконПро</span>
              </div>
              <p className="text-background/70">Профессиональная установка окон, дверей и жалюзи с 2016 года</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-background/70">
                <li>Окна</li>
                <li>Двери</li>
                <li>Жалюзи</li>
                <li>Подоконники</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-background/70">
                <li>О нас</li>
                <li>Портфолио</li>
                <li>Отзывы</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Социальные сети</h4>
              <div className="flex gap-3">
                <div className="w-10 h-10 bg-background/10 hover:bg-background/20 rounded-full flex items-center justify-center cursor-pointer transition-colors">
                  <Icon name="Facebook" size={20} />
                </div>
                <div className="w-10 h-10 bg-background/10 hover:bg-background/20 rounded-full flex items-center justify-center cursor-pointer transition-colors">
                  <Icon name="Instagram" size={20} />
                </div>
                <div className="w-10 h-10 bg-background/10 hover:bg-background/20 rounded-full flex items-center justify-center cursor-pointer transition-colors">
                  <Icon name="Youtube" size={20} />
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/70">
            <p>&copy; 2026 ОконПро. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
