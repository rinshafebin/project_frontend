import { useState, useEffect } from 'react';
import { Mail, Lock } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import axiosInstance from '../../Api/axiosInstance';
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

  const redirectByRole = (role) => {
    switch (role) {
      case 'advocate':
        navigate('/advocate');
        break;
      case 'client':
        navigate('/client');
        break;
      case 'admin':
        navigate('/admin');
        break;
      default:
        navigate('/');
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axiosInstance.post('/auth/login/', { email, password });
      const { token, refresh, user, message, user_id, mfa_type } = response.data;

      if (message === 'MFA required') {
        navigate('/verify-mfa', { state: { userId: user_id, mfaType: mfa_type } });
        return;
      }

      localStorage.setItem('refresh_token', refresh);
      login(user, token);

      if ((user.role === 'admin' || user.role === 'advocate') && !user.mfa_enabled) {
        navigate('/enable-mfa', { state: { user } });
        return;
      }

      redirectByRole(user.role);
    } catch (err) {
      const errorMessage =
        err.response?.data?.message ||
        err.response?.data?.detail ||
        err.response?.data?.error ||
        'Login failed. Please check your credentials.';
      setError(errorMessage);
    }
  };

  const handleGoogleLoginSuccess = async (credentialResponse) => {
    setError('');
    try {
      const response = await axiosInstance.post('/auth/google-login/', {
        token: credentialResponse.credential,
      });

      const { token, refresh, user } = response.data;

      localStorage.setItem('refresh_token', refresh);
      login(user, token);
      redirectByRole(user.role);
    } catch {
      setError('Google login failed. Please try again.');
    }
  };

  const handleGoogleLoginError = () => {
    setError('Google login failed. Please try again.');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-10 transition-transform hover:scale-[1.02] duration-300">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Welcome Back</h1>
            <p className="text-gray-500 text-sm">Login with your email and password</p>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 text-sm p-3 rounded-lg mb-5 shadow-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-black focus:border-black outline-none transition-all hover:border-gray-400 text-sm"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-black focus:border-black outline-none transition-all hover:border-gray-400 text-sm"
              />
            </div>

            <div className="text-right">
              <Link
                to="/forgot-password"
                className="text-sm text-blue-600 hover:text-blue-700 hover:underline transition-colors"
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-4 rounded-2xl font-semibold hover:bg-gray-900 transition-colors shadow-lg hover:shadow-xl text-sm"
            >
              Login
            </button>
          </form>

          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-3 text-sm text-gray-400">or continue with</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <div className="flex justify-center">
            <div className="w-full flex justify-center">
              <div className="max-w-xs">
                <GoogleLogin
                  onSuccess={handleGoogleLoginSuccess}
                  onError={handleGoogleLoginError}
                  useOneTap
                  theme="outline"
                  text="continue_with"
                  width="320"
                  shape="pill"
                />
              </div>
            </div>
          </div>

          <div className="text-center mt-6">
            <p className="text-sm text-gray-500 mb-1">Don't have an account?</p>
            <Link
              to="/register"
              className="text-sm text-black font-semibold hover:underline"
            >
              Create a new account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
