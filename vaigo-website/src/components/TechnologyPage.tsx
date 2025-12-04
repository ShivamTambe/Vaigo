// components/TechnologyPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./ImageWithFallback";
import Reveal from "../components/animations/Reveal";

import {
  Brain,
  Plane,
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
  Layers,
} from "lucide-react";

export function TechnologyPage() {
  const navigate = useNavigate();

  const fadeUp = {
    hidden: { opacity: 0, y: 18 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay },
    }),
  };

  const cardHover = { scale: 1.03, transition: { duration: 0.25 } };

  const technologies = [
    {
      icon: Brain,
      title: "AI and Machine Learning",
      description:
        "Central intelligence enabling predictive capabilities, automated decision-making, and continuous optimization",
      features: [
        "Predictive Analytics for yield estimation and disease prediction",
        "Advanced Computer Vision for crop health analysis",
        "Reinforcement Learning for optimization",
        "Natural Language Processing for intuitive interaction",
      ],
    },
    {
      icon: Plane,
      title: "Advanced Drone Technology",
      description:
        "Precision aerial platforms for data acquisition and targeted application with industry-leading capabilities",
      features: [
        "High-precision RTK/PPK positioning (±1cm accuracy)",
        "Multi-directional obstacle avoidance systems",
        "High-efficiency propulsion with optimized flight time",
        "Modular design with IP67/IP68 ratings",
      ],
    },
    {
      icon: Wifi,
      title: "IoT Integration",
      description:
        "Comprehensive connectivity forming the nervous system of intelligent agricultural operations",
      features: [
        "Ground-based sensor networks for environmental monitoring",
        "Plant-to-cloud communication via nano-biosensors",
        "Automated irrigation and fertilization systems",
        "Seamless farm equipment connectivity",
      ],
    },
    {
      icon: Shield,
      title: "Blockchain & Tokenization",
      description:
        "Ensuring transparency, security, and innovative financial models through distributed ledger technology",
      features: [
        "Digital Twin tokenization (Pixels, Cubes, Tiles)",
        "Immutable farm records and traceability",
        "Smart contracts for automated transactions",
        "Proof-of-Farming verification mechanism",
      ],
    },
  ];

  const innovations = [
    {
      icon: Layers,
      title: "Advanced Sensor Fusion",
      description:
        "Combining visual, multispectral, LiDAR, and thermal data for comprehensive field analysis",
    },
    {
      icon: Cog,
      title: "Robotics and Automation",
      description:
        "Autonomous systems performing complex tasks from precision spraying to micro-fertilization",
    },
    {
      icon: Database,
      title: "Big Data Analytics",
      description:
        "Robust platforms processing vast agricultural datasets to extract actionable insights",
    },
    {
      icon: Smartphone,
      title: "Human-Machine Interface",
      description:
        "Intuitive interfaces making sophisticated technology accessible to all farmers",
    },
  ];

  const aiCapabilities = [
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description:
        "Analyze historical and real-time data to predict yields, disease outbreaks, and optimal harvest timing",
    },
    {
      icon: Eye,
      title: "Computer Vision",
      description:
        "Process high-resolution imagery to identify crop health, nutrient deficiencies, and pest damage",
    },
    {
      icon: Brain,
      title: "Reinforcement Learning",
      description:
        "Continuously refine spraying patterns, irrigation schedules, and resource allocation models",
    },
    {
      icon: FileCheck,
      title: "Natural Language Processing",
      description:
        "Enable intuitive system interaction and process unstructured agricultural data",
    },
  ];

  const droneFeatures = [
    {
      icon: Radar,
      title: "Precision Navigation",
      description:
        "RTK/PPK positioning with centimeter-level accuracy for precise flight paths and application",
    },
    {
      icon: Shield,
      title: "Obstacle Avoidance",
      description:
        "Multi-directional radar, LiDAR, and binocular vision for safe autonomous navigation",
    },
    {
      icon: Zap,
      title: "High-Efficiency Systems",
      description:
        "Optimized propulsion and intelligent battery management for maximum coverage",
    },
    {
      icon: Cog,
      title: "Modular Design",
      description:
        "Robust IP67/IP68 rated construction with easy maintenance and upgrade capabilities",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-blue-50 via-green-50 to-white pt-24 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-grid-blue-500/[0.03] bg-[size:20px_20px]" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <motion.h1
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 text-center"
          >
            The Foundation of{" "}
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Intelligent Agriculture
            </span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            custom={0.12}
            variants={fadeUp}
            className="text-xl text-gray-700 max-w-3xl mx-auto text-center mb-16"
          >
            We integrate advanced AI, robotics, IoT, and automation to build the
            future of agricultural innovation.
          </motion.p>

          {/* INNOVATIONS GRID */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {innovations.map((innovation, index) => (
                <Reveal key={index}>
                  <motion.div whileHover={cardHover}>
                    <Card className="border border-blue-100 hover:border-blue-200 transition-all">
                      <CardContent className="p-5">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-green-100 rounded-lg flex items-center justify-center">
                            <innovation.icon className="w-5 h-5 text-blue-600" />
                          </div>
                          <h3 className="font-semibold text-gray-900 text-base">
                            {innovation.title}
                          </h3>
                        </div>
                        <p className="text-sm text-gray-600">
                          {innovation.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Reveal>
              ))}
            </div>

            {/* HERO IMAGE */}
            <Reveal>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-500 rounded-3xl blur-3xl opacity-20 -rotate-6" />
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995"
                  alt="Tech Hero"
                  className="relative z-10 w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CORE TECHNOLOGIES */}
      <section className="pt-12  bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold text-center mb-10"
          >
            Core Technological Pillars
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <Reveal key={index}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="border border-gray-200 hover:border-blue-200 transition-all">
                    <CardContent className="p-8">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-green-100 rounded-xl flex items-center justify-center">
                          <tech.icon className="w-8 h-8 text-blue-600" />
                        </div>
                        <h3 className="text-2xl font-bold">{tech.title}</h3>
                      </div>

                      <p className="text-gray-600 mb-6">{tech.description}</p>

                      <div className="space-y-3">
                        {tech.features.map((feature, fIndex) => (
                          <div key={fIndex} className="flex items-start space-x-3">
                            <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                              <div className="w-2 h-2 bg-green-500 rounded-full" />
                            </div>
                            <span className="text-gray-700">{feature}</span>
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

      {/* AI SECTION */}
      <section className="pt-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Reveal>
              <h2 className="text-3xl font-bold">
                The Brains Behind The Farm — AI & Machine Learning
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {aiCapabilities.map((cap, index) => (
                <Reveal key={index}>
                  <motion.div whileHover={cardHover}>
                    <Card className="border border-purple-100 hover:border-purple-200 transition-all">
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-3 mb-2">
                          <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg flex items-center justify-center">
                            <cap.icon className="w-5 h-5 text-purple-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold">{cap.title}</h3>
                            <p className="text-sm text-gray-600">
                              {cap.description}
                            </p>
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
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995"
              alt="AI Learning"
              className="w-full h-auto rounded-2xl shadow-xl"
            />
          </Reveal>
        </div>
      </section>

      {/* DRONE TECHNOLOGY */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1473968512647-3e447244af8f"
              alt="Drone Tech"
              className="rounded-2xl shadow-xl"
            />
          </Reveal>

          <div className="space-y-6">
            {droneFeatures.map((feature, index) => (
              <Reveal key={index}>
                <motion.div whileHover={cardHover}>
                  <Card className="border border-green-100 hover:border-green-200 transition-all">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg flex items-center justify-center">
                          <feature.icon className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{feature.title}</h3>
                          <p className="text-sm text-gray-600">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Experience the Future of Agriculture?
            </h2>
          </Reveal>

          <Reveal>
            <p className="text-xl text-blue-100 my-6 leading-relaxed">
              Explore how Dotflick Ventures is building an intelligent, efficient,
              and sustainable agricultural future.
            </p>
          </Reveal>

          <Reveal>
            <div className="flex justify-center gap-4 flex-wrap">
              <button
                onClick={() => navigate("/solutions")}
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium"
              >
                Explore Solutions
              </button>

              <button
                onClick={() => navigate("/products")}
                className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-medium"
              >
                View Products
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
