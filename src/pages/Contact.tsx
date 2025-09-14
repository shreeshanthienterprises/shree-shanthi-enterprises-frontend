import Footer from "@/components/Footer";

import React, { useState } from "react";
import { motion, easeOut } from "framer-motion";
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
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

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
        <section className="relative min-h-[85vh] h-[600px] md:h-[750px] flex items-end">
          <img src="/src/assets/hero-security-worker.jpg" alt="Contact Hero" className="absolute inset-0 w-full h-full object-cover object-center z-0" />
          <div className="absolute inset-0 bg-black/50 z-10" />
          <div className="absolute z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center items-center text-center">
            <div className="backdrop-blur-md bg-white/20 rounded-2xl px-8 py-8 max-w-2xl mx-auto shadow-lg border border-white/20">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">Contact</h1>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto text-center">
                Since 2020, SSE has been building trust through reliable, safe, professional services solutions—tailored to client needs.
              </p>
            </div>
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
      </main>
      <Footer />
    </div>
  );
};

export default Contact;