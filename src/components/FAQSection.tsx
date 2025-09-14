import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "What makes SSE different from other service providers?",
    answer:
      "SSE delivers reliable, professional, and tailored solutions with a customer-first approach.",
  },
  {
    question: "Are SSE's pest control methods safe for children and pets?",
    answer:
      "Yes, our pest control methods are designed to be safe for both children and pets when used as directed. We prioritize the health and safety of your family and environment.",
  },
  {
    question: "Can I book housekeeping or security services on a regular basis?",
    answer:
      "Absolutely! You can schedule our housekeeping or security services on a one-time, weekly, monthly, or custom recurring basis to suit your needs.",
  },
  {
    question: "Does SSE provide services for both homes and businesses?",
    answer:
      "Yes, SSE offers a full range of services for both residential and commercial clients, ensuring quality and reliability for every property type.",
  },
];

const FAQItem = ({ faq, index, isOpen, onToggle }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div
      className={`bg-white rounded-2xl border border-gray-200 transition-all duration-300 ease-out cursor-pointer overflow-hidden ${
        isOpen 
          ? "shadow-xl scale-[1.02] border-blue-200" 
          : "shadow-sm hover:shadow-lg hover:scale-[1.01]"
      }`}
      onClick={onToggle}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onToggle();
        }
      }}
      aria-expanded={isOpen}
    >
      <div className="px-8 py-6">
        <div className="flex items-center justify-between w-full">
          <span className="font-semibold text-gray-900 text-xl md:text-2xl pr-4 leading-tight">
            {faq.question}
          </span>
          <div className="flex-shrink-0 ml-4">
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 ${
                isOpen 
                  ? "bg-blue-100 text-blue-600 rotate-180" 
                  : "bg-gray-100 text-gray-400 hover:bg-gray-200"
              }`}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="transition-transform duration-300"
              >
                <path
                  d="M4 6L8 10L12 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated content area */}
      <div
        style={{ height: `${height}px` }}
        className="transition-all duration-300 ease-out overflow-hidden"
      >
        <div ref={contentRef} className="px-8 pb-6">
          <div className={`text-gray-600 text-base md:text-lg leading-relaxed transition-opacity duration-300 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}>
            {faq.answer}
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState(0);

  const handleToggle = (idx) => {
    setOpenIdx(idx === openIdx ? -1 : idx);
  };

  return (
    <section className="py-20 bg-[#faf9f7] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-orange-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: Title & Contact */}
          <div className="flex flex-col items-start justify-center md:sticky md:top-8">
            <div className="mb-8">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight text-left">
                <span className="inline-block animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                  Your questions,
                </span>
                <br />
                <span className="inline-block animate-fade-in-up text-blue-600" style={{ animationDelay: '0.2s' }}>
                  answered
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-md text-left animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                Answers to the most common questions our customers have. If you don't find the information you're looking for, feel free to contact us.
              </p>
            </div>
            
            <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Link
                to="/contact"
                className="group inline-flex items-center bg-[#F44E40] hover:bg-[#e13c2e] text-white text-lg font-semibold px-10 py-5 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95"
                style={{ boxShadow: "0 4px 24px 0 rgba(244,78,64,0.15)" }}
              >
                <span>Contact Us</span>
                <svg
                  className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
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
          </div>
          
          {/* Right: FAQ List */}
          <div className="flex flex-col gap-6">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="animate-fade-in-up"
                style={{ animationDelay: `${0.1 * (idx + 5)}s` }}
              >
                <FAQItem
                  faq={faq}
                  index={idx}
                  isOpen={openIdx === idx}
                  onToggle={() => handleToggle(idx)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
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
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default FAQSection;