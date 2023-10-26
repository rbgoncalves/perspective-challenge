import React from 'react';

type ButtonProps = {
    onClick: () => void;
    disabled?: boolean;
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties 
  };

export const Button = ({ onClick, disabled = false, children, className, style }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`py-2 px-4 rounded-lg focus:outline-none ${
        disabled
          ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
          : 'bg-blue-500 hover:bg-blue-700 text-white font-semibold'
      } ${className}`}
      style={style}
    >
      {children}
    </button>
  );
};