import { useParams,useNavigate } from "react-router-dom";
import solutionsData from "../data/solution.json";

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
const solutions = solutionsData.map((s) => ({
  ...s,
  icon: iconMap[s.icon] || Target, // fallback icon
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
        Solution not found.{" "}
        <button
          onClick={() => navigate("/solutions")}
          className="text-green-600 hover:underline ml-2"
        >
          Back to Solutions
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white text-gray-800">
      {/* ========== Banner Section ========== */}
      <section className="relative">
        <img
          src={solution.bannerImage || solution.image}
          alt={solution.title}
          className="w-full h-[420px] object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">
              {solution.title}
            </h1>
            <p className="text-lg md:text-xl">{solution.subtitle}</p>
          </div>
        </div>
      </section>

      {/* ========== Overview ========== */}
      {solution.overview && (
        <section className="max-w-6xl mx-auto px-6 py-12 text-center">
          <h2 className="text-3xl font-semibold text-green-700 mb-4">
            {solution.overview.title}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {solution.overview.content}
          </p>
        </section>
      )}

      {/* ========== Features Section ========== */}
      {solution.features && (
        <section className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {solution.features.map((feature: string, i: number) => (
              <div key={i} className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ========== Detailed Sections ========== */}
      {solution.sections && (
        <section className="max-w-6xl mx-auto px-6 py-12 space-y-20">
          {solution.sections.map(
            (
              section: {
                title: string;
                content?: string;
                list?: string[];
                image?: string;
              },
              idx: number
            ) => (
              <div
                key={idx}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  idx % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
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
                        <li key={i} className="flex items-start space-x-2">
                          <span className="text-green-600 mt-1">✔</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {section.image && (
                  <img
                    src={section.image}
                    alt={section.title}
                    className="rounded-2xl shadow-lg w-full h-auto"
                  />
                )}
              </div>
            )
          )}
        </section>
      )}

      {/* ========== Stats Section ========== */}
      {solution.stats && (
        <section className="bg-gray-50 py-12">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-semibold text-center mb-10">
              Results That Matter
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {solution.stats.map(
                (
                  stat: { label: string; value: string },
                  i: number
                ) => (
                  <div key={i}>
                    <h3 className="text-4xl font-bold text-green-600 mb-2">
                      {stat.value}
                    </h3>
                    <p className="text-gray-700">{stat.label}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </section>
      )}

      {/* ========== Gallery Section ========== */}
{solution.gallery && solution.gallery.length > 0 && (
  <section className="py-12">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-semibold text-center mb-8">
        Gallery
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {solution.gallery.map((img: string, i: number) => (
          <div key={i} className="overflow-hidden rounded-xl shadow-md">
            <img
              src={img}
              alt={`Gallery ${i + 1}`}
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
)}


      {/* ========== CTA Section ========== */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
      </section>
    </div>
  );
}
