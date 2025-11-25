// components/VaigoCenter.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";

import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { ImageWithFallback } from "../components/ImageWithFallback";
import Reveal from "../components/animations/Reveal";

import {
  Building,
  Wrench,
  GraduationCap,
  Plane,
  Cpu,
  Users,
  Leaf,
  CheckCircle,
} from "lucide-react";

/**
 * Full VaigoCenter.jsx
 * - Uses local file: /videos/vaigo.mp4 (place in public/videos/vaigo.mp4)
 * - Fullscreen MP4 hero with true parallax
 * - Smooth bottom fade + curved divider to prevent content appearing under the video
 * - All original content preserved
 */

export function VaigoCenter() {
  const navigate = useNavigate();
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const divisions = [
    {
      title: "Drone Sales & Distribution",
      desc: "Authorized point for selling agriculture, industrial, and surveillance drones with accessories and spare parts.",
      outcome: "Creates rural drone dealerships, enhances accessibility to technology.",
      icon: Plane,
    },
    {
      title: "Drone Rental & Leasing",
      desc: "Provides drones on pay-per-use or subscription basis for farmers, surveyors, photographers, and departments.",
      outcome: "Affordable access; increases drone utilization in seasonal or project-based needs.",
      icon: Users,
    },
    {
      title: "Training & Certification",
      desc: "Simulation labs, classrooms, DGCA-approved trainers for pilot certification, maintenance, and data analysis.",
      outcome: "Employment creation through skill certification of youth and women.",
      icon: GraduationCap,
    },
    {
      title: "Repairing & Maintenance Bay",
      desc: "Portable workshop cabin for assembly, diagnostics, calibration, and spare-part replacement.",
      outcome: "Ensures drone uptime, supports local drone economy.",
      icon: Wrench,
    },
    {
      title: "Drone Port & Operations Pad",
      desc: "Fenced and geo-tagged take-off/landing pad with charging, ADS-B beacon, and weather station.",
      outcome: "Enables daily drone operations for agriculture spraying, surveillance, and logistics.",
      icon: Building,
    },
  ];

  const sectors = [
    {
      sector: "Agriculture",
      useCase: "Spraying, mapping, pest detection",
      outcome: "Precision farming & cost reduction",
    },
    {
      sector: "Photography & Media",
      useCase: "Events, tourism, real-estate aerial coverage",
      outcome: "Creative local enterprise",
    },
    {
      sector: "Logistics & Delivery",
      useCase: "Medical, e-commerce, agri-input transport",
      outcome: "Rural connectivity revolution",
    },
    {
      sector: "Industrial Inspection",
      useCase: "Power lines, construction, irrigation audits",
      outcome: "Safety, data-driven maintenance",
    },
    {
      sector: "Security & Disaster Response",
      useCase: "Emergency monitoring, fire watch, flood rescue",
      outcome: "Community resilience and quick response",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-gray-900 overflow-x-hidden">

      {/* ============================= */}
      {/* ★ FULLSCREEN PARALLAX VIDEO HERO */}
      {/* ============================= */}
       {/* ============================= */}
{/* ★ FULLSCREEN VIDEO HERO (UPDATED ANIMATIONS) */}
{/* ============================= */}
<section className="relative w-full h-screen flex items-center justify-center overflow-hidden">

  {/* Background Video */}
  <video
    className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2"
    src="/videos/vaigo.mp4"
    autoPlay
    muted
    loop
    playsInline
  />

  {/* Subtle Overlay */}
  <div className="absolute inset-0 bg-black/28"></div>

  {/* HERO CONTENT */}
  <div className="relative z-10 max-w-4xl mx-auto text-white px-6 text-center pb-20 sm:pb-20">


    {/* Animated Badge */}
    <motion.div
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Badge className="bg-white/10 text-white border-white/20 mb-4">
        VAIGO Center
      </Badge>
    </motion.div>

    {/* Animated Main Heading */}
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4"
    >
      Drone & Satellite{" "}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-green-300"
      >
        Innovations for Rural India
      </motion.span>
    </motion.h1>

    {/* Animated Subtext */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.3 }}
      className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto"
    >
      A 1-acre drone ecosystem powering agriculture, logistics, training,
      and tech-enabled operations across every village.
    </motion.p>

    {/* Buttons */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.7 }}
      className="mt-8 flex gap-4 justify-center flex-wrap"
    >
      <motion.div whileHover={{ scale: 1.05 }}>
        <Button
          size="lg"
          className="bg-white text-black px-7 py-3 shadow-lg"
          onClick={() => navigate("/contact")}
        >
          Get in Touch
        </Button>
      </motion.div>

      <motion.div whileHover={{ scale: 1.05 }}>
        <Button
          size="lg"
          variant="outline"
          className="border-white/40 text-white hover:bg-white/15 px-7 py-3"
          onClick={() => navigate("/Franchisee")}
        >
          Explore Franchise
        </Button>
      </motion.div>
    </motion.div>

    {/* Highlights */}
    {/* Highlights — with black text outline */}
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1, duration: 0.8 }}
  className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-white text-sm px-6"
