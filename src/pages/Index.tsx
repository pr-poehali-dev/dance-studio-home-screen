import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', phone: '', message: '' });
  };

  const danceStyles = [
    { name: 'Хип-хоп', icon: 'Zap', description: 'Энергичный уличный стиль для всех уровней' },
    { name: 'Контемпорари', icon: 'Wind', description: 'Современный танец с элементами импровизации' },
    { name: 'Бачата', icon: 'Heart', description: 'Чувственный латиноамериканский танец' },
    { name: 'Vogue', icon: 'Sparkles', description: 'Стильный танец подиумных движений' },
    { name: 'Стрип-пластика', icon: 'Star', description: 'Пластичность и уверенность в себе' },
    { name: 'Брейк-данс', icon: 'Flame', description: 'Акробатика и силовые элементы' }
  ];

  const instructors = [
    { name: 'Анна Петрова', specialty: 'Хип-хоп, Vogue', experience: '8 лет' },
    { name: 'Дмитрий Соколов', specialty: 'Брейк-данс', experience: '10 лет' },
    { name: 'Мария Лебедева', specialty: 'Контемпорари', experience: '6 лет' }
  ];

  const schedule = [
    { day: 'Понедельник', time: '18:00-19:30', style: 'Хип-хоп (начинающие)', instructor: 'Анна Петрова' },
    { day: 'Вторник', time: '19:00-20:30', style: 'Контемпорари', instructor: 'Мария Лебедева' },
    { day: 'Среда', time: '18:00-19:30', style: 'Брейк-данс', instructor: 'Дмитрий Соколов' },
    { day: 'Четверг', time: '19:00-20:30', style: 'Vogue', instructor: 'Анна Петрова' },
    { day: 'Пятница', time: '18:00-19:30', style: 'Бачата', instructor: 'Анна Петрова' },
    { day: 'Суббота', time: '12:00-13:30', style: 'Стрип-пластика', instructor: 'Мария Лебедева' }
  ];

  const prices = [
    { name: 'Разовое занятие', price: '800₽', features: ['1 занятие', 'Любое направление', 'Пробное со скидкой 50%'] },
    { name: 'Абонемент 8 занятий', price: '5600₽', features: ['8 занятий', 'Действует 30 дней', 'Все направления'], popular: true },
    { name: 'Безлимит', price: '12000₽', features: ['Неограниченно', 'Действует 30 дней', 'Все направления'] }
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a0b2e] via-[#2d1b4e] to-[#4a2d6e] text-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-glow-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-24 bg-gradient-to-b from-transparent via-primary/30 to-transparent"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-32 bg-gradient-to-b from-transparent via-secondary/30 to-transparent"></div>
      </div>

      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-glow">Симптом</div>
          <div className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection('styles')} className="hover:text-primary transition-colors">Направления</button>
            <button onClick={() => scrollToSection('schedule')} className="hover:text-primary transition-colors">Расписание</button>
            <button onClick={() => scrollToSection('instructors')} className="hover:text-primary transition-colors">Преподаватели</button>
            <button onClick={() => scrollToSection('prices')} className="hover:text-primary transition-colors">Цены</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">Контакты</button>
          </div>
          <Button onClick={() => scrollToSection('contact')} className="bg-primary hover:bg-primary/90 text-white font-semibold">
            ЗАПИСАТЬСЯ
          </Button>
        </div>
      </nav>

      <section className="relative pt-32 pb-20 px-4">
        <div className="container mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-glow">Симптом</h1>
          <p className="text-2xl md:text-3xl font-light text-[#FFB6C1] mb-12">Танец — язык твоего тела</p>
          
          <div className="relative max-w-3xl mx-auto mb-12 motion-blur">
            <img 
              src="https://cdn.poehali.dev/projects/ef2f6466-f475-406b-91de-b491dc9de9f8/files/b7fc4956-4ef4-479a-abae-e3c2905cf3d6.jpg"
              alt="Танцующая пара"
              className="w-full h-[400px] object-cover rounded-2xl opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent rounded-2xl"></div>
          </div>

          <Button 
            onClick={() => scrollToSection('contact')}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white font-bold text-lg px-12 py-6 rounded-full shadow-lg shadow-primary/50 hover:shadow-primary/70 hover:scale-105 transition-all border-2 border-white/20"
          >
            ЗАПИСАТЬСЯ
          </Button>
        </div>
      </section>

      <section id="styles" className="py-20 px-4 relative">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">Направления танцев</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {danceStyles.map((style, index) => (
              <Card 
                key={index}
                className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <Icon name={style.icon} size={48} className="mx-auto mb-4 text-primary" />
                  <h3 className="text-2xl font-bold mb-2">{style.name}</h3>
                  <p className="text-muted-foreground">{style.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="schedule" className="py-20 px-4 bg-card/20 backdrop-blur-sm relative">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">Расписание занятий</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {schedule.map((item, index) => (
              <Card 
                key={index}
                className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-secondary/50 transition-all animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardContent className="p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon name="Calendar" size={20} className="text-primary" />
                      <span className="font-bold text-lg">{item.day}</span>
                      <span className="text-muted-foreground">{item.time}</span>
                    </div>
                    <div className="text-xl font-semibold">{item.style}</div>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Icon name="User" size={16} />
                    <span>{item.instructor}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="instructors" className="py-20 px-4 relative">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">Преподаватели</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {instructors.map((instructor, index) => (
              <Card 
                key={index}
                className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-secondary/50 transition-all hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <Icon name="User" size={64} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{instructor.name}</h3>
                  <p className="text-primary mb-2">{instructor.specialty}</p>
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <Icon name="Award" size={16} />
                    <span>Опыт {instructor.experience}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 px-4 bg-card/20 backdrop-blur-sm relative">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">Цены и абонементы</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {prices.map((price, index) => (
              <Card 
                key={index}
                className={`bg-card/50 backdrop-blur-sm border-border/50 hover:scale-105 transition-all animate-scale-in ${
                  price.popular ? 'border-primary border-2 shadow-lg shadow-primary/30' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center relative">
                  {price.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary px-4 py-1 rounded-full text-sm font-bold">
                      ПОПУЛЯРНЫЙ
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-4">{price.name}</h3>
                  <div className="text-5xl font-bold text-primary mb-6">{price.price}</div>
                  <ul className="space-y-3 mb-8">
                    {price.features.map((feature, i) => (
                      <li key={i} className="flex items-center justify-center gap-2">
                        <Icon name="Check" size={20} className="text-secondary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    onClick={() => scrollToSection('contact')}
                    className={`w-full ${
                      price.popular 
                        ? 'bg-primary hover:bg-primary/90' 
                        : 'bg-secondary hover:bg-secondary/90'
                    }`}
                  >
                    Выбрать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 relative">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">Запись на занятие</h2>
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 animate-scale-in">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block mb-2 font-semibold">Ваше имя</label>
                  <Input 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Введите ваше имя"
                    className="bg-background/50 border-border/50"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-semibold">Телефон</label>
                  <Input 
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+7 (___) ___-__-__"
                    className="bg-background/50 border-border/50"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-semibold">Сообщение</label>
                  <Textarea 
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Выберите направление или задайте вопрос..."
                    className="bg-background/50 border-border/50 min-h-[120px]"
                  />
                </div>
                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 font-bold text-lg"
                >
                  ОТПРАВИТЬ ЗАЯВКУ
                </Button>
              </form>

              <div className="mt-8 pt-8 border-t border-border/50 space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="MapPin" size={20} className="text-primary" />
                  <span>г. Москва, ул. Танцевальная, д. 12</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Phone" size={20} className="text-primary" />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Mail" size={20} className="text-primary" />
                  <span>info@simptom-dance.ru</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border/50 bg-card/20 backdrop-blur-sm">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 Танцевальная студия «Симптом». Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
