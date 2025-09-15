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
  const sizeMap = {
    sm: { width: 24, height: 14, textSize: 'text-sm' },
    md: { width: 40, height: 22, textSize: 'text-lg' },
    lg: { width: 64, height: 36, textSize: 'text-2xl' },
    xl: { width: 1000, height: 562, textSize: 'text-4xl' }
  };

  const { width, height, textSize } = sizeMap[size];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Official Kaleidoscope Logo SVG */}
      <img
        src="/Kaleidscope.svg"
        alt="Kaleidoscope"
        width={width}
        height={height}
        className="flex-shrink-0"
        style={{ maxWidth: 'none' }}
      />

      {showText && (
        <span className={`font-brand-primary font-bold ${textSize} text-white lowercase tracking-wide`}>
          kaleidoscope
        </span>
      )}
    </div>
  );
};

export default KaleidoscopeLogo;