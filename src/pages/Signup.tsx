import React from 'react';
import { Mail, Lock, User, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

export function Signup() {
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-black">Create an account</h2>
          <p className="mt-2 text-gray-600">Join thousands of riders and drivers</p>
        </div>

        <form className="space-y-6">
          <Input
            label="Full Name"
            type="text"
            icon={User}
            placeholder="Enter your full name"
          />
          <Input
            label="Email address"
            type="email"
            icon={Mail}
            placeholder="Enter your email"
          />
          <Input
            label="Phone Number"
            type="tel"
            icon={Phone}
            placeholder="Enter your phone number"
          />
          <Input
            label="Password"
            type="password"
            icon={Lock}
            placeholder="Create a password"
          />

          <div className="flex items-center">
            <input
              type="checkbox"
              className="h-4 w-4 text-black rounded"
            />
            <span className="ml-2 text-sm text-gray-600">
              I agree to the{' '}
              <Link to="/terms" className="text-black hover:underline">Terms of Service</Link>
              {' '}and{' '}
              <Link to="/privacy" className="text-black hover:underline">Privacy Policy</Link>
            </span>
          </div>

          <Button variant="secondary" fullWidth>
            Create Account
          </Button>

          <p className="text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-black font-semibold hover:underline">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}