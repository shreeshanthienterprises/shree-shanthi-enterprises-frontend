import React from "react";
import { motion } from "framer-motion";
import { Shield, Sparkles, Bug, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8
    }
  }
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.3
    }
  }
};

const Services = () => {
  const services = [
    {
      id: 1,
      icon: Shield,
      image: "/services-1.png",
      description: "Professional security solutions with 24/7 monitoring and trained personnel.",
      features: ["24/7 Security Personnel", "CCTV Monitoring", "Access Control", "Emergency Response"]
    },
    {
      id: 2,
      icon: Sparkles,
      image: "/services-2.png",
      description: "Complete cleaning solutions for homes and commercial spaces.",
      features: ["Regular House Cleaning", "Deep Cleaning", "Office Maintenance", "Eco-Friendly Products"]
    },
    {
      id: 3,
      icon: Bug,
      image: "/services-3.png",
      description: "Effective pest management with safe and sustainable methods.",
      features: ["Residential Treatment", "Commercial Solutions", "Preventive Care", "Safe Methods"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section - Full Screen */}
      <section className="relative min-h-screen h-screen w-full flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
          style={{
            backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 100%), url('/service-hero.png')"
          }}
        />
        <div className="relative z-20 w-full flex flex-col items-center justify-center h-full text-center px-4">
          <motion.h1
            className="text-6xl md:text-8xl font-bold text-white mb-8 drop-shadow-lg"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            Services
          </motion.h1>
          <motion.p
            className="text-lg md:text-2xl text-white text-center max-w-4xl mx-auto mb-8 drop-shadow leading-relaxed"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            At SSE, our certified professionals bring expertise and dedication to deliver top-quality pest control, housekeeping, and security services.
          </motion.p>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
              variants={fadeUp}
            >
              Our Services
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              variants={fadeUp}
            >
              Professional solutions tailored to meet your security, cleaning, and pest control needs
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                variants={fadeUp}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt="Service image"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-6 text-white">
                    <service.icon className="w-8 h-8 mb-2" />
                  </div>
                </div>
                
                <div className="p-8">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <a
                    href={
                      index === 0
                        ? "/services/security"
                        : index === 1
                        ? "/services/cleaning"
                        : "/services/pest-control"
                    }
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 group"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5 transform transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Banner - Same as About Page */}
  <section className="py-16 relative" style={{ background: 'linear-gradient(135deg, #184FA1 0%, #184FA1 100%)' }}>
        <div className="absolute inset-0 z-0 pointer-events-none" style={{
          backgroundImage: `repeating-linear-gradient(0deg, rgba(255,255,255,0.07) 0px, rgba(255,255,255,0.07) 1px, transparent 1px, transparent 80px), repeating-linear-gradient(90deg, rgba(255,255,255,0.07) 0px, rgba(255,255,255,0.07) 1px, transparent 1px, transparent 80px)`
        }} />
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between relative z-10" style={{ minHeight: '180px' }}>
          <motion.h2
            className="text-white text-3xl md:text-4xl font-semibold mb-8 lg:mb-0"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
          >
            Need a SSE People fast?
          </motion.h2>
          <motion.a
            href="tel:7674073004"
            className="bg-[#F44E40] hover:bg-[#e13c2e] text-white text-lg font-semibold px-10 py-5 rounded-xl shadow-lg transition-all hover:shadow-xl hover:-translate-y-1"
            style={{ marginLeft: 'auto' }}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Call Us 76740 73004
          </motion.a>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default Services;