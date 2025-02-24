import React from 'react';
import { Mail, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

export function Login() {
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-black">Welcome back</h2>
          <p className="mt-2 text-gray-600">Please sign in to your account</p>
        </div>

        <form className="space-y-6">
          <Input
            label="Email address"
            type="email"
            icon={Mail}
            placeholder="Enter your email"
          />
          <Input
            label="Password"
            type="password"
            icon={Lock}
            placeholder="Enter your password"
          />

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-black rounded"
              />
              <span className="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
            <Link to="/forgot-password" className="text-sm text-black hover:underline">
              Forgot password?
            </Link>
          </div>

          <Button variant="secondary" fullWidth>
            Sign in
          </Button>

          <p className="text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/signup" className="text-black font-semibold hover:underline">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}