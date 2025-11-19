import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import {
  Mail,
  Phone,
  MapPin,
  Zap,
  Linkedin,
  Twitter,
  Facebook,
  Youtube,
  ArrowRight
} from "lucide-react";

export function Footer() {
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

  return (
    <footer className="bg-gray-900 text-white">
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
              Revolutionizing agriculture through advanced drone technology and AI-powered ecosystems.
              Empowering farmers worldwide with precision, efficiency, and sustainability.
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

            {/* Social Links */}
            <div className="flex space-x-4">
              <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white hover:bg-gray-800">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white hover:bg-gray-800">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white hover:bg-gray-800">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white hover:bg-gray-800">
                <Youtube className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Company</h4>
            <div className="space-y-2">
              {companyLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="block text-gray-300 hover:text-green-400 transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Products Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Products</h4>
            <div className="space-y-2">
              {productLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="block text-gray-300 hover:text-green-400 transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Solutions Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Solutions</h4>
            <div className="space-y-2">
              {solutionLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="block text-gray-300 hover:text-green-400 transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-12 bg-gray-700" />

        {/* Newsletter Signup */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Stay Updated</h3>
            <p className="text-gray-300">
              Get the latest updates on agricultural technology and Vaigo innovations.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
            />
            <Button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700">
              Subscribe
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>

        <Separator className="my-12 bg-gray-700" />

        {/* Support Links */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Support</h4>
            <div className="space-y-2">
              {supportLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="block text-gray-300 hover:text-green-400 transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-white">Markets</h4>
            <div className="space-y-2">
              <Link to="/markets/target" className="block text-gray-300 hover:text-green-400 transition-colors duration-200">
                Target Markets
              </Link>
              <Link to="/markets/crops" className="block text-gray-300 hover:text-green-400 transition-colors duration-200">
                Crop Applications
              </Link>
              <Link to="/markets/global" className="block text-gray-300 hover:text-green-400 transition-colors duration-200">
                Global Reach
              </Link>
              <Link to="/markets/success" className="block text-gray-300 hover:text-green-400 transition-colors duration-200">
                Success Stories
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-white">Legal</h4>
            <div className="space-y-2">
              <Link to="/privacy" className="block text-gray-300 hover:text-green-400 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="block text-gray-300 hover:text-green-400 transition-colors duration-200">
                Terms of Service
              </Link>
              <Link to="/compliance" className="block text-gray-300 hover:text-green-400 transition-colors duration-200">
                Compliance
              </Link>
              <Link to="/certifications" className="block text-gray-300 hover:text-green-400 transition-colors duration-200">
                Certifications
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-white">Quick Actions</h4>
            <div className="space-y-3">
              <Button
                asChild
                size="sm"
                className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700"
              >
                <Link to="/contact">Request Demo</Link>
              </Button>

              <Button
                asChild
                size="sm"
                variant="outline"
                className="w-full border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
              >
                <Link to="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
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
