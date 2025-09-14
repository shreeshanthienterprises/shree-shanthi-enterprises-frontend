import Header from "@/components/Header";
import React, { useState } from "react";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Shield, Eye, Lock, Users, AlertTriangle, Clock, CheckCircle, Phone } from "lucide-react";
import { motion } from "framer-motion";

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

const CleaningServices = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (!name || !email || !message) {
      setError("Please fill in all fields.");
      return;
    }
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
          service: "Housekeeping services",
          message
        })
      });
      if (res.ok) {
        setSuccess("Your request has been submitted successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setError("Failed to submit. Please try again later.");
      }
    } catch (err) {
      setError("Network error. Please try again later.");
    }
    setLoading(false);
  };
  const services = [
    {
      icon: Users,
      title: "Security Personnel",
      description: "Professional, trained security guards for your property protection.",
      features: ["Licensed Security Guards", "Background Verified Staff", "Uniformed Personnel", "Regular Patrol Services"]
    },
    {
      icon: Eye,
      title: "CCTV Monitoring",
      description: "Advanced surveillance systems with 24/7 monitoring capabilities.",
      features: ["HD Camera Installation", "Remote Monitoring", "Motion Detection", "Cloud Storage"]
    },
    {
      icon: Lock,
      title: "Access Control",
      description: "Sophisticated access control systems for enhanced security.",
      features: ["Keycard Systems", "Biometric Access", "Visitor Management", "Security Integration"]
    },
    {
      icon: AlertTriangle,
      title: "Emergency Response",
      description: "Rapid response team for security emergencies and incidents.",
      features: ["24/7 Response Team", "Emergency Protocols", "Incident Reporting", "Coordination with Authorities"]
    }
  ];

  const benefits = [
    "Reduced crime and theft incidents",
    "Enhanced property value",
    "24/7 peace of mind",
    "Professional incident handling",
    "Insurance premium reductions",
    "Customized security solutions"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section - Full Screen */}
      <section className="relative min-h-screen h-screen w-full flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
          style={{
            backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 100%), url('/services-2.png')"
          }}
        />
        <div className="relative z-20 w-full flex flex-col items-center justify-center h-full text-center px-4">
          <motion.h1
            className="text-6xl md:text-8xl font-bold text-white mb-8 drop-shadow-lg"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            House Keeping Services
          </motion.h1>
          <motion.p
            className="text-lg md:text-2xl text-white text-center max-w-4xl mx-auto mb-8 drop-shadow leading-relaxed"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            Fresh, Tidy, and Welcoming
          </motion.p>

        </div>
      </section>

      {/* Pinpoint Form + Content Section (matches screenshot) */}
      <section className="py-20 bg-[#f6f4f3]">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-start gap-20 md:gap-32">
          {/* Form Card */}
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
                    <Button className="w-full" type="button" onClick={() => setError("")}>Try Again</Button>
                  </div>
                )}
              </form>
            )}
          </div>
          {/* Content Section with Framer Motion Animations */}
          <div className="flex-1 flex flex-col justify-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Introduction
            </motion.h2>
            <motion.p
              className="text-lg text-gray-700 mb-8 max-w-2xl"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              At <span className="font-bold">Shree Shanthi Enterprises</span>, we believe that a clean and organized environment is essential for well-being and productivity. Our <span className="font-bold">House Keeping Services</span> are designed to deliver spotless results for homes, offices, and commercial spaces. Whether you need regular cleaning, deep cleaning, or specialized maintenance, our dedicated team ensures every corner is fresh, tidy, and welcoming.
            </motion.p>
            <motion.h3
              className="text-2xl font-bold text-gray-900 mb-4"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Service Details
            </motion.h3>
            <motion.p
              className="text-lg text-gray-700 max-w-2xl"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Our housekeeping staff are trained in the latest cleaning techniques and use eco-friendly products to ensure a safe and healthy environment. We offer a range of services including dusting, mopping, vacuuming, restroom sanitation, and waste management. From daily upkeep to intensive deep cleaning, our team is reliable, courteous, and committed to exceeding your expectations. Experience the comfort of a professionally maintained space with SSE.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Banner - Same as About Page */}
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
      <Footer />
    </div>
  );
};

export default CleaningServices;