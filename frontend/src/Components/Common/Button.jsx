import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  disabled = false, 
  onClick, 
  type = 'button',
  className = '',
  icon = null
}) => {
  const baseStyles = 'font-medium rounded-lg transition-all duration-200 flex items-center justify-center gap-2 border';
  
  const variants = {
    primary: 'bg-black text-white border-black hover:bg-gray-800 disabled:bg-gray-400',
    secondary: 'bg-white text-black border-black hover:bg-gray-50 disabled:bg-gray-100',
    outline: 'bg-transparent text-black border-black hover:bg-gray-50 disabled:text-gray-400',
    danger: 'bg-red-600 text-white border-red-600 hover:bg-red-700 disabled:bg-red-300',
    success: 'bg-green-600 text-white border-green-600 hover:bg-green-700 disabled:bg-green-300'
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className} ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
    >
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
