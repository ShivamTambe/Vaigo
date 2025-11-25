// components/TechnologyPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './ImageWithFallback';
import Reveal from "../components/animations/Reveal";

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

  // Motion variants
  const fadeUp = {
    hidden: { opacity: 0, y: 18 },
    visible: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay } })
  };

  const cardHover = { scale: 1.02, transition: { duration: 0.18 } };

  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-green-50 to-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-blue-500/[0.02] bg-[size:20px_20px]" />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-12">
            <Badge className="bg-blue-100 text-blue-800 border-blue-200 mb-6 px-3 py-2">
              Advanced Technology
            </Badge>

            <motion.h1
              initial="hidden"
              animate="visible"
              custom={0}
              variants={fadeUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              The Foundation of
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">{" "}Intelligent Agriculture</span>
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              custom={0.12}
              variants={fadeUp}
              className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed text-[18px] md:text-[20px]"
            >
              At Dotflick Ventures, our commitment to revolutionizing agriculture is rooted in our relentless pursuit of technological innovation.
              We integrate the most advanced scientific principles and engineering breakthroughs to create solutions that are powerful, practical, and transformative.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <motion.h2
                initial="hidden"
                animate="visible"
                custom={0.16}
                variants={fadeUp}
                className="text-3xl font-bold text-gray-900"
              >
                Pioneering the Next Generation of Ag-Tech
              </motion.h2>

              <motion.p
                initial="hidden"
                animate="visible"
                custom={0.2}
                variants={fadeUp}
                className="text-lg text-gray-600 leading-relaxed text-[17px]"
              >
                Our innovation strategy is driven by a deep understanding of both agricultural science and cutting-edge digital technologies.
                We believe that the future of farming lies in the intelligent synthesis of these domains.
              </motion.p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {innovations.map((innovation, index) => (
                  <Reveal key={index} >
                    <motion.div whileHover={cardHover} className="transition-transform">
                      <Card className="border border-blue-100 hover:border-blue-200 transition-all duration-300">
                        <CardContent className="p-5">
                          <div className="flex items-center space-x-3 mb-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-green-100 rounded-lg flex items-center justify-center">
                              <innovation.icon className="w-5 h-5 text-blue-600" />
                            </div>
                            <h3 className="font-semibold text-gray-900 text-base">{innovation.title}</h3>
                          </div>
                          <p className="text-sm text-gray-600 leading-relaxed">{innovation.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Reveal>
                ))}
              </div>
            </div>

            <Reveal>
              <motion.div initial="hidden" animate="visible" custom={0.22} variants={fadeUp}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-500 rounded-3xl blur-3xl opacity-20 transform -rotate-6" />
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMG1hY2hpbmUlMjBsZWFybmluZyUyMGFncmljdWx0dXJlfGVufDF8fHx8MTc1NTkzMzI4M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Advanced agricultural technology and innovation"
                    className="relative z-10 w-full h-auto rounded-2xl shadow-2xl"
                  />
                </div>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Core Technologies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-12">
            <motion.h2
              initial="hidden"
              animate="visible"
              custom={0}
              variants={fadeUp}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Core Technological Pillars
            </motion.h2>
            <motion.p
              initial="hidden"
              animate="visible"
              custom={0.08}
              variants={fadeUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Our technology stack converges to form the intelligent backbone of the Agro AI Ecosystem, driving precision, efficiency, and sustainability in farming.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <Reveal key={index}>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeUp}
                  custom={0.12 + index * 0.06}
                  whileHover={{ y: -4, boxShadow: "0 12px 30px rgba(3,7,18,0.08)" }}
                  className="transform"
                >
                  <Card className="border border-gray-200 hover:border-blue-200 transition-all duration-300 hover:shadow-lg">
                    <CardContent className="p-8">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-green-100 rounded-xl flex items-center justify-center">
                          <tech.icon className="w-8 h-8 text-blue-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 leading-tight">{tech.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-6 leading-relaxed text-[16px]">{tech.description}</p>

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
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* AI and Machine Learning Deep Dive */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <motion.div initial="hidden" animate="visible" custom={0} variants={fadeUp}>
                <Badge className="bg-purple-100 text-purple-800 border-purple-200 mb-4 px-3 py-2">
                  Artificial Intelligence
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Brains Behind the Farm</h2>
                <p className="text-lg text-gray-600 leading-relaxed text-[16px]">
                  Artificial Intelligence and Machine Learning are the central intelligence of our Agro AI Ecosystem,
                  enabling predictive capabilities, automated decision-making, and continuous optimization.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {aiCapabilities.map((capability, index) => (
                  <Reveal key={index}>
                    <motion.div whileHover={cardHover} className="transform">
                      <Card className="border border-purple-100 hover:border-purple-200 transition-all duration-300">
                        <CardContent className="p-4 sm:p-5">
                          <div className="flex items-start space-x-3 mb-2">
                            <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <capability.icon className="w-5 h-5 text-purple-600" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <h3 className="font-semibold text-gray-900 text-sm leading-tight mb-1">{capability.title}</h3>
                              <p className="text-sm text-gray-600 leading-relaxed break-words">{capability.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Reveal>
                ))}
              </div>
            </div>

            <Reveal>
              <motion.div initial="hidden" animate="visible" custom={0.22} variants={fadeUp}>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMG1hY2hpbmUlMjBsZWFybmluZyUyMGFncmljdWx0dXJlfGVufDF8fHx8MTc1NTkzMzI4M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="AI and machine learning in agriculture"
                  className="w-full h-auto rounded-2xl shadow-xl"
                />
              </motion.div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Drone Technology Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative lg:order-2">
              <Reveal>
                <motion.div initial="hidden" animate="visible" custom={0.12} variants={fadeUp}>
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcm9uZSUyMHRlY2hub2xvZ3klMjBhZ3JpY3VsdHVyZXxlbnwxfHx8fDE3NTU5MzMyODd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Advanced drone technology"
                    className="w-full h-auto rounded-2xl shadow-xl"
                  />
                </motion.div>
              </Reveal>
            </div>

            <div className="space-y-8 lg:order-1">
              <div>
                <Badge className="bg-green-100 text-green-800 border-green-200 mb-4 px-3 py-2">
                  Drone Technology
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Eyes and Hands in the Sky</h2>
                <p className="text-lg text-gray-600 leading-relaxed text-[16px]">
                  Our advanced drone technology, exemplified by the Vaigo UAV, serves as the primary aerial platform
                  for data acquisition and precision application in demanding agricultural environments.
                </p>
              </div>

              <div className="space-y-4">
                {droneFeatures.map((feature, index) => (
                  <Reveal key={index}>
                    <motion.div whileHover={cardHover} className="transform">
                      <Card className="border border-green-100 hover:border-green-200 transition-all duration-300">
                        <CardContent className="p-4">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg flex items-center justify-center">
                              <feature.icon className="w-6 h-6 text-green-600" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-900 mb-1 text-lg">{feature.title}</h3>
                              <p className="text-sm text-gray-600">{feature.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IoT and Blockchain Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* IoT Section */}
            <div className="space-y-8">
              <Reveal>
                <motion.div initial="hidden" animate="visible" custom={0} variants={fadeUp}>
                  <Badge className="bg-blue-100 text-blue-800 border-blue-200 mb-4 px-3 py-2">IoT Integration</Badge>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Connecting Every Aspect of Your Farm</h2>
                  <p className="text-gray-600 leading-relaxed text-[16px]">
                    The Internet of Things forms the nervous system of our ecosystem, connecting physical devices
                    and sensors across the farm to our central AI platform for real-time insights.
                  </p>
                </motion.div>
              </Reveal>

              <div className="space-y-4">
                <Reveal>
                  <motion.div initial="hidden" animate="visible" custom={0.08} variants={fadeUp} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Satellite className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Ground-Based Sensors</h3>
                      <p className="text-sm text-gray-600">Smart sensor networks for soil moisture, nutrients, pH, and temperature monitoring</p>
                    </div>
                  </motion.div>
                </Reveal>

                <Reveal>
                  <motion.div initial="hidden" animate="visible" custom={0.12} variants={fadeUp} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Cpu className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Plant-to-Cloud Communication</h3>
                      <p className="text-sm text-gray-600">Nano-biosensors detecting molecular plant stress signals in real-time</p>
                    </div>
                  </motion.div>
                </Reveal>

                <Reveal>
                  <motion.div initial="hidden" animate="visible" custom={0.16} variants={fadeUp} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Zap className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Automated Systems</h3>
                      <p className="text-sm text-gray-600">Smart irrigation and fertilization responding to AI recommendations</p>
                    </div>
                  </motion.div>
                </Reveal>
              </div>
            </div>

            {/* Blockchain Section */}
            <div className="space-y-8">
              <Reveal>
                <motion.div initial="hidden" animate="visible" custom={0.04} variants={fadeUp}>
                  <Badge className="bg-indigo-100 text-indigo-800 border-indigo-200 mb-4 px-3 py-2">Blockchain & Tokenization</Badge>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Ensuring Trust and New Opportunities</h2>
                  <p className="text-gray-600 leading-relaxed text-[16px]">
                    Blockchain technology provides transparency, security, and innovative financial models,
                    creating an immutable ledger for agricultural data and transactions.
                  </p>
                </motion.div>
              </Reveal>

              <div className="space-y-4">
                <Reveal>
                  <motion.div initial="hidden" animate="visible" custom={0.08} variants={fadeUp} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Layers className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Digital Twin Tokenization</h3>
                      <p className="text-sm text-gray-600">Farmland tokenized into Pixels, Cubes, and Tiles with unique blockchain IDs</p>
                    </div>
                  </motion.div>
                </Reveal>

                <Reveal>
                  <motion.div initial="hidden" animate="visible" custom={0.12} variants={fadeUp} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Lock className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Immutable Records</h3>
                      <p className="text-sm text-gray-600">Tamper-proof history of all farm activities for transparency and traceability</p>
                    </div>
                  </motion.div>
                </Reveal>

                <Reveal>
                  <motion.div initial="hidden" animate="visible" custom={0.16} variants={fadeUp} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileCheck className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Smart Contracts</h3>
                      <p className="text-sm text-gray-600">Automated contracts for land leasing, crop sales, and agricultural agreements</p>
                    </div>
                  </motion.div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
          <motion.h2 initial="hidden" animate="visible" custom={0} variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience the Future of Agriculture?
          </motion.h2>

          <motion.p initial="hidden" animate="visible" custom={0.08} variants={fadeUp} className="text-xl text-blue-100 mb-8 leading-relaxed text-[18px]">
            By combining these advanced technologies, Dotflick Ventures is building a future where agriculture
            is more intelligent, efficient, sustainable, and profitable.
          </motion.p>

          <motion.div initial="hidden" animate="visible" custom={0.12} variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
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
          </motion.div>
        </div>
      </section>
    </div>
  );
}
