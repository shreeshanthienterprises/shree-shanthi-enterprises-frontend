import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt } from "react-icons/fa";
import { PiHouseSimpleBold, PiUserBold } from "react-icons/pi";

const steps = [
  {
    icon: <FaPhoneAlt size={32} className="text-black" />,
    title: "Call us +91-7330009993",
    description: (
      <>
        We remain available 24/7 for any<br />
        Security, cleaning & Pest Control<br />
        Services.
      </>
    ),
  },
  {
    icon: <PiHouseSimpleBold size={32} className="text-black" />,
    title: "Expert Visits Place",
    description: (
      <>
        Our experts visits place and<br />
        explains about our services
      </>
    ),
  },
  {
    icon: <PiUserBold size={32} className="text-black" />,
    title: "On Board Client",
    description: (
      <>
        Our team would clarify Queries of<br />
        client and full fill there requirements
      </>
    ),
  },
];

const ProcessSection = () => {
  // Container animation variants
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

  // Step animation variants
  const stepVariants = {
    hidden: { 
      opacity: 0, 
      y: 30
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

  // Icon container animation
  const iconVariants = {
    hidden: { 
      scale: 0.8,
      opacity: 0
    },
    visible: { 
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.2
      }
    }
  };

  // Arrow animation
  const arrowVariants = {
    hidden: { 
      opacity: 0,
      x: -20
    },
    visible: { 
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: 0.3
      }
    }
  };

  return (
    <section className="bg-[#E6EEFA] py-16">
      <div className="px-4 md:px-8">
        <motion.div
          className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 max-w-5xl mx-auto relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {steps.map((step, idx) => (
            <React.Fragment key={idx}>
              <motion.div
                className="flex flex-col items-center text-center relative max-w-[280px]"
                variants={stepVariants}
              >
                {/* Icon Container - Oval/Pill Shape */}
                <motion.div
                  className="bg-[#e94d1a] rounded-full w-28 h-16 flex items-center justify-center mb-4 shadow-lg"
                  variants={iconVariants}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                >
                  <motion.div
                    whileHover={{ 
                      scale: 1.1,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {step.icon}
                  </motion.div>
                </motion.div>

                {/* Title */}
                <motion.h3
                  className="text-lg md:text-xl font-semibold text-black mb-3"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + idx * 0.1, duration: 0.5 }}
                >
                  {step.title}
                </motion.h3>

                {/* Description */}
                <motion.p
                  className="text-gray-600 text-sm md:text-base leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + idx * 0.1, duration: 0.5 }}
                >
                  {step.description}
                </motion.p>
              </motion.div>

              {/* Arrow (except last step) */}
              {idx < steps.length - 1 && (
                <motion.div
                  className="hidden md:flex items-center justify-center"
                  variants={arrowVariants}
                >
                  <motion.svg
                    width="40"
                    height="24"
                    viewBox="0 0 40 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    animate={{
                      x: [0, 5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <path
                      d="M2 12h34m0 0l-6-6m6 6l-6 6"
                      stroke="#9CA3AF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </motion.svg>
                </motion.div>
              )}

              {/* Mobile connecting line */}
              {idx < steps.length - 1 && (
                <motion.div
                  className="block md:hidden w-1 h-8 bg-gray-300 rounded-full"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + idx * 0.1, duration: 0.4 }}
                />
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;