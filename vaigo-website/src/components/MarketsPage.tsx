import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './ImageWithFallback';
import { 
  Globe, 
  Wheat, 
  Leaf, 
  Truck,
  Users,
  TrendingUp,
  MapPin,
  Star,
  BarChart3,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

import { useNavigate } from "react-router-dom";

export function MarketsPage() {

  const navigate = useNavigate();

  const targetMarkets = [
    {
      icon: Truck,
      title: "Large-Scale Commercial Farms",
      description: "Operations spanning thousands of acres with complex management needs",
      benefits: [
        "Scalable solutions for vast field coverage",
        "Dramatic productivity improvements",
        "Reduced operational costs through automation",
        "Address labor shortage challenges"
      ],
      market: "Primary Focus"
    },
    {
      icon: Users,
      title: "Agricultural Service Providers",
      description: "Companies offering specialized services to multiple farms",
      benefits: [
        "Expand service offerings with advanced technology",
        "Deliver superior value to clients",
        "Increase operational efficiency",
        "Build competitive advantage"
      ],
      market: "Key Partners"
    },
    {
      icon: Leaf,
      title: "Agricultural Cooperatives",
      description: "Farmer collectives pooling resources for technology adoption",
      benefits: [
        "Make precision agriculture accessible to smaller farms",
        "Collective investment in advanced technology",
        "Enhanced productivity for all members",
        "Shared expertise and training resources"
      ],
      market: "Growing Segment"
    }
  ];

  const cropApplications = [
    {
      crop: "Sugarcane",
      icon: "🌾",
      description: "Key focus area with specialized solutions for water-intensive cultivation",
      applications: [
        "Precise nutrient and water management",
        "Early disease detection (red rot, smut)",
        "Pest control (sugarcane borers)",
        "Optimized growth regulation"
      ],
      results: "Up to 25% yield increase with 30% reduction in chemical usage"
    },
    {
      crop: "Corn (Maize)",
      icon: "🌽",
      description: "Large-scale spraying of herbicides, fungicides, and insecticides",
      applications: [
        "Wide-area herbicide application",
        "Timely fungicide treatments",
        "Nutrient deficiency monitoring",
        "Optimized irrigation scheduling"
      ],
      results: "10% reduction in fertilizer costs with improved crop uniformity"
    },
    {
      crop: "Rice",
      icon: "🌾",
      description: "Precision management for water-intensive paddy cultivation",
      applications: [
        "Fungal disease prevention",
        "Water level monitoring",
        "Precision nutrient delivery",
        "Pest management in wet conditions"
      ],
      results: "Enhanced disease control with reduced environmental impact"
    },
    {
      crop: "Cotton",
      icon: "🌿",
      description: "Targeted application for high-value fiber production",
      applications: [
        "Defoliant application",
        "Bollworm control",
        "Growth regulator application",
        "Quality monitoring"
      ],
      results: "30% decrease in insecticide volume with effective pest control"
    },
    {
      crop: "Soybeans",
      icon: "🫘",
      description: "Precision herbicide and fungicide management",
      applications: [
        "Targeted herbicide application",
        "Fungicide treatments",
        "Weed pressure monitoring",
        "Yield optimization"
      ],
      results: "Improved weed control with reduced chemical costs"
    },
    {
      crop: "Fruits & Vegetables",
      icon: "🍎",
      description: "High-value crops requiring precision and quality focus",
      applications: [
        "Specialized treatment application",
        "Growth regulator precision",
        "Quality monitoring",
        "Micro-irrigation optimization"
      ],
      results: "Enhanced crop quality with minimal waste"
    }
  ];

  const geographicMarkets = [
    {
      region: "North America",
      countries: "USA & Canada",
      characteristics: [
        "Large-scale commercial farms",
        "High tech adoption rates", 
        "Established regulatory frameworks",
        "Strong demand for efficiency"
      ],
      opportunity: "High",
      status: "Target Market"
    },
    {
      region: "Europe",
      countries: "France, Germany, Spain, Italy",
      characteristics: [
        "Precision farming focus",
        "Sustainability emphasis",
        "Advanced agricultural sector",
        "Environmental responsibility"
      ],
      opportunity: "High",
      status: "Expansion Market"
    },
    {
      region: "Asia-Pacific", 
      countries: "Australia, New Zealand, Japan",
      characteristics: [
        "Innovation-driven agriculture",
        "Early technology adopters",
        "Efficiency-focused operations",
        "Premium quality requirements"
      ],
      opportunity: "High",
      status: "Strategic Market"
    },
    {
      region: "South America",
      countries: "Brazil, Argentina",
      characteristics: [
        "Major agricultural powerhouses",
        "Vast land areas",
        "Scale-driven operations",
        "Growing tech adoption"
      ],
      opportunity: "Very High",
      status: "Key Growth Market"
    },
    {
      region: "Asia (Emerging)",
      countries: "India, Southeast Asia",
      characteristics: [
        "Massive agricultural sector",
        "Government support for AgTech",
        "Growing regulatory maturity",
        "High potential for impact"
      ],
      opportunity: "Massive",
      status: "Primary Focus"
    }
  ];

  const successStories = [
    {
      title: "Sugarcane Optimization in Maharashtra",
      location: "Maharashtra, India",
      challenge: "Inefficient spraying, high input costs, limited data insights",
      solution: "Vaigo drones with Agro AI Ecosystem digital twin integration",
      results: [
        "25% reduction in pesticide use",
        "15% increase in yield",
        "Significant ROI within one season"
      ],
      impact: "Transformed sustainable sugarcane farming practices"
    },
    {
      title: "Corn Production Enhancement in Iowa",
      location: "Iowa, USA",
      challenge: "Uniform application across large fields, cost optimization",
      solution: "Variable rate application with AI-generated field maps",
      results: [
        "10% reduction in fertilizer costs",
        "Improved crop uniformity",
        "Higher overall profitability"
      ],
      impact: "Set new standards for precision corn farming"
    },
    {
      title: "Cotton Pest Management in Australia",
      location: "Australia",
      challenge: "Sustainable pest control with minimal chemical use",
      solution: "AI-powered pest detection with targeted Vaigo application",
      results: [
        "30% decrease in insecticide volume",
        "Effective pest population control",
        "Reduced labor requirements"
      ],
      impact: "Demonstrated sustainable cotton production model"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Global Markets & 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                {" "}Applications
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Vaigo and the Agro AI Ecosystem deliver transformative benefits across diverse agricultural 
              markets and applications, addressing specific needs of various crop types, farming scales, and geographic regions.
            </p>
          </div>
        </div>
      </section>

      {/* Target Markets */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Target Markets
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our primary focus is on segments that stand to gain the most from advanced precision 
              agriculture technologies, characterized by scale, complexity, and commitment to innovation.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {targetMarkets.map((market, index) => (
              <Card key={index} className="border border-green-100 hover:border-green-200 transition-all duration-300 hover:shadow-lg group">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-blue-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <market.icon className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <Badge className="bg-green-100 text-green-800 border-green-200 mb-2">
                        {market.market}
                      </Badge>
                      <h3 className="text-lg font-semibold text-gray-900">{market.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{market.description}</p>
                  
                  <div className="space-y-3">
                    {market.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                        <span className="text-sm text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Crop Applications */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Crop-Specific Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our solutions are specifically tailored to optimize outcomes for various crop types, 
              addressing unique challenges and maximizing agricultural potential.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cropApplications.map((crop, index) => (
              <Card key={index} className="border border-white shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-2">{crop.icon}</div>
                    <h3 className="text-lg font-semibold text-gray-900">{crop.crop}</h3>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{crop.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <h4 className="font-medium text-gray-900 text-sm">Key Applications:</h4>
                    {crop.applications.map((app, appIndex) => (
                      <div key={appIndex} className="flex items-start space-x-2">
                        <div className="w-1 h-1 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-xs text-gray-600">{app}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-3">
                    <h4 className="font-medium text-green-800 text-sm mb-1">Proven Results:</h4>
                    <p className="text-xs text-green-700">{crop.results}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Geographic Markets */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Geographic Focus Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our market entry and expansion strategy prioritizes regions with high agricultural activity, 
              favorable regulatory environments, and strong demand for advanced farming technologies.
            </p>
          </div>

          <div className="space-y-6">
            {geographicMarkets.map((market, index) => (
              <Card key={index} className="border border-green-100 hover:border-green-200 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-4 gap-6 items-center">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Globe className="w-5 h-5 text-green-600" />
                        <h3 className="text-lg font-semibold text-gray-900">{market.region}</h3>
                      </div>
                      <p className="text-sm text-gray-600">{market.countries}</p>
                      <div className="flex items-center space-x-2">
                        <Badge 
                          className={`text-xs ${
                            market.opportunity === 'Massive' ? 'bg-purple-100 text-purple-800' :
                            market.opportunity === 'Very High' ? 'bg-red-100 text-red-800' :
                            'bg-green-100 text-green-800'
                          }`}
                        >
                          {market.opportunity} Opportunity
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="md:col-span-2">
                      <h4 className="font-medium text-gray-900 mb-2 text-sm">Market Characteristics:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {market.characteristics.map((char, charIndex) => (
                          <div key={charIndex} className="flex items-start space-x-2">
                            <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0 mt-1" />
                            <span className="text-xs text-gray-600">{char}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <Badge 
                        className={`mb-2 ${
                          market.status === 'Primary Focus' ? 'bg-blue-100 text-blue-800' :
                          market.status === 'Key Growth Market' ? 'bg-green-100 text-green-800' :
                          'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {market.status}
                      </Badge>
                      <div className="flex justify-center">
                        {[...Array(market.opportunity === 'Massive' ? 5 : market.opportunity === 'Very High' ? 4 : 3)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world impact demonstrates how Vaigo and the Agro AI Ecosystem are transforming 
              farming operations worldwide with measurable results and tangible benefits.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="border border-white shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <MapPin className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-green-600 font-medium">{story.location}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{story.title}</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm mb-1">Challenge:</h4>
                      <p className="text-xs text-gray-600">{story.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm mb-1">Solution:</h4>
                      <p className="text-xs text-gray-600">{story.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm mb-2">Results:</h4>
                      <div className="space-y-1">
                        {story.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-start space-x-2">
                            <TrendingUp className="w-3 h-3 text-green-500 flex-shrink-0 mt-1" />
                            <span className="text-xs text-gray-600">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-3">
                    <h4 className="font-medium text-green-800 text-sm mb-1">Impact:</h4>
                    <p className="text-xs text-green-700">{story.impact}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Market Statistics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Market Impact & Potential
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-3">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">60%</h3>
              <p className="text-gray-600">Reduction in Chemical Usage</p>
            </div>

            <div className="space-y-3">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-600 rounded-full flex items-center justify-center mx-auto">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">40%</h3>
              <p className="text-gray-600">Increase in Yield Potential</p>
            </div>

            <div className="space-y-3">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-blue-500 rounded-full flex items-center justify-center mx-auto">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">15+</h3>
              <p className="text-gray-600">Target Countries</p>
            </div>

            <div className="space-y-3">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-500 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">1000+</h3>
              <p className="text-gray-600">Potential Farm Partners</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join the Global Agricultural Revolution
          </h2>
          <p className="text-xl text-green-100 mb-8 leading-relaxed">
            Be part of the transformation that's revolutionizing farming across continents. 
            Discover how Vaigo can bring precision agriculture to your region.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-white text-green-600 hover:bg-gray-50 px-8 py-3"
              onClick={() => navigate('/contact')}
            >
              Explore Partnership
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-3"
              onClick={() => navigate('/products')}
            >
              Request Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}