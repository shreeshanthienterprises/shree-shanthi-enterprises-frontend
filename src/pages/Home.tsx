import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProcessSection from "@/components/ProcessSection";
import ServicesSection from "@/components/ServicesSection";

import MapSection from "@/components/MapSection";
import { easeOut, motion } from "framer-motion";

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
    image: "https://res.cloudinary.com/db57uudtz/image/upload/v1757855106/services-1_bdzsoc.webp",
    link: "/security-services",
  },
  {
    title: "House Keeping Servicer",
    image: "https://res.cloudinary.com/db57uudtz/image/upload/v1757855122/services-2_ytqk2w.webp",
    link: "/cleaning-services",
  },
  {
    title: "Pest Control Service",
    image: "https://res.cloudinary.com/db57uudtz/image/upload/v1757855137/services-3_oyqk2w.webp",
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
        <section className="py-10 md:py-16 relative" style={{ background: 'linear-gradient(135deg, #184FA1 0%, #184FA1 100%)' }}>
          <div className="absolute inset-0 z-0 pointer-events-none" style={{
            backgroundImage: `repeating-linear-gradient(0deg, rgba(255,255,255,0.07) 0px, rgba(255,255,255,0.07) 1px, transparent 1px, transparent 80px), repeating-linear-gradient(90deg, rgba(255,255,255,0.07) 0px, rgba(255,255,255,0.07) 1px, transparent 1px, transparent 80px)`
          }} />
          <div className="container mx-auto px-2 md:px-4 flex flex-col lg:flex-row items-center justify-between relative z-10" style={{ minHeight: '120px' }}>
            <motion.h2
              className="text-white text-2xl md:text-4xl font-semibold mb-6 md:mb-0"
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
              className="bg-[#F44E40] hover:bg-[#e13c2e] text-white text-base md:text-lg font-semibold px-6 md:px-10 py-3 md:py-5 rounded-xl shadow-lg transition-all"
              style={{ marginLeft: '0', marginTop: '8px', marginBottom: '8px' }}
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
