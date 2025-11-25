import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Reveal from "./animations/Reveal";

type Industry = {
  name: string;
  image: string;
  tagline?: string;
  overview: string;
  challenges?: string[];
  solutions?: string[];
  benefits?: string[];
  cta?: string;
};

interface IndustryDetailProps {
  industrySpecific: Industry[];
}

function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");
}

export function IndustryDetail({ industrySpecific }: IndustryDetailProps) {
  const { name } = useParams<{ name: string }>();
  const navigate = useNavigate();

  const industry = industrySpecific.find((i) => slugify(i.name) === name);

  if (!industry) {
    return (
      <div className="max-w-4xl mx-auto text-center py-20">
        <Reveal type="fade">
          <h2 className="text-3xl font-bold mb-4">Industry Not Found</h2>
          <p className="text-gray-600">The requested industry could not be found.</p>
        </Reveal>
      </div>
    );
  }

  return (
    <div className="bg-gray-50">
      {/* ===== Hero Section ===== */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <img
          src={industry.image}
          alt={industry.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white px-4 text-center">
          <Reveal type="slide" y={28} delay={0}>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{industry.name}</h1>
          </Reveal>

          <Reveal type="fade" delay={0.08}>
            <p className="text-lg md:text-xl max-w-3xl">{industry.tagline}</p>
          </Reveal>
        </div>
      </section>

      {/* ===== Overview ===== */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <Reveal type="slide" y={20} delay={0}>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Overview</h2>
          </Reveal>

          <Reveal type="fade" delay={0.06}>
            <p className="text-gray-700 text-lg leading-relaxed">{industry.overview}</p>
          </Reveal>
        </div>

        <div>
          <Reveal type="zoom" delay={0.08}>
            <img
              src={industry.image}
              alt={industry.name}
              className="rounded-xl shadow-lg object-cover w-full h-80"
            />
          </Reveal>
        </div>
      </section>

      {/* ===== Challenges ===== */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal type="slide" y={18} delay={0}>
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Key Challenges</h2>
          </Reveal>

          <div className="space-y-4">
            {industry.challenges?.map((ch, idx) => (
              <Reveal key={idx} type="fade" delay={0.04 + idx * 0.03}>
                <li className="flex items-start gap-3 list-none text-gray-700 text-lg">
                  <span className="text-green-600 mt-1">✔</span>
                  <p>{ch}</p>
                </li>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Solutions ===== */}
      <section className="bg-green-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal type="slide" y={18} delay={0}>
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Our Solutions</h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {industry.solutions?.map((s, idx) => (
              <Reveal key={idx} type="zoom" delay={0.06 + idx * 0.04}>
                <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition-all border border-green-100">
                  <h4 className="text-lg font-semibold text-green-700 mb-2">
                    Solution {idx + 1}
                  </h4>
                  <p className="text-gray-700">{s}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Benefits ===== */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal type="slide" y={18} delay={0}>
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Key Benefits</h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {industry.benefits?.map((b, idx) => (
              <Reveal key={idx} type="fade" delay={0.06 + idx * 0.03}>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all">
                  <h4 className="text-lg font-semibold text-green-700 mb-2">
                    Benefit {idx + 1}
                  </h4>
                  <p className="text-gray-700">{b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA Section ===== */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal type="slide" y={18} delay={0}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Transform Your Agricultural Operations Today
            </h2>
          </Reveal>

          <Reveal type="fade" delay={0.06}>
            <p className="text-xl text-green-100 mb-8 leading-relaxed">{industry.cta}</p>
          </Reveal>

          <Reveal type="zoom" delay={0.12}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate("/products")}
                className="border border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Contact Us
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
