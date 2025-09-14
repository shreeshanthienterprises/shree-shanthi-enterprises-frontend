import { useState, memo, useCallback, useMemo } from "react";
import img1 from "@/assets/image1.jpg";
import img2 from "@/assets/image2.jpg";
import img3 from "@/assets/image3.jpg";
import img4 from "@/assets/image4.jpg";
import img5 from "@/assets/image5.jpg";
import img6 from "@/assets/image6.jpg";
import logo from "@/assets/SSE logo-01.png";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

// Move images array outside component
const images = [img1, img2, img3, img4, img5, img6];

// Enhanced image component with modern styling
const ImageThumbnail = memo(({ src, index, isVisible }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const shouldLoad = isVisible || index < 3;
  const handleLoad = useCallback(() => setLoaded(true), []);
  const handleError = useCallback(() => setError(true), []);

  return (
    <div className="group relative w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
      {/* Loading State */}
      {shouldLoad && !loaded && !error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
          <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      {/* Error State */}
      {error && shouldLoad ? (
        <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-50">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 002 2v12a2 2 0 002 2z" />
          </svg>
        </div>
      ) : shouldLoad ? (
        <img
          src={src}
          alt={`Service ${index + 1}`}
          className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={handleLoad}
          onError={handleError}
          loading={index < 3 ? "eager" : "lazy"}
          decoding="async"
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse"></div>
      )}
      
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
});

ImageThumbnail.displayName = 'ImageThumbnail';

// Enhanced image grid with modern layout
const ImageGrid = memo(() => {
  const [isVisible, setIsVisible] = useState(false);

  const gridRef = useCallback((node) => {
    if (node && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(node);
    } else if (node) {
      setIsVisible(true);
    }
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div ref={gridRef} className="grid grid-cols-3 gap-3">
        {images.map((img, idx) => (
          <ImageThumbnail 
            key={idx} 
            src={img} 
            index={idx} 
            isVisible={isVisible}
          />
        ))}
      </div>
    </div>
  );
});

ImageGrid.displayName = 'ImageGrid';

// Enhanced social links
const SocialLinks = memo(() => (
  <div className="flex space-x-4 mt-4">
    {[
      { Icon: FaFacebookF, color: "hover:text-blue-600", bg: "hover:bg-blue-50", label: "Facebook" },
      { Icon: FaTwitter, color: "hover:text-blue-400", bg: "hover:bg-blue-50", label: "Twitter" },
      { Icon: FaInstagram, color: "hover:text-pink-500", bg: "hover:bg-pink-50", label: "Instagram" },
      { Icon: FaYoutube, color: "hover:text-red-500", bg: "hover:bg-red-50", label: "YouTube" }
    ].map(({ Icon, color, bg, label }) => (
      <a
        key={label}
        href="#"
        aria-label={label}
        className={`p-3 rounded-full text-gray-600 ${color} ${bg} transition-all duration-300 hover:scale-110 hover:shadow-md border border-gray-200 hover:border-transparent`}
      >
        <Icon className="text-lg" />
      </a>
    ))}
  </div>
));

SocialLinks.displayName = 'SocialLinks';


type AddressCardProps = {
  title: string;
  address1: string;
  address2: string;
};

const AddressCard = memo(({ title, address1, address2 }: AddressCardProps) => {
  return (
    <div className="space-y-3 text-left w-full">
      <h4 className="font-bold text-2xl text-gray-900">{title}</h4>
      <div className="space-y-1 text-gray-600">
        <div className="text-lg">{address1}</div>
        <div className="text-lg">{address2}</div>
      </div>
    </div>
  );
});

AddressCard.displayName = 'AddressCard';

const Footer = () => {
  const addressData = useMemo(() => [
    {
      title: "Hyderabad",
      address1: "Rajendra Nagar, Hyderabad",
      address2: "Ranga Reddy 500005",
      searchQuery: "Rajendra Nagar, Hyderabad, Ranga Reddy 500005"
    }
  ], []);

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white border-t border-gray-200">
      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Left: Brand Section */}
          <div className="flex flex-col items-start gap-6">
            <div>
              <img 
                src={logo} 
                alt="SSE Logo" 
                className="w-36 h-36 object-contain"
                loading="eager"
                decoding="async"
              />
            </div>
            <div className="text-gray-700 text-lg leading-relaxed">
              Reliable Security,<br />Housekeeping, and Pest<br />Control Services
            </div>
            <SocialLinks />
          </div>
          {/* Center: Image Grid */}
          <div className="flex flex-col items-center justify-center">
            <ImageGrid />
          </div>
          {/* Right: Address Card */}
          <div className="flex flex-col items-start w-full">
            {addressData.map((addr, idx) => (
              <AddressCard
                key={idx}
                title={addr.title}
                address1={addr.address1}
                address2={addr.address2}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 bg-white">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="text-gray-600 text-lg">
              © 2025 - Sree Shanthi Enterprise
            </div>
            
            {/* Navigation */}
            <nav className="flex space-x-8">
              {['Home', 'About', 'Contact', 'Services'].map((link) => (
                <a
                  key={link}
                  href={`/${link.toLowerCase()}`}
                  className="text-gray-700 hover:text-blue-600 font-semibold text-lg transition-colors duration-200 relative group"
                >
                  {link}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;