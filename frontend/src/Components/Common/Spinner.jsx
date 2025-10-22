import React from 'react';

const Spinner = ({ 
  size = 'md', 
  color = 'black',
  fullScreen = false,
  text = null 
}) => {
  const sizes = {
    sm: 'w-4 h-4 border-2',
    md: 'w-8 h-8 border-3',
    lg: 'w-12 h-12 border-4',
    xl: 'w-16 h-16 border-4'
  };

  const colors = {
    black: 'border-black border-t-transparent',
    white: 'border-white border-t-transparent',
    gray: 'border-gray-400 border-t-transparent'
  };

  const spinner = (
    <div className="flex flex-col items-center gap-3">
      <div 
        className={`
          ${sizes[size]} ${colors[color]}
          border-solid rounded-full animate-spin
        `}
      />
      {text && <p className="text-sm text-black">{text}</p>}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-white bg-opacity-75 flex items-center justify-center z-50">
        {spinner}
      </div>
    );
  }

  return spinner;
};

export default Spinner;