>
  {[
    "DGCA Approved Operations",
    "Drone Sales, Rentals, Training",
    "Precision Agriculture Solutions",
    "Rural Tech Empowerment"
  ].map((item, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.1 + index * 0.1 }}
      className="flex items-center gap-2"
    >
      <CheckCircle className="text-green-300 w-5 h-5" />
      <span className="text-white font-medium"
  style={{
    textShadow: `
      -1px 0 0 #000,
      1px 0 0 #000,
      0 -1px 0 #000,
      0 1px 0 #000
    `
  }}
>
  {item}
</span>

    </motion.div>
  ))}
</motion.div>

  </div>

  {/* Fade Divider */}
  <div className="absolute bottom-0 left-0 w-full h-24 pointer-events-none bg-gradient-to-t from-white to-transparent"></div>

  {/* Curve Divider */}
  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
    <svg
      className="relative block w-full h-[90px]"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
    >
      <path
        d="M321.39,56.44C161.77,75.63,0,0,0,0V120H1200V0s-140,72-300,56.44C775.47,40.7,643.43,0,600,0S398.05,37.25,321.39,56.44Z"
        className="fill-white"
      ></path>
    </svg>
  </div>
</section>

{/* <div className="h-24 bg-white"></div> */}


      {/* ============================= */}
      {/* FULL ORIGINAL PAGE CONTENT (UNCHANGED) */}
      {/* ============================= */}

      {/* CONCEPT */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="grid lg:grid-cols-3 gap-6 items-start">
              <div className="lg:col-span-2 space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold">
                  VAIGO Center — Concept in a Snapshot
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Modular one-acre drone hubs that combine sales, rental, training, repair and drone port facilities —
                  a single physical node that unlocks local aerial services, jobs and enterprise.
                </p>
              </div>

              <div className="space-y-3">
                <Card className="border border-green-100 shadow-sm">
                  <CardContent className="p-5">
                    <h4 className="font-semibold mb-2">Why it matters</h4>
                    <p className="text-sm text-gray-700">
                      Local access, new livelihoods, faster disaster response, and precision farming at scale.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border border-green-100 shadow-sm">
                  <CardContent className="p-5">
                    <h4 className="font-semibold mb-2">Ready models</h4>
                    <p className="text-sm text-gray-700">
                      Sales hub, rental setup, training lab, and maintenance bay — configurable per region.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* DIVISIONS */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
              🏗️ Functional Divisions
            </h3>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {divisions.map((d, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <Card className="border border-green-100 hover:shadow-lg transition">
                  <CardContent className="p-6 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-lg bg-green-50">
                        <d.icon className="w-5 h-5 text-green-600" />
                      </div>
                      <h4 className="font-semibold text-lg">{d.title}</h4>
                    </div>
                    <p className="text-sm text-gray-700">{d.desc}</p>
                    <p className="text-sm text-green-700 font-medium">{d.outcome}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTORS */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-6">
              Application Sectors
            </h3>
            <div className="overflow-x-auto rounded-lg shadow-sm">
              <table className="w-full table-auto text-left text-sm md:text-base">
                <thead className="bg-green-50 text-gray-800">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Sector</th>
                    <th className="px-4 py-3 font-semibold">Use Case</th>
                    <th className="px-4 py-3 font-semibold">Outcome</th>
                  </tr>
                </thead>
                <tbody>
                  {sectors.map((s, idx) => (
                    <tr key={idx} className="border-t hover:bg-green-50/30">
                      <td className="px-4 py-3 font-medium text-gray-900">{s.sector}</td>
                      <td className="px-4 py-3 text-gray-700">{s.useCase}</td>
                      <td className="px-4 py-3 text-gray-700">{s.outcome}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* INFRASTRUCTURE */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-6">
              🧩 Infrastructure Layout (1-Acre Model)
            </h3>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Core Operations Pad (30m × 30m): Take-off, landing, and testing zone with charging points and ADS-B receiver.",
              "Admin Cabin: Coordination office for data logging, compliance, and customer service.",
              "Workshop Cabin: Assembly, diagnostics, calibration, and ESD flooring.",
              "Training Classroom Cabin: 12-seat hall with simulators and projection setup.",
              "Parking & Utility Area: EV charging, backup, water & waste management.",
              "Green Buffer Zone: Plantation & seating for community engagement.",
              "Solar Power Integration: 10 kW rooftop solar for energy independence.",
            ].map((point, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <Card className="border border-green-100 hover:shadow-lg transition">
                  <CardContent className="p-5 flex space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <p className="text-sm text-gray-700">{point}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-6">
              ⚙️ Technology & Digital Ecosystem
            </h3>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {[
              "Centralized VAIGO Cloud Dashboard for flight logs, maintenance, and mission planning.",
              "IoT-linked weather sensors and geo-fencing compliance system.",
              "Integration with VAIGO Drone Fleet Management System (DFMS).",
              "Optional link to disaster response and agriculture monitoring cells.",
            ].map((tech, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <Card className="border border-green-100">
                  <CardContent className="p-5 flex space-x-3">
                    <Cpu className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <p className="text-sm text-gray-700">{tech}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIO-ECONOMIC IMPACT */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-6">
              💼 Socio-Economic Impact
            </h3>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Employment Generation: 20–25 jobs per center (pilots, technicians, trainers, admin).",
              "Rural Entrepreneurship: Franchise or PPP model enabling local ownership.",
              "Skill Development: Certification of youth and women under PMKVY & DGCA norms.",
              "Digital Infrastructure Growth: Gateway for e-services and remote sensing data.",
              "Environmental Sustainability: Promotes solar energy and precision agriculture.",
            ].map((impact, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <Card className="border border-green-100 hover:shadow-lg transition">
                  <CardContent className="p-5 flex space-x-3">
                    <Leaf className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <p className="text-sm text-gray-700">{impact}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LONG-TERM VISION CTA */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">🧭 Long-Term Vision</h3>
            <p className="text-lg text-green-100 mb-6">
              The VAIGO Center Network will form a nationwide lattice of over 10,000 drone hubs, covering every block
              and district — making India a global leader in drone-enabled rural development.
            </p>

            <div className="bg-white/10 rounded-xl p-6 mb-6">
              <h4 className="text-xl font-semibold text-white mb-3">Each VAIGO Center becomes:</h4>
              <ul className="text-green-100 text-left max-w-xl mx-auto space-y-2">
                <li>• A drone airport for villages</li>
                <li>• A training ground for next-generation pilots</li>
                <li>• A gateway for last-mile aerial logistics</li>
              </ul>
            </div>

            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-green-700 hover:bg-gray-50 px-8 py-3"
              onClick={() => navigate("/contact")}
            >
              Join the Movement
            </Button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}