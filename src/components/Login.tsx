"use client"
import ModalWrapper from '@/heplers/ModalWrapper'
import React, { useEffect, useState } from 'react'
import { Eye, EyeOff, Mail, Lock, Facebook, User } from 'lucide-react'
import { useAuth } from '@/hooks/authHook';
import { useRouter } from 'next/navigation';
import { SuccessToast } from '@/heplers/ToastHelper';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store/store';

export default function Login() {
    const [isModalOpen, setIsModalOpen] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('kk@gmail.com')
    const [isRegister, setIsregister] = useState(false)
    const [password, setPassword] = useState('1234Mohin;')
    const { login, loginLoading, register, registerLoading } = useAuth()
    const { isAuthenticated } = useSelector((state: RootState) => state.auth)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const result = await login(email, password)
            SuccessToast("logged in successfull")
            setIsModalOpen(false)
        } catch (error) {
            console.error('Login failed:', error)
        }
    }
    const handleRegisterSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        console.log(fullName, email, password)
        try {
            const result = await register(fullName, email, password)

            if (result.success) {
                SuccessToast("registration successfull")
                setIsModalOpen(false)
            }
        } catch (error: any) {
            // setError(error?.data?.message || 'Registration failed. Please try again.')
        }
    }

    useEffect(() => {
        if (isAuthenticated) {
            setIsModalOpen(false)
        }
    }, [isAuthenticated])
    return (
        <ModalWrapper
            title={isRegister ? "Register" : "Login"}
            open={isModalOpen}
            onOpenChange={setIsModalOpen}
        >
            <div className="space-y-6">
                {
                    isRegister ?
                        <form onSubmit={handleRegisterSubmit}>
                            {/* fullname Input */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Full Name</label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <input
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                        required
                                        type="text"
                                        placeholder="Enter your Full Name"
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>
                            </div>
                            {/* Email Input */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Email</label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <input
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        type="email"
                                        placeholder="Enter your email"
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>
                            </div>


                            {/* Password Input */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Password</label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <input
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Enter your password"
                                        className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                    >
                                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                    </button>
                                </div>
                            </div>

                            {/* Remember Me & Forget Password */}
                            <div className="flex my-4 justify-between items-center">
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={rememberMe}
                                        onChange={(e) => setRememberMe(e.target.checked)}
                                        className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                                    />
                                    <span className="text-sm text-gray-700">Remember me</span>
                                </label>
                                <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                                    Forget Password?
                                </button>
                            </div>

                            {/* Register Button */}
                            <button className="w-full bg-[#FF6A1A] text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
                                Register
                            </button>
                        </form>
                        :
                        // login form
                        <form onSubmit={handleSubmit}>
                            {/* Email Input */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Email</label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <input
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        type="email"
                                        placeholder="Enter your email"
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>
                            </div>

                            {/* Password Input */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Password</label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <input
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Enter your password"
                                        className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                    >
                                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                    </button>
                                </div>
                            </div>

                            {/* Remember Me & Forget Password */}
                            <div className="flex my-4 justify-between items-center">
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={rememberMe}
                                        onChange={(e) => setRememberMe(e.target.checked)}
                                        className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                                    />
                                    <span className="text-sm text-gray-700">Remember me</span>
                                </label>
                                <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                                    Forget Password?
                                </button>
                            </div>

                            {/* Login Button */}
                            <button className="w-full bg-[#FF6A1A] text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
                                {loginLoading ? 'Logging in...' : 'Login'}
                            </button>
                        </form>
                }

                {/* Divider */}
                <div className="relative flex items-center justify-center">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span className="flex-shrink mx-4 text-sm text-gray-500">Or Sign in with</span>
                    <div className="flex-grow border-t border-gray-300"></div>
                </div>

                {/* Social Login Buttons */}
                <div className="flex gap-4">
                    <button className="flex-1 flex items-center justify-center gap-2 py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                        </svg>
                        <span className="text-sm font-medium">Google</span>
                    </button>

                    <button className="flex-1 flex items-center justify-center gap-2 py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                        <Facebook className="w-5 h-5 text-blue-600" />
                        <span className="text-sm font-medium">Facebook</span>
                    </button>
                </div>

                {/* Sign Up Link */}
                <div className="text-center text-sm text-gray-600">
                    {!isRegister ? `Don't have an account?` : ""}
                    <button onClick={() => setIsregister(!isRegister)} className="text-blue-600 hover:text-blue-800 font-medium">
                        {!isRegister ? "Sign Up" : "Login"}
                    </button>
                </div>
            </div>
        </ModalWrapper>
    )
}