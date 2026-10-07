import React from 'react';

interface SignatureProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  text?: string;
  showTail?: boolean;
}

export const Signature: React.FC<SignatureProps> = ({
  className = '',
  size = 'md',
  text = 'Santosh',
  showTail = true,
}) => {
  const sizeConfig = {
    xs: { text: 'text-xl sm:text-2xl', tail: 'w-6 h-[2px]' },
    sm: { text: 'text-2xl sm:text-3xl', tail: 'w-8 h-[2px]' },
    md: { text: 'text-3xl sm:text-4xl lg:text-5xl', tail: 'w-12 h-[2.5px]' },
    lg: { text: 'text-4xl sm:text-5xl lg:text-6xl', tail: 'w-16 h-[3px]' },
    xl: { text: 'text-5xl sm:text-6xl lg:text-7xl', tail: 'w-24 h-[3.5px]' },
  };

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      {/* SVG Signature for precision rendering matching the uploaded signature */}
      <svg
        viewBox="0 0 250 75"
        className="w-auto h-10 sm:h-12 lg:h-14 text-neutral-900 dark:text-neutral-100 drop-shadow-xs transition-transform duration-300 hover:scale-105"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sigGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.95" />
            <stop offset="60%" stopColor="currentColor" stopOpacity="1" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.85" />
          </linearGradient>
        </defs>

        {/* Handcrafted cursive script using Great Vibes / Alex Brush typography */}
        <text
          x="10"
          y="50"
          fontFamily="'Great Vibes', 'Alex Brush', 'Dancing Script', cursive"
          fontSize="52"
          fontWeight="400"
          fill="url(#sigGradient)"
          letterSpacing="1"
        >
          {text}
        </text>

        {/* Signature terminal flourish stroke matching santosh_signature_9_normal */}
        {showTail && (
          <path
            d="M 170 48 Q 200 47, 238 46"
            stroke="currentColor"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
        )}
      </svg>
    </div>
  );
};

