import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');
  const [showProfile, setShowProfile] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('Алексей Иванов');
  const [userEmail, setUserEmail] = useState('alex@starknife.ru');
  const [userBio, setUserBio] = useState('UX/UI дизайнер, 5 лет опыта');
  const [isEditingProfile, setIsEditingProfile] = useState(false);

  const services = [
    { id: 1, title: 'Дизайн сайтов', provider: 'Мария К.', rating: 4.9, price: '15 000 ₽', category: 'Дизайн', image: '🎨' },
    { id: 2, title: 'Разработка React', provider: 'Иван П.', rating: 5.0, price: '25 000 ₽', category: 'Разработка', image: '⚛️' },
    { id: 3, title: 'SEO продвижение', provider: 'Ольга С.', rating: 4.8, price: '20 000 ₽', category: 'Маркетинг', image: '📈' },
    { id: 4, title: 'Копирайтинг', provider: 'Дмитрий Л.', rating: 4.7, price: '8 000 ₽', category: 'Контент', image: '✍️' },
    { id: 5, title: 'Фото/Видео', provider: 'Анна М.', rating: 5.0, price: '18 000 ₽', category: 'Медиа', image: '📸' },
    { id: 6, title: 'Telegram боты', provider: 'Сергей В.', rating: 4.9, price: '12 000 ₽', category: 'Разработка', image: '🤖' },
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      setIsLoggedIn(true);
      setShowProfile(false);
    }
  };

  const handleGoogleLogin = () => {
    setIsLoggedIn(true);
    setShowProfile(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowProfile(false);
    setEmail('');
    setPassword('');
  };

  const saveProfile = () => {
    setIsEditingProfile(false);
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(https://cdn.poehali.dev/files/e9a8d5d7-2185-45ab-970e-749a30cedbd7.png)' }}>
        <div className="flex flex-col lg:flex-row gap-6 max-w-4xl w-full animate-fade-in">
          <Card className="glass rounded-xl p-8 w-full lg:w-96 animate-scale-in">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-heading font-semibold text-gray-700">StarKnife</h1>
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveTab('login')}
                  className={`text-sm px-3 py-1 transition-all ${
                    activeTab === 'login' ? 'font-semibold opacity-100' : 'opacity-50'
                  }`}
                >
                  Log in
                </button>
                <button
                  onClick={() => setActiveTab('signup')}
                  className={`text-sm px-3 py-1 transition-all ${
                    activeTab === 'signup' ? 'font-semibold opacity-100' : 'opacity-50'
                  }`}
                >
                  Sign up
                </button>
              </div>
            </div>

            <div className="mb-6 flex justify-end">
              <Button
                variant="outline"
                onClick={handleGoogleLogin}
                className="bg-white border-gray-200 hover:bg-gray-50 rounded-full shadow-sm"
              >
                <span className="text-blue-500 font-bold mr-2">G</span>
                Google
              </Button>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div className="glass-input rounded-lg flex items-center px-3 py-2">
                <Icon name="Mail" size={18} className="text-gray-600 mr-2" />
                <Input
                  type="email"
                  placeholder="e-mail address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-0 bg-transparent shadow-none focus-visible:ring-0 p-0 h-auto"
                />
              </div>

              <div className="glass-input rounded-lg flex items-center px-3 py-2">
                <Icon name="Key" size={18} className="text-gray-600 mr-2" />
                <Input
                  type="password"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-0 bg-transparent shadow-none focus-visible:ring-0 p-0 h-auto flex-1"
                />
                <a href="#" className="text-xs text-gray-600 opacity-70 ml-2 hover:opacity-100">
                  I forgot
                </a>
              </div>

              <div className="flex items-center justify-between gap-3 mt-6">
                <p className="text-xs text-gray-600 leading-tight">
                  By registering, you agree to the processing of your personal data.
                </p>
                <Button type="submit" size="sm" className="bg-gray-800 hover:bg-gray-900 shrink-0">
                  <Icon name="ArrowRight" size={16} />
                </Button>
              </div>
            </form>

            <a href="#" className="text-xs text-gray-600 opacity-70 mt-3 inline-block hover:opacity-100">
              Click here to more info
            </a>
          </Card>

          <Card className="glass rounded-xl p-8 w-full lg:w-64 relative overflow-hidden">
            <div className="font-heading">
              <div className="text-5xl font-bold text-gray-700 leading-none">October</div>
              <div className="text-3xl font-bold text-gray-600 opacity-70 mt-1">2025</div>
            </div>

            <div className="mt-12 text-sm text-gray-600 space-y-1">
              <p>Monday 17</p>
              <p>October 2025</p>
              <p className="opacity-60">Typography</p>
            </div>

            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-40 h-40 bg-pink-300 opacity-30 rounded-full blur-xl"></div>

            <div className="absolute bottom-4 left-4 text-xs text-gray-600 opacity-60">
              StarKnife.Ru
            </div>
            <Button size="sm" className="absolute bottom-4 right-4 bg-white text-gray-800 hover:bg-gray-100">
              Click Here <Icon name="ChevronRight" size={14} className="ml-1" />
            </Button>
          </Card>
        </div>

        <Card className="glass rounded-xl p-6 fixed bottom-8 left-1/2 -translate-x-1/2 w-80 text-center animate-fade-in">
          <h3 className="font-heading font-semibold text-gray-700 mb-2 flex items-center justify-center gap-2">
            Innovation <span>✨</span>
          </h3>
          <p className="text-sm text-gray-600 mb-4">Try the dark theme</p>
          <div className="flex gap-3 justify-center">
            <Button variant="default" className="bg-gray-800 hover:bg-gray-900">
              Accept
            </Button>
            <Button variant="outline" className="bg-white hover:bg-gray-50">
              Dismiss
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(https://cdn.poehali.dev/files/e9a8d5d7-2185-45ab-970e-749a30cedbd7.png)' }}>
      <nav className="glass border-b border-white/40 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-heading font-semibold text-gray-700">StarKnife</h1>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-gray-700">
              <Icon name="Search" size={20} />
            </Button>
            <Button variant="ghost" className="text-gray-700">
              <Icon name="Bell" size={20} />
            </Button>
            <Avatar className="cursor-pointer" onClick={() => setShowProfile(!showProfile)}>
              <AvatarFallback className="bg-primary/20 text-gray-700 font-semibold">
                {userName.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </nav>

      {showProfile ? (
        <div className="max-w-4xl mx-auto px-4 py-8 animate-fade-in">
          <Card className="glass rounded-xl p-8">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-4">
                <Avatar className="w-20 h-20">
                  <AvatarFallback className="bg-primary/30 text-gray-700 text-2xl font-semibold">
                    {userName.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="text-2xl font-heading font-semibold text-gray-800">{userName}</h2>
                  <p className="text-gray-600">{userEmail}</p>
                </div>
              </div>
              <div className="flex gap-2">
                {isEditingProfile ? (
                  <>
                    <Button onClick={saveProfile} size="sm" className="bg-gray-800 hover:bg-gray-900">
                      <Icon name="Check" size={16} className="mr-1" /> Сохранить
                    </Button>
                    <Button onClick={() => setIsEditingProfile(false)} size="sm" variant="outline">
                      Отмена
                    </Button>
                  </>
                ) : (
                  <Button onClick={() => setIsEditingProfile(true)} size="sm" variant="outline">
                    <Icon name="Pencil" size={16} className="mr-1" /> Редактировать
                  </Button>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-semibold text-gray-700 mb-2 block">Имя</label>
                {isEditingProfile ? (
                  <Input
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="glass-input"
                  />
                ) : (
                  <p className="text-gray-800">{userName}</p>
                )}
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700 mb-2 block">Email</label>
                {isEditingProfile ? (
                  <Input
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    className="glass-input"
                  />
                ) : (
                  <p className="text-gray-800">{userEmail}</p>
                )}
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700 mb-2 block">О себе</label>
                {isEditingProfile ? (
                  <Input
                    value={userBio}
                    onChange={(e) => setUserBio(e.target.value)}
                    className="glass-input"
                  />
                ) : (
                  <p className="text-gray-800">{userBio}</p>
                )}
              </div>
            </div>

            <div className="flex gap-3 mt-8 pt-6 border-t border-white/40">
              <Button onClick={() => setShowProfile(false)} variant="outline">
                <Icon name="ArrowLeft" size={16} className="mr-2" /> Назад к услугам
              </Button>
              <Button onClick={handleLogout} variant="destructive" className="ml-auto">
                <Icon name="LogOut" size={16} className="mr-2" /> Выйти
              </Button>
            </div>
          </Card>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="mb-8 animate-fade-in">
            <h2 className="text-3xl font-heading font-bold text-gray-800 mb-2">Популярные услуги</h2>
            <p className="text-gray-600">Найдите профессионалов для вашего проекта</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={service.id}
                className="glass rounded-xl p-6 hover:scale-105 transition-transform cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl mb-4">{service.image}</div>
                <div className="mb-3">
                  <Badge variant="secondary" className="mb-2 bg-white/60">
                    {service.category}
                  </Badge>
                  <h3 className="font-heading font-semibold text-lg text-gray-800">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">от {service.provider}</p>
                </div>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/40">
                  <div className="flex items-center gap-1 text-sm">
                    <Icon name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                    <span className="font-semibold text-gray-800">{service.rating}</span>
                  </div>
                  <div className="font-heading font-bold text-gray-800">{service.price}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}