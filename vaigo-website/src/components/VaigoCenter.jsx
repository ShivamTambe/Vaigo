import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { ImageWithFallback } from './ImageWithFallback';
import {
  Building,
  Wrench,
  GraduationCap,
  Plane,
  Cpu,
  Users,
  Leaf,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export function VaigoCenter() {
  const navigate = useNavigate();

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
    <div className="min-h-screen bg-slate-50">
      {/* HERO */}

      <section className="relative bg-gradient-to-br from-green-50 via-blue-50 to-white py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-green-500/[0.02] bg-[size:20px_20px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-green-100 text-green-800 border-green-200 text-sm sm:text-base">
                  VAIGO Center – India’s First Village-Level Drone Infrastructure Hub
                </Badge>

                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Building India’s{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                    Largest Rural Drone Network
                  </span>
                </h1>

                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                  Each VAIGO Center acts as a 1-acre drone airport for rural India — offering sales, rental, training, repair, maintenance, and drone-port services under one roof. Empowering farmers, youth, and entrepreneurs across every village.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-6 py-3 text-base sm:text-lg"
                  onClick={() => navigate('/contact')}
                >
                  Get in Touch
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-green-200 text-green-700 hover:bg-green-50 px-6 py-3 text-base sm:text-lg"
                  onClick={() => navigate('/Franchisee')}
                >
                  Explore Franchise Model
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
                src="https://i.ibb.co/7J6S05Gj/IMG-20251114-WA0000.jpg"
                alt="Vaigo Centre"
                className="relative z-10 w-full max-w-md sm:max-w-lg lg:max-w-xl mx-auto h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CONCEPT */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 space-y-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900">🌐 Concept Overview</h2>
          <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed">
            The VAIGO Center is a 1-acre modular facility functioning as a local command node for drone-related activities. Each center serves as a miniaturized “airport for drones”, bridging technology creators, rural users, and national missions — empowering youth, women, and entrepreneurs with futuristic livelihood opportunities.
          </p>
        </div>
      </section>

      {/* DIVISIONS */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
            🏗️ Functional Divisions
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {divisions.map((d, i) => (
              <Card
                key={i}
                className="border border-green-100 hover:shadow-md transition"
              >
                <CardContent className="p-6 space-y-2">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-3 rounded-lg bg-green-50">
                      <d.icon className="w-5 h-5 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900">{d.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600">{d.desc}</p>
                  <p className="text-sm text-green-700 font-medium">
                    {d.outcome}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION SECTORS */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
            Application Sectors
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-green-100 rounded-lg text-left text-sm md:text-base">
              <thead className="bg-green-50 text-gray-800">
                <tr>
                  <th className="px-4 py-3 font-semibold">Sector</th>
                  <th className="px-4 py-3 font-semibold">Use Case</th>
                  <th className="px-4 py-3 font-semibold">Outcome</th>
                </tr>
              </thead>
              <tbody>
                {sectors.map((s, idx) => (
                  <tr
                    key={idx}
                    className="border-t border-green-100 hover:bg-green-50/30"
                  >
                    <td className="px-4 py-3 font-medium text-gray-900">
                      {s.sector}
                    </td>
                    <td className="px-4 py-3 text-gray-700">{s.useCase}</td>
                    <td className="px-4 py-3 text-gray-700">{s.outcome}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* INFRASTRUCTURE */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 text-center space-y-8">
          <h2 className="text-3xl font-bold text-gray-900">
            🧩 Infrastructure Layout (1-Acre Model)
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {[
              "Core Operations Pad (30m × 30m): Take-off, landing, and testing zone with charging points and ADS-B receiver.",
              "Admin Cabin: Coordination office for data logging, compliance, and customer service.",
              "Workshop Cabin: Assembly, diagnostics, calibration, and ESD flooring.",
              "Training Classroom Cabin: 12-seat hall with simulators and projection setup.",
              "Parking & Utility Area: EV charging, backup, water & waste management.",
              "Green Buffer Zone: Plantation & seating for community engagement.",
              "Solar Power Integration: 10 kW rooftop solar for energy independence.",
            ].map((point, i) => (
              <Card
                key={i}
                className="border border-green-100 hover:shadow-md transition"
              >
                <CardContent className="p-5 flex space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-sm text-gray-700">{point}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center space-y-8">
          <h2 className="text-3xl font-bold text-gray-900">
            ⚙️ Technology & Digital Ecosystem
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 text-left">
            {[
              "Centralized VAIGO Cloud Dashboard for flight logs, maintenance, and mission planning.",
              "IoT-linked weather sensors and geo-fencing compliance system.",
              "Integration with VAIGO Drone Fleet Management System (DFMS).",
              "Optional link to disaster response and agriculture monitoring cells.",
            ].map((tech, i) => (
              <Card key={i} className="border border-green-100">
                <CardContent className="p-5 flex space-x-3">
                  <Cpu className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-sm text-gray-700">{tech}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIO-ECONOMIC IMPACT */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 text-center space-y-8">
          <h2 className="text-3xl font-bold text-gray-900">💼 Socio-Economic Impact</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {[
              "Employment Generation: 20–25 jobs per center (pilots, technicians, trainers, admin).",
              "Rural Entrepreneurship: Franchise or PPP model enabling local ownership.",
              "Skill Development: Certification of youth and women under PMKVY & DGCA norms.",
              "Digital Infrastructure Growth: Gateway for e-services and remote sensing data.",
              "Environmental Sustainability: Promotes solar energy and precision agriculture.",
            ].map((impact, i) => (
              <Card
                key={i}
                className="border border-green-100 hover:shadow-md transition"
              >
                <CardContent className="p-5 flex space-x-3">
                  <Leaf className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-sm text-gray-700">{impact}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* LONG TERM VISION */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">🧭 Long-Term Vision</h2>
          <p className="text-lg text-green-100 leading-relaxed">
            The VAIGO Center Network will form a nationwide lattice of over 10,000 drone hubs, covering every block and district — making India a global leader in drone-enabled rural development.
          </p>

          <div className="bg-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-3">
              Each VAIGO Center becomes:
            </h3>
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
        </div>
      </section>
    </div>
  );
}
