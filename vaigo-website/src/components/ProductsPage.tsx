import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './ImageWithFallback';
import { 
  Plane, 
  Target, 
  Shield, 
  Battery, 
  Gauge, 
  Camera, 
  Wifi,
  Brain,
  Satellite,
  Database,
  Lock,
  BarChart3,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

import { useNavigate } from "react-router-dom";

export function ProductsPage() {

  const navigate = useNavigate();

  const vaigoFeatures = [
    {
      icon: Target,
      title: "Precision Spraying System",
      description: "Centrifugal nozzles with dual atomization for uniform droplet size and minimal drift"
    },
    {
      icon: Shield,
      title: "Multi-Directional Obstacle Avoidance",
      description: "Millimeter-wave radar, LiDAR, and binocular vision for safe autonomous navigation"
    },
    {
      icon: Battery,
      title: "Extended Flight Performance",
      description: "15-25 minutes flight time with 50-70L payload, fast 20-minute charging"
    },
    {
      icon: Gauge,
      title: "High Efficiency Coverage",
      description: "10-15 hectares/hour coverage with 6-10m adjustable spray width"
    },
    {
      icon: Camera,
      title: "Integrated Sensing",
      description: "High-resolution cameras and multispectral sensors for crop health monitoring"
    },
    {
      icon: Wifi,
      title: "Advanced Communication",
      description: "3-5km range with RTK/PPK positioning for centimeter-level accuracy"
    }
  ];

  const agroAIFeatures = [
    {
      icon: Brain,
      title: "AI-Powered Analytics",
      description: "Predictive models for yield estimation, disease detection, and optimization recommendations"
    },
    {
      icon: Database,
      title: "Digital Twin Technology",
      description: "Virtual replica of your farm with Pixel, Cube, and Tile granular analysis"
    },
    {
      icon: Satellite,
      title: "Multi-Source Data Integration",
      description: "Combines drone, satellite, and ground sensor data for comprehensive insights"
    },
    {
      icon: Lock,
      title: "Blockchain Security",
      description: "Immutable farm records and tokenized land units for transparency and investment"
    },
    {
      icon: BarChart3,
      title: "Real-Time Monitoring",
      description: "Live dashboards with 3D farm visualization and automated task recommendations"
    },
    {
      icon: Target,
      title: "Precision Agriculture",
      description: "Variable rate application and automated drone coordination for optimal resource use"
    }
  ];

  const specifications = [
    { label: "Payload Capacity", value: "50-70 Liters (liquid), 50-80 kg (granular)" },
    { label: "Flight Time", value: "15-25 minutes (with full payload)" },
    { label: "Spray Width", value: "6-10 meters (adjustable)" },
    { label: "Operating Speed", value: "3-8 m/s" },
    { label: "Efficiency", value: "10-15 hectares/hour" },
    { label: "Positioning Accuracy", value: "±1 cm horizontal, ±2 cm vertical (RTK/PPK)" },
    { label: "Obstacle Detection", value: "Up to 30 meters range" },
    { label: "Weather Resistance", value: "IP67/IP68 rating" },
    { label: "Wind Resistance", value: "Up to 10 m/s" },
    { label: "Communication Range", value: "3-5 km" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Advanced Agricultural 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                {" "}Technology Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover Vaigo, our flagship agricultural spraying drone, and the comprehensive 
              Agro AI Ecosystem designed to transform your farming operations with precision and intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Vaigo Drone Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-green-100 text-green-800 border-green-200">
                  Flagship Product
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Vaigo Drone
                </h2>
                <h3 className="text-xl text-green-600 font-medium">
                  The Future of Agricultural Spraying
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Vaigo is meticulously engineered to set new benchmarks in precision, efficiency, and reliability 
                  for modern farming operations. Built on five core principles: Performance Excellence, Precision 
                  and Accuracy, Reliability and Durability, User-Centric Design, and Scalability and Integration.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">50-70L payload capacity for maximum efficiency</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Centimeter-level precision with RTK/PPK positioning</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">IP67/IP68 rating for harsh environments</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Advanced obstacle avoidance system</span>
                </div>
              </div>

              <Button 
                size="lg" 
                className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700"
                onClick={() => navigate('/contact')}
              >
                Request Vaigo Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1677126577258-1a82fdf1a976?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyYWwlMjBkcm9uZSUyMHNwcmF5aW5nJTIwY3JvcHMlMjBwcmVjaXNpb24lMjBmYXJtaW5nfGVufDF8fHx8MTc1NTg0ODk1OHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Vaigo agricultural drone in action"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
          </div>

          {/* Vaigo Features Grid */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Key Features & Benefits</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {vaigoFeatures.map((feature, index) => (
                <Card key={index} className="border border-green-100 hover:border-green-200 transition-all duration-300 hover:shadow-lg group">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <feature.icon className="w-5 h-5 text-green-600" />
                      </div>
                      <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="bg-gradient-to-br from-gray-50 to-green-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Technical Specifications</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {specifications.map((spec, index) => (
                <div key={index} className="flex py-3 border-b border-green-100 last:border-b-0">
                  <span className="font-medium text-gray-900 w-40 flex-shrink-0 text-left">{spec.label}</span>
                  <span className="text-gray-600 flex-1 text-right pl-4">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Agro AI Ecosystem Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1744230673231-865d54a0aba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhZ3JpY3VsdHVyZSUyMHRlY2hub2xvZ3klMjBkYXNoYm9hcmQlMjBBSSUyMGludGVyZmFjZXxlbnwxfHx8fDE3NTU4NDg4MzN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Agro AI Ecosystem dashboard"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                  Intelligent Platform
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Agro AI Ecosystem
                </h2>
                <h3 className="text-xl text-blue-600 font-medium">
                  Intelligent Farming Unleashed
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  A comprehensive platform integrating cutting-edge AI, Deep Tech, IoT, and satellite monitoring 
                  to create a truly intelligent and interconnected agricultural environment. Transform traditional 
                  farming into a data-driven, highly efficient, and sustainable enterprise.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-700">Digital Twin with Pixel, Cube, and Tile granularity</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-700">Blockchain-secured farm records and tokenization</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-700">AI-powered predictive analytics and recommendations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-700">Real-time multi-source data integration</span>
                </div>
              </div>

              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-500 to-green-600 hover:from-blue-600 hover:to-green-700"
                onClick={() => navigate('/solutions')}
              >
                Explore AI Ecosystem
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Agro AI Features Grid */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Ecosystem Capabilities</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {agroAIFeatures.map((feature, index) => (
                <Card key={index} className="border border-blue-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg group">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-green-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <feature.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Applications & Use Cases
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vaigo and the Agro AI Ecosystem deliver transformative benefits across diverse 
              agricultural applications and crop types.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border border-green-100 hover:border-green-200 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Precision Crop Spraying</h3>
                <p className="text-sm text-gray-600">Targeted application of pesticides, herbicides, and fertilizers</p>
              </CardContent>
            </Card>

            <Card className="border border-blue-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Nutrient Management</h3>
                <p className="text-sm text-gray-600">Precise doses based on soil analysis and crop health data</p>
              </CardContent>
            </Card>

            <Card className="border border-green-100 hover:border-green-200 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Pest & Disease Control</h3>
                <p className="text-sm text-gray-600">Rapid response to outbreaks with localized treatment</p>
              </CardContent>
            </Card>

            <Card className="border border-blue-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Plane className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Difficult Terrain Access</h3>
                <p className="text-sm text-gray-600">Efficient operations in areas inaccessible to ground machinery</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience the Future of Farming?
          </h2>
          <p className="text-xl text-green-100 mb-8 leading-relaxed">
            Discover how Vaigo and the Agro AI Ecosystem can transform your agricultural operations 
            with unprecedented precision, efficiency, and intelligence.
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
              onClick={() => navigate('/solutions')}
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}