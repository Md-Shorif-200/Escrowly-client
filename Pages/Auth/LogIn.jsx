"use client"
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash, FaEnvelope, FaLock, FaArrowRight, FaSpinner } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';

export default function LogIn() {

  const [showPassword, setShowPassword] = useState(false);

  

  const {
    register,
    handleSubmit,
    formState: { errors,isSubmitting },
    reset
  } = useForm();

  const onSubmit = async (data) => {
 
    

  };


  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  return (
    <div className="min-h-screen flex">

      <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:max-w-md">
   
          <div className="mb-8">
        
            <h2 className="text-3xl font-bold text-gray-900">Welcome back!</h2>
   
          </div>

          {/* Social Login Buttons */}
          <div className="space-y-3 mb-6">
            <button className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg shadow-sm bg-white hover:bg-gray-50 transition duration-150">
              <FcGoogle className="h-5 w-5" />
              <span className="ml-3 text-sm font-medium text-gray-700">Continue with Google</span>
            </button>
            
            <button className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg shadow-sm bg-white hover:bg-gray-50 transition duration-150">
              <FaGithub className="h-5 w-5" />
              <span className="ml-3 text-sm font-medium text-gray-700">Continue with GitHub</span>
            </button>
          </div>

          {/* Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">Or continue with email</span>
            </div>
          </div>

          {/* Login Form */}
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  id="email"
                  type="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Please enter a valid email address'
                    }
                  })}
                  className={`block w-full pl-10 pr-3 py-3 border ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  } rounded-lg focus:ring-2 focus:ring-[#10B981] focus:border-transparent transition duration-150`}
                  placeholder="name@example.com"
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  {...register('password', {
                    required: 'Password is required',
                    pattern: {
                      value: passwordPattern,
                      message: 'Password must meet all requirements'
                    }
                  })}
                  className={`block w-full pl-10 pr-10 py-3 border ${
                    errors.password ? 'border-red-500' : 'border-gray-300'
                  } rounded-lg focus:ring-2 focus:ring-[#10B981] focus:border-transparent transition duration-150`}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FaEyeSlash className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                  ) : (
                    <FaEye className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                  )}
                </button>
              </div>
              {errors.password && (
                <div className="mt-1">
                  <p className="text-xs text-red-600">{errors.password.message}</p>
                  <ul className="mt-1 text-xs text-gray-500 list-disc list-inside">
                    <li>Minimum 8 characters</li>
                    <li>One uppercase & lowercase letter</li>
                    <li>One number & special character</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-end">
           
              <a href="#" className="text-sm font-medium text-[#10B981] hover:text-green-600">
                Forgot password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-[#10B981] hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#10B981] transition duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <FaSpinner></FaSpinner>

                  Signing in...
                </>
              ) : (
                <>
                  Log in
                  <FaArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </button>
          </form>

          {/* Sign Up Link */}
          <p className="mt-6 text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <Link href="/register" className="font-medium text-[#10B981] hover:text-green-600">
              Creat Account
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side - Image Section */}
      <div className="hidden lg:block relative w-0 flex-1">
        <div className="absolute inset-0 bg-gradient-to-br from-[#10B981] to-green-600">
          {/* Overlay Pattern */}
          <div className="absolute inset-0 bg-black opacity-10"></div>
          
          {/* Content on Image */}
          <div className="relative h-full flex flex-col justify-center items-center px-12 text-white">
            {/* You can replace this with an actual image */}
            <div className="max-w-md text-center">
              <h3 className="text-4xl font-bold mb-6">Start your journey</h3>
              <p className="text-lg mb-8 text-green-50">
                Join thousands of users who are already managing their projects efficiently with our platform.
              </p>
              
              {/* Feature List */}
              <div className="space-y-4 text-left">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-sm">✓</span>
                  </div>
                  <span>Secure & Fast Authentication</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-sm">✓</span>
                  </div>
                  <span>24/7 Customer Support</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-sm">✓</span>
                  </div>
                  <span>Advanced Security Features</span>
                </div>
              </div>
            </div>
            
            {/* Optional: Add an actual image */}
            {/* <img
              className="absolute inset-0 w-full h-full object-cover opacity-20"
              src="/your-image-path.jpg"
              alt="Login background"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}