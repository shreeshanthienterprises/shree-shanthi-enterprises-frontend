import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 0.8
    }
  }
};

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section with responsive art‑direction */}
        <section className="relative min-h-[70vh] h-[70vh] md:min-h-screen md:h-screen w-full flex items-center justify-center overflow-hidden">
          <picture className="absolute inset-0 -z-10">
            {/* Mobile portrait crop */}
            <source
              media="(max-width: 639px)"
              srcSet="https://res.cloudinary.com/ds4stvfr3/image/upload/v1758110308/Gemini_Generated_Image_9m5v9j9m5v9j9m5v_r8scmq.png"
            />
            {/* Tablet */}
            <source
              media="(min-width: 640px) and (max-width: 1023px)"
              srcSet="https://res.cloudinary.com/ds4stvfr3/image/upload/v1758110308/Gemini_Generated_Image_9m5v9j9m5v9j9m5v_r8scmq.png"
            />
            {/* Desktop */}
            <img
              src="https://res.cloudinary.com/ds4stvfr3/image/upload/v1758110308/Gemini_Generated_Image_9m5v9j9m5v9j9m5v_r8scmq.png"
              alt="Manager briefing security and housekeeping teams"
              className="w-full h-full object-cover object-[45%_40%] sm:object-center"
              loading="eager"
              decoding="async"
            />
          </picture>

          {/* Stronger overlay on phones for contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/55 to-black/65 sm:from-black/40 sm:via-black/35 sm:to-black/45 -z-0" />

          {/* Slight blur only on mobile to lift type without hiding faces */}
          <div className="absolute inset-0 backdrop-blur-[2px] sm:backdrop-blur-0 -z-0" />

          <div className="relative z-10 w-full flex flex-col items-center justify-center h-full px-4">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-3 sm:mb-6 text-center drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              About Us
            </motion.h1>
            <motion.p
              className="text-base sm:text-lg md:text-2xl text-white/95 text-center max-w-[36ch] sm:max-w-2xl mx-auto leading-relaxed"
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
        <section className="py-20 bg-[#faf9f7]">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left: Card with image and overlay */}
              <motion.div
                className="flex justify-center"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-xl bg-white w-full max-w-[480px]">
                  <div className="relative">
                    <img
                      src="https://res.cloudinary.com/db57uudtz/image/upload/v1757854709/about-img-1_czdjqa.png"
                      alt="Shree Shanthi Enterprises"
                      className="w-full h-auto object-cover block"
                    />
                    {/* Overlay positioned relative to image */}
                    <div className="absolute left-4 md:left-6 bottom-4 md:bottom-6 text-white z-10">
                      <div className="text-sm md:text-lg mb-1 opacity-80">Since</div>
                      <div className="text-3xl md:text-5xl font-bold">2020</div>
                    </div>
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
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Shree Shanthi<br />Enterprises began<br />with a simple mission
                </h2>
                <p className="text-lg text-gray-600 mb-8 max-w-xl">
                  Over the years, we have grown from a small local business into a trusted partner for homes and businesses, delivering solutions that are not only effective but also safe, sustainable, and customer-focused.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-lg">
                  {["Transparency", "Excellence", "Sustainability", "Customer focus"].map((val, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center space-x-3"
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      custom={i + 3}
                    >
                      <span className="text-blue-600 text-2xl">✔</span>
                      <span className="font-semibold text-lg text-gray-900">{val}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What we Does */}
        <section className="py-20" style={{ backgroundColor: '#E6EEFA' }}>
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <motion.h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1}
              >
                We invest in<br />continuous training
              </motion.h2>
              <motion.p
                className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={2}
              >
                We are dedicated to maintaining the highest standards of quality in everything we do. From the materials we use to the techniques we employ, excellence is our benchmark.
              </motion.p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[{
                img: "https://res.cloudinary.com/db57uudtz/image/upload/v1757854766/about-img-2_gvbrjj.avif",
                title: "Safety & Hygiene Training",
                desc: "Our housekeeping staff are trained in cleaning, hygiene, and eco-friendly product use to ensure spotless, safe, and healthy spaces."
              }, {
                img: "https://res.cloudinary.com/ds4stvfr3/image/upload/v1757964512/0ca3b91e-d4f4-4c7d-9562-544113f050c1_yuqauq.png",
                title: "Professional Security Workshops",
                desc: "We regularly train our security personnel in access control, emergency response, and conflict management to keep them prepared to safeguard people and property."
              }, {
                img: "https://res.cloudinary.com/db57uudtz/image/upload/v1757854815/about-img-4_uwf2cv.avif",
                title: "Advanced Pest Control Practices",
                desc: "Our pest control experts use eco-friendly techniques, safe equipment handling, and preventive methods to ensure lasting pest protection."
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
                  <img src={card.img} alt={card.title} className="w-full h-64 object-cover" />
                  <div className="p-6 md:p-8">
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">{card.title}</h3>
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
              href="https://wa.me/917330009993"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#F44E40] hover:bg-[#e13c2e] text-white text-base md:text-lg font-semibold px-6 md:px-10 py-3 md:py-5 rounded-xl shadow-lg transition-all"
              style={{ marginLeft: '0', marginTop: '8px', marginBottom: '8px' }}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
            >
              WhatsApp +91-7330009993
            </motion.a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;