import React from 'react';

interface KaleidoscopeLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

const KaleidoscopeLogo: React.FC<KaleidoscopeLogoProps> = ({
  className = '',
  size = 'md',
  showText = true
}) => {
  // Height-based sizing to fit menu bar (PNG logo includes text)
  const sizeMap = {
    sm: { height: 24 },
    md: { height: 48 },  // Increased by 20% from 40px for better visibility
    lg: { height: 56 },
    xl: { height: 80 }
  };

  const { height } = sizeMap[size];

  return (
    <div className={`flex items-center ${className}`}>
      {/* Horizontal Kaleidoscope Logo PNG */}
      <img
        src="/Kaleidoscope_logo_Horz.png"
        alt="Kaleidoscope"
        height={height}
        className="h-auto flex-shrink-0"
        style={{
          height: `${height}px`,
          width: 'auto',
          filter: 'brightness(0) saturate(100%) invert(25%) sepia(91%) saturate(3084%) hue-rotate(251deg) brightness(89%) contrast(102%)'
        }}
      />
    </div>
  );
};

export default KaleidoscopeLogo;