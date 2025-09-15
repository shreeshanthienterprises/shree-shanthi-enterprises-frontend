import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// animation variants
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.5, delayChildren: 0.3 },
  },
};

const framerTitle = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1.0 } },
};

const taglineVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
};

const imageVariant = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.9 } },
};

const subtitleVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const ctaVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section
      className="relative min-h-screen w-full overflow-hidden pt-32 md:pt-28"
      style={{ background: 'linear-gradient(135deg, #184FA1 0%, #1856b6 100%)' }}
    >
      {/* subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, rgba(255,255,255,0.07) 0px, rgba(255,255,255,0.07) 1px, transparent 1px, transparent 80px),
                            repeating-linear-gradient(90deg, rgba(255,255,255,0.07) 0px, rgba(255,255,255,0.07) 1px, transparent 1px, transparent 80px)`,
        }}
      />

      <motion.div
        className="container mx-auto px-4 flex flex-col md:flex-row md:items-center gap-10 w-full h-full relative z-10"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* TEXT */}
        <div className="flex-1 max-w-2xl flex flex-col items-center md:items-start justify-center mx-auto pt-2 pb-2 text-center md:text-left min-h-[calc(100vh-340px)] md:min-h-[50vh]">
          {/* SSE Text Logo */}
          <motion.img
            src="/sse-text.png"
            alt="SSE Text Logo"
            className="w-full max-w-[550px] mb-4"
            variants={framerTitle}
          />

          {/* Service tagline */}
          <motion.h2
            className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold mb-6"
            variants={taglineVariant}
          >
            Safety, Hygiene, <br /> Pest Control.
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            className="text-[#cbe6fa] text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-xl mx-auto md:mx-0"
            variants={subtitleVariant}
          >
            Since 2020, SSE has been committed to providing reliable and customized solutions that exceed expectations.
          </motion.p>

          {/* CTA button */}
          <motion.div
            className="w-full flex justify-center md:justify-start items-center mt-4 sm:mt-6"
            variants={ctaVariant}
          >
            <button
              className="bg-[#F64F36] hover:bg-[#e63b2b] text-white font-semibold text-lg px-12 py-5 rounded-2xl shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl active:scale-95 mx-auto md:mx-0"
              onClick={() => {
                navigate('/services');
                window.scrollTo({ top: 0, behavior: 'auto' });
              }}
            >
              Explore our services
            </button>
          </motion.div>
        </div>

        {/* IMAGE */}
        <motion.div
          className="flex-1 w-full flex justify-center md:justify-end items-end md:items-center pb-0"
          style={{ minHeight: '0', marginTop: '0' }}
          variants={imageVariant}
        >
          <img
            src="/hero-img.png"
            alt="Security Guard"
            className="w-full max-w-[420px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] object-contain object-bottom"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
