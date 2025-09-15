import Footer from "@/components/Footer";

import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { easeOut, motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import React, { useState } from "react";
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

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (!name || !email || !service || !message) {
      setError("Please fill in all fields.");
      return;
    }
    // Basic email validation
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("https://shree-shanthi-backend.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          service,
          message
        })
      });
      if (res.ok) {
        setSuccess("Your request has been submitted successfully!");
        setName("");
        setEmail("");
        setService("");
        setMessage("");
      } else {
        setError("Failed to submit. Please try again later.");
      }
    } catch (err) {
      setError("Network error. Please try again later.");
    }
    setLoading(false);
  };
  return (
    <div className="min-h-screen bg-[#f7fafd]">
      <Header />
      <main>
        {/* Hero Section with background image and overlay */}


        <section className="relative min-h-screen h-screen w-full flex items-center justify-center overflow-hidden">
          <img
            src="https://res.cloudinary.com/db57uudtz/image/upload/v1757856774/WhatsApp_Image_2025-09-14_at_18.59.57_673910c7_np8r7i.jpg"
            alt="Contact Hero"
            className="absolute inset-0 w-full h-full object-cover object-center z-0 blur-sm"
          />
          <div className="absolute inset-0 bg-black/50 z-10" />
          <div className="relative z-20 w-full flex flex-col items-center justify-center h-full">
            <motion.h1
              className="text-6xl md:text-7xl font-bold text-white mb-8 drop-shadow-lg text-center"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              Contact
            </motion.h1>
            <motion.p
              className="text-lg md:text-2xl text-white text-center max-w-2xl mx-auto mb-4 drop-shadow"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
            >
              Since 2020, SSE has built trust with safe, reliable services.
            </motion.p>
          </div>
        </section>

        {/* Main Contact Section */}
        <section className="py-16 bg-[#f7fafd]">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left: Contact Info */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Let's get in touch and work together!</h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-md">
                  SSE combines expertise, professionalism, and care to provide dependable solutions for every environment.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-lg text-foreground">
                    <Phone className="w-5 h-5 text-accent" />
                    <span>+91-7330009993</span>
                  </div>
                  <div className="flex items-center gap-3 text-lg text-foreground">
                    <MapPin className="w-5 h-5 text-accent" />
                    <span>Hyderabad</span>
                  </div>
                  <div className="flex items-center gap-3 text-lg text-foreground">
                    <Mail className="w-5 h-5 text-accent" />
                    <span>shreeshanthienterprises@gmail.com</span>
                  </div>
                </div>
              </div>

              {/* Right: Contact Form (glassy card) */}
              <div className="bg-[#eaf1fa] rounded-3xl shadow-2xl p-10 w-full md:w-[420px] flex-shrink-0 flex flex-col justify-center" style={{ boxShadow: '0 8px 32px 0 rgba(60, 80, 120, 0.12)' }}>
                <h2 className="text-center text-2xl font-semibold mb-8 text-gray-900">Need a SSE People?</h2>
                {success ? (
                  <div className="text-center">
                    <p className="text-green-600 text-lg font-semibold mb-4">Your request has been submitted successfully!</p>
                    <Button className="w-full" onClick={() => setSuccess("")}>Submit another request</Button>
                  </div>
                ) : (
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <input
                      type="text"
                      placeholder="Jane Smith"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      className="w-full rounded-xl bg-white px-5 py-4 text-base font-medium text-gray-900 border-none outline-none focus:ring-2 focus:ring-blue-200 shadow-sm"
                    />
                    <input
                      type="email"
                      placeholder="jane@framer.com"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      className="w-full rounded-xl bg-white px-5 py-4 text-base font-medium text-gray-900 border-none outline-none focus:ring-2 focus:ring-blue-200 shadow-sm"
                    />
                    <select
                      className="w-full rounded-xl bg-white px-5 py-4 text-base font-medium text-gray-900 border-none outline-none focus:ring-2 focus:ring-blue-200 shadow-sm"
                      value={service}
                      onChange={e => setService(e.target.value)}
                    >
                      <option value="" disabled>Select your service...</option>
                      <option value="Housekeeping services">Housekeeping services</option>
                      <option value="Security services">Security services</option>
                      <option value="Pest control">Pest control</option>
                    </select>
                    <textarea
                      rows={3}
                      placeholder="How can we help?"
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      className="w-full rounded-xl bg-white px-5 py-4 text-base font-medium text-gray-900 border-none outline-none focus:ring-2 focus:ring-blue-200 shadow-sm resize-none"
                    />
                    <button
                      type="submit"
                      className="w-full bg-[#F44E40] hover:bg-[#e13c2e] text-white font-semibold py-4 rounded-xl text-lg shadow transition-all duration-200"
                      disabled={loading}
                    >
                      {loading ? "Submitting..." : "Request a quote"}
                    </button>
                    {error && (
                      <div className="text-center mt-2">
                        <p className="text-red-600 mb-2">{error}</p>
                        <Button className="w-full" type="button" onClick={() => { setError(""); }}>Try Again</Button>
                      </div>
                    )}
                  </form>
                )}
              </div>
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

export default Contact;