import { useState } from 'react';
import { Mail, Lock, Key } from 'lucide-react';
import createAxiosInstance from '../../Api/axiosInstance'; // ✅ new import
import { Link, useNavigate } from 'react-router-dom';

export default function ForgotPasswordPage() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const authApi = createAxiosInstance('auth');

  const handleSendOTP = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await authApi.post('/auth/forget-password/', { email });
      setStep(2);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to send OTP.');
    }
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await authApi.post('/auth/reset-password/', { email, otp, new_password: password });
      setStep(1);
      setEmail('');
      setOtp('');
      setPassword('');
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.message || 'OTP verification failed.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-10 transition-transform hover:scale-[1.02] duration-300">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Reset Password</h1>
            <p className="text-gray-500 text-sm">
              {step === 1 ? 'Enter your email to receive OTP' : 'Enter OTP and new password'}
            </p>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 text-sm p-3 rounded-lg mb-5 shadow-sm">
              {error}
            </div>
          )}

          {step === 1 ? (
            <form onSubmit={handleSendOTP} className="space-y-5">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  required
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-black focus:border-black outline-none transition-all hover:border-gray-400 text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-4 rounded-2xl font-semibold hover:bg-gray-900 transition-colors shadow-lg hover:shadow-xl text-sm"
              >
                Send OTP
              </button>
            </form>
          ) : (
            <form onSubmit={handleVerifyOTP} className="space-y-5">
              <div className="relative">
                <Key className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter OTP"
                  required
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-black focus:border-black outline-none transition-all hover:border-gray-400 text-sm"
                />
              </div>

              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="New Password"
                  required
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-black focus:border-black outline-none transition-all hover:border-gray-400 text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-4 rounded-2xl font-semibold hover:bg-gray-900 transition-colors shadow-lg hover:shadow-xl text-sm"
              >
                Reset Password
              </button>
            </form>
          )}

          <div className="text-center mt-6">
            <Link to="/login" className="text-sm text-black font-semibold hover:underline">
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
