import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./ImageWithFallback";
import Reveal from "../components/animations/Reveal";

import {
  Target,
  Users,
  Award,
  Lightbulb,
  Heart,
  Shield,
  Globe,
  Leaf,
} from "lucide-react";

export function AboutPage() {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We embrace continuous learning and pioneering new technologies to solve complex agricultural challenges.",
    },
    {
      icon: Shield,
      title: "Integrity",
      description:
        "We operate with transparency, honesty, and ethical conduct in all our dealings.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We are committed to delivering superior quality in our products, services, and customer support.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "We believe in the power of teamwork and partnerships, working closely with farmers and industry experts.",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description:
        "We are dedicated to promoting environmentally responsible practices for long-term agricultural health.",
    },
    {
      icon: Heart,
      title: "Customer Focus",
      description:
        "The success of our customers is at the heart of everything we do; we strive to create real value.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="bg-gradient-to-br from-green-50 via-blue-50 to-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Pioneering the Future of{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                  Agriculture
                </span>
              </h1>

              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Dotflick Ventures Private Limited was founded on a singular,
                powerful vision: to transform global agriculture through the
                strategic integration of cutting-edge technology.
              </p>
            </div>
          </Reveal>
        </div>
      </section>


      {/* STORY */}
      <section className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Our Story
                </h2>

                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    In an increasingly complex world, where food security,
                    resource scarcity, and climate change pose unprecedented
                    challenges, we recognized the urgent need for innovative
                    solutions that empower farmers to thrive.
                  </p>
                  <p>
                    Our journey began with a deep understanding of the
                    agricultural landscape, identifying critical pain points and
                    envisioning a future where precision, efficiency, and
                    sustainability are not just aspirations, but everyday
                    realities on every farm.
                  </p>
                  <p>
                    From our inception, we have been driven by a commitment to
                    research, development, and the relentless pursuit of
                    excellence. Our multidisciplinary approach allows us to
                    develop solutions that are not only technologically advanced
                    but also practical and user-friendly.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1753232629957-db22f1aa1ed7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhZ3JpY3VsdHVyZSUyMHRlYW0lMjB0ZWNobm9sb2d5JTIwb2ZmaWNlfGVufDF8fHx8MTc1NTg0ODg5OHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Dotflick Ventures team working on agricultural technology"
                  className="w-full h-auto rounded-2xl shadow-xl"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="pt-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Vision */}
            <Reveal>
              <Card className="border border-green-100 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Our Vision
                    </h3>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    Cultivating a Sustainable and Productive World
                  </p>

                  <div className="space-y-4 text-gray-600">
                    {[
                      "Precision is the Standard: Every input applied with pinpoint accuracy",
                      "Data Empowers Decisions: Real-time, actionable insights for farmers",
                      "Sustainability is Inherent: Environmentally responsible farming practices",
                      "Farmers Thrive: Equipped with tools for success and profitability",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start space-x-3">
                        <Target className="w-5 h-5 text-green-500 mt-1" />
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Reveal>

            {/* Mission */}
            <Reveal delay={0.1}>
              <Card className="border border-blue-100 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-600 rounded-xl flex items-center justify-center">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Our Mission
                    </h3>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    Delivering Advanced Solutions for a Greener Tomorrow
                  </p>

                  <div className="space-y-4 text-gray-600">
                    {[
                      ["Innovation", Lightbulb],
                      ["Quality", Award],
                      ["Empowerment", Users],
                      ["Stewardship", Leaf],
                    ].map(([label, Icon], i) => (
                      <div key={i} className="flex items-start space-x-3">
                        <Icon className="w-5 h-5 text-blue-500 mt-1" />
                        <p>{label}: {
                          label === "Innovation"
                            ? "Pushing boundaries in agricultural technology"
                            : label === "Quality"
                              ? "Highest standards of performance and reliability"
                              : label === "Empowerment"
                                ? "Making advanced technology accessible to all farmers"
                                : "Contributing to sustainable farming practices"
                        }</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Guiding principles that define who we are and how we operate,
                driving our pursuit of a more productive, sustainable, and
                prosperous future for agriculture.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Reveal key={index} delay={index * 0.07}>
                <Card className="border border-gray-100 hover:border-green-200 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300">
                      <value.icon className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Expertise
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We bring together a unique blend of agricultural domain
                expertise and cutting-edge technological proficiency to solve
                real-world farming challenges.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Drone Engineering",
                desc: "High-performance UAVs with advanced flight control systems and payload integration",
              },
              {
                icon: Lightbulb,
                title: "AI & Machine Learning",
                desc: "Sophisticated algorithms for image recognition, predictive analytics, and autonomous decision-making",
              },
              {
                icon: Globe,
                title: "IoT & Sensors",
                desc: "Smart sensor integration for real-time data collection on soil, crops, and environmental factors",
              },
              {
                icon: Award,
                title: "Agricultural Science",
                desc: "Deep understanding of crop cycles, plant pathology, soil science, and sustainable practices",
              },
              {
                icon: Target,
                title: "Software Development",
                desc: "Robust platforms, intuitive control systems, and powerful analytics tools",
              },
              {
                icon: Shield,
                title: "Regulatory Compliance",
                desc: "Expertise in drone regulations and chemical applications, ensuring safety and legal standards",
              },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
