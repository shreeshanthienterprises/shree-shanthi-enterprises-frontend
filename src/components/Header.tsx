import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

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

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 pointer-events-auto ${isScrolled
            ? "bg-gradient-to-r from-white via-[#2563eb]/20 to-[#2563eb]/40 backdrop-blur-md shadow-lg py-2"
            : "bg-transparent"
          }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center w-full justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/">
                {!isScrolled ? (
                  <div className="bg-white rounded-xl p-2 shadow-md flex items-center justify-center">
                    <img
                      src="/sse-logo.png"
                      alt="SSE Logo"
                      className="w-28 h-28 object-contain"
                    />
                  </div>
                ) : (
                  <img
                    src="/sse-logo.png"
                    alt="SSE Logo"
                    className="w-28 h-28 object-contain"
                  />
                )}
              </a>
            </div>

            {/* Desktop Navigation - initial container style */}
            {!isScrolled && (
              <nav className="hidden md:flex flex-1 justify-center">
                <div
                  className="flex bg-white/30 backdrop-blur-xl rounded-2xl shadow-2xl px-4 py-2 space-x-10 items-center border border-white/40 mx-auto"
                  style={{
                    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                    maxWidth: "600px",
                  }}
                >
                  <a
                    href="/"
                    className="font-semibold text-xl text-white hover:text-[#bfcbe6] transition-colors px-6 py-3 rounded-lg"
                  >
                    Home
                  </a>
                  <a
                    href="/about"
                    className="font-semibold text-xl text-white hover:text-[#bfcbe6] transition-colors px-6 py-3 rounded-lg"
                  >
                    About
                  </a>
                  <a
                    href="/services"
                    className="font-semibold text-xl text-white hover:text-[#bfcbe6] transition-colors px-6 py-3 rounded-lg"
                  >
                    Services
                  </a>
                </div>
              </nav>
            )}

            {/* Desktop Navigation - header links when scrolled */}
            {isScrolled && (
              <nav className="hidden md:flex flex-1 justify-center">
                <div
                  className="flex space-x-6 items-center mx-auto"
                  style={{ maxWidth: "600px" }}
                >
                  <a
                    href="/"
                    className="px-5 py-2 font-semibold text-xl rounded-md bg-transparent text-white hover:text-[#bfcbe6] transition-colors"
                  >
                    Home
                  </a>
                  <a
                    href="/about"
                    className="px-5 py-2 font-semibold text-xl rounded-md bg-transparent text-white hover:text-[#bfcbe6] transition-colors"
                  >
                    About
                  </a>
                  <a
                    href="/services"
                    className="px-5 py-2 font-semibold text-xl rounded-md bg-transparent text-white hover:text-[#bfcbe6] transition-colors"
                  >
                    Services
                  </a>

                </div>
              </nav>
            )}

            {/* Contact CTA (desktop) + Mobile Button */}
            <div className="flex items-center space-x-6">
              {/* Desktop Contact Button */}
              <div className="hidden lg:flex">
                <Button
                  asChild
                  className="bg-red-500 hover:bg-red-600 text-white font-medium px-6 py-8 rounded-[8px] shadow-md text-lg"
                >
                  <a href="/contact">Contact</a>
                </Button>
              </div>

              {/* Mobile Menu Button */}
                <button
                  className={`md:hidden p-2 rounded-lg ${isScrolled ? "text-white" : "text-white"
                    }`}
                  onClick={toggleMobileMenu}
                  aria-label="Toggle mobile menu"
                >
                  {isMobileMenuOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Clean White Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg rounded-b-2xl z-40 animate-slideDown">
            <nav className="flex flex-col space-y-4 px-6 py-6">
              <a
                href="/"
                className="text-blue-900 font-medium text-lg hover:text-red-500 transition"
                onClick={toggleMobileMenu}
              >
                Home
              </a>
              <a
                href="/about"
                className="text-blue-900 font-medium text-lg hover:text-red-500 transition"
                onClick={toggleMobileMenu}
              >
                About
              </a>
              <a
                href="/services"
                className="text-blue-900 font-medium text-lg hover:text-red-500 transition"
                onClick={toggleMobileMenu}
              >
                Services
              </a>

              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-gray-200">
                <Button
                  asChild
                  className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-2 rounded-md"
                  onClick={toggleMobileMenu}
                >
                  <a href="/contact">Contact Us</a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
