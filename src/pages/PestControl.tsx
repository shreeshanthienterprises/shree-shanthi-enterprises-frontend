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

const PestControl = () => {
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
          service: "Pest control",
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
            backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 100%), url('/services-3.png')"
          }}
        />
        <div className="relative z-20 w-full flex flex-col items-center justify-center h-full text-center px-4">
          <motion.h1
            className="text-6xl md:text-8xl font-bold text-white mb-8 drop-shadow-lg"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            Pest Control Service 
          </motion.h1>
          <motion.p
            className="text-lg md:text-2xl text-white text-center max-w-4xl mx-auto mb-8 drop-shadow leading-relaxed"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            Safe, Effective Pest-Free
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
              At <span className="font-bold">Shree Shanthi Enterprises</span>, we understand the importance of a pest-free environment for your health, comfort, and safety. Our <span className="font-bold">Pest Control Services</span> are designed to eliminate and prevent infestations in homes, offices, and commercial spaces. Using safe, effective, and environmentally responsible methods, we protect your property from unwanted pests and ensure lasting peace of mind.
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
              Our expert technicians are trained to handle a wide range of pests including termites, rodents, cockroaches, ants, mosquitoes, and more. We offer comprehensive solutions such as inspection, targeted treatments, preventive care, and ongoing monitoring. All our products are child- and pet-safe, and we prioritize your safety and satisfaction. Whether you need a one-time treatment or regular maintenance, SSE delivers reliable, discreet, and guaranteed pest control for every need.
            </motion.p>
          </div>
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
      <Footer />
    </div>
  );
};

export default PestControl;