import React, { useState } from 'react';
import { Twitter, Instagram, Facebook, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ComingSoon() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <motion.div 
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >

      {/* Background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-[#3a3f5c] via-[#5a5f7c] to-[#7fb8b8]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      />

      {/* Floating circles */}
      <motion.div 
        className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-white/10 blur-3xl"
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-white/10 blur-3xl"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">

        {/* Logo */}
        <motion.img
          src="https://res.cloudinary.com/dverfj5ad/image/upload/v1764227083/vaigo/partnership/vagfmxvhtoh61vd2owm3.png" // <-- change path if needed
          alt="Vaigo Logo"
          className="h-14 mx-auto mb-6 opacity-90"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        />

        {/* Heading */}
        <motion.h1
          className="text-white mb-6 tracking-wider text-4xl sm:text-5xl font-semibold"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          VAIGO SHOP - COMING SOON
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-white/90 mb-12 max-w-2xl mx-auto text-base sm:text-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          We're building the official Vaigo online store where you can purchase our
          sensors, controllers, automation products, and industrial solutions directly.
          Be the first to know when we launch.
        </motion.p>

        {/* Email Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="mb-12 flex flex-col sm:flex-row gap-0 max-w-md mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.5 }}
        >
          <input
            type="email"
            placeholder="Enter your email to get notified"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-6 py-3 bg-white/90 text-gray-800 placeholder-gray-500 
            focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
          />

          <button
            type="submit"
            className="px-8 py-3 bg-gray-500/70 text-white hover:bg-gray-600/70 
            hover:scale-105 active:scale-95 transition-all duration-300"
          >
            {isSubmitted ? 'THANK YOU!' : 'NOTIFY ME'}
          </button>
        </motion.form>

        {/* Social Icons */}
        <motion.div
          className="flex justify-center gap-6 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.7 }}
        >
          {[Linkedin, Instagram, Facebook].map((Icon, i) => (
            <motion.a
              key={i}
              href="#"
              className="text-white/80 hover:text-white hover:scale-110 transition-all duration-300"
              whileHover={{ scale: 1.2 }}
            >
              <Icon size={26} />
            </motion.a>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.p
          className="text-white/70 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          © {new Date().getFullYear()} Vaigo Technologies Pvt. Ltd. All rights reserved.
        </motion.p>
      </div>
    </motion.div>
  );
}
