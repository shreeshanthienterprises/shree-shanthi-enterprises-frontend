import { useState } from "react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Security Services",
    image: "https://res.cloudinary.com/ds4stvfr3/image/upload/v1758108640/5f6ed60d-fd65-437b-bedc-585387acfcd5_biucff.png",
    link: "/services/security",
    description: "Professional security solutions for your peace of mind",
    icon: "🛡"
  },
  {
    title: "House Keeping Services",
    image: "https://res.cloudinary.com/ds4stvfr3/image/upload/v1758108966/generated-image_on169t.png",
    link: "/services/cleaning",
    description: "Comprehensive cleaning services to keep your space pristine",
    icon: "✨"
  },
  {
    title: "Pest Control Service",
    image: "https://res.cloudinary.com/ds4stvfr3/image/upload/v1758109282/e884d3c2-7ebf-45c5-8e17-cf50885b8664_nxw2gw.png",
    link: "/services/pest-control",
    description: "Effective pest management for a healthier environment",
    icon: "🐛"
  },
];

const ServiceCard = ({ service, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group perspective-1000"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        to={service.link}
        className="block relative rounded-3xl overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-500 ease-out transform hover:scale-[1.03] hover:-translate-y-2 h-full"
        style={{ 
          willChange: 'transform',
        }}
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'auto' });
        }}
      >
        <div className="relative h-full min-h-[420px] md:min-h-[460px]">
          {/* Full card image background */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl">
            {!imageLoaded && !imageError && (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
                <div className="relative">
                  <div className="w-12 h-12 border-3 border-[#1761a0] border-t-transparent rounded-full animate-spin"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 border-2 border-[#e94d1a] border-t-transparent rounded-full animate-spin animate-reverse" style={{animationDuration: '0.8s'}}></div>
                </div>
              </div>
            )}
            {imageError ? (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 text-gray-500">
                <div className="text-center p-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#1761a0] to-[#2563eb] flex items-center justify-center">
                    <span className="text-2xl">{service.icon}</span>
                  </div>
                  <p className="text-sm font-medium text-gray-600">Service Preview</p>
                </div>
              </div>
            ) : (
              <img
                src={service.image}
                alt={service.title}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                  imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                } ${isHovered ? 'scale-110' : 'scale-100'}`}
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
                loading={index < 2 ? "eager" : "lazy"}
                decoding="async"
              />
            )}
            {/* Dynamic overlay gradient for better text readability */}
            <div className={`absolute inset-0 bg-gradient-to-t transition-all duration-500 ${
              isHovered 
                ? 'from-black/80 via-black/40 to-black/20' 
                : 'from-black/70 via-black/30 to-black/10'
            }`}></div>
          </div>

          {/* Content overlay positioned at bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
            <div className="mb-3">
              <div className="flex items-center justify-end mb-3">
                {/* Animated arrow */}
                <div className={`transform transition-all duration-300 ${isHovered ? 'translate-x-1 scale-110' : ''}`}>
                  <svg 
                    className="w-6 h-6 text-white" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M13 7l5 5m0 0l-5 5m5-5H6" 
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#e94d1a] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-white/90 text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              {/* Enhanced CTA button */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#e94d1a] uppercase tracking-wider">
                  Learn More
                </span>
                <div className="flex space-x-1">
                  {[...Array(3)].map((_, i) => (
                    <div 
                      key={i} 
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        isHovered 
                          ? 'bg-[#e94d1a] animate-pulse' 
                          : 'bg-white/50'
                      }`}
                      style={{animationDelay: `${i * 0.1}s`}}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Shine effect on hover */}
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-full group-hover:-translate-x-1/2 transition-transform duration-1000 ease-out`}></div>
      </Link>
    </div>
  );
};

const ServicesSection = () => (
  <section className="relative py-20 overflow-hidden">
    {/* Enhanced background with animated elements */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1761a0] to-[#2563eb]"></div>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(233,77,26,0.1)_0%,transparent_50%)]"></div>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.05)_0%,transparent_50%)]"></div>
    {/* Animated background shapes */}
    <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse"></div>
    <div className="absolute bottom-10 right-10 w-48 h-48 bg-[#e94d1a]/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
    <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/3 rounded-full blur-lg animate-pulse" style={{animationDelay: '2s'}}></div>
    <div className="relative container mx-auto px-4">
      {/* Enhanced header section */}
      <div className="text-center mb-16">
        <h2 className="text-white text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text">
          Our Services
        </h2>
        <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
          Discover our comprehensive range of professional services designed to meet all your needs with excellence and reliability.
        </p>
        <Link
          to="/services"
          className="group inline-flex items-center space-x-3 bg-gradient-to-r from-[#e94d1a] to-[#dc2626] text-white px-8 py-4 rounded-2xl font-semibold shadow-2xl hover:shadow-[#e94d1a]/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-[#e94d1a]/30"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'auto' });
          }}
        >
          <span className="text-lg">Explore All Services</span>
          <svg 
            className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M17 8l4 4m0 0l-4 4m4-4H3" 
            />
          </svg>
        </Link>
      </div>
      {/* Enhanced services grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
        {services.map((service, idx) => (
          <div 
            key={service.link} 
            className="opacity-0 animate-fade-in-up"
            style={{
              animationDelay: `${idx * 0.2}s`,
              animationFillMode: 'forwards'
            }}
          >
            <ServiceCard service={service} index={idx} />
          </div>
        ))}
      </div>
    </div>
    <style>{`
      @keyframes fade-in-up {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      .animate-fade-in-up {
        animation: fade-in-up 0.8s ease-out;
      }
      .animate-reverse {
        animation-direction: reverse;
      }
      .perspective-1000 {
        perspective: 1000px;
      }
      .border-3 {
        border-width: 3px;
      }
    `}</style>
  </section>
);

export default ServicesSection;