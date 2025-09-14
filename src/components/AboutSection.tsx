import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const slideUpVariants = {
    hidden: { 
      opacity: 0, 
      y: 60 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.25, 0.25, 0.75]
      }
    }
  };

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.95,
      x: -50
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0.25, 0.75]
      }
    }
  };

  const checkItemVariants = {
    hidden: { 
      opacity: 0, 
      x: -30 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.25, 0.25, 0.75]
      }
    }
  };

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image on left */}
          <motion.div 
            className="relative"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.img
              src="https://res.cloudinary.com/db57uudtz/image/upload/v1757853433/hero-about_miim7j.png"
              alt="Professional cleaning team at work"
              className="rounded-3xl object-cover w-full h-[450px] shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div 
              className="absolute left-6 bottom-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <motion.a
                href="/about"
                className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm text-gray-800 px-6 py-3 rounded-xl shadow-lg text-sm font-semibold hover:bg-white transition-all duration-300 hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Learn more about us 
                <motion.svg 
                  width="16" 
                  height="16" 
                  fill="none" 
                  viewBox="0 0 16 16"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                >
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 12l6-6-6-6"/>
                </motion.svg>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Content on right */}
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div>
              <motion.h2 
                className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight"
                variants={slideUpVariants}
              >
                Safety, Cleanliness,<br />
                <motion.span
                  className="inline-block"
                  variants={slideUpVariants}
                >
                  Comfort Assured.
                </motion.span>
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-600 leading-relaxed max-w-xl"
                variants={slideUpVariants}
              >
                Our team of licensed and experienced workers is committed to providing prompt, professional, and courteous service, ensuring that your system is always in optimal condition.
              </motion.p>
            </div>

            <motion.div 
              className="space-y-4"
              variants={slideUpVariants}
            >
              <motion.div 
                className="flex items-center gap-4"
                variants={checkItemVariants}
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  <Check className="w-4 h-4 text-white" strokeWidth={2.5} />
                </motion.div>
                <span className="text-lg font-semibold text-gray-900">
                  Trusted and certified professionals at your service.
                </span>
              </motion.div>

              <motion.div 
                className="flex items-center gap-4"
                variants={checkItemVariants}
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  <Check className="w-4 h-4 text-white" strokeWidth={2.5} />
                </motion.div>
                <span className="text-lg font-semibold text-gray-900">
                  Safe. Reliable. Professional.
                </span>
              </motion.div>

              <motion.div 
                className="flex items-center gap-4"
                variants={checkItemVariants}
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  <Check className="w-4 h-4 text-white" strokeWidth={2.5} />
                </motion.div>
                <span className="text-lg font-semibold text-gray-900">
                  Expert care, every single time.
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;