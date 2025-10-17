import { useState } from 'react';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
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
      className="min-h-screen flex items-center justify-center px-4"
      style={{
        background: 'linear-gradient(135deg, #fcd5e0 0%, #a4bfe8 100%)',
        backgroundColor: '#fce4ec'
      }}
    >
      <div className="flex items-center relative">
        <div 
          className="rounded-[10px] border p-[25px_30px] w-[300px] mr-5"
          style={{
            background: 'rgba(255, 255, 255, 0.25)',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.2)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            borderColor: 'rgba(255, 255, 255, 0.4)',
            color: '#333'
          }}
        >
          <header className="flex justify-between items-center mb-[25px]">
            <div 
              className="font-medium text-2xl tracking-wide"
              style={{ color: 'rgba(0, 0, 0, 0.6)' }}
            >
              StarKnife
            </div>
            <div className="flex">
              <button
                onClick={() => setIsLogin(true)}
                className={`bg-transparent border-none py-[5px] px-[10px] ml-[5px] cursor-pointer text-[1.1em] transition-opacity duration-300 ${
                  isLogin ? 'font-bold opacity-100' : 'font-normal opacity-50'
                }`}
                style={{ color: 'inherit' }}
              >
                Log in
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`bg-transparent border-none py-[5px] px-[10px] ml-[5px] cursor-pointer text-[1.1em] transition-opacity duration-300 ${
                  !isLogin ? 'font-bold opacity-100' : 'font-normal opacity-50'
                }`}
                style={{ color: 'inherit' }}
              >
                Sign up
              </button>
            </div>
          </header>

          <div className="mb-5 text-right">
            <button
              onClick={handleGoogleLogin}
              className="bg-white border border-black/10 py-[5px] px-[15px] rounded-[50px] cursor-pointer text-[0.9em] inline-flex items-center"
              style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}
            >
              <span className="font-bold text-[#4285f4] text-[1.1em] mr-[5px]">G</span> Google
            </button>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <div 
              className="flex items-center py-2 px-[10px] rounded-lg mb-[15px]"
              style={{
                background: 'rgba(255, 255, 255, 0.6)',
                border: '1px solid rgba(255, 255, 255, 0.7)',
                boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.1)'
              }}
            >
              <i className="text-[1.2em] mr-2 text-[#555]">📧</i>
              <input
                type="email"
                placeholder="e-mail address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 border-none bg-transparent outline-none p-0 text-base text-[#333]"
                required
              />
            </div>

            <div 
              className="flex items-center py-2 px-[10px] rounded-lg mb-[15px]"
              style={{
                background: 'rgba(255, 255, 255, 0.6)',
                border: '1px solid rgba(255, 255, 255, 0.7)',
                boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.1)'
              }}
            >
              <i className="text-[1.2em] mr-2 text-[#555]">🔑</i>
              <input
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="flex-1 border-none bg-transparent outline-none p-0 text-base text-[#333]"
                required
              />
              <a href="#" className="text-[0.8em] text-[#666] no-underline opacity-70 pl-[5px]">
                I forgot
              </a>
            </div>
          </form>

          <div className="flex justify-between items-center mt-5 mb-[15px]">
            <p className="text-[0.8em] m-0 text-[#555] leading-[1.3] w-[calc(100%-40px)]">
              By registering, you agree to the processing of your personal data.
            </p>
            <button
              onClick={handleSubmit}
              className="bg-[#333] text-white border-none py-[5px] px-[10px] rounded-[5px] cursor-pointer flex items-center justify-center h-[30px] w-[30px] transition-colors duration-300 hover:bg-[#555]"
            >
              <i className="text-[0.8em] text-white">▶</i>
            </button>
          </div>

          <a href="#" className="text-[0.8em] text-[#555] no-underline opacity-70 block mt-[5px]">
            Click here to more info
          </a>
        </div>

        <div 
          className="rounded-[10px] border w-[250px] p-[25px] h-[400px] relative overflow-hidden"
          style={{
            background: 'rgba(255, 255, 255, 0.3)',
            backdropFilter: 'blur(10px)',
            borderColor: 'rgba(255, 255, 255, 0.4)'
          }}
        >
          <div className="text-[3em] font-bold leading-none" style={{ color: 'rgba(0, 0, 0, 0.7)' }}>
            October
          </div>
          <div className="text-[2em] font-bold opacity-70" style={{ color: 'rgba(0, 0, 0, 0.7)' }}>
            2025
          </div>
          <p className="mt-[50px]">
            Monday 13<br />
            October 2025<br />
            Typography
          </p>
          <div 
            className="absolute bottom-[50px] left-1/2 -translate-x-1/2 w-[150px] h-[150px] rounded-full"
            style={{ background: 'rgba(255, 192, 203, 0.4)' }}
          />
          <p className="absolute bottom-[30px] left-[25px] text-[0.9em] opacity-60">
            StarKnife.Ru
          </p>
          <button className="absolute bottom-5 right-5 bg-white border-none py-[5px] px-[10px] rounded-[5px] cursor-pointer hover:bg-gray-50">
            Click Here &gt;
          </button>
        </div>
      </div>

      <div 
        className="absolute bottom-[50px] left-1/2 -translate-x-1/2 w-[250px] p-[15px] rounded-[10px] text-center"
        style={{
          background: 'rgba(255, 255, 255, 0.5)',
          backdropFilter: 'blur(5px)',
          border: '1px solid rgba(255, 255, 255, 0.5)'
        }}
      >
        <h3 className="m-0 mb-[5px] text-xl opacity-70">Innovation ✨</h3>
        <p className="m-0 mb-[10px] text-[0.9em]">Try the dark theme</p>
        <div className="flex justify-around">
          <button className="py-[5px] px-[15px] border-none bg-[#333] text-white rounded-[5px] cursor-pointer hover:bg-[#555]">
            Accept
          </button>
          <button className="py-[5px] px-[15px] border-none bg-white text-[#333] rounded-[5px] cursor-pointer hover:bg-gray-50">
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
