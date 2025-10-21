import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axiosInstance from '../../api/axiosInstance';

export default function EnableMFA() {
  const [qrCode, setQrCode] = useState(null);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = location.state || {};

  if (!user) {
    navigate('/login');
    return null;
  }

  const handleEnableMFA = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.post('/auth/enable-mfa/');
      setQrCode(response.data.qr_code);
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || 'Failed to enable MFA. Try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSkip = () => {
    if (user.role === 'admin') navigate('/admin');
    else if (user.role === 'advocate') navigate('/advocate');
    else navigate('/client');
  };

  const handleVerify = () => {
    // redirect to verify page after scanning QR
    navigate('/verify-mfa', { state: { userId: user.id, mfaType: 'TOTP' } });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4">Enable MFA</h1>
        <p className="mb-6 text-gray-600">Enhance your account security by enabling Multi-Factor Authentication.</p>

        {!qrCode ? (
          <div className="flex flex-col gap-4">
            <button
              onClick={handleEnableMFA}
              disabled={loading}
              className="w-full py-3 bg-black text-white font-semibold rounded-xl hover:bg-gray-800 disabled:opacity-50"
            >
              {loading ? 'Enabling...' : 'Enable MFA'}
            </button>
            <button
              onClick={handleSkip}
              className="w-full py-3 border border-gray-400 text-gray-700 font-semibold rounded-xl hover:bg-gray-100"
            >
              Skip
            </button>
          </div>
        ) : (
          <div>
            <p className="mb-4 font-medium text-green-700">{message}</p>
            <img src={qrCode} alt="QR Code" className="mx-auto mb-4" />
            <p className="text-gray-600 mb-4">Scan this QR code in your authenticator app.</p>
            <button
              onClick={handleVerify}
              className="w-full py-3 bg-black text-white font-semibold rounded-xl hover:bg-gray-800"
            >
              Verify OTP
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
