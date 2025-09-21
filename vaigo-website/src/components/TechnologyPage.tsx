import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './ImageWithFallback';
import { 
  Brain, 
  Plane, 
  Cpu, 
  Shield, 
  Zap, 
  Wifi, 
  Database, 
  Eye,
  Cog,
  Radar,
  Camera,
  Satellite,
  Smartphone,
  Lock,
  FileCheck,
  TrendingUp,
  Layers
} from 'lucide-react';

import { useNavigate } from "react-router-dom";

export function TechnologyPage() {

  const navigate = useNavigate();

  const technologies = [
    {
      icon: Brain,
      title: "AI and Machine Learning",
      description: "Central intelligence enabling predictive capabilities, automated decision-making, and continuous optimization",
      features: [
        "Predictive Analytics for yield estimation and disease prediction",
        "Advanced Computer Vision for crop health analysis",
        "Reinforcement Learning for optimization",
        "Natural Language Processing for intuitive interaction"
      ]
    },
    {
      icon: Plane,
      title: "Advanced Drone Technology",
      description: "Precision aerial platforms for data acquisition and targeted application with industry-leading capabilities",
      features: [
        "High-precision RTK/PPK positioning (±1cm accuracy)",
        "Multi-directional obstacle avoidance systems",
        "High-efficiency propulsion with optimized flight time",
        "Modular design with IP67/IP68 ratings"
      ]
    },
    {
      icon: Wifi,
      title: "IoT Integration",
      description: "Comprehensive connectivity forming the nervous system of intelligent agricultural operations",
      features: [
        "Ground-based sensor networks for environmental monitoring",
        "Plant-to-cloud communication via nano-biosensors",
        "Automated irrigation and fertilization systems",
        "Seamless farm equipment connectivity"
      ]
    },
    {
      icon: Shield,
      title: "Blockchain & Tokenization",
      description: "Ensuring transparency, security, and innovative financial models through distributed ledger technology",
      features: [
        "Digital Twin tokenization (Pixels, Cubes, Tiles)",
        "Immutable farm records and traceability",
        "Smart contracts for automated transactions",
        "Proof-of-Farming verification mechanism"
      ]
    }
  ];

  const innovations = [
    {
      icon: Layers,
      title: "Advanced Sensor Fusion",
      description: "Combining visual, multispectral, LiDAR, and thermal data for comprehensive field analysis"
    },
    {
      icon: Cog,
      title: "Robotics and Automation",
      description: "Autonomous systems performing complex tasks from precision spraying to micro-fertilization"
    },
    {
      icon: Database,
      title: "Big Data Analytics",
      description: "Robust platforms processing vast agricultural datasets to extract actionable insights"
    },
    {
      icon: Smartphone,
      title: "Human-Machine Interface",
      description: "Intuitive interfaces making sophisticated technology accessible to all farmers"
    }
  ];

  const aiCapabilities = [
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Analyze historical and real-time data to predict yields, disease outbreaks, and optimal harvest timing"
    },
    {
      icon: Eye,
      title: "Computer Vision",
      description: "Process high-resolution imagery to identify crop health, nutrient deficiencies, and pest damage"
    },
    {
      icon: Brain,
      title: "Reinforcement Learning",
      description: "Continuously refine spraying patterns, irrigation schedules, and resource allocation models"
    },
    {
      icon: FileCheck,
      title: "Natural Language Processing",
      description: "Enable intuitive system interaction and process unstructured agricultural data"
    }
  ];

  const droneFeatures = [
    {
      icon: Radar,
      title: "Precision Navigation",
      description: "RTK/PPK positioning with centimeter-level accuracy for precise flight paths and application"
    },
    {
      icon: Shield,
      title: "Obstacle Avoidance",
      description: "Multi-directional radar, LiDAR, and binocular vision for safe autonomous navigation"
    },
    {
      icon: Zap,
      title: "High-Efficiency Systems",
      description: "Optimized propulsion and intelligent battery management for maximum coverage"
    },
    {
      icon: Cog,
      title: "Modular Design",
      description: "Robust IP67/IP68 rated construction with easy maintenance and upgrade capabilities"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-green-50 to-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-blue-500/[0.02] bg-[size:20px_20px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 border-blue-200 mb-6">
              Advanced Technology
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              The Foundation of 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                {" "}Intelligent Agriculture
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At Dotflick Ventures, our commitment to revolutionizing agriculture is rooted in our relentless pursuit of technological innovation. 
              We integrate the most advanced scientific principles and engineering breakthroughs to create solutions that are powerful, practical, and transformative.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">
                Pioneering the Next Generation of Ag-Tech
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our innovation strategy is driven by a deep understanding of both agricultural science and cutting-edge digital technologies. 
                We believe that the future of farming lies in the intelligent synthesis of these domains.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {innovations.map((innovation, index) => (
                  <Card key={index} className="border border-blue-100 hover:border-blue-200 transition-all duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-100 to-green-100 rounded-lg flex items-center justify-center">
                          <innovation.icon className="w-4 h-4 text-blue-600" />
                        </div>
                        <h3 className="font-semibold text-gray-900 text-sm">{innovation.title}</h3>
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed">{innovation.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-500 rounded-3xl blur-3xl opacity-20 transform -rotate-6" />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMG1hY2hpbmUlMjBsZWFybmluZyUyMGFncmljdWx0dXJlfGVufDF8fHx8MTc1NTkzMzI4M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Advanced agricultural technology and innovation"
                className="relative z-10 w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Technologies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Core Technological Pillars
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our technology stack converges to form the intelligent backbone of the Agro AI Ecosystem, 
              driving precision, efficiency, and sustainability in farming.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <Card key={index} className="border border-gray-200 hover:border-blue-200 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-green-100 rounded-xl flex items-center justify-center">
                      <tech.icon className="w-7 h-7 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{tech.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">{tech.description}</p>
                  <div className="space-y-3">
                    {tech.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 bg-green-500 rounded-full" />
                        </div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI and Machine Learning Deep Dive */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <Badge className="bg-purple-100 text-purple-800 border-purple-200 mb-4">
                  Artificial Intelligence
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  The Brains Behind the Farm
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Artificial Intelligence and Machine Learning are the central intelligence of our Agro AI Ecosystem, 
                  enabling predictive capabilities, automated decision-making, and continuous optimization.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {aiCapabilities.map((capability, index) => (
                  <Card key={index} className="border border-purple-100 hover:border-purple-200 transition-all duration-300">
                    <CardContent className="p-3 sm:p-4">
                      <div className="flex items-start space-x-3 mb-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <capability.icon className="w-4 h-4 text-purple-600" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="font-semibold text-gray-900 text-sm leading-tight mb-1">{capability.title}</h3>
                          <p className="text-xs text-gray-600 leading-relaxed break-words">{capability.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMG1hY2hpbmUlMjBsZWFybmluZyUyMGFncmljdWx0dXJlfGVufDF8fHx8MTc1NTkzMzI4M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="AI and machine learning in agriculture"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Drone Technology Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative lg:order-2">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcm9uZSUyMHRlY2hub2xvZ3klMjBhZ3JpY3VsdHVyZXxlbnwxfHx8fDE3NTU5MzMyODd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Advanced drone technology"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>

            <div className="space-y-8 lg:order-1">
              <div>
                <Badge className="bg-green-100 text-green-800 border-green-200 mb-4">
                  Drone Technology
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  The Eyes and Hands in the Sky
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our advanced drone technology, exemplified by the Vaigo UAV, serves as the primary aerial platform 
                  for data acquisition and precision application in demanding agricultural environments.
                </p>
              </div>

              <div className="space-y-4">
                {droneFeatures.map((feature, index) => (
                  <Card key={index} className="border border-green-100 hover:border-green-200 transition-all duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg flex items-center justify-center">
                          <feature.icon className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                          <p className="text-sm text-gray-600">{feature.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IoT and Blockchain Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* IoT Section */}
            <div className="space-y-8">
              <div>
                <Badge className="bg-blue-100 text-blue-800 border-blue-200 mb-4">
                  IoT Integration
                </Badge>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Connecting Every Aspect of Your Farm
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  The Internet of Things forms the nervous system of our ecosystem, connecting physical devices 
                  and sensors across the farm to our central AI platform for real-time insights.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Satellite className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Ground-Based Sensors</h3>
                    <p className="text-sm text-gray-600">Smart sensor networks for soil moisture, nutrients, pH, and temperature monitoring</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Cpu className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Plant-to-Cloud Communication</h3>
                    <p className="text-sm text-gray-600">Nano-biosensors detecting molecular plant stress signals in real-time</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Automated Systems</h3>
                    <p className="text-sm text-gray-600">Smart irrigation and fertilization responding to AI recommendations</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Blockchain Section */}
            <div className="space-y-8">
              <div>
                <Badge className="bg-indigo-100 text-indigo-800 border-indigo-200 mb-4">
                  Blockchain & Tokenization
                </Badge>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Ensuring Trust and New Opportunities
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Blockchain technology provides transparency, security, and innovative financial models, 
                  creating an immutable ledger for agricultural data and transactions.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Layers className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Digital Twin Tokenization</h3>
                    <p className="text-sm text-gray-600">Farmland tokenized into Pixels, Cubes, and Tiles with unique blockchain IDs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Lock className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Immutable Records</h3>
                    <p className="text-sm text-gray-600">Tamper-proof history of all farm activities for transparency and traceability</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileCheck className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Smart Contracts</h3>
                    <p className="text-sm text-gray-600">Automated contracts for land leasing, crop sales, and agricultural agreements</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience the Future of Agriculture?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            By combining these advanced technologies, Dotflick Ventures is building a future where agriculture 
            is more intelligent, efficient, sustainable, and profitable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
            onClick={() => navigate("/solutions")}
            className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-3 rounded-lg font-medium transition-colors"
          >
            Explore Our Solutions
          </button>
          <button 
            onClick={() => navigate("/products")}
            className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-medium transition-colors"
          >
            View Products
          </button>
          </div>
        </div>
      </section>
    </div>
  );
}