import { useParams, useNavigate } from "react-router-dom";
import solutionsData from "../data/solution.json";

import {
  Target,
  Droplets,
  BarChart3,
  Settings,
  Globe,
  MapPin,
  Activity,
  Camera,
  CheckCircle,
} from "lucide-react";

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

const solutions = solutionsData.map((s) => ({
  ...s,
  icon: iconMap[s.icon] || Target,
}));

export function SolutionDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const solution = solutions.find(
    (s) => s.slug === slug || s.title.toLowerCase().replace(/\s+/g, "-") === slug
  );

  if (!solution) {
    return (
      <div className="p-10 text-center text-gray-600">
        <Reveal type="fade">
          Solution not found.
          <button
            onClick={() => navigate("/solutions")}
            className="text-green-600 hover:underline ml-2"
          >
            Back to Solutions
          </button>
        </Reveal>
      </div>
    );
  }

  return (
    <div className="bg-white text-gray-800">
      {/* ========== Banner Section ========== */}
      <section className="relative">
        <Reveal type="zoom">
          <img
            src={solution.bannerImage || solution.image}
            alt={solution.title}
            className="w-full h-[420px] object-cover"
          />
        </Reveal>

        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <Reveal type="slide" y={30}>
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-3">
                {solution.title}
              </h1>
              <p className="text-lg md:text-xl">{solution.subtitle}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========== Overview ========== */}
      {solution.overview && (
        <section className="max-w-6xl mx-auto px-6 py-12 text-center">
          <Reveal type="slide" y={15}>
            <h2 className="text-3xl font-semibold text-green-700 mb-4">
              {solution.overview.title}
            </h2>
          </Reveal>

          <Reveal type="fade" delay={0.04}>
            <p className="text-lg text-gray-700 leading-relaxed">
              {solution.overview.content}
            </p>
          </Reveal>
        </section>
      )}

      {/* ========== Features Section ========== */}
      {solution.features && (
        <section className="max-w-6xl mx-auto px-6 py-12">
          <Reveal type="slide" y={20}>
            <h2 className="text-3xl font-semibold mb-8 text-center">
              Key Features
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {solution.features.map((feature: string, i: number) => (
              <Reveal type="fade" delay={i * 0.05} key={i}>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* ========== Detailed Sections ========== */}
      {solution.sections && (
        <section className="max-w-6xl mx-auto px-6 py-12 space-y-20">
          {solution.sections.map((section, idx: number) => (
            <div
              key={idx}
              className={`grid md:grid-cols-2 gap-12 items-center`}
            >
              <Reveal type="slide" y={30} delay={0.02}>
                <div>
                  <h3 className="text-2xl font-bold text-green-700 mb-4">
                    {section.title}
                  </h3>

                  {section.content && (
                    <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                      {section.content}
                    </p>
                  )}

                  {section.list && (
                    <ul className="space-y-2">
                      {section.list.map((item, i) => (
                        <Reveal type="fade" delay={i * 0.04} key={i}>
                          <li className="flex items-start space-x-2">
                            <span className="text-green-600 mt-1">✔</span>
                            <span>{item}</span>
                          </li>
                        </Reveal>
                      ))}
                    </ul>
                  )}
                </div>
              </Reveal>

              {section.image && (
                <Reveal type="zoom">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="rounded-2xl shadow-lg w-full h-auto"
                  />
                </Reveal>
              )}
            </div>
          ))}
        </section>
      )}

      {/* ========== Stats Section ========== */}
      {solution.stats && (
        <section className="bg-gray-50 py-12">
          <div className="max-w-6xl mx-auto px-6">
            <Reveal type="slide" y={20}>
              <h2 className="text-3xl font-semibold text-center mb-10">
                Results That Matter
              </h2>
            </Reveal>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {solution.stats.map((stat, i) => (
                <Reveal type="zoom" delay={i * 0.05} key={i}>
                  <div>
                    <h3 className="text-4xl font-bold text-green-600 mb-2">
                      {stat.value}
                    </h3>
                    <p className="text-gray-700">{stat.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ========== Gallery Section ========== */}
      {solution.gallery && solution.gallery.length > 0 && (
        <section className="py-12">
          <Reveal type="slide" y={20}>
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-3xl font-semibold text-center mb-8">
                Gallery
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {solution.gallery.map((img, i) => (
                  <Reveal type="zoom" delay={i * 0.05} key={i}>
                    <div className="overflow-hidden rounded-xl shadow-md">
                      <img
                        src={img}
                        alt={`Gallery ${i + 1}`}
                        className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </section>
      )}

      {/* ========== CTA Section ========== */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <Reveal type="slide" y={25}>
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Transform Your Agricultural Operations Today
            </h2>

            <p className="text-xl text-green-100 mb-8 leading-relaxed">
              Discover how our comprehensive and tailored solutions can empower
              your farm to achieve greater productivity, sustainability, and
              profitability.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate("/contact")}
                className="bg-white text-green-600 hover:bg-gray-50 px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Schedule Consultation
              </button>

              <button
                onClick={() => navigate("/products")}
                className="border border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Explore Products
              </button>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
