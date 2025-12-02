import React from 'react';
import { Loader2 } from 'lucide-react';

const Button = React.forwardRef(
  (
    {
      className = '',
      variant = 'default',
      size = 'default',
      loading = false,
      disabled = false,
      children,
      ...props
    },
    ref,
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 touch-manipulation button-press focus-ring';

    const variants = {
      default:
        'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg hover:scale-105 active:scale-95',
      outline:
        'border-2 border-gray-300 bg-transparent text-gray-700 hover:border-blue-600 hover:text-blue-600 hover:shadow-md hover:scale-105 active:scale-95',
      ghost: 'text-gray-700 hover:bg-gray-100 hover:scale-105 active:scale-95',
    };

    const sizes = {
      default: 'h-10 px-4 py-2 min-h-[40px]',
      sm: 'h-8 px-3 text-sm min-h-[32px]',
      lg: 'h-12 px-6 sm:px-8 text-base sm:text-lg min-h-[48px]',
    };

    const isDisabled = disabled || loading;

    return (
      <button
        className={`${baseStyles} ${variants[variant]} ${
          sizes[size]
        } ${className} ${isDisabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
        ref={ref}
        disabled={isDisabled}
        {...props}
      >
        {loading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';

export { Button };
