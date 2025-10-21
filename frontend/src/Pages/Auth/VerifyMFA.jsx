import { useState, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axiosInstance from '../../Api/axiosInstance';
import { useAuth } from '../../context/AuthContext';

export default function VerifyMFA() {
  const [otp, setOtp] = useState(new Array(6).fill(''));
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);

  const inputsRef = useRef([]);
  const location = useLocation();
  const navigate = useNavigate();
  const { login } = useAuth();

  const { userId, mfaType } = location.state || {};
  if (!userId) {
    return <div className="flex justify-center items-center h-screen text-gray-600">Invalid MFA session. Please log in again.</div>;
  }

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;
    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);
    if (element.value && index < 5) inputsRef.current[index + 1].focus();
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const newOtp = [...otp];
      newOtp[index - 1] = '';
      setOtp(newOtp);
      inputsRef.current[index - 1].focus();
    }
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await axiosInstance.post('/auth/verify-mfa/', { user_id: userId, otp: otp.join('') });
      const { token, refresh, user } = response.data;

      localStorage.setItem('token', token);
      localStorage.setItem('refresh_token', refresh);

      login(user, token);

      switch (user.role) {
        case 'advocate':
          navigate('/advocate');
          break;
        case 'admin':
          navigate('/admin');
          break;
        case 'client':
          navigate('/client');
          break;
        default:
          navigate('/');
      }
    } catch (err) {
      setError(err.response?.data?.error || 'Invalid or expired OTP');
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    setResending(true);
    setError('');
    try {
      await axiosInstance.post('/auth/resend-mfa/', { user_id: userId });
      setError('OTP resent successfully.');
    } catch {
      setError('Failed to resend OTP. Please try again.');
    } finally {
      setResending(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-gray-100 to-white flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-2 text-gray-900">Multi-Factor Authentication</h2>
        <p className="text-gray-500 text-center mb-6">Enter the 6-digit code from your {mfaType || 'Authenticator App'}.</p>

        {error && <div className="bg-red-50 border border-red-200 text-red-700 text-sm p-2 rounded-md mb-4">{error}</div>}

        <form onSubmit={handleVerify} className="space-y-6">
          <div className="flex justify-between gap-2">
            {otp.map((data, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                ref={(el) => (inputsRef.current[index] = el)}
                className="w-12 h-14 text-center text-xl rounded-xl border border-gray-300 focus:ring-2 focus:ring-black outline-none transition"
              />
            ))}
          </div>

          <button type="submit" disabled={loading} className="w-full bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-800">
            {loading ? 'Verifying...' : 'Verify OTP'}
          </button>
        </form>

        <p className="text-center text-gray-500 text-sm mt-5">
          Didn't receive the code?{' '}
          <span onClick={handleResend} className={`text-black font-medium cursor-pointer hover:underline ${resending ? 'opacity-50 cursor-not-allowed' : ''}`}>
            {resending ? 'Resending...' : 'Resend'}
          </span>
        </p>
      </div>
    </div>
  );
}
