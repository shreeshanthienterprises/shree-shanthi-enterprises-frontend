import { Link } from "react-router-dom";
import { useState } from "react";

const services = [
  {
    title: "Security Services",
    image: "https://res.cloudinary.com/db57uudtz/image/upload/v1757853925/image2_ax5lmv.jpg",
    link: "/services/security",
  },
  {
    title: "House Keeping Services",
    image: "https://res.cloudinary.com/db57uudtz/image/upload/v1757853744/image1_qkmriu.jpg",
    link: "/services/cleaning",
  },
  {
    title: "Pest Control Service",
    image: "https://res.cloudinary.com/db57uudtz/image/upload/v1757854037/image3_zcezgx.jpg",
    link: "/services/pest-control",
  },
];

const ServiceCard = ({ service, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <Link
      to={service.link}
      className="group block rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-all duration-300 ease-out hover:scale-[1.02] h-full"
      style={{ willChange: 'transform' }}
      onClick={() => {
        window.scrollTo({ top: 0, behavior: 'auto' });
      }}
    >
      <div className="relative h-full min-h-[340px] md:min-h-[380px]">
        {/* Image container with loading state */}
        <div className="absolute inset-0 w-full h-full bg-gray-200">
          {!imageLoaded && !imageError && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          {imageError ? (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-500">
              <div className="text-center">
                <svg className="w-12 h-12 mx-auto mb-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-sm">Image not available</p>
              </div>
            </div>
          ) : (
            <img
              src={service.image}
              alt={service.title}
              className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-300 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
              loading={index < 2 ? "eager" : "lazy"}
              decoding="async"
            />
          )}
        </div>

        {/* Overlay content */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-6 py-4">
          <div className="flex items-center">
            <svg 
              className="mr-2 flex-shrink-0" 
              width="20" 
              height="20" 
              fill="none" 
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <circle cx="10" cy="10" r="8" fill="#fff"/>
              <circle cx="10" cy="7" r="1" fill="#1761a0"/>
              <path d="M10 10v3.75" stroke="#1761a0" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <span className="text-white text-lg font-semibold">{service.title}</span>
          </div>
        </div>
        {/* Spacer for overlay */}
        <div className="h-full min-h-[340px] md:min-h-[380px] opacity-0 pointer-events-none select-none"></div>
      </div>
    </Link>
  );
};

const ServicesSection = () => (
  <section className="py-16 bg-gradient-to-br from-[#1761a0] to-[#2563eb]">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-4">
        <h2 className="text-white text-3xl md:text-4xl font-bold">Our Services</h2>
        <Link
          to="/services"
          className="bg-[#e94d1a] text-white px-6 py-3 rounded-[8px] font-semibold shadow-md hover:bg-[#d13c0f] transition-colors duration-200 text-base w-max focus:outline-none focus:ring-2 focus:ring-orange-300"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'auto' });
          }}
        >
          All our services
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <ServiceCard key={service.link} service={service} index={idx} />
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;