import React from "react";

const LoaderOverlay: React.FC<{ show: boolean }> = ({ show }) => {
  if (!show) return null;
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-[#eaf1fa] via-white to-[#2563eb]/10 transition-opacity duration-700 animate-fade-in">
      <div className="relative flex flex-col items-center justify-center">
        {/* Glowing animated border ring */}
        <div className="absolute top-1/2 left-1/2 w-36 h-36 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <svg className="w-full h-full animate-spin-slow" viewBox="0 0 100 100">
            <defs>
              <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#2563eb" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#e94d1a" stopOpacity="0.2" />
              </radialGradient>
            </defs>
            <circle
              cx="50"
              cy="50"
              r="44"
              fill="none"
              stroke="url(#glow)"
              strokeWidth="8"
              strokeDasharray="60 200"
              strokeLinecap="round"
              opacity="0.8"
              filter="url(#glow)"
            />
          </svg>
        </div>
        {/* Multi-layered spinner */}
        <div className="absolute top-1/2 left-1/2 w-24 h-24 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <svg className="w-full h-full animate-spin-fast" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#e94d1a"
              strokeWidth="4"
              strokeDasharray="30 120"
              strokeLinecap="round"
              opacity="0.7"
            />
          </svg>
        </div>
        {/* Logo in center with pulse and shadow */}
        <img
          src="/sse-logo-main.jpg"
          alt="SSE Logo"
          className="w-20 h-20 rounded-full shadow-2xl border-4 border-white bg-white object-contain z-10 animate-pulse-slow"
          style={{ boxShadow: '0 0 32px 0 #2563eb33, 0 4px 32px 0 #e94d1a22' }}
        />
        {/* Loading text with shimmer */}
        <div className="mt-8 flex items-center justify-center">
          <span className="text-xl font-bold text-[#2563eb] tracking-wide animate-shimmer bg-gradient-to-r from-[#2563eb] via-[#e94d1a] to-[#2563eb] bg-clip-text text-transparent">
            Loading...
          </span>
        </div>
      </div>
      <style>{`
        .animate-spin-slow {
          animation: spin 1.6s linear infinite;
        }
        .animate-spin-fast {
          animation: spin 0.9s linear infinite reverse;
        }
        .animate-pulse-slow {
          animation: pulse 1.8s cubic-bezier(0.4,0,0.6,1) infinite;
        }
        .animate-fade-in {
          animation: fadeIn 0.7s cubic-bezier(0.4,0,0.6,1);
        }
        .animate-shimmer {
          background-size: 200% 100%;
          animation: shimmer 2.2s linear infinite;
        }
        @keyframes spin {
          100% { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 32px 0 #2563eb33, 0 4px 32px 0 #e94d1a22; }
          50% { box-shadow: 0 0 48px 8px #e94d1a44, 0 4px 48px 8px #2563eb33; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </div>
  );
};

export default LoaderOverlay;