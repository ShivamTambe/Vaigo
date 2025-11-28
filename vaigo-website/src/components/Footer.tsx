import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import {
  Mail, Phone, MapPin, Zap,
  Linkedin, Twitter, Facebook, Youtube,
  ArrowRight
} from "lucide-react";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function Footer() {
  const location = useLocation();
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    setAnimKey(prev => prev + 1);
  }, [location.pathname]);

  // 🔥 This is the correct mobile-safe viewport detector
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: false, margin: "0px 0px -20% 0px" });

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const companyLinks = [
    { label: "About Us", path: "/about" },
    { label: "Our Team", path: "/team" },
    { label: "Careers", path: "/careers" },
    { label: "News & Blog", path: "/blog" }
  ];

  const productLinks = [
    { label: "Vaigo Drone", path: "/products/drone" },
    { label: "Agro AI Ecosystem", path: "/products/agro-ai" },
    { label: "Technology", path: "/solutions/technology" },
    { label: "Specifications", path: "/products/specs" }
  ];

  const solutionLinks = [
    { label: "Precision Agriculture", path: "/solutions/precision" },
    { label: "Crop Monitoring", path: "/solutions/monitoring" },
    { label: "Digital Twin", path: "/solutions/digital-twin" },
    { label: "AI Analytics", path: "/solutions/ai" }
  ];

  const supportLinks = [
    { label: "Contact Support", path: "/contact/support" },
    { label: "Documentation", path: "/docs" },
    { label: "Training", path: "/training" },
    { label: "Partnership", path: "/partnership" }
  ];

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      alert("Please enter your email");
      return;
    }

    setLoading(true);
    try {
      const apiUrl = import.meta.env.DEV 
        ? "http://localhost:5000/api/subscribe" 
        : "https://vaigo.in/api/subscribe";

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      
      if (response.ok) {
        alert("✅ Successfully subscribed!");
        setEmail("");
      } else {
        alert(`Failed: ${data.error}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer 
      ref={footerRef}
      className="bg-gray-900 text-white"
    >

      {/* 🔥 Scroll animation triggers when footer enters viewport */}
      <motion.div
        key={animKey}
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Vaigo</h3>
                  <p className="text-sm text-green-400">by Dotflick Ventures</p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed">
                Revolutionizing agriculture with drone technology and AI-powered ecosystems.
              </p>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300">info@vaigo.in</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300">+91 88050 43855</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300">Maharashtra, India</span>
                </div>
              </div>

              <div className="flex space-x-4">
                {[Linkedin, Twitter, Facebook, Youtube].map((Icon, i) => (
                  <Button key={i} size="sm" variant="ghost"
                    className="text-gray-400 hover:text-white hover:bg-gray-800">
                    <Icon className="w-4 h-4" />
                  </Button>
                ))}
              </div>
            </div>

            {/* Company Section */}
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Company</h4>
              <div className="space-y-2">
                {companyLinks.map((link, index) => (
                  <Link key={index} to={link.path}
                    className="block text-gray-300 hover:text-green-400 transition">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Products */}
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Products</h4>
              <div className="space-y-2">
                {productLinks.map((link, index) => (
                  <Link key={index} to={link.path}
                    className="block text-gray-300 hover:text-green-400 transition">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Solutions */}
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Solutions</h4>
              <div className="space-y-2">
                {solutionLinks.map((link, index) => (
                  <Link key={index} to={link.path}
                    className="block text-gray-300 hover:text-green-400 transition">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

          </div>

          <Separator className="my-12 bg-gray-700" />

          {/* Newsletter */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Stay Updated</h3>
              <p className="text-gray-300">
                Get the latest updates on agricultural innovation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg
                text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <Button 
                className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700"
                onClick={handleSubscribe}
                disabled={loading}
              >
                {loading ? "Subscribing..." : "Subscribe"}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>

          <Separator className="my-12 bg-gray-700" />

          {/* Support + Legal */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Support */}
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Support</h4>
              <div className="space-y-2">
                {supportLinks.map((link, index) => (
                  <Link key={index} to={link.path}
                    className="block text-gray-300 hover:text-green-400 transition">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Markets */}
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Markets</h4>
              <div className="space-y-2">
                <Link to="/markets/target" className="block text-gray-300 hover:text-green-400">Target Markets</Link>
                <Link to="/markets/crops" className="block text-gray-300 hover:text-green-400">Crop Applications</Link>
                <Link to="/markets/global" className="block text-gray-300 hover:text-green-400">Global Reach</Link>
                <Link to="/markets/success" className="block text-gray-300 hover:text-green-400">Success Stories</Link>
              </div>
            </div>

            {/* Legal */}
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Legal</h4>
              <div className="space-y-2">
                <Link to="/privacy" className="block text-gray-300 hover:text-green-400">Privacy Policy</Link>
                <Link to="/terms" className="block text-gray-300 hover:text-green-400">Terms of Service</Link>
                <Link to="/compliance" className="block text-gray-300 hover:text-green-400">Compliance</Link>
                <Link to="/certifications" className="block text-gray-300 hover:text-green-400">Certifications</Link>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Quick Actions</h4>
              <div className="space-y-3">
                <Button asChild size="sm"
                  className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700">
                  <Link to="/contact">Request Demo</Link>
                </Button>

                <Button asChild size="sm" variant="outline"
                  className="w-full border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white">
                  <Link to="/contact">Contact Sales</Link>
                </Button>
              </div>
            </div>

          </div>

        </div>
      </motion.div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 Dotflick Ventures Private Limited. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Made in India 🇮🇳</span>
              <span>•</span>
              <span>Transforming Global Agriculture</span>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}
