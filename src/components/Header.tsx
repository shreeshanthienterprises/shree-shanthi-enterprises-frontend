import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when clicking outside or on links
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('header')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 ease-in-out ${
          isScrolled
            ? "bg-gradient-to-r from-white/95 via-blue-50/90 to-blue-100/90 backdrop-blur-lg shadow-xl py-2 md:py-3"
            : "bg-transparent py-3 md:py-4"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between">
            {/* Logo with responsive sizing */}
            <div className="flex items-center flex-shrink-0">
              <a href="/" className="block transition-transform duration-300 hover:scale-105">
                {!isScrolled ? (
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-3 shadow-lg border border-white/40 transition-all duration-300 hover:shadow-xl">
                    <img
                      src="/sse-logo.png"
                      alt="SSE Logo"
                      className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 object-contain transition-all duration-300"
                    />
                  </div>
                ) : (
                  <div className="transition-all duration-300">
                    <img
                      src="/sse-logo.png"
                      alt="SSE Logo"
                      className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 object-contain"
                    />
                  </div>
                )}
              </a>
            </div>

            {/* Desktop Navigation - Glassmorphism container when not scrolled */}
            {!isScrolled && (
              <nav className="hidden lg:flex flex-1 justify-center px-4">
                <div
                  className="flex bg-white/20 backdrop-blur-2xl rounded-3xl shadow-2xl px-6 py-3 space-x-8 items-center border border-white/30 transition-all duration-300 hover:bg-white/25 hover:shadow-3xl"
                  style={{
                    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37), inset 0 1px 0 0 rgba(255, 255, 255, 0.2)",
                    maxWidth: "600px",
                  }}
                >
                  <a
                    href="/"
                    className="font-semibold text-lg text-white hover:text-gray-300 transition-colors duration-300 px-4 py-2 rounded-xl"
                  >
                    Home
                  </a>
                  <a
                    href="/about"
                    className="font-semibold text-lg text-white hover:text-gray-300 transition-colors duration-300 px-4 py-2 rounded-xl"
                  >
                    About
                  </a>
                  <a
                    href="/services"
                    className="font-semibold text-lg text-white hover:text-gray-300 transition-colors duration-300 px-4 py-2 rounded-xl"
                  >
                    Services
                  </a>
                </div>
              </nav>
            )}

            {/* Desktop Navigation - Clean links when scrolled */}
            {isScrolled && (
              <nav className="hidden lg:flex flex-1 justify-center px-4">
                <div className="flex space-x-8 items-center">
                  <a
                    href="/"
                    className="px-4 py-2 font-semibold text-lg rounded-lg bg-transparent text-gray-700 hover:text-gray-500 transition-colors duration-300"
                  >
                    Home
                  </a>
                  <a
                    href="/about"
                    className="px-4 py-2 font-semibold text-lg rounded-lg bg-transparent text-gray-700 hover:text-gray-500 transition-colors duration-300"
                  >
                    About
                  </a>
                  <a
                    href="/services"
                    className="px-4 py-2 font-semibold text-lg rounded-lg bg-transparent text-gray-700 hover:text-gray-500 transition-colors duration-300"
                  >
                    Services
                  </a>
                </div>
              </nav>
            )}

            {/* Desktop tablet navigation for md screens */}
            <nav className="hidden md:flex lg:hidden flex-1 justify-center px-2">
              <div className="flex space-x-4 items-center">
                <a
                  href="/"
                  className={`px-3 py-2 font-medium text-sm rounded-lg transition-all duration-300 ${
                    !isScrolled 
                      ? "text-white hover:text-blue-100 hover:bg-white/10" 
                      : "text-gray-700 hover:text-blue-600 hover:bg-blue-50/50"
                  }`}
                >
                  Home
                </a>
                <a
                  href="/about"
                  className={`px-3 py-2 font-medium text-sm rounded-lg transition-all duration-300 ${
                    !isScrolled 
                      ? "text-white hover:text-blue-100 hover:bg-white/10" 
                      : "text-gray-700 hover:text-blue-600 hover:bg-blue-50/50"
                  }`}
                >
                  About
                </a>
                <a
                  href="/services"
                  className={`px-3 py-2 font-medium text-sm rounded-lg transition-all duration-300 ${
                    !isScrolled 
                      ? "text-white hover:text-blue-100 hover:bg-white/10" 
                      : "text-gray-700 hover:text-blue-600 hover:bg-blue-50/50"
                  }`}
                >
                  Services
                </a>
              </div>
            </nav>

            {/* Right side - Contact CTA and Mobile Menu */}
            <div className="flex items-center space-x-3 flex-shrink-0">
              {/* Desktop Contact Button */}
              <div className="hidden lg:flex">
                <Button
                  asChild
                  className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-base"
                >
                  <a href="/contact">Contact Us</a>
                </Button>
              </div>

              {/* Tablet Contact Button */}
              <div className="hidden md:flex lg:hidden">
                <Button
                  asChild
                  className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-medium px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-sm"
                >
                  <a href="/contact">Contact</a>
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <button
                className={`md:hidden p-2 rounded-xl transition-all duration-300 hover:scale-110 ${
                  isScrolled 
                    ? "text-gray-700 hover:bg-gray-100 bg-white/50" 
                    : "text-white hover:bg-white/20 bg-white/10 backdrop-blur-sm"
                }`}
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
              >
                <div className="relative w-6 h-6">
                  <Menu 
                    className={`w-6 h-6 absolute transition-all duration-300 ${
                      isMobileMenuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
                    }`} 
                  />
                  <X 
                    className={`w-6 h-6 absolute transition-all duration-300 ${
                      isMobileMenuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
                    }`} 
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Enhanced with smooth animations */}
        <div className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 ease-in-out transform ${
          isMobileMenuOpen 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}>
          <div className="bg-white/95 backdrop-blur-lg shadow-2xl border-t border-gray-200/50 mx-4 mt-2 rounded-2xl overflow-hidden">
            <nav className="flex flex-col">
              <a
                href="/"
                className="text-gray-800 font-medium text-lg hover:text-red-500 hover:bg-gray-50/80 transition-all duration-300 px-6 py-4 border-b border-gray-100/50 relative overflow-hidden group"
                onClick={toggleMobileMenu}
              >
                <span className="relative z-10">Home</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a
                href="/about"
                className="text-gray-800 font-medium text-lg hover:text-red-500 hover:bg-gray-50/80 transition-all duration-300 px-6 py-4 border-b border-gray-100/50 relative overflow-hidden group"
                onClick={toggleMobileMenu}
              >
                <span className="relative z-10">About</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a
                href="/services"
                className="text-gray-800 font-medium text-lg hover:text-red-500 hover:bg-gray-50/80 transition-all duration-300 px-6 py-4 border-b border-gray-100/50 relative overflow-hidden group"
                onClick={toggleMobileMenu}
              >
                <span className="relative z-10">Services</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>

              {/* Mobile Contact Section */}
              <div className="px-6 py-4 bg-gradient-to-r from-gray-50/50 to-blue-50/30">
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] text-base"
                  onClick={toggleMobileMenu}
                >
                  <a href="/contact">Contact Us</a>
                </Button>
              </div>
            </nav>
          </div>
        </div>

        {/* Mobile menu overlay */}
        {isMobileMenuOpen && (
          <div 
            className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm -z-10"
            onClick={toggleMobileMenu}
          />
        )}
      </header>
    </>
  );
};

export default Header;