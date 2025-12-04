// src/components/SolutionsPage.tsx
import React from "react";
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './ImageWithFallback';
import solutionsData from "../data/solution.json";
import industrySpecific from "../data/industrySpecificSolutions.json"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

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

import Reveal from "../components/animations/Reveal";

const iconMap: Record<string, any> = {
  Target,
  Droplets,
  BarChart3,
  Settings,
  Globe,
  MapPin,
  Activity,
  Camera,
};

// 2️⃣ Replace string icons with components
const solutions = solutionsData.map((s: any) => ({
  ...s,
  icon: iconMap[s.icon] || Target, // fallback icon
}));

function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")      // optional: replace & with "and"
    .replace(/\s+/g, "-")      // replace spaces with dash
    .replace(/[^\w-]+/g, "");  // remove special chars
}

export function SolutionsPage() {

  const navigate = useNavigate();

  const handleClick = (name: string) => {
    const slug = slugify(name);
    navigate(`/industry/${slug}`);
  };


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

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-blue-50 to-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-green-500/[0.02] bg-[size:20px_20px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal type="slide" y={18} delay={0}>
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
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal type="fade" y={16} delay={0.06}>
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
                    <Reveal key={index} type="zoom" delay={0.08 + index * 0.03} y={6} scale={1.01}>
                      <div className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-gray-100 hover:border-green-200 transition-colors">
                        <div className="w-8 h-8 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg flex items-center justify-center">
                          <capability.icon className="w-4 h-4 text-green-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 text-sm">{capability.title}</h3>
                          <p className="text-sm text-gray-600">{capability.description}</p>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal type="zoom" delay={0.06} y={8} scale={0.995}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-3xl blur-3xl opacity-20 transform rotate-6" />
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1586771107445-d3ca888129ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGZhcm0lMjBhZ3JpY3VsdHVyZSUyMGRyb25lfGVufDF8fHx8MTc1NTkzMzMzMXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Comprehensive agricultural solutions"
                  className="relative z-10 w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="pt-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal type="slide" y={16} delay={0}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Integrated Solution Suite
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Each solution is designed to work seamlessly together, creating a comprehensive ecosystem
                that addresses every aspect of modern agricultural operations.
              </p>
            </div>
          </Reveal>

          <div className="space-y-16">
            {solutions.map((solution: any, index: number) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <Reveal type="fade" y={14} delay={0.06 + index * 0.04}>
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
                      {solution.features.map((feature: string, featureIndex: number) => (
                        <Reveal key={featureIndex} type="slide" y={8} delay={0.08 + featureIndex * 0.02}>
                          <div className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        </Reveal>
                      ))}
                    </div>

                    <Reveal type="zoom" delay={0.18}>
                      <button
                        onClick={() => navigate(`/solutions/${solution.title.toLowerCase().replace(/\s+/g, "-")}`)}
                        className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </Reveal>
                  </div>
                </Reveal>

                <Reveal type="zoom" delay={0.08 + index * 0.03} y={8} scale={0.995}>
                  <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl blur-2xl opacity-20 transform rotate-3" />
                    <ImageWithFallback
                      src={solution.image}
                      alt={solution.title}
                      className="relative z-10 w-full h-auto rounded-2xl shadow-xl"
                    />
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry-Specific Solutions */}
      <section className="pt-10 pb-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <Reveal type="slide" y={16} delay={0}>
            <div className="text-center mb-16">
              <Badge className="bg-blue-100 text-blue-800 border-blue-200 mb-4">
                Industry-Specific Solutions
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Tailored for Your Success
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                While our technology is broadly applicable, we develop industry-specific
                solutions to address the unique needs of various crops and agricultural sectors.
              </p>
            </div>
          </Reveal>

          {/* Solutions Grid */}
          <div className="space-y-12">
            {industrySpecific.map((solution: any, index: number) => (
              <Reveal key={index} type="fade" y={12} delay={0.06 + index * 0.04}>
                <Card
                  onClick={() => handleClick(solution.name)}
                  className="border border-gray-200 overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                >
                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Left: Image Section */}
                    <div className="relative h-64 lg:h-auto">
                      <img
                        src={solution.image}
                        alt={`${solution.name} cultivation`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <div className="flex items-center space-x-2 mb-2">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{solution.location}</span>
                        </div>
                        <h3 className="text-2xl font-bold">
                          {solution.name}
                        </h3>
                      </div>
                    </div>

                    {/* Right: Details Section */}
                    <CardContent className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                      <div>
                        <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 break-words leading-tight">
                          {solution.name}
                        </h4>
                        <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
                          {solution.description}
                        </p>

                        {/* Benefits */}
                        <div className="space-y-3 mb-6">
                          <h5 className="font-semibold text-gray-900">Key Benefits:</h5>
                          <ul className="space-y-2">
                            {solution.benefits.map((benefit: string, benefitIndex: number) => (
                              <Reveal key={benefitIndex} type="slide" y={8} delay={0.08 + benefitIndex * 0.02}>
                                <li
                                  className="flex items-start space-x-3"
                                >
                                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                                  </div>
                                  <span className="text-gray-700 text-sm">{benefit}</span>
                                </li>
                              </Reveal>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Badges */}
                      <div className="flex flex-wrap items-center gap-3 mt-4">
                        <Badge className="bg-green-100 text-green-800 text-sm">
                          MahaAgri-AI Policy Aligned
                        </Badge>
                        <Badge className="bg-blue-100 text-blue-800 text-sm">
                          Climate-Adaptive Design
                        </Badge>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>


      {/* Advanced Features */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal type="slide" y={16} delay={0}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Advanced Agricultural Intelligence
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our solutions leverage cutting-edge AI and digital twin technology to provide
                unprecedented insights and control over your agricultural operations.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            <Reveal type="zoom" delay={0.06}>
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
            </Reveal>

            <Reveal type="zoom" delay={0.08}>
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
            </Reveal>

            <Reveal type="zoom" delay={0.1}>
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
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal type="slide" y={18} delay={0}>
            <div>
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
          </Reveal>
        </div>
      </section>
    </div>
  );
}
