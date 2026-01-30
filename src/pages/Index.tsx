import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { toast } from 'sonner';
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
  const [catalogOpen, setCatalogOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('');
  const [callbackOpen, setCallbackOpen] = useState(false);
  const [measurementOpen, setMeasurementOpen] = useState(false);
  const [orderOpen, setOrderOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [reviewOpen, setReviewOpen] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false);
  const [contactFormData, setContactFormData] = useState({ name: '', phone: '', message: '' });

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
      id: 'windows',
      icon: 'RectangleVertical',
      title: 'Окна',
      description: 'Установка пластиковых, деревянных и алюминиевых окон любой сложности',
      features: ['Энергоэффективность', 'Шумоизоляция', 'Гарантия 10 лет'],
    },
    {
      id: 'doors',
      icon: 'DoorOpen',
      title: 'Двери',
      description: 'Монтаж входных и межкомнатных дверей с профессиональной отделкой',
      features: ['Надежность', 'Быстрый монтаж', 'Гарантия 5 лет'],
    },
    {
      id: 'blinds',
      icon: 'Blinds',
      title: 'Жалюзи',
      description: 'Горизонтальные, вертикальные и рулонные жалюзи под любой интерьер',
      features: ['Любые размеры', 'Индивидуальный дизайн', 'Гарантия 3 года'],
    },
    {
      id: 'sills',
      icon: 'Square',
      title: 'Подоконники',
      description: 'Широкий выбор подоконников из различных материалов с установкой',
      features: ['Влагостойкость', 'Прочность', 'Гарантия 5 лет'],
    },
  ];

  const catalogData: Record<string, Array<{ title: string; price: string; image: string; specs: string[] }>> = {
    windows: [
      {
        title: 'ПВХ окно стандарт',
        price: 'от 8 500 ₽',
        image: 'https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?w=600',
        specs: ['Профиль 60мм', '2 камеры', 'Белый цвет'],
      },
      {
        title: 'ПВХ окно премиум',
        price: 'от 12 000 ₽',
        image: 'https://images.unsplash.com/photo-1512314889357-e157c22f938d?w=600',
        specs: ['Профиль 70мм', '5 камер', 'Энергосберегающее'],
      },
      {
        title: 'Деревянное окно',
        price: 'от 25 000 ₽',
        image: 'https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=600',
        specs: ['Сосна/дуб', 'Экологичное', 'Премиум класс'],
      },
      {
        title: 'Алюминиевое окно',
        price: 'от 15 000 ₽',
        image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600',
        specs: ['Прочная рама', 'Панорамное', 'Современный дизайн'],
      },
      {
        title: 'Балконный блок',
        price: 'от 18 000 ₽',
        image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=600',
        specs: ['Дверь + окно', 'Под ключ', 'Гарантия 10 лет'],
      },
      {
        title: 'Мансардное окно',
        price: 'от 22 000 ₽',
        image: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600',
        specs: ['Для крыши', 'Влагостойкое', 'Механизм открывания'],
      },
    ],
    doors: [
      {
        title: 'Входная дверь «Стандарт»',
        price: 'от 18 000 ₽',
        image: 'https://images.unsplash.com/photo-1499916078039-922301b0eb9b?w=600',
        specs: ['Сталь 2мм', 'Замок 2 класса', 'МДФ панель'],
      },
      {
        title: 'Входная дверь «Премиум»',
        price: 'от 35 000 ₽',
        image: 'https://images.unsplash.com/photo-1534172553416-bc945e8eb00f?w=600',
        specs: ['Сталь 3мм', 'Замок премиум', 'Шумоизоляция'],
      },
      {
        title: 'Межкомнатная дверь',
        price: 'от 7 500 ₽',
        image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600',
        specs: ['МДФ/массив', 'Скрытая коробка', 'Современный дизайн'],
      },
      {
        title: 'Раздвижная дверь',
        price: 'от 12 000 ₽',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600',
        specs: ['Экономия места', 'Плавный ход', 'Стекло/массив'],
      },
      {
        title: 'Дверь со стеклом',
        price: 'от 9 500 ₽',
        image: 'https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?w=600',
        specs: ['Стеклянные вставки', 'Больше света', 'Элегантный вид'],
      },
      {
        title: 'Дверь в ванную',
        price: 'от 6 500 ₽',
        image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600',
        specs: ['Влагостойкая', 'Вентиляция', 'Защелка-фиксатор'],
      },
    ],
    blinds: [
      {
        title: 'Горизонтальные жалюзи',
        price: 'от 1 200 ₽/м²',
        image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600',
        specs: ['Алюминий', '16/25мм ламели', 'Любой цвет'],
      },
      {
        title: 'Вертикальные жалюзи',
        price: 'от 1 500 ₽/м²',
        image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600',
        specs: ['Ткань/пластик', '89/127мм ламели', 'Для больших окон'],
      },
      {
        title: 'Рулонные шторы',
        price: 'от 2 000 ₽/м²',
        image: 'https://images.unsplash.com/photo-1600210491369-e753d80a41f3?w=600',
        specs: ['Ткань блэкаут', 'Механизм цепочка', 'Полное затемнение'],
      },
      {
        title: 'Римские шторы',
        price: 'от 2 500 ₽/м²',
        image: 'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=600',
        specs: ['Премиум ткань', 'Складки', 'Элегантный стиль'],
      },
      {
        title: 'Плиссе',
        price: 'от 3 000 ₽/м²',
        image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?w=600',
        specs: ['Для мансард', 'День-ночь', 'Любая форма окна'],
      },
      {
        title: 'Жалюзи с электроприводом',
        price: 'от 5 000 ₽/м²',
        image: 'https://images.unsplash.com/photo-1600573472550-7abdc7df76e5?w=600',
        specs: ['Умный дом', 'Пульт ДУ', 'Автоматика'],
      },
    ],
    sills: [
      {
        title: 'ПВХ подоконник',
        price: 'от 800 ₽/м',
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600',
        specs: ['Белый/цветной', 'Влагостойкий', 'Легкий уход'],
      },
      {
        title: 'Мраморный подоконник',
        price: 'от 4 500 ₽/м',
        image: 'https://images.unsplash.com/photo-1600566752229-250ed79470dc?w=600',
        specs: ['Натуральный камень', 'Премиум класс', 'Долговечный'],
      },
      {
        title: 'Деревянный подоконник',
        price: 'от 2 200 ₽/м',
        image: 'https://images.unsplash.com/photo-1600585152220-d19781e5e817?w=600',
        specs: ['Массив дуба/сосны', 'Экологичный', 'Тёплый на ощупь'],
      },
      {
        title: 'Кварцевый подоконник',
        price: 'от 3 800 ₽/м',
        image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600',
        specs: ['Искусственный камень', 'Устойчивость', 'Современный вид'],
      },
      {
        title: 'Акриловый подоконник',
        price: 'от 1 500 ₽/м',
        image: 'https://images.unsplash.com/photo-1600573472591-62139cc12c64?w=600',
        specs: ['Глянцевый', 'Легкий', 'Широкая палитра'],
      },
      {
        title: 'Гранитный подоконник',
        price: 'от 5 500 ₽/м',
        image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600',
        specs: ['Натуральный гранит', 'Максимальная прочность', 'Престиж'],
      },
    ],
  };

  const openCatalog = (serviceId: string) => {
    setSelectedService(serviceId);
    setCatalogOpen(true);
  };

  const handleCallbackRequest = () => {
    setCallbackOpen(true);
  };

  const handleMeasurementRequest = () => {
    setMeasurementOpen(true);
  };

  const handleOrderProduct = (product: any) => {
    setSelectedProduct(product);
    setOrderOpen(true);
    setCatalogOpen(false);
  };

  const handleSubmitCallback = () => {
    toast.success('Заявка принята!', {
      description: 'Мы свяжемся с вами в течение 15 минут',
    });
    setCallbackOpen(false);
  };

  const handleSubmitMeasurement = () => {
    toast.success('Заявка на замер принята!', {
      description: 'Наш специалист свяжется с вами для согласования времени',
    });
    setMeasurementOpen(false);
  };

  const handleSubmitOrder = () => {
    toast.success('Заказ оформлен!', {
      description: 'Менеджер свяжется с вами для уточнения деталей',
    });
    setOrderOpen(false);
    setSelectedProduct(null);
  };

  const handleSubmitReview = () => {
    toast.success('Спасибо за отзыв!', {
      description: 'Ваш отзыв будет опубликован после модерации',
    });
    setReviewOpen(false);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Сообщение отправлено!', {
      description: 'Мы свяжемся с вами в ближайшее время',
    });
    setContactFormData({ name: '', phone: '', message: '' });
  };

  const handleShowAllPortfolio = () => {
    setPortfolioOpen(true);
  };

  const handleDiscountRequest = () => {
    toast.success('Промокод отправлен!', {
      description: 'Проверьте SMS с промокодом на скидку 10%',
    });
  };

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
          <Button 
            className="bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90"
            onClick={handleCallbackRequest}
          >
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
                  className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-t-transparent hover:border-t-primary cursor-pointer group"
                  onClick={() => openCatalog(service.id)}
                >
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon name={service.icon as any} className="text-white" size={32} />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Icon name="CheckCircle2" className="text-primary" size={18} />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-gradient-to-r from-primary to-secondary text-white" size="sm">
                      <Icon name="ShoppingBag" size={16} className="mr-2" />
                      Смотреть каталог
                    </Button>
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
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2"
                onClick={handleShowAllPortfolio}
              >
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

                <Button 
                  size="lg" 
                  className="w-full text-lg py-6" 
                  variant="outline"
                  onClick={handleMeasurementRequest}
                >
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
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2"
                onClick={() => setReviewOpen(true)}
              >
                <Icon name="MessageSquare" size={20} className="mr-2" />
                Оставить отзыв
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
                  <form onSubmit={handleContactSubmit}>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Ваше имя</Label>
                        <Input 
                          id="name" 
                          placeholder="Иван Иванов"
                          value={contactFormData.name}
                          onChange={(e) => setContactFormData({...contactFormData, name: e.target.value})}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Телефон</Label>
                        <Input 
                          id="phone" 
                          type="tel" 
                          placeholder="+7 (999) 123-45-67"
                          value={contactFormData.phone}
                          onChange={(e) => setContactFormData({...contactFormData, phone: e.target.value})}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Сообщение</Label>
                        <Textarea 
                          id="message" 
                          placeholder="Опишите вашу задачу..." 
                          rows={4}
                          value={contactFormData.message}
                          onChange={(e) => setContactFormData({...contactFormData, message: e.target.value})}
                          required
                        />
                      </div>
                      <Button 
                        type="submit"
                        className="w-full bg-gradient-to-r from-primary to-secondary text-white" 
                        size="lg"
                      >
                        <Icon name="Send" size={20} className="mr-2" />
                        Отправить заявку
                      </Button>
                    </div>
                  </form>
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
                    <Button 
                      size="lg" 
                      variant="secondary" 
                      className="w-full"
                      onClick={handleDiscountRequest}
                    >
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

      <Dialog open={catalogOpen} onOpenChange={setCatalogOpen}>
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Каталог: {services.find((s) => s.id === selectedService)?.title}
            </DialogTitle>
            <DialogDescription>
              Выберите подходящий вариант из нашего ассортимента
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {catalogData[selectedService]?.map((item, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-xl transition-all group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-gradient-to-r from-primary to-secondary text-white">
                      {item.price}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 mb-4">
                    {item.specs.map((spec, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="Check" className="text-primary" size={16} />
                        {spec}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full bg-gradient-to-r from-primary to-secondary text-white" 
                    size="sm"
                    onClick={() => handleOrderProduct(item)}
                  >
                    <Icon name="ShoppingCart" size={16} className="mr-2" />
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={callbackOpen} onOpenChange={setCallbackOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Заказать обратный звонок</DialogTitle>
            <DialogDescription>Оставьте номер телефона и мы перезвоним вам в течение 15 минут</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="callback-name">Ваше имя</Label>
              <Input id="callback-name" placeholder="Иван Иванов" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="callback-phone">Телефон</Label>
              <Input id="callback-phone" type="tel" placeholder="+7 (999) 123-45-67" />
            </div>
            <Button 
              className="w-full bg-gradient-to-r from-primary to-secondary text-white" 
              onClick={handleSubmitCallback}
            >
              <Icon name="Phone" size={18} className="mr-2" />
              Жду звонка
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={measurementOpen} onOpenChange={setMeasurementOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Бесплатный замер</DialogTitle>
            <DialogDescription>Наш специалист приедет в удобное для вас время и произведёт точные замеры</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="measure-name">Ваше имя</Label>
              <Input id="measure-name" placeholder="Иван Иванов" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="measure-phone">Телефон</Label>
              <Input id="measure-phone" type="tel" placeholder="+7 (999) 123-45-67" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="measure-address">Адрес</Label>
              <Input id="measure-address" placeholder="г. Москва, ул. Примерная, д. 1, кв. 10" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="measure-date">Предпочтительная дата</Label>
              <Input id="measure-date" type="date" />
            </div>
            <Button 
              className="w-full bg-gradient-to-r from-primary to-secondary text-white" 
              onClick={handleSubmitMeasurement}
            >
              <Icon name="Calendar" size={18} className="mr-2" />
              Записаться на замер
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={orderOpen} onOpenChange={setOrderOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Оформление заказа</DialogTitle>
            <DialogDescription>
              {selectedProduct?.title} — {selectedProduct?.price}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 mt-4">
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-semibold mb-2">Характеристики:</h4>
              <ul className="space-y-1">
                {selectedProduct?.specs?.map((spec: string, i: number) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <Icon name="Check" className="text-primary" size={16} />
                    {spec}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-2">
              <Label htmlFor="order-name">Ваше имя</Label>
              <Input id="order-name" placeholder="Иван Иванов" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="order-phone">Телефон</Label>
              <Input id="order-phone" type="tel" placeholder="+7 (999) 123-45-67" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="order-quantity">Количество</Label>
              <Input id="order-quantity" type="number" defaultValue="1" min="1" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="order-comment">Комментарий</Label>
              <Textarea id="order-comment" placeholder="Дополнительные пожелания..." rows={3} />
            </div>
            <Button 
              className="w-full bg-gradient-to-r from-primary to-secondary text-white" 
              onClick={handleSubmitOrder}
            >
              <Icon name="ShoppingCart" size={18} className="mr-2" />
              Оформить заказ
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={reviewOpen} onOpenChange={setReviewOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Оставить отзыв</DialogTitle>
            <DialogDescription>Поделитесь своим опытом работы с нами</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="review-name">Ваше имя</Label>
              <Input id="review-name" placeholder="Иван Иванов" />
            </div>
            <div className="space-y-2">
              <Label>Оценка</Label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button key={star} className="hover:scale-110 transition-transform">
                    <Icon name="Star" className="text-yellow-500 fill-yellow-500" size={32} />
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="review-text">Ваш отзыв</Label>
              <Textarea id="review-text" placeholder="Расскажите о своём опыте..." rows={4} />
            </div>
            <Button 
              className="w-full bg-gradient-to-r from-primary to-secondary text-white" 
              onClick={handleSubmitReview}
            >
              <Icon name="Send" size={18} className="mr-2" />
              Отправить отзыв
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={portfolioOpen} onOpenChange={setPortfolioOpen}>
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold">Все наши работы</DialogTitle>
            <DialogDescription>Портфолио завершённых проектов</DialogDescription>
          </DialogHeader>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {[...portfolio, ...portfolio, ...portfolio].map((project, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-xl transition-all group">
                <div className="relative overflow-hidden h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-gradient-to-r from-primary to-secondary text-white">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </DialogContent>
      </Dialog>

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