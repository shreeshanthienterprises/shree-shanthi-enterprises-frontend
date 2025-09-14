import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProcessSection from "@/components/ProcessSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import securityImg from "@/assets/image1.jpg";
import cleaningImg from "@/assets/image2.jpg";
import pestImg from "@/assets/image3.jpg";
import ServicesSection from "@/components/ServicesSection";
import FAQSection from "@/components/FAQSection";
import mapImg from "@/assets/maps.png";

import { motion, easeOut } from "framer-motion";
import MapSection from "@/components/MapSection";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: easeOut
    }
  })
};

const services = [
  {
    title: "Security Services",
    image: securityImg,
    link: "/security-services",
  },
  {
    title: "House Keeping Servicer",
    image: cleaningImg,
    link: "/cleaning-services",
  },
  {
    title: "Pest Control Service",
    image: pestImg,
    link: "/pest-control",
  },
];

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ProcessSection />
        <AboutSection />
        <ServicesSection />
        {/* Contact Banner */}
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
              className="bg-[#F44E40] hover:bg-[#e13c2e] text-white text-lg font-semibold px-10 py-5 rounded-xl shadow-lg transition-all"
              style={{ marginLeft: 'auto' }}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
            >
              Call Us 76740 73004
            </motion.a>
          </div>
        </section>
        <FAQSection />
        <MapSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
