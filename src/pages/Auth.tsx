import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { email, password, isLogin });
  };

  const handleGoogleLogin = () => {
    console.log('Google login clicked');
  };

  return (
    <div 
      className={`min-h-screen flex items-center justify-center px-4 transition-all duration-700 ${
        isDarkTheme 
          ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900' 
          : 'bg-gradient-to-br from-pink-100 via-pink-200 to-blue-200'
      }`}
      style={{
        backgroundImage: isDarkTheme ? 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cdefs%3E%3Cpattern id=\'stars\' x=\'0\' y=\'0\' width=\'100\' height=\'100\' patternUnits=\'userSpaceOnUse\'%3E%3Ccircle cx=\'10\' cy=\'10\' r=\'1\' fill=\'white\' opacity=\'0.3\'/%3E%3Ccircle cx=\'60\' cy=\'30\' r=\'1.5\' fill=\'white\' opacity=\'0.5\'/%3E%3Ccircle cx=\'30\' cy=\'60\' r=\'0.8\' fill=\'white\' opacity=\'0.4\'/%3E%3Ccircle cx=\'80\' cy=\'80\' r=\'1.2\' fill=\'white\' opacity=\'0.6\'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=\'100%25\' height=\'100%25\' fill=\'url(%23stars)\'/%3E%3C/svg%3E")' : 'none'
      }}
    >
      <div className="flex gap-6 items-start relative">
        <div 
          className={`backdrop-blur-md rounded-2xl p-8 w-[350px] border transition-all duration-700 ${
            isDarkTheme
              ? 'bg-white/10 border-white/20 shadow-2xl'
              : 'bg-white/25 border-white/40 shadow-xl'
          }`}
        >
          <header className="flex justify-between items-center mb-8">
            <div className={`text-2xl font-medium tracking-wide transition-colors duration-700 ${isDarkTheme ? 'text-white' : 'text-gray-700'}`}>
              StarKnife
            </div>
            <div className="flex gap-1">
              <button
                onClick={() => setIsLogin(true)}
                className={`px-3 py-1 text-base transition-all duration-300 ${
                  isLogin 
                    ? `font-bold ${isDarkTheme ? 'text-white' : 'text-gray-800'}` 
                    : `opacity-50 ${isDarkTheme ? 'text-gray-300' : 'text-gray-600'}`
                }`}
              >
                Log in
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`px-3 py-1 text-base transition-all duration-300 ${
                  !isLogin 
                    ? `font-bold ${isDarkTheme ? 'text-white' : 'text-gray-800'}` 
                    : `opacity-50 ${isDarkTheme ? 'text-gray-300' : 'text-gray-600'}`
                }`}
              >
                Sign up
              </button>
            </div>
          </header>

          <div className="flex justify-end mb-6">
            <button
              onClick={handleGoogleLogin}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm transition-all duration-300 ${
                isDarkTheme
                  ? 'bg-white/90 border-white/20 text-gray-800 hover:bg-white'
                  : 'bg-white border-gray-200 text-gray-800 hover:bg-gray-50'
              } shadow-md`}
            >
              <span className="font-bold text-blue-500 text-lg">G</span> Google
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className={`flex items-center gap-3 px-4 py-3 rounded-lg border transition-all duration-700 ${
              isDarkTheme
                ? 'bg-white/20 border-white/30'
                : 'bg-white/60 border-white/70'
            } shadow-inner`}>
              <span className="text-xl">📧</span>
              <input
                type="email"
                placeholder="e-mail address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`flex-1 bg-transparent border-none outline-none text-base transition-colors duration-700 ${
                  isDarkTheme ? 'text-white placeholder:text-gray-300' : 'text-gray-800 placeholder:text-gray-500'
                }`}
                required
              />
            </div>

            <div className={`flex items-center gap-3 px-4 py-3 rounded-lg border transition-all duration-700 ${
              isDarkTheme
                ? 'bg-white/20 border-white/30'
                : 'bg-white/60 border-white/70'
            } shadow-inner`}>
              <span className="text-xl">🔑</span>
              <input
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`flex-1 bg-transparent border-none outline-none text-base transition-colors duration-700 ${
                  isDarkTheme ? 'text-white placeholder:text-gray-300' : 'text-gray-800 placeholder:text-gray-500'
                }`}
                required
              />
              <a href="#" className={`text-xs opacity-70 transition-colors duration-700 ${isDarkTheme ? 'text-gray-300' : 'text-gray-600'}`}>
                I forgot
              </a>
            </div>
          </form>

          <div className="flex justify-between items-center gap-4 mt-8 mb-4">
            <p className={`text-xs leading-snug transition-colors duration-700 ${isDarkTheme ? 'text-gray-300' : 'text-gray-600'}`}>
              By registering, you agree to the processing of your personal data.
            </p>
            <button
              onClick={handleSubmit}
              className={`flex items-center justify-center w-8 h-8 rounded transition-all duration-300 ${
                isDarkTheme
                  ? 'bg-white text-gray-900 hover:bg-gray-100'
                  : 'bg-gray-800 text-white hover:bg-gray-700'
              }`}
            >
              <span className="text-sm">▶</span>
            </button>
          </div>

          <a href="#" className={`text-xs opacity-70 transition-colors duration-700 ${isDarkTheme ? 'text-gray-300' : 'text-gray-600'}`}>
            Click here to more info
          </a>
        </div>

        <div className={`backdrop-blur-md rounded-2xl p-8 w-[280px] h-[450px] border relative overflow-hidden transition-all duration-700 ${
          isDarkTheme
            ? 'bg-white/10 border-white/20 shadow-2xl'
            : 'bg-white/30 border-white/40 shadow-xl'
        }`}>
          <div className={`text-6xl font-bold leading-none transition-colors duration-700 ${isDarkTheme ? 'text-white' : 'text-gray-700'}`}>
            October
          </div>
          <div className={`text-3xl font-bold opacity-70 transition-colors duration-700 ${isDarkTheme ? 'text-white' : 'text-gray-700'}`}>
            2025
          </div>
          
          <p className={`mt-12 text-sm leading-relaxed transition-colors duration-700 ${isDarkTheme ? 'text-gray-300' : 'text-gray-600'}`}>
            Monday 13<br />
            October 2025<br />
            Typography
          </p>

          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-36 h-36 bg-pink-300/40 rounded-full"></div>

          <p className={`absolute bottom-8 left-8 text-sm opacity-60 transition-colors duration-700 ${isDarkTheme ? 'text-gray-300' : 'text-gray-600'}`}>
            StarKnife.Ru
          </p>

          <button className={`absolute bottom-6 right-6 px-4 py-2 rounded text-sm transition-all duration-300 ${
            isDarkTheme
              ? 'bg-white text-gray-900 hover:bg-gray-100'
              : 'bg-white text-gray-800 hover:bg-gray-50'
          } shadow-md`}>
            Click Here &gt;
          </button>
        </div>

        <div className={`absolute -bottom-24 left-1/2 transform -translate-x-1/2 backdrop-blur-md rounded-2xl p-6 w-[280px] text-center border transition-all duration-700 ${
          isDarkTheme
            ? 'bg-white/10 border-white/20 shadow-2xl'
            : 'bg-white/50 border-white/50 shadow-xl'
        }`}>
          <h3 className={`text-xl mb-2 opacity-70 transition-colors duration-700 ${isDarkTheme ? 'text-white' : 'text-gray-700'}`}>
            Innovation ✨
          </h3>
          <p className={`text-sm mb-4 transition-colors duration-700 ${isDarkTheme ? 'text-gray-300' : 'text-gray-600'}`}>
            Try the dark theme
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setIsDarkTheme(true)}
              className={`px-6 py-2 rounded transition-all duration-300 ${
                isDarkTheme
                  ? 'bg-white text-gray-900'
                  : 'bg-gray-800 text-white hover:bg-gray-700'
              }`}
            >
              Accept
            </button>
            <button
              onClick={() => setIsDarkTheme(false)}
              className={`px-6 py-2 rounded transition-all duration-300 ${
                isDarkTheme
                  ? 'bg-white/20 text-white hover:bg-white/30'
                  : 'bg-white text-gray-800 hover:bg-gray-50'
              } border ${isDarkTheme ? 'border-white/30' : 'border-gray-200'}`}
            >
              Dismiss
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
