import React from 'react';

interface GearLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const GearLogo: React.FC<GearLogoProps> = ({ className = '', size = 'md' }) => {
  const sizes = {
    sm: { symbol: 28, text: 'text-base' },
    md: { symbol: 36, text: 'text-xl' },
    lg: { symbol: 52, text: 'text-3xl' },
  };

  const { symbol, text } = sizes[size];

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Geometric G symbol */}
      <svg
        width={symbol}
        height={symbol}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Outer angular shape */}
        <path
          d="M8 4H32L36 8V24H20V16H28V12H8V28H20V32H4V8L8 4Z"
          fill="#087BFF"
          opacity="0.15"
        />
        {/* Main G shape - angular geometric style */}
        <path
          d="M6 6H30L34 10V22H20V18H30V10H6V30H20V26H6V6Z"
          fill="#087BFF"
          opacity="0.3"
        />
        <path
          d="M4 4H28L32 8V20H18V16H28V8H4V32H18V24H4V4Z"
          fill="none"
          stroke="#087BFF"
          strokeWidth="0.5"
          opacity="0.4"
        />
        {/* Core G mark */}
        <path
          d="M7 7H26L29 10V18H18V15H26V10H7V30H18V22H7V7Z"
          fill="#087BFF"
          opacity="0.5"
        />
        <path
          d="M5 5H24L28 9V20H16V14H24V9H5V31H16V20H5V5Z"
          fill="#0A7AFF"
        />
        {/* Highlight accent */}
        <rect x="16" y="20" width="12" height="4" fill="#168BFF" />
        <rect x="5" y="5" width="2" height="26" fill="#4DA3FF" opacity="0.6" />
        {/* Top horizontal */}
        <rect x="5" y="5" width="23" height="2" fill="#4DA3FF" opacity="0.6" />
        {/* Glow effect */}
        <path
          d="M5 5H28L28 9H5V5Z"
          fill="url(#glowGrad)"
          opacity="0.5"
        />
        <defs>
          <linearGradient id="glowGrad" x1="5" y1="5" x2="28" y2="5" gradientUnits="userSpaceOnUse">
            <stop stopColor="#87CEFF" />
            <stop offset="1" stopColor="#087BFF" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* GEAR text */}
      <span className={`font-bold tracking-wider text-gear-text ${text}`} style={{ letterSpacing: '0.12em' }}>
        GEAR
      </span>
    </div>
  );
};

export default GearLogo;
