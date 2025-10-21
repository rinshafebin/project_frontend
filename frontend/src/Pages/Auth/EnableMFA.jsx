// import { useState } from 'react';
// import { Shield, Key } from 'lucide-react';
// import axiosInstance from '../../api/axiosInstance';
// import { useNavigate } from 'react-router-dom';

// export default function EnableMFA() {
//   const [step, setStep] = useState(1); // 1 = show QR, 2 = verify code
//   const [otp, setOtp] = useState('');
//   const [qrCodeUrl, setQrCodeUrl] = useState('');
//   const [message, setMessage] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleGenerateMFA = async () => {
//     setMessage('');
//     setError('');
//     try {
//       // Request backend to generate MFA secret and QR code
//       const res = await axiosInstance.post('/auth/enable-mfa/');
//       setQrCodeUrl(res.data.qr_code_url);
//       setStep(2);
//     } catch (err) {
//       setError(err.response?.data?.message || 'Failed to generate MFA setup.');
//     }
//   };

//   const handleVerifyMFA = async (e) => {
//     e.preventDefault();
//     setMessage('');
//     setError('');
//     try {
//       await axiosInstance.post('/auth/mfa/verify/', { otp });
//       setMessage('MFA enabled successfully!');
//       setStep(1);
//       setOtp('');
//       // Navigate to dashboard or login page
//       navigate('/dashboard');
//     } catch (err) {
//       setError(err.response?.data?.message || 'Invalid OTP. Try again.');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
//       <div className="w-full max-w-md bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
//         <div className="text-center mb-8">
//           <Shield className="w-12 h-12 mx-auto text-black mb-4" />
//           <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Enable Multi-Factor Authentication</h1>
//           <p className="text-gray-500 text-sm">
//             {step === 1 ? 'Generate a QR code for your authenticator app' : 'Enter the 6-digit code from your app'}
//           </p>
//         </div>

//         {message && (
//           <div className="bg-green-50 border border-green-200 text-green-700 text-sm p-3 rounded-lg mb-5 shadow-sm">
//             {message}
//           </div>
//         )}

//         {error && (
//           <div className="bg-red-50 border border-red-200 text-red-700 text-sm p-3 rounded-lg mb-5 shadow-sm">
//             {error}
//           </div>
//         )}

//         {step === 1 && (
//           <div className="space-y-5 text-center">
//             {qrCodeUrl ? (
//               <img src={qrCodeUrl} alt="MFA QR Code" className="mx-auto mb-4 w-48 h-48" />
//             ) : (
//               <p className="text-gray-600 mb-4">Click below to generate your MFA setup.</p>
//             )}
//             <button
//               onClick={handleGenerateMFA}
//               className="w-full bg-black text-white py-4 rounded-2xl font-semibold hover:bg-gray-900 transition-colors shadow-lg hover:shadow-xl text-sm"
//             >
//               Generate QR Code
//             </button>
//           </div>
//         )}

//         {step === 2 && (
//           <form onSubmit={handleVerifyMFA} className="space-y-5">
//             <div className="relative">
//               <Key className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
//               <input
//                 type="text"
//                 value={otp}
//                 onChange={(e) => setOtp(e.target.value)}
//                 placeholder="Enter 6-digit code"
//                 required
//                 className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-black focus:border-black outline-none transition-all hover:border-gray-400 text-sm"
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-black text-white py-4 rounded-2xl font-semibold hover:bg-gray-900 transition-colors shadow-lg hover:shadow-xl text-sm"
//             >
//               Verify & Enable MFA
//             </button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// }
