interface ZebraLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export default function ZebraLogo({ size = 'lg', className = '' }: ZebraLogoProps) {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32',
    xl: 'w-48 h-48'
  };

  return (
    <div className={`${sizeClasses[size]} ${className} relative`}>
      <div className="w-full h-full animate-spin-slow">
        <div className="w-full h-full rounded-full border-4 border-transparent bg-gradient-to-r from-green-400 via-yellow-400 to-purple-400 p-1 animate-pulse">
          <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
            <svg
              viewBox="0 0 100 100"
              className="w-3/4 h-3/4 text-green-400"
              style={{
                filter: 'drop-shadow(0 0 10px currentColor)',
              }}
            >
              {/* Zebra head silhouette */}
              <path
                d="M50 10 C35 10, 25 20, 25 35 C25 45, 30 55, 35 65 L40 75 L45 85 L50 90 L55 85 L60 75 L65 65 C70 55, 75 45, 75 35 C75 20, 65 10, 50 10 Z"
                fill="currentColor"
                className="animate-pulse"
              />
              {/* Zebra stripes */}
              <path
                d="M30 25 L70 25 M28 30 L72 30 M26 35 L74 35 M28 40 L72 40 M30 45 L70 45 M32 50 L68 50 M35 55 L65 55"
                stroke="black"
                strokeWidth="2"
                fill="none"
              />
              {/* Eyes */}
              <circle cx="42" cy="30" r="2" fill="black" />
              <circle cx="58" cy="30" r="2" fill="black" />
              {/* Nose */}
              <ellipse cx="50" cy="40" rx="3" ry="2" fill="black" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400/20 via-yellow-400/20 to-purple-400/20 animate-ping" />
    </div>
  );
}