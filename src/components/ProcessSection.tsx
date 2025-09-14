import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
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
  const [animationCycle, setAnimationCycle] = useState(0);

  useEffect(() => {
    const totalAnimationTime = steps.length * 2000; // 2s delay between cards
    const waitTime = 5000; // 10s wait after all cards are shown
    const totalCycleTime = totalAnimationTime + waitTime;

    const interval = setInterval(() => {
      setAnimationCycle(prev => prev + 1);
    }, totalCycleTime);

    return () => clearInterval(interval);
  }, []);

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  // Step animation variants with continuous cycle (use function for dynamic delay)
  const stepVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8
    },
    visible: (custom) => ({
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeInOut',
        delay: custom * 1 // 2 second delay between each card
      }
    })
  };

  // Icon container animation (use function for dynamic delay)
  const iconVariants = {
    hidden: { 
      scale: 0,
      rotate: -180,
      opacity: 0
    },
    visible: (custom) => ({
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeInOut',
        delay: (custom * 2) + 0.3
      }
    })
  };

  // Arrow animation
  const getArrowVariants = (index) => ({
    hidden: { 
      opacity: 0,
      x: -30,
      scale: 0.5
    },
    visible: { 
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: (index * 2) + 0.5
      }
    }
  });

  // Text animation variants
  const getTextVariants = (index, additionalDelay = 0) => ({
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        delay: (index * 2) + 0.4 + additionalDelay, 
        duration: 0.5 
      }
    }
  });

  return (
    <section className="bg-[#E6EEFA] py-16">
      <div className="px-4 md:px-8">
        <motion.div
          className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 max-w-5xl mx-auto relative"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={animationCycle} // This forces re-animation on each cycle
        >
          {steps.map((step, idx) => (
            <React.Fragment key={`${animationCycle}-${idx}`}>
              <motion.div
                className="flex flex-col items-center text-center relative max-w-[280px]"
                variants={stepVariants}
                initial="hidden"
                animate="visible"
                custom={idx}
              >
                {/* Icon Container - Oval/Pill Shape */}
                <motion.div
                  className="bg-[#e94d1a] rounded-full w-28 h-16 flex items-center justify-center mb-4 shadow-lg"
                  variants={iconVariants}
                  initial="hidden"
                  animate="visible"
                  custom={idx}
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
                    animate={{
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: (idx * 2) + 1
                    }}
                  >
                    {step.icon}
                  </motion.div>
                </motion.div>

                {/* Title */}
                <motion.h3
                  className="text-lg md:text-xl font-semibold text-black mb-3"
                  variants={getTextVariants(idx)}
                  initial="hidden"
                  animate="visible"
                >
                  {step.title}
                </motion.h3>

                {/* Description */}
                <motion.p
                  className="text-gray-600 text-sm md:text-base leading-relaxed"
                  variants={getTextVariants(idx, 0.1)}
                  initial="hidden"
                  animate="visible"
                >
                  {step.description}
                </motion.p>
              </motion.div>

              {/* Arrow (except last step) */}
              {idx < steps.length - 1 && (
                <motion.div
                  className="hidden md:flex items-center justify-center"
                  variants={getArrowVariants(idx)}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.svg
                    width="40"
                    height="24"
                    viewBox="0 0 40 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    animate={{
                      x: [0, 8, 0],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: (idx * 2) + 1
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
                  initial={{ scaleY: 0, opacity: 0 }}
                  animate={{ scaleY: 1, opacity: 1 }}
                  transition={{ delay: (idx * 2) + 0.6, duration: 0.4 }}
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