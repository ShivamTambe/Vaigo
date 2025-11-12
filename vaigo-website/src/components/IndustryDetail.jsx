import React from "react";
import { useParams } from "react-router-dom";

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")      // replace & with "and"
    .replace(/\s+/g, "-")      // spaces → dash
    .replace(/[^\w-]+/g, "");  // remove special chars
}

export const IndustryDetail = ({ industrySpecific }) => {
  const { name } = useParams();

  const formattedName = name.replace(/-/g, " ").toLowerCase();
  const industry = industrySpecific.find((i) => slugify(i.name) === name);

  if (!industry) {
    return (
      <div className="max-w-4xl mx-auto text-center py-20">
        <h2 className="text-3xl font-bold mb-4">Industry Not Found</h2>
        <p className="text-gray-600">
          The requested industry could not be found.
        </p>
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
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {industry.name}
          </h1>
          <p className="text-lg md:text-xl max-w-3xl">{industry.tagline}</p>
        </div>
      </section>

      {/* ===== Overview ===== */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Overview</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            {industry.overview}
          </p>
        </div>
        <div>
          <img
            src={industry.image}
            alt={industry.name}
            className="rounded-xl shadow-lg object-cover w-full h-80"
          />
        </div>
      </section>

      {/* ===== Challenges ===== */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            Key Challenges
          </h2>
          <ul className="space-y-4 text-gray-700 text-lg">
            {industry.challenges?.map((ch, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="text-green-600 mt-1">✔</span>
                <p>{ch}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== Solutions ===== */}
      <section className="bg-green-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            Our Solutions
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {industry.solutions?.map((s, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow hover:shadow-md transition-all border border-green-100"
              >
                <h4 className="text-lg font-semibold text-green-700 mb-2">
                  Solution {idx + 1}
                </h4>
                <p className="text-gray-700">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Benefits ===== */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            Key Benefits
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {industry.benefits?.map((b, idx) => (
              <div
                key={idx}
                className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all"
              >
                <h4 className="text-lg font-semibold text-green-700 mb-2">
                  {`Benefit ${idx + 1}`}
                </h4>
                <p className="text-gray-700">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* ========== CTA Section ========== */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Transform Your Agricultural Operations Today
          </h2>
          <p className="text-xl text-green-100 mb-8 leading-relaxed">
            {industry.cta}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/products')}
              className="border border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
