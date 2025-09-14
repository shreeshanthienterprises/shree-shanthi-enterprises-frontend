import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: "easeOut"
    }
  })
};

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <main>
        {/* Hero Section with Fullscreen Image Background */}
        <section className="relative min-h-[60vh] h-[60vh] md:min-h-screen md:h-screen w-full flex items-center justify-center overflow-hidden">
          <img
            src="https://res.cloudinary.com/db57uudtz/image/upload/v1757854622/sse-about-img_vycezw.webp"
            alt="Hero Background"
            className="absolute inset-0 w-full h-full object-cover object-center z-0 blur-sm"
          />
          <div className="absolute inset-0 bg-black/50 z-10" />
          <div className="relative z-20 w-full flex flex-col items-center justify-center h-full px-4">
            <motion.h1
              className="text-4xl md:text-7xl font-bold text-white mb-6 md:mb-8 drop-shadow-lg text-center"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              About Us
            </motion.h1>
            <motion.p
              className="text-base md:text-2xl text-white text-center max-w-md md:max-w-2xl mx-auto mb-2 md:mb-4 drop-shadow"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
            >
              Our journey has been marked by continuous improvement, expansion of our service offerings and a relentless focus on customer satisfaction.
            </motion.p>
          </div>
        </section>

        {/* About Shree Shanthi */}
        <section className="py-10 md:py-20 bg-[#faf9f7]">
          <div className="container mx-auto px-2 md:px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
              {/* Left: Card with image and overlay */}
              <motion.div
                className="flex justify-center"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-xl bg-white w-full max-w-xs md:max-w-md lg:max-w-lg aspect-square">
                  <img
                    src="https://res.cloudinary.com/db57uudtz/image/upload/v1757854709/about-img-1_czdjqa.png"
                    alt="Shree Shanthi Enterprises"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute left-4 md:left-6 bottom-4 md:bottom-8 text-white">
                    <div className="text-base md:text-lg mb-1 opacity-80">Since</div>
                    <div className="text-3xl md:text-5xl font-bold">2020</div>
                  </div>
                </div>
              </motion.div>
              {/* Right: Heading, description, values */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={2}
              >
                <h2 className="text-3xl md:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
                  Shree Shanthi<br />Enterprises began<br />with a simple mission
                </h2>
                <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 max-w-xl">
                  Over the years, we have grown from a small local business into a trusted partner for homes and businesses, delivering solutions that are not only effective but also safe, sustainable, and customer-focused.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-lg">
                  {["Transparency", "Excellence", "Sustainability", "Customer focus"].map((val, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center space-x-2 md:space-x-3"
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      custom={i + 3}
                    >
                      <span className="text-blue-600 text-xl md:text-2xl">✔</span>
                      <span className="font-semibold text-base md:text-lg text-gray-900">{val}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What we Does */}
        <section className="py-10 md:py-20" style={{ backgroundColor: '#E6EEFA' }}>
          <div className="container mx-auto px-2 md:px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center mb-8 md:mb-16">
              <motion.h2
                className="text-3xl md:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1}
              >
                We invest in<br />continuous training
              </motion.h2>
              <motion.p
                className="text-base md:text-lg text-gray-600 max-w-xl mx-auto"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={2}
              >
                We are dedicated to maintaining the highest standards of quality in everything we do. From the materials we use to the techniques we employ, excellence is our benchmark.
              </motion.p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[{
                img: "https://res.cloudinary.com/db57uudtz/image/upload/v1757854766/about-img-2_gvbrjj.avif",
                title: "Safety training",
                desc: "Our new employees receive detailed training on safety protocols to ensure they can perform their duties safely."
              }, {
                img: "https://res.cloudinary.com/db57uudtz/image/upload/v1757854793/about-img-3_ihusps.avif",
                title: "Regular workshops",
                desc: "We host regular workshops and seminars. These sessions cover the latest advancements in security."
              }, {
                img: "https://res.cloudinary.com/db57uudtz/image/upload/v1757854815/about-img-4_uwf2cv.avif",
                title: "Sustainability",
                desc: "We provide training on sustainable practices, including water conservation and efficient systems."
              }].map((card, i) => (
                <motion.div
                  key={i}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i + 3}
                >
                  <img src={card.img} alt={card.title} className="w-full h-48 md:h-64 object-cover" />
                  <div className="p-4 md:p-8">
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2 md:mb-3">{card.title}</h3>
                    <p className="text-gray-600 text-sm md:text-base">{card.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

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
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;