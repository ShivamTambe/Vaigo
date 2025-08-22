import { Button } from './ui/button';
import { Separator } from './ui/separator';
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
} from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const companyLinks = [
    { label: 'About Us', id: 'about' },
    { label: 'Our Team', id: 'about' },
    { label: 'Careers', id: 'contact' },
    { label: 'News & Blog', id: 'contact' }
  ];

  const productLinks = [
    { label: 'Vaigo Drone', id: 'products' },
    { label: 'Agro AI Ecosystem', id: 'products' },
    { label: 'Technology', id: 'solutions' },
    { label: 'Specifications', id: 'products' }
  ];

  const solutionLinks = [
    { label: 'Precision Agriculture', id: 'solutions' },
    { label: 'Crop Monitoring', id: 'solutions' },
    { label: 'Digital Twin', id: 'solutions' },
    { label: 'AI Analytics', id: 'solutions' }
  ];

  const supportLinks = [
    { label: 'Contact Support', id: 'contact' },
    { label: 'Documentation', id: 'contact' },
    { label: 'Training', id: 'contact' },
    { label: 'Partnership', id: 'contact' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
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
                <span className="text-gray-300">info@dotflickventures.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-green-400" />
                <span className="text-gray-300">+91-XXXXXXXXXX</span>
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
                <button
                  key={index}
                  onClick={() => onNavigate(link.id)}
                  className="block text-gray-300 hover:text-green-400 transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Products Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Products</h4>
            <div className="space-y-2">
              {productLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => onNavigate(link.id)}
                  className="block text-gray-300 hover:text-green-400 transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Solutions Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Solutions</h4>
            <div className="space-y-2">
              {solutionLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => onNavigate(link.id)}
                  className="block text-gray-300 hover:text-green-400 transition-colors duration-200"
                >
                  {link.label}
                </button>
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

        {/* Support Links & Additional Info */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Support</h4>
            <div className="space-y-2">
              {supportLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => onNavigate(link.id)}
                  className="block text-gray-300 hover:text-green-400 transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-white">Markets</h4>
            <div className="space-y-2">
              <button
                onClick={() => onNavigate('markets')}
                className="block text-gray-300 hover:text-green-400 transition-colors duration-200"
              >
                Target Markets
              </button>
              <button
                onClick={() => onNavigate('markets')}
                className="block text-gray-300 hover:text-green-400 transition-colors duration-200"
              >
                Crop Applications
              </button>
              <button
                onClick={() => onNavigate('markets')}
                className="block text-gray-300 hover:text-green-400 transition-colors duration-200"
              >
                Global Reach
              </button>
              <button
                onClick={() => onNavigate('markets')}
                className="block text-gray-300 hover:text-green-400 transition-colors duration-200"
              >
                Success Stories
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-white">Legal</h4>
            <div className="space-y-2">
              <button className="block text-gray-300 hover:text-green-400 transition-colors duration-200">
                Privacy Policy
              </button>
              <button className="block text-gray-300 hover:text-green-400 transition-colors duration-200">
                Terms of Service
              </button>
              <button className="block text-gray-300 hover:text-green-400 transition-colors duration-200">
                Compliance
              </button>
              <button className="block text-gray-300 hover:text-green-400 transition-colors duration-200">
                Certifications
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-white">Quick Actions</h4>
            <div className="space-y-3">
              <Button 
                size="sm" 
                className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700"
                onClick={() => onNavigate('contact')}
              >
                Request Demo
              </Button>
              <Button 
                size="sm" 
                variant="outline" 
                className="w-full border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
                onClick={() => onNavigate('contact')}
              >
                Contact Sales
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