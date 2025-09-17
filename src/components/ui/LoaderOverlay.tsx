import React from "react";

const LoaderOverlay: React.FC<{ show: boolean }> = ({ show }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/95 backdrop-blur-sm">
      <div className="relative flex items-center justify-center">
        
        {/* Rotating blue ring */}
        <div className="absolute w-28 h-28 rounded-full border-4 border-transparent border-t-blue-600 animate-spin-slow"></div>

        {/* Center logo */}
        <div className="relative w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center overflow-hidden">
          <img
            src="/sse-logo-main.jpg"
            alt="SSE Logo"
            className="w-14 h-14 rounded-full object-cover"
          />
        </div>
      </div>

      {/* Custom animation */}
      <style jsx>{`
        .animate-spin-slow {
          animation: spin 2s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default LoaderOverlay;
