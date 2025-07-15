import React, { useEffect, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaLinkedinIn, FaApple } from 'react-icons/fa';
import Axios from '../utils/Axios';
import SummaryApi from '../connection/SummaryApi';
import { useAuth } from '../context/AuthContext';

const AuthForm = ({ isOpen, onClose, defaultMode = 'login' }) => {
  const [isLogin, setIsLogin] = useState(defaultMode === 'login');
  const { setUser } = useAuth();

  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setData((preve) => {
      return {
        ...preve,
        [name]: value
      }
    })
  }

  const valideValue = isLogin
    ? data.email && data.password
    : data.username && data.email && data.password && data.confirmPassword;

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();

    if (data.password !== data.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await Axios({
        ...SummaryApi.register,
        data,
      });

      if (response.data.error) {
        alert(response.data.message);
      }

      if (response.data.success) {
        alert(response.data.message);
        setIsLogin(true);
        setData({
          username: "",
          email: "",
          password: "",
          confirmPassword: ""
        });
      }

    } catch (error) {
      console.log(error);
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios({
        ...SummaryApi.login,
        data: { email: data.email, password: data.password },
      });

      if (response.data.success) {
        const userData = response.data.user;
        const userToStore = {
          name: userData.username,
          image: userData.profilePic || '/default-user.png',
        };

        setUser(userToStore);

        localStorage.setItem("user", JSON.stringify(userToStore));
        alert('Login successful');
        onClose();
      } else {
        alert(response.data.message || 'Login failed');
      }
    } catch (err) {
      console.log(err);
    }
  };



  useEffect(() => {
    setIsLogin(defaultMode === 'login');
  }, [defaultMode]);

  if (!isOpen) return null;

  return (
    <div className="fixed top-22 lg:top-0 bottom-0 left-0 right-0 px-4 bg-neutral-800/70 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md px-6 py-3 relative">
        <button className="absolute top-0 right-4 text-lg cursor-pointer" onClick={onClose}>✕</button>

        <h2 className="text-2xl font-semibold text-center">
          {isLogin ? 'Welcome Back! Log In to Continue' : 'Create Your Account'}
        </h2>

        <p className="text-center text-sm text-gray-500 mb-1">
          {isLogin
            ? 'Resume your learning journey.'
            : 'Start learning by creating your free account.'}
        </p>

        {/* Social Buttons */}
        <div className="space-y-1">
          <button className="cursor-pointer w-full flex items-center justify-center border border-blue-500 rounded-md py-2 text-blue-700 hover:bg-gray-100">
            <FcGoogle className="mr-2 text-xl" />
            {isLogin ? 'Login with Google' : 'Sign Up with Google'}
          </button>
          <button className="cursor-pointer w-full flex items-center justify-center border border-blue-500 rounded-md py-2 text-blue-700 hover:bg-blue-50">
            <FaLinkedinIn className="mr-2 text-xl" />
            {isLogin ? 'Login with LinkedIn' : 'Sign Up with LinkedIn'}
          </button>
          <button className="cursor-pointer w-full flex items-center justify-center text-blue-700 border border-blue-500 rounded-md py-2 hover:bg-gray-100">
            <FaApple className="mr-2 text-xl text-black" />
            {isLogin ? 'Login with Apple' : 'Sign Up with Apple'}
          </button>
        </div>

        <h2 className="text-center my-1 text-gray-400">OR</h2>

        <form onSubmit={isLogin ? handleLoginSubmit : handleSignUpSubmit}>
          {!isLogin && (
            <div className="mb-1">
              <label className="block text-sm mb-1">User Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                name='username'
                value={data.username}
                onChange={handleChange}
              />
            </div>
          )}
          <div className="mb-1">
            <label className="block text-sm mb-1">Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              name='email'
              value={data.email}
              onChange={handleChange}
            />

          </div>

          <div className="mb-1">
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              placeholder="********"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              name='password'
              value={data.password}
              onChange={handleChange}
            />
          </div>

          {!isLogin && (
            <>
              <div className="mb-1">
                <label className="block text-sm mb-1">Confirm Password</label>
                <input
                  type="password"
                  placeholder="********"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  name='confirmPassword'
                  value={data.confirmPassword}
                  onChange={handleChange}
                />
              </div>

              <label className="inline-flex items-start mb-1">
                <input type="checkbox" className="h-4 w-4 mt-1 text-blue-600 border-gray-300 rounded cursor-pointer" />
                <span className="ml-2 text-gray-700 text-sm">
                  By clicking ‘Sign up’, you agree to our{' '}
                  <span className="text-blue-500">Terms of Service</span> and{' '}
                  <span className="text-blue-500">Privacy Policy</span>.
                </span>
              </label>
            </>
          )}

          <button disabled={!valideValue} className={`${valideValue ? "bg-[#296AD2]" : "bg-gray-500"} text-white w-full px-4 py-2 rounded-lg font-medium cursor-pointer`}>
            {isLogin ? 'Log In' : 'Sign Up'}
          </button>

          <p className="mt-1 text-sm text-center">
            {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
            <button type="button" className="text-blue-600 hover:underline cursor-pointer" onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? 'Sign Up' : 'Log In'}
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
