// components/Loading.tsx
import React from 'react';

interface LoadingProps {
  fullScreen?: boolean;
  text?: string;
  spinnerSize?: 'sm' | 'md' | 'lg';
}

const Loading = ({
  fullScreen = false,
  text = 'Loading...',
  spinnerSize = 'md',
}: LoadingProps) => {
  const sizeClasses = {
    sm: 'h-6 w-6 border-2',
    md: 'h-8 w-8 border-2',
    lg: 'h-12 w-12 border-4',
  };

  return (
    <div className={`flex flex-col items-center justify-center gap-2 ${fullScreen ? 'h-screen' : 'py-8'}`}>
      <div
        className={`${sizeClasses[spinnerSize]} textAnchor="middle" items-center animate-spin rounded-full border-t-transparent border-blue-500` }
        aria-label="Loading spinner"
      >🤖</div>
      {text && <span className="text-gray-600 dark:text-gray-300">{text}</span>}
    </div>
  );
};

export default Loading;