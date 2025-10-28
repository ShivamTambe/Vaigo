import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './ImageWithFallback';
import { ProductShowcase } from './ProductShowcase';
import { TrustIndicators } from './TrustIndicators';
import { 
  Plane, 
  Brain, 
  Satellite, 
  Leaf, 
  Target, 
  Shield, 
  Zap, 
  BarChart3,
  CheckCircle,
  Star,
  ArrowRight,
  Play
} from 'lucide-react';

import { useNavigate } from 'react-router-dom';

export function HomePage() {

  const navigate = useNavigate();

  const features = [
    {
      icon: Target,
      title: "Unmatched Precision Spraying",
      description: "Centimeter-level accurate application with up to 60% reduction in chemical usage through targeted delivery systems."
    },
    {
      icon: Shield,
      title: "Intelligent Obstacle Avoidance", 
      description: "Multi-directional radar, LiDAR, and binocular vision for safe autonomous navigation in complex environments."
    },
    {
      icon: Brain,
      title: "AI-Powered Digital Twin",
      description: "Virtual replica of your farmland with granular Pixel, Cube, and Tile analysis secured by blockchain technology."
    },
    {
      icon: Satellite,
      title: "Real-time Crop Monitoring",
      description: "Integrated satellite monitoring and predictive analytics for early detection and proactive farm management."
    },
    {
      icon: Zap,
      title: "Automated Flight Planning",
      description: "RTK/PPK positioning with autonomous take-off, landing, and precise route execution for simplified operations."
    },
    {
      icon: Leaf,
      title: "Sustainable Farming",
      description: "Eco-friendly operations that reduce chemical runoff and environmental impact while maintaining high yields."
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Large-Scale Sugarcane Farmer",
      location: "Maharashtra, India",
      content: "Vaigo has revolutionized our spraying operations. The precision is unmatched, and we've seen a significant reduction in chemical usage.",
      rating: 5
    },
    {
      name: "Dr. Anjali Sharma", 
      role: "Head of Agricultural Services",
      company: "AgriSolutions Inc.",
      content: "The integration of Vaigo with the Agro AI Ecosystem has given us insights into our fields we never thought possible.",
      rating: 5
    },
    {
      name: "Suresh Reddy",
      role: "Chairman",
      company: "Deccan Farmers Cooperative", 
      content: "As an agricultural cooperative, investing in Vaigo was strategic. We're seeing increased yields and happier members.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-blue-50 to-white py-16 sm:py-20 overflow-hidden">
  <div className="absolute inset-0 bg-grid-green-500/[0.02] bg-[size:20px_20px]" />

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
      {/* Left Content */}
      <div className="space-y-8">
        <div className="space-y-4">
          <Badge className="bg-green-100 text-green-800 border-green-200 text-sm sm:text-base">
            Revolutionizing Agriculture from Above
          </Badge>

          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
            VAIGO Center - Your Gateway to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
              the Drone Revolution
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            Drone Sales, Rentals, Repairs, Training, and Advanced UAV Solutions under One Roof.
          </p>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            VAIGO Centers empower businesses, enthusiasts, and professionals with state-of-the-art drone technology. From precision agriculture and industrial inspections to photography, logistics, and surveillance — we provide comprehensive drone solutions under one roof. Partner with VAIGO to harness the power of drones for growth and innovation.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <Button
            size="lg"
            className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-6 py-3 text-base sm:text-lg"
            onClick={() => navigate('/solutions')}
          >
            Explore Services
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-green-200 text-green-700 hover:bg-green-50 px-6 py-3 text-base sm:text-lg"
            onClick={() => navigate('/Franchisee')}
          >
            Become a Franchisee
          </Button>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-6 text-gray-700">
          <div className="flex items-start space-x-2">
            <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
            <span className="text-sm sm:text-base">Multi-service Drone Center: Sales, Rental, Repair & Training</span>
          </div>
          <div className="flex items-start space-x-2">
            <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
            <span className="text-sm sm:text-base">Fully Compliant Infrastructure: DGCA approved flight areas and battery safety</span>
          </div>
          <div className="flex items-start space-x-2">
            <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
            <span className="text-sm sm:text-base">Sustainable Operations: Solar + DG hybrid systems</span>
          </div>
          <div className="flex items-start space-x-2">
            <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
            <span className="text-sm sm:text-base">Franchise Opportunities Available Nationwide</span>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="relative mt-10 lg:mt-0">
        <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-3xl blur-3xl opacity-20 transform rotate-6" />
        <ImageWithFallback
          src="https://i.ibb.co/JWVb1vjM/IMG-20251021-WA0046.jpg"
          alt="Vaigo agricultural Plane flying over crops"
          className="relative z-10 w-full max-w-md sm:max-w-lg lg:max-w-xl mx-auto h-auto rounded-2xl shadow-2xl"
        />
      </div>
    </div>
  </div>
</section>


      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Unlocking Agricultural Potential
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vaigo and the integrated Agro AI Ecosystem offer a suite of powerful features designed 
              to transform your farming operations with unprecedented precision and intelligence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border border-green-100 hover:border-green-200 transition-all duration-300 hover:shadow-lg group">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-blue-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Product Showcase */}
      <ProductShowcase onNavigate={navigate} />

      {/* Trust Indicators and Testimonials */}
      <TrustIndicators />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Farm Today?
          </h2>
          <p className="text-xl text-green-100 mb-8 leading-relaxed">
            Vaigo and the Agro AI Ecosystem are designed to bring unprecedented efficiency, 
            precision, and sustainability to your operations. Join the future of farming.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-white text-green-600 hover:bg-gray-50 px-8 py-3"
              onClick={() => navigate('/contact')}
            >
              Request a Demo
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-3"
              onClick={() => navigate('/products')}
            >
              Explore Products
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}