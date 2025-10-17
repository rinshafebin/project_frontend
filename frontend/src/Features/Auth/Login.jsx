import { useState } from 'react';
import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Function to simulate login
    const handleLogin = () => {
        console.log('Logging in with:', email, password);
        // Here you can call your backend API using Axios
    };

    // Function to simulate Google login
    const handleGoogleLogin = () => {
        console.log('Google login initiated');
    };

    return (
        <div className="min-h-screen bg-white flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <div className="bg-white rounded-2xl shadow-2xl border-2 border-gray-100 p-8">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <Mail className="w-10 h-10 text-black" />
                            <span className="text-3xl font-bold text-black">CaseBridge</span>
                        </div>
                        <h1 className="text-2xl font-bold text-black mb-2">Welcome Back</h1>
                        <p className="text-gray-600">Enter your email and password to login</p>
                    </div>

                    {/* Email & Password form */}
                    <div className="mb-4">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:border-black transition-all outline-none hover:border-gray-300 mb-3"
                        />
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            className="w-full pl-4 pr-4 py-3.5 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:border-black transition-all outline-none hover:border-gray-300"
                        />
                    </div>

                    {/* Login button */}
                    <button
                        onClick={handleLogin}
                        className="w-full bg-black text-white py-3.5 rounded-lg font-semibold hover:bg-gray-800 transition-all flex items-center justify-center shadow-lg mb-4"
                    >
                        Login
                    </button>

                    {/* Divider for Google login */}
                    <div className="relative my-4">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-200"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-4 bg-white text-gray-500">or continue with</span>
                        </div>
                    </div>

                    {/* Google login button */}
                    <button
                        onClick={handleGoogleLogin}
                        className="w-full bg-white border-2 border-gray-200 text-black py-3.5 rounded-lg font-semibold hover:border-black hover:shadow-lg transition-all flex items-center justify-center"
                    >
                        <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                            <path fill="#FBBC04" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                        </svg>
                        Sign in with Google
                    </button>

                    {/* Register link */}
                    <div className="text-center mt-6">
                        <p className="text-sm text-gray-600 mb-1">Don't have an account?</p>
                        <Link
                            to="/register"
                            className="text-sm text-black font-semibold hover:underline"
                        >
                            Create a new account to get started
                        </Link>
                    </div>

                    {/*
                        // OTP section is commented out for now
                        {!otpSent && ... }
                    */}
                </div>
            </div>
        </div>
    );
}
