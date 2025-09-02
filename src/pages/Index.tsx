import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedWagon, setSelectedWagon] = useState<string | null>(null);

  const wagonTypes = [
    {
      id: 'tank',
      name: 'Цистерны',
      description: 'Специализированные вагоны для перевозки жидких грузов',
      detailedDescription: 'Современные цистерны ОВК предназначены для безопасной транспортировки нефтепродуктов, химических веществ и других жидких грузов. Оборудованы системами контроля температуры и давления.',
      image: '/img/fcf5a8a1-a338-4a5b-bc7a-9630fdfa0dea.jpg',
      specs: {
        capacity: '85 м³',
        weight: '22 т',
        length: '14,6 м',
        loading: 'Верхняя и нижняя',
        maxSpeed: '120 км/ч',
        axles: '4 оси',
        material: 'Высокопрочная сталь 09Г2С'
      },
      features: ['Антикоррозийное покрытие', 'Система подогрева', 'Автоматическая разгрузка', 'Контроль давления', 'Теплоизоляция', 'Система очистки']
    },
    {
      id: 'gondola',
      name: 'Полувагоны',
      description: 'Универсальные грузовые вагоны открытого типа',
      detailedDescription: 'Полувагоны ОВК обеспечивают эффективную перевозку насыпных и навалочных грузов: угля, руды, щебня, зерна. Усиленная конструкция выдерживает экстремальные нагрузки.',
      image: '/img/8649b73d-2c19-42a4-8024-d0ed32e5e14c.jpg',
      specs: {
        capacity: '125 м³',
        weight: '23 т',
        length: '15,9 м',
        loading: 'Верхняя',
        maxSpeed: '120 км/ч',
        axles: '4 оси',
        material: 'Низколегированная сталь'
      },
      features: ['Усиленное днище', 'Боковые разгрузочные люки', 'Стальные борта', 'Система креплений', 'Антикоррозийная обработка', 'Износостойкие материалы']
    },
    {
      id: 'hopper',
      name: 'Хопперы',
      description: 'Вагоны для сыпучих грузов с нижней разгрузкой',
      detailedDescription: 'Хопперы-дозаторы для транспортировки цемента, зерна, минеральных удобрений. Герметичная конструкция защищает груз от внешних воздействий и обеспечивает быструю разгрузку.',
      image: '/img/ae676d55-2522-4379-aaec-29e506c4cbff.jpg',
      specs: {
        capacity: '120 м³',
        weight: '25 т',
        length: '17,2 м',
        loading: 'Верхняя/Нижняя',
        maxSpeed: '120 км/ч',
        axles: '4 оси',
        material: 'Специальная сталь с покрытием'
      },
      features: ['Герметичность', 'Пневморазгрузка', 'Антипригарное покрытие', 'Система дозирования', 'Автоматические люки', 'Контроль влажности']
    },
    {
      id: 'flatcar',
      name: 'Платформы',
      description: 'Для перевозки контейнеров и крупногабаритных грузов',
      detailedDescription: 'Универсальные платформы для контейнерных перевозок и негабаритных грузов. Соответствуют международным стандартам ISO, оборудованы системами крепления.',
      image: '/img/332eef00-4681-468b-94c2-7c02739cdcb6.jpg',
      specs: {
        capacity: '75 т',
        weight: '20 т',
        length: '19,6 м',
        loading: 'Боковая/Торцевая',
        maxSpeed: '120 км/ч',
        axles: '4 оси',
        material: 'Конструкционная сталь'
      },
      features: ['Фитинги для контейнеров', 'Съёмные стойки', 'Противоскользящее покрытие', 'Система креплений', 'Торцевые упоры', 'Складные борта']
    }
  ];

  const productionFacilities = [
    {
      name: 'Тихвинский завод',
      location: 'Ленинградская область',
      capacity: '12,000 вагонов/год',
      specialization: 'Инновационные грузовые вагоны'
    },
    {
      name: 'Рузаевский завод',
      location: 'Республика Мордовия',
      capacity: '8,000 вагонов/год',
      specialization: 'Специализированный подвижной состав'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-steel-lighter">
      {/* Header */}
      <header className="bg-primary text-primary-foreground shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Icon name="Train" size={32} />
              <div>
                <h1 className="text-xl font-bold">ОВК</h1>
                <p className="text-sm opacity-90">Объединенная Вагонная Компания</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#about" className="hover:opacity-80 transition-opacity">О компании</a>
              <a href="#products" className="hover:opacity-80 transition-opacity">Продукция</a>
              <a href="#production" className="hover:opacity-80 transition-opacity">Производство</a>
              <a href="#careers" className="hover:opacity-80 transition-opacity">Карьера</a>
              <a href="#contacts" className="hover:opacity-80 transition-opacity">Контакты</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-32 text-white overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img 
            src="/img/f25c72f3-a7a6-49f4-bb31-15d2d902cad5.jpg" 
            alt="Промышленный комплекс ОВК" 
            className="w-full h-full object-cover scale-105 animate-pulse duration-[3000ms]"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-steel-dark/95 via-steel-medium/85 to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.3)_100%)]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-reveal">
              <h2 className="text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                Лидер инновационного <span className="gradient-text">вагоностроения</span>
              </h2>
              <p className="text-xl lg:text-2xl mb-10 opacity-90 leading-relaxed max-w-3xl">
                Научно-производственная корпорация «Объединенная Вагонная Компания» — 
                интегрированный провайдер в сфере инжиниринга, производства и сервисного 
                обслуживания грузовых вагонов нового поколения.
              </p>
              <div className="flex flex-wrap gap-6">
                <Button size="lg" className="bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white/30 hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-semibold">
                  <Icon name="FileText" size={24} className="mr-3" />
                  Каталог продукции
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-white/50 text-white hover:bg-white hover:text-steel-dark hover:scale-105 transition-all duration-300 backdrop-blur-md px-8 py-4 text-lg font-semibold">
                  <Icon name="Play" size={24} className="mr-3" />
                  О компании
                </Button>
              </div>
            </div>
            <div className="relative scroll-reveal">
              <div className="glass-effect p-10 rounded-3xl shadow-2xl hover-lift">
                <div className="grid grid-cols-2 gap-8 text-center">
                  <div className="group">
                    <div className="text-5xl font-bold mb-3 gradient-text group-hover:scale-110 transition-transform duration-300">20,000+</div>
                    <div className="text-white/80 text-lg font-medium">Вагонов в год</div>
                  </div>
                  <div className="group">
                    <div className="text-5xl font-bold mb-3 gradient-text group-hover:scale-110 transition-transform duration-300">40+</div>
                    <div className="text-white/80 text-lg font-medium">Лет опыта</div>
                  </div>
                  <div className="group">
                    <div className="text-5xl font-bold mb-3 gradient-text group-hover:scale-110 transition-transform duration-300">8</div>
                    <div className="text-white/80 text-lg font-medium">Производственных площадок</div>
                  </div>
                  <div className="group">
                    <div className="text-5xl font-bold mb-3 gradient-text group-hover:scale-110 transition-transform duration-300">50+</div>
                    <div className="text-white/80 text-lg font-medium">Стран поставки</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Product Catalog */}
      <section id="products" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Интерактивный каталог продукции</h2>
            <p className="text-xl text-muted-foreground">
              Технические характеристики и особенности наших вагонов
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="space-y-4">
                {wagonTypes.map((wagon) => (
                  <Card 
                    key={wagon.id} 
                    className={`cursor-pointer transition-all duration-300 hover-lift ${
                      selectedWagon === wagon.id ? 'ring-2 ring-primary shadow-xl scale-105 glass-effect' : 'hover:shadow-xl'
                    }`}
                    onClick={() => setSelectedWagon(wagon.id)}
                  >
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center justify-between">
                        <span>{wagon.name}</span>
                        <Icon name="ChevronRight" size={20} />
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{wagon.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2">
              {selectedWagon && (
                <Card className="animate-fade-in">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Icon name="Settings" size={24} />
                      {wagonTypes.find(w => w.id === selectedWagon)?.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Tabs defaultValue="overview">
                      <TabsList className="mb-6">
                        <TabsTrigger value="overview">Обзор</TabsTrigger>
                        <TabsTrigger value="specs">Характеристики</TabsTrigger>
                        <TabsTrigger value="features">Особенности</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="overview" className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <img 
                              src={wagonTypes.find(w => w.id === selectedWagon)?.image}
                              alt={wagonTypes.find(w => w.id === selectedWagon)?.name}
                              className="w-full h-64 object-cover rounded-xl shadow-2xl hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                          <div className="space-y-4">
                            <h3 className="text-xl font-semibold">{wagonTypes.find(w => w.id === selectedWagon)?.name}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                              {wagonTypes.find(w => w.id === selectedWagon)?.detailedDescription}
                            </p>
                            <div className="flex flex-wrap gap-3">
                              <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0 px-4 py-2 text-sm font-medium">Современная конструкция</Badge>
                              <Badge className="bg-gradient-to-r from-green-500 to-teal-600 text-white border-0 px-4 py-2 text-sm font-medium">Высокая надёжность</Badge>
                              <Badge className="bg-gradient-to-r from-emerald-500 to-green-600 text-white border-0 px-4 py-2 text-sm font-medium">Экологичность</Badge>
                            </div>
                          </div>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="specs" className="space-y-4">
                        {Object.entries(wagonTypes.find(w => w.id === selectedWagon)?.specs || {}).map(([key, value]) => (
                          <div key={key} className="flex justify-between py-2 border-b">
                            <span className="font-medium capitalize">
                              {key === 'capacity' && 'Объём'}
                              {key === 'weight' && 'Масса тары'}
                              {key === 'length' && 'Длина'}
                              {key === 'loading' && 'Тип загрузки'}
                              {key === 'maxSpeed' && 'Максимальная скорость'}
                              {key === 'axles' && 'Количество осей'}
                              {key === 'material' && 'Материал корпуса'}
                            </span>
                            <span className="text-muted-foreground font-medium">{value}</span>
                          </div>
                        ))}
                      </TabsContent>
                      
                      <TabsContent value="features">
                        <div className="grid gap-3">
                          {wagonTypes.find(w => w.id === selectedWagon)?.features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                              <Icon name="CheckCircle" size={20} className="text-green-600 flex-shrink-0" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              )}
              
              {!selectedWagon && (
                <Card className="h-full flex items-center justify-center">
                  <CardContent className="text-center py-16">
                    <Icon name="MousePointer" size={48} className="mx-auto mb-4 text-muted-foreground" />
                    <p className="text-lg text-muted-foreground">
                      Выберите тип вагона для просмотра характеристик
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* About Company */}
      <section id="about" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">О компании</h2>
              <p className="text-lg mb-6 leading-relaxed">
                Объединенная Вагонная Компания — лидер инновационного вагоностроения 
                на пространстве колеи 1520 мм. Наша компания объединяет передовые 
                технологии, высококвалифицированных специалистов и многолетний опыт 
                создания подвижного состава мирового класса.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Award" size={24} className="text-primary" />
                  <span>ISO 9001:2015 сертификация качества</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Globe" size={24} className="text-primary" />
                  <span>Экспорт в более чем 50 стран мира</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Zap" size={24} className="text-primary" />
                  <span>Собственный R&D центр</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <img 
                src="/img/977bdf5e-cad0-48ae-82de-bcc62d51f8b5.jpg" 
                alt="Грузовой вагон ОВК" 
                className="aspect-square object-cover rounded-lg shadow-lg"
              />
              <img 
                src="/img/cada7931-8b88-4a96-9977-cf01e3679f86.jpg" 
                alt="Производственный комплекс" 
                className="aspect-square object-cover rounded-lg shadow-lg"
              />
              <img 
                src="/img/4560ffdf-e71d-41e5-9fab-e58a7b0c21e3.jpg" 
                alt="Цистерна ОВК" 
                className="aspect-square object-cover rounded-lg shadow-lg"
              />
              <div className="aspect-square bg-gradient-to-br from-steel-light to-steel-medium rounded-lg flex items-center justify-center">
                <Icon name="Factory" size={48} className="text-steel-dark/70" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Production Facilities */}
      <section id="production" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Производственные мощности</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {productionFacilities.map((facility, index) => (
              <Card key={index} className="hover-lift transition-all duration-300 border-0 shadow-lg hover:shadow-2xl bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-4 text-xl">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl text-white">
                      <Icon name="Factory" size={28} />
                    </div>
                    <span className="gradient-text">{facility.name}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50/50">
                    <Icon name="MapPin" size={20} className="text-blue-600" />
                    <span className="font-medium">{facility.location}</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50/50">
                    <Icon name="BarChart3" size={20} className="text-green-600" />
                    <span className="font-medium">{facility.capacity}</span>
                  </div>
                  <Badge className="bg-gradient-to-r from-purple-500 to-pink-600 text-white border-0 px-4 py-2 text-sm font-medium">{facility.specialization}</Badge>
                </CardContent>
              </Card>
            ))
          </div>
        </div>
      </section>

      {/* Careers */}
      <section id="careers" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Карьера в ОВК</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Присоединяйтесь к команде профессионалов и развивайтесь вместе с нами
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardContent className="pt-6 text-center">
                <Icon name="Users" size={32} className="mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Инженеры</h3>
                <p className="text-sm text-muted-foreground">Проектирование и разработка</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Icon name="Wrench" size={32} className="mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Производство</h3>
                <p className="text-sm text-muted-foreground">Сборка и тестирование</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Icon name="Headphones" size={32} className="mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Сервис</h3>
                <p className="text-sm text-muted-foreground">Обслуживание и поддержка</p>
              </CardContent>
            </Card>
          </div>
          <Button size="lg">
            <Icon name="User" size={20} className="mr-2" />
            Открытые вакансии
          </Button>
        </div>
      </section>

      {/* Contact */}
      <section id="contacts" className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">Контакты</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Icon name="MapPin" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">Головной офис</h3>
                    <p className="opacity-90">г. Москва, ул. Новодмитровская, д. 2, к. 1</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Phone" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">Телефон</h3>
                    <p className="opacity-90">+7 (495) 987-65-43</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Mail" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-sm opacity-90">info@uralvagonzavod.ru</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4">Напишите нам</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full p-3 rounded bg-white/20 placeholder-white/70 text-white"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 rounded bg-white/20 placeholder-white/70 text-white"
                />
                <textarea
                  placeholder="Сообщение"
                  rows={4}
                  className="w-full p-3 rounded bg-white/20 placeholder-white/70 text-white resize-none"
                ></textarea>
                <Button className="w-full bg-white text-primary hover:bg-white/90">
                  Отправить сообщение
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-steel-dark text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p>&copy; 2024 Объединенная Вагонная Компания. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;