import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './ImageWithFallback';
import { 
  Target, 
  Droplets, 
  BarChart3, 
  Settings, 
  Leaf,
  TrendingUp,
  Shield,
  Eye,
  Zap,
  Cpu,
  CheckCircle,
  ArrowRight,
  Globe,
  Camera,
  Activity,
  Database,
  Users,
  MapPin,
  Calendar,
  PieChart
} from 'lucide-react';

import { useNavigate } from "react-router-dom";

export function SolutionsPage() {

  const navigate = useNavigate();

  const solutions = [
    {
      icon: Target,
      title: "Precision Agriculture",
      subtitle: "Maximizing Efficiency, Minimizing Waste",
      description: "Targeted input application with centimeter-level accuracy, reducing chemical consumption by up to 60%",
      features: [
        "Targeted Input Application with centimeter-level precision",
        "Variable Rate Application (VRA) based on real-time field conditions", 
        "Optimized Resource Utilization for sustainable farming",
        "Reduced environmental impact and cost savings"
      ],
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVjaXNpb24lMjBhZ3JpY3VsdHVyZSUyMGZhcm1pbmd8ZW58MXx8fHwxNzU1OTMzMzIyfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      icon: Droplets,
      title: "Crop Spraying and Monitoring",
      subtitle: "Unparalleled Accuracy and Insight",
      description: "Comprehensive approach combining Vaigo's physical capabilities with AI-powered analytical insights",
      features: [
        "High-Efficiency Spraying with large payload capacity",
        "Real-time Crop Health Assessment with multispectral imaging",
        "Automated Pest and Disease Detection 7-10 days in advance",
        "Post-Application Analysis for continuous optimization"
      ],
      image: "https://images.unsplash.com/photo-1677126577258-1a82fdf1a976?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcm9uZSUyMHNwcmF5aW5nJTIwcHJlY2lzaW9uJTIwYWdyaWN1bHR1cmV8ZW58MXx8fHwxNzU1ODY4NzAwfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      icon: BarChart3,
      title: "Data Analytics and Insights",
      subtitle: "Empowering Informed Decisions",
      description: "Transform raw agricultural data into actionable insights that drive profitability and sustainability",
      features: [
        "Multi-Source Data Integration from drones, satellites, and IoT",
        "Predictive Analytics for yield estimation and risk mitigation",
        "Customizable Dashboards and detailed reporting",
        "AI-Powered Recommendations for optimal farm management"
      ],
      image: "https://images.unsplash.com/photo-1666015212938-b96bb465f5b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyYWwlMjB0ZWNobm9sb2d5JTIwZGFzaGJvYXJkJTIwY29udHJvbCUyMHN5c3RlbXxlbnwxfHx8fDE3NTU4Njg3MDR8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      icon: Settings,
      title: "Farm Management",
      subtitle: "Streamlined Operations, Enhanced Control",
      description: "Comprehensive tools that streamline operations and provide enhanced control over your entire farm",
      features: [
        "Digital Twin for Holistic Management with granular control",
        "Automated Task Assignment based on AI recommendations",
        "Resource Optimization for operational cost reduction",
        "Blockchain for Transparency and immutable farm records"
      ],
      image: "https://images.unsplash.com/photo-1744230673231-865d54a0aba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtZXIlMjB1c2luZyUyMHRhYmxldCUyMHRlY2hub2xvZ3klMjBzbWFydCUyMGZhcm1pbmd8ZW58MXx8fHwxNzU1ODY4NzA3fDA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  const capabilities = [
    {
      icon: Eye,
      title: "Real-time Monitoring",
      description: "Continuous oversight of crop health and field conditions"
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics", 
      description: "Forecast future trends and potential issues"
    },
    {
      icon: Zap,
      title: "Automated Operations",
      description: "Reduce manual labor with intelligent automation"
    },
    {
      icon: Shield,
      title: "Risk Mitigation",
      description: "Proactive identification and prevention of problems"
    },
    {
      icon: Leaf,
      title: "Sustainable Practices",
      description: "Environmentally conscious farming methods"
    },
    {
      icon: PieChart,
      title: "ROI Optimization",
      description: "Maximize returns through data-driven decisions"
    }
  ];

  const industrySpecific = [
    {
      crop: "Sugarcane",
      location: "Maharashtra, India",
      description: "Specialized solutions addressing water scarcity, pest management, and yield optimization",
      benefits: [
        "Up to 40% yield increase in AI-based experiments",
        "Optimized irrigation for water conservation",
        "Early disease detection and prevention",
        "Real-time quality grading for better pricing"
      ],
      image: "https://images.unsplash.com/photo-1681999735650-3b56d16ffd17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWdhcmNhbmUlMjBmaWVsZCUyMGFlcmlhbCUyMHZpZXclMjBhZ3JpY3VsdHVyZXxlbnwxfHx8fDE3NTU4Njg3MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-blue-50 to-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-green-500/[0.02] bg-[size:20px_20px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-800 border-green-200 mb-6">
              Comprehensive Solutions
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Comprehensive 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                {" "}Agricultural Intelligence
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At Dotflick Ventures, we offer more than just products; we provide integrated solutions designed to address 
              the multifaceted challenges of modern agriculture. Our suite of offerings, centered around the Vaigo drone 
              and the Agro AI Ecosystem, empowers farmers with the tools and insights needed to optimize every aspect of their operations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">
                From Precision Application to Data-Driven Decision Making
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our integrated approach moves beyond traditional farming methods, enabling targeted interventions 
                that lead to healthier crops, reduced environmental impact, and significant cost savings.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-gray-100 hover:border-green-200 transition-colors">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg flex items-center justify-center">
                      <capability.icon className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm">{capability.title}</h3>
                      <p className="text-xs text-gray-600">{capability.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-3xl blur-3xl opacity-20 transform rotate-6" />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1586771107445-d3ca888129ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGZhcm0lMjBhZ3JpY3VsdHVyZSUyMGRyb25lfGVufDF8fHx8MTc1NTkzMzMzMXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Comprehensive agricultural solutions"
                className="relative z-10 w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Integrated Solution Suite
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each solution is designed to work seamlessly together, creating a comprehensive ecosystem 
              that addresses every aspect of modern agricultural operations.
            </p>
          </div>

          <div className="space-y-16">
            {solutions.map((solution, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-blue-100 rounded-xl flex items-center justify-center">
                      <solution.icon className="w-7 h-7 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{solution.title}</h3>
                      <p className="text-lg text-green-600 font-medium">{solution.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">{solution.description}</p>
                  
                  <div className="space-y-3">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button 
                    onClick={() => navigate('/products')}
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl blur-2xl opacity-20 transform rotate-3" />
                  <ImageWithFallback
                    src={solution.image}
                    alt={solution.title}
                    className="relative z-10 w-full h-auto rounded-2xl shadow-xl"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry-Specific Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 border-blue-200 mb-4">
              Industry-Specific Solutions
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tailored for Your Success
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              While our technology is broadly applicable, we develop industry-specific solutions 
              to address the unique needs of various crops and agricultural sectors.
            </p>
          </div>

          {industrySpecific.map((solution, index) => (
            <Card key={index} className="border border-gray-200 overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <ImageWithFallback
                    src={solution.image}
                    alt={`${solution.crop} cultivation`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center space-x-2 mb-2">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{solution.location}</span>
                    </div>
                    <h3 className="text-2xl font-bold">{solution.crop} Optimization</h3>
                  </div>
                </div>
                
                <CardContent className="p-3 sm:p-4 md:p-6 lg:p-8">
                  <h4 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-4 break-words leading-tight">
                    Specialized Agricultural Solutions
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">{solution.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <h5 className="font-semibold text-gray-900">Key Benefits:</h5>
                    {solution.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-start space-x-3">
                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 bg-green-500 rounded-full" />
                        </div>
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-2 sm:gap-4">
                    <Badge className="bg-green-100 text-green-800 text-xs">
                      MahaAgri-AI Policy Aligned
                    </Badge>
                    <Badge className="bg-blue-100 text-blue-800 text-xs">
                      Climate-Adaptive Design
                    </Badge>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Advanced Features */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced Agricultural Intelligence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our solutions leverage cutting-edge AI and digital twin technology to provide 
              unprecedented insights and control over your agricultural operations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border border-green-100 hover:border-green-200 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Climate-Adaptive Crop Design</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  AI-powered simulation of crop growth under diverse climate conditions, 
                  recommending optimal genetic traits for enhanced resilience.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-blue-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Activity className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Real-Time Quality Grading</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Monitor quality parameters like sugar content directly on growing plants, 
                  transforming pricing, procurement, and contract management.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-purple-100 hover:border-purple-200 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Database className="w-7 h-7 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Digital Twin Integration</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Complete virtual replica of your farmland with granular Pixel, Cube, 
                  and Tile analysis secured by blockchain technology.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Transform Your Agricultural Operations Today
          </h2>
          <p className="text-xl text-green-100 mb-8 leading-relaxed">
            Discover how our comprehensive and tailored solutions can empower your farm 
            to achieve greater productivity, sustainability, and profitability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/contact')}
              className="bg-white text-green-600 hover:bg-gray-50 px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Schedule Consultation
            </button>
            <button 
              onClick={() => navigate('/products')}
              className="border border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Explore Products
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}