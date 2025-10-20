import { useState, useEffect } from 'react';
import { Mail, Lock } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import axiosInstance from '../../api/axiosInstance';
import { useAuth } from '../../context/AuthContext';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  useEffect(() => {
    localStorage.removeItem('token');
    localStorage.removeItem('refresh_token');
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    console.log("Login attempt for:", email);
     
    try {
      const response = await axiosInstance.post('/auth/login/', { email, password });
      console.log('Login response:', response.data);

      const { token, refresh, user, role, message, user_id, mfa_type } = response.data;
      
      if (message === "MFA required") {
        navigate('/mfa-verify', { 
          state: { userId: user_id, mfaType: mfa_type }
        });
        return;
      }

      localStorage.setItem('refresh_token', refresh);

      login(user, token);

      if (role === 'advocate') {
        navigate('/advocate/dashboard');
      } else if (role === 'client') {
        navigate('/client/dashboard');
      } else if (role === 'admin') {
        navigate('/admin/dashboard');
      } else {
        navigate('/dashboard');
      }

    } catch (err) {
      console.error('Login error:', err);
      const errorMessage = err.response?.data?.message 
        || err.response?.data?.detail 
        || err.response?.data?.error
        || 'Login failed. Please check your credentials.';
      setError(errorMessage);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 transition-transform hover:scale-[1.01] duration-300">

          <div className="text-center mb-8">
            {/* <div className="flex items-center justify-center gap-3 mb-4">
              <Mail className="w-10 h-10 text-black" />
              <span className="text-3xl font-extrabold text-black">CaseBridge</span>
            </div> */}
            <h1 className="text-2xl font-bold text-gray-900 mb-1">Welcome Back</h1>
            <p className="text-gray-500">Login with your email and password</p>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 text-sm p-2 rounded-md mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
                className="w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-black outline-none transition-all hover:border-gray-400"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                className="w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-black outline-none transition-all hover:border-gray-400"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3.5 rounded-xl font-semibold hover:bg-gray-800 transition-colors shadow-md hover:shadow-lg"
            >
              Login
            </button>
          </form>

          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-3 text-sm text-gray-400">or continue with</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <button
            onClick={() => console.log('Google login clicked')}
            className="w-full bg-white border border-gray-300 text-black py-3.5 rounded-xl font-semibold hover:border-black hover:shadow-lg transition-all flex items-center justify-center gap-3 mb-4"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC04" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Sign in with Google
          </button>

          <div className="text-center mt-6">
            <p className="text-sm text-gray-500 mb-1">Don't have an account?</p>
            <Link to="/register" className="text-sm text-black font-semibold hover:underline">
              Create a new account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
