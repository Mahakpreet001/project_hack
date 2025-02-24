import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: LucideIcon;
}

export function Input({ 
  label, 
  icon: Icon,
  className = '',
  ...props 
}: InputProps) {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium">
          {label}
        </label>
      )}
      <div className="flex items-center border border-gray-300 rounded-lg p-3 bg-white">
        {Icon && <Icon className="text-gray-400 w-5 h-5" />}
        <input 
          className={`${Icon ? 'ml-3' : ''} w-full focus:outline-none text-black ${className}`}
          {...props}
        />
      </div>
    </div>
  );
}