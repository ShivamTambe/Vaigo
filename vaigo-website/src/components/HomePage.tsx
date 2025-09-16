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
      <section className="relative bg-gradient-to-br from-green-50 via-blue-50 to-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-green-500/[0.02] bg-[size:20px_20px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-green-100 text-green-800 border-green-200">
                  Revolutionizing Agriculture from Above
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Vaigo: Precision from Above, 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                    {" "}Performance on the Ground
                  </span>
                </h1>
                <p className="text-2xl text-gray-600 leading-relaxed">
                  Empowering the Future of Farming with Advanced Agricultural Planes and AI-Driven Ecosystems.
                </p>
                <p className="text-xl text-gray-600 leading-relaxed">
                  In an era where agricultural demands are escalating and resources are finite, Dotflick Ventures Private Limited introduces Vaigo, a groundbreaking agricultural spraying drone UAV designed to redefine efficiency, precision, and sustainability in farming.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-8 py-3"
                  onClick={() => navigate('/products')}
                >
                  Discover Vaigo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-green-200 text-green-700 hover:bg-green-50 px-8 py-3"
                  onClick={() => navigate('/solutions')}
                >
                  Explore Agro AI Ecosystem
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-green-200 text-green-700 hover:bg-green-50 px-8 py-3"
                  onClick={() => navigate('/solutions')}
                >
                  Request a Demo
                </Button>
                {/* <Button 
                  size="lg" 
                  variant="ghost" 
                  className="text-gray-700 hover:text-green-600 px-8 py-3"
                >
                  <Play className="mr-2 w-5 h-5" />
                  Watch Demo
                </Button> */}
              </div>

              <div className="flex items-center space-x-8 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>50-70L Payload Capacity</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>15-25 Min Flight Time</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>±1cm Accuracy</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-3xl blur-3xl opacity-20 transform rotate-6" />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1750963081770-fb6fcab236dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyYWwlMjBkcm9uZSUyMGZseWluZyUyMG92ZXIlMjBncmVlbiUyMGNyb3AlMjBmaWVsZHxlbnwxfHx8fDE3NTU4NDg4MzB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Vaigo agricultural Plane flying over crops"
                className="relative z-10 w-full h-auto rounded-2xl shadow-2xl"
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