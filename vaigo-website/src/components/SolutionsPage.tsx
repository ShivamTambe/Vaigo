import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './ImageWithFallback';
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

import { useNavigate } from "react-router-dom";

export function SolutionsPage() {

  const navigate = useNavigate();

  const solutions = [
  // ---------- existing solutions (unchanged, icon fields present) ----------
  {
    icon: Target,
    title: "Precision Agriculture",
    subtitle: "Maximizing Efficiency, Minimizing Waste",
    description:
      "Targeted input application with centimeter-level accuracy, reducing chemical consumption by up to 60%",
    features: [
      "Targeted Input Application with centimeter-level precision",
      "Variable Rate Application (VRA) based on real-time field conditions",
      "Optimized Resource Utilization for sustainable farming",
      "Reduced environmental impact and cost savings"
    ],
    image:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVjaXNpb24lMjBhZ3JpY3VsdHVyZSUyMGZhcm1pbmd8ZW58MXx8fHwxNzU1OTMzMzIyfDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    icon: Droplets,
    title: "Crop Spraying and Monitoring",
    subtitle: "Unparalleled Accuracy and Insight",
    description:
      "Comprehensive approach combining Vaigo's physical capabilities with AI-powered analytical insights",
    features: [
      "High-Efficiency Spraying with large payload capacity",
      "Real-time Crop Health Assessment with multispectral imaging",
      "Automated Pest and Disease Detection 7-10 days in advance",
      "Post-Application Analysis for continuous optimization"
    ],
    image:
      "https://images.unsplash.com/photo-1677126577258-1a82fdf1a976?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcm9uZSUyMHNwcmF5aW5nJTIwcHJlY2lzaW9uJTIwYWdyaWN1bHR1cmV8ZW58MXx8fHwxNzU1ODY4NzAwfDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    icon: BarChart3,
    title: "Data Analytics and Insights",
    subtitle: "Empowering Informed Decisions",
    description:
      "Transform raw agricultural data into actionable insights that drive profitability and sustainability",
    features: [
      "Multi-Source Data Integration from drones, satellites, and IoT",
      "Predictive Analytics for yield estimation and risk mitigation",
      "Customizable Dashboards and detailed reporting",
      "AI-Powered Recommendations for optimal farm management"
    ],
    image:
      "https://images.unsplash.com/photo-1666015212938-b96bb465f5b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyYWwlMjB0ZWNobm9sb2d5JTIwZGFzaGJvYXJkJTIwY29udHJvbCUyMHN5c3RlbXxlbnwxfHx8fDE3NTU4Njg3MDR8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    icon: Settings,
    title: "Farm Management",
    subtitle: "Streamlined Operations, Enhanced Control",
    description:
      "Comprehensive tools that streamline operations and provide enhanced control over your entire farm",
    features: [
      "Digital Twin for Holistic Management with granular control",
      "Automated Task Assignment based on AI recommendations",
      "Resource Optimization for operational cost reduction",
      "Blockchain for Transparency and immutable farm records"
    ],
    image:
      "https://images.unsplash.com/photo-1744230673231-865d54a0aba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtZXIlMjB1c2luZyUyMHRhYmxldCUyMHRlY2hub2xvZ3klMjBzbWFydCUyMGZhcm1pbmd8ZW58MXx8fHwxNzU1ODY4NzA3fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },

  // ---------- EXTRA products & solutions you requested (with icons) ----------
  {
    icon: Globe,
    title: "Field Insight Dashboard",
    subtitle: "Real-time Field Intelligence",
    description:
      "Track crop growth, detect stress, and receive actionable alerts using Vaigo's satellite and aerial analytics.",
    features: [
      "AI-based field stress and pest detection",
      "NDVI & NDRE vegetation index tracking",
      "Satellite + drone + IoT data integration",
      "Custom farmer & enterprise dashboards"
    ],
    image:
      "https://geosciencesi.com/wp-content/uploads/2025/06/how-to-use-Satellite-Remote-Sensing-for-Agriculture.jpg"
  },
  {
    icon: Globe,
    title: "AI Crop Classifier",
    subtitle: "Instant Identification of Crop Variety",
    description:
      "Automatically detect crop types across seasons with machine learning models trained on multispectral data.",
    features: [
      "Supports 100+ crop types globally",
      "High accuracy via multi-source imagery",
      "Batch processing for large areas",
      "API access for integrations"
    ],
    image:
      "https://www.mdpi.com/processes/processes-13-01402/article_deploy/html/images/processes-13-01402-g001-550.jpg"
  },
  {
    icon: MapPin,
    title: "Digital Farm Detection",
    subtitle: "Smart Boundary Mapping",
    description:
      "Automatically detect farm plots and boundaries to enable zonal management and accurate area calculations.",
    features: [
      "Automatic polygon detection",
      "Handles fragmented or small plots",
      "Exportable GIS/shape outputs",
      "Syncs with farm management tools"
    ],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA3kvgBla6tDsy72FetCJQRv_ZyivX9p9LFmjaYSAxab-cWH0sktkaFv-twanb"
  },
  {
    icon: Activity,
    title: "Canopy Health Surveillance",
    subtitle: "Forest & Canopy Analytics",
    description:
      "Monitor forest cover, canopy health and detect deforestation or fires using satellite analytics and time-series analysis.",
    features: [
      "Tree cover & biomass change detection",
      "Deforestation & fire alerts",
      "Long-term vegetation trend analysis",
      "Sustainability reporting tools"
    ],
    image:
      "https://eos.com/wp-content/uploads/2025/07/intro-web.png.webp"
  },
  {
    icon: Camera,
    title: "Aerial Data Command Center",
    subtitle: "Aerial Field Intelligence",
    description:
      "High-resolution drone capture and automated analysis for orthomosaics, canopy health mapping, and pest detection.",
    features: [
      "RGB & multispectral drone support",
      "Automatic orthomosaic stitching",
      "Pest & disease hotspot detection",
      "Mobile field reports"
    ],
    image:
      "https://pilotinstitute.com/wp-content/uploads/2022/10/Drone-Mapping-Software.jpg"
  },
  {
    icon: Camera,
    title: "Arbor Health Analytics",
    subtitle: "Orchard & Plantation Analytics",
    description:
      "Precise tree counting, canopy scoring and health analytics tailored for orchards and tree crops.",
    features: [
      "Automatic tree detection & counts",
      "Canopy health & vigor scoring",
      "Yield and harvest readiness estimation",
      "Orchard-level dashboards"
    ],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbup6ZCQrwUP3mDwh96gLEqovH1cDLuXP5FpNDcyu6EFGMTi3ozUfz3SVod4_J"
  },
  {
    icon: BarChart3,
    title: "Yield Forecast Engine",
    subtitle: "Yield & Risk Forecasting",
    description:
      "Machine-learning models that forecast yield, detect likely stress zones and help plan interventions in advance.",
    features: [
      "Yield forecasting per field/zone",
      "Soil-weather correlation models",
      "Pest and disease outbreak prediction",
      "Scenario planning dashboards"
    ],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH5o7ZNz8qaVr106zAACO-SFV1DK1T7e9CPW3433kELtGCa2ddpVMmqwqSOzU9"
  },
  {
    icon: MapPin,
    title: "Asset Location Toolkit",
    subtitle: "Enterprise Farm Mapping",
    description:
      "Enterprise-grade tools to detect and maintain a geospatial registry of farms and agricultural assets at scale.",
    features: [
      "Large-area detection & indexing",
      "High-accuracy boundary refinement",
      "Bulk export & API access",
      "GIS & third-party tool integrations"
    ],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_KQ33MpbvBx1ItuVxKo3mIziAhh0IEj3E__Y9IHxPpa2a8muxTCmQ29E_S9jq"
  },
  {
    icon: Activity,
    title: "EcoFarm Stewardship Platform",
    subtitle: "Climate-Smart Farming Tools",
    description:
      "Tools to track sustainable practices, compute carbon footprints and prepare certification-ready reports for stakeholders.",
    features: [
      "Input tracking & sustainability scoring",
      "Carbon footprint & emissions estimates",
      "ESG & compliance reporting",
      "Impact dashboards for organizations"
    ],
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSS5XeptldDEcRq6xBsj10YUnynoEwMnGMTZCdZmPXM_NGQ5vuFt-QK-Ycv2M7M"
  },
  {
    icon: Droplets,
    title: "Water-Use Optimization Model",
    subtitle: "Water-Use Optimization",
    description:
      "Model irrigation schedules and conserve water using soil moisture, evapotranspiration and weather-driven analytics.",
    features: [
      "ET & soil-moisture driven schedules",
      "Water-stress early warnings",
      "Drip & sprinkler system support",
      "Actionable recommendations to reduce water use"
    ],
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ__nLThxOrrkUYso3eTGfZCEp4uxWAt1SGpHLezQZ1a2rDvclT-z5iZbUwShom"
  }
];

  const capabilities = [
    {
      icon: Eye,
      title: "Real-time Monitoring",
      description: "Continuous oversight of crop health and field conditions"
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics", 
      description: "Forecast future trends and potential issues"
    },
    {
      icon: Zap,
      title: "Automated Operations",
      description: "Reduce manual labor with intelligent automation"
    },
    {
      icon: Shield,
      title: "Risk Mitigation",
      description: "Proactive identification and prevention of problems"
    },
    {
      icon: Leaf,
      title: "Sustainable Practices",
      description: "Environmentally conscious farming methods"
    },
    {
      icon: PieChart,
      title: "ROI Optimization",
      description: "Maximize returns through data-driven decisions"
    }
  ];

  
  const industrySpecific = [
    {
      crop: "Sugarcane",
      location: "Maharashtra, India",
      description: "Specialized solutions addressing water scarcity, pest management, and yield optimization",
      benefits: [
        "Up to 40% yield increase in AI-based experiments",
        "Optimized irrigation for water conservation",
        "Early disease detection and prevention",
        "Real-time quality grading for better pricing"
      ],
      image: "https://images.unsplash.com/photo-1681999735650-3b56d16ffd17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWdhcmNhbmUlMjBmaWVsZCUyMGFlcmlhbCUyMHZpZXclMjBhZ3JpY3VsdHVyZXxlbnwxfHx8fDE3NTU4Njg3MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    // 1. For Farmers / Growers
  {
    industry: "Farmers & Growers",
    location: "Global Fields",
    description: "Vaigo's core platform empowers farmers with predictive analytics, transitioning farm management from reactive to proactive, ensuring maximum yield potential.",
    benefits: [
      "Dynamic Nutrient Deficiency Alerts (NDVI, NDRE).",
      "Optimized variable rate application (VRA) prescriptions.",
      "Weather-risk assessment and mitigation planning.",
      "Integrated irrigation and moisture modeling."
    ],
    // Image of Agri Insurance Risk Assessment (Represents risk management in the field)
    image: "https://www.cropin.com/wp-content/uploads/2025/07/Digital-platform-for-end-to-end-visibility-of-farming-operations.webp"
  },

  // 2. For Advisors / Consultants
  {
    industry: "Independent Agri-Consultants",
    location: "Regional Coverage",
    description: "Equip your advisory service with Vaigo's scalable SaaS platform, offering data-driven insights to clients without requiring expensive hardware overhead.",
    benefits: [
      "Centralized client field management dashboard.",
      "Generate detailed, professional agronomic reports instantly.",
      "Validate recommendations with satellite imagery evidence.",
      "Expand service capacity without increasing fieldwork time."
    ],
    // Image of Farm Advisor Consulting
    image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSL5KFKj61iu0qr_SqJztxkBVG1nQT8f6lbe1gccArM3gwg2rcPxENbFpwDYAh6"
  },

  // 3. For Cooperatives / AgriHoldings
  {
    industry: "Agricultural Cooperatives & Holdings",
    location: "Large-Scale Operations",
    description: "Our enterprise solution delivers a unified view across thousands of plots, standardizing data collection and managing multi-region compliance and performance.",
    benefits: [
      "Bulk license management for member farms.",
      "Benchmarking tools for cross-field performance analysis.",
      "Verify adherence to quality and sustainability standards.",
      "Streamlined group purchasing and input logistics."
    ],
    // Image of Cooperative Agricultural Meeting
    image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQrwyET16L7JLLZPWDX3D1tNId_Jd6pUVmwvGdUzfP57i06daFjxFPvxhyxLz9O"
  },

  // 4. For Insurance / Banking Company
  {
    industry: "Agri-Finance & Insurance",
    location: "Risk Management",
    description: "Vaigo provides the geospatial evidence required for accurate underwriting, loss assessment, and loan-book monitoring across diverse agricultural portfolios.",
    benefits: [
      "Automated event detection (drought, flood, fire).",
      "Independent verification of reported crop loss.",
      "Accurate pre-harvest yield potential estimation.",
      "Portfolio-level risk and health monitoring."
    ],
    // Image of Agri Insurance Risk Assessment
    image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTFmBSNbwVFcTRL5pnXglyNu1tzAJBN8ZUfKt304_MFQx3QGmtSsZ7bb1QI05YB"
  },

  // 5. Telecom
  {
    industry: "Telecom Providers",
    location: "Value-Added Services",
    description: "Offer a powerful white-label AgTech monitoring tool bundled with connectivity plans, creating a high-value subscription service for rural customers.",
    benefits: [
      "Immediate new revenue stream with minimal development.",
      "Increase customer loyalty and long-term retention.",
      "Geo-location data for precision tower placement/optimization.",
      "Seamless integration with existing mobile apps."
    ],
    // Image of Telecom Tower Field Agriculture
    image: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcTqDCduNsfmF81hY1Zsv6uKkvZbSGfLxPYg09hxz2vNG8uPeW9aQhnJzZiFgUMgzdHd9NP-0kYEt7QwQwB1TyPmamYV2hJJ9CEZ7Uzozo_ESMKGMu0"
  },

  // 6. Agro Association / Cooperatives
  {
    industry: "Producer Associations",
    location: "Member Service",
    description: "Provide member organizations with essential tools for industry-wide reporting, collective bargaining, and sharing best practices backed by satellite data.",
    benefits: [
      "Aggregate data for regional disease forecasting.",
      "Evidence-based reporting for policy advocacy.",
      "Facilitate knowledge transfer among members.",
      "Validate commodity production volumes for market insight."
    ],
    // Image of Cooperative Agricultural Meeting
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTe2u4R-cIQNL42LnW55W0i9XkqIqynX_066gYp0ySrp844J419TdXWdY_o1s6z"
  },

  // 7. AG Consultant
  {
    industry: "Certified AG Consultants",
    location: "Field Audits & Reports",
    description: "Enhance your on-the-ground expertise with our cloud-based analytics, turning field observations into quantifiable, repeatable metrics for client success.",
    benefits: [
      "Mobile-friendly interface for in-field data collection.",
      "Time-series analysis to track intervention effectiveness.",
      "Automated report generation for regulatory compliance.",
      "Secure data sharing with client stakeholders."
    ],
    // Image of Farm Advisor Consulting
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSRFhLU6AjPf5UXFbSnoJ-ctitxlcCYHP_0T0b7I4VF-TEQJLUCnAY7X2adceYw"
  },

  // 8. Consulting Company
  {
    industry: "Large Consulting Firms",
    location: "Global Projects",
    description: "Integrate Vaigo's robust API and proprietary geospatial models into large-scale agricultural transformation and development projects worldwide.",
    benefits: [
      "Turnkey geospatial integration via flexible API.",
      "Access to global climate and historical data sets.",
      "Tailored machine learning model development.",
      "Scalable infrastructure for project expansion."
    ],
    // Image of Farm Advisor Consulting
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRIpJ-bY74JL_P7Tz-9TSB-fv80zS0ovS8NNVulGJGRd9iwugPGTfKsB6wjuosn"
  },

  // 9. Agri Input Suppliers
  {
    industry: "Agri-Input & Chemical Suppliers",
    location: "Product Distribution",
    description: "Transition from broad-area sales to precision marketing by understanding the exact needs of farms based on real-time soil and health data.",
    benefits: [
      "Targeted marketing based on confirmed nutrient gaps.",
      "Optimize inventory levels based on regional crop forecasts.",
      "Provide value-add service (VRA maps) to boost sales.",
      "Monitor product performance across diverse conditions."
    ],
    // Image of Agri Input Supply Chain Logistics
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgVDhAd7ZUVXQNV_ZYQYIUrKH4pEQ4kILKBjUtV0L6YhO8FNqL-qi1z9OU-ZCl"
  },

  // 10. Agro Equipment Dealers
  {
    industry: "Agro Equipment Dealers",
    location: "Dealership Network",
    description: "Demonstrate the return on investment (ROI) of precision machinery (like VRT spreaders) by quantifying yield improvements and input savings using Vaigo's data.",
    benefits: [
      "Provide customers with an ROI calculator backed by field data.",
      "Connect equipment usage data to field performance.",
      "Identify ideal customer segments for high-tech machinery.",
      "Support customer training on precision farming technologies."
    ],
    // Image of Agri Input Supply Chain Logistics
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSgPbHzXJBJvKdPgRR42s0lIliuNfjiI0pR86ddYnC1PzxASfIbnN1iDU5kxrE4"
  },

  // 11. IT Company
  {
    industry: "IT & Software Integrators",
    location: "Platform Development",
    description: "Utilize Vaigo's robust API to quickly integrate advanced field monitoring and geospatial analytics into your existing Enterprise Resource Planning (ERP) or internal systems.",
    benefits: [
      "Rapid deployment of geospatial features using our API.",
      "Access pre-processed, high-resolution satellite imagery.",
      "Reduce development time on complex image processing.",
      "Focus on core business logic while we handle the data."
    ],
    // Image of Telecom Tower Field Agriculture
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQdxSar73V9qJlycOG963AWvLopHVNFFZnhF8qLZlFP9l7HZz_7m4KMGpOgppW7"
  },

  // 12. Food Processing Company
  {
    industry: "Food Processing & Retail",
    location: "Supply Chain Assurance",
    description: "Ensure a consistent, traceable supply of high-quality raw materials by monitoring the health and adherence to quality protocols of your contract farms.",
    benefits: [
      "Traceability from product to plot (Field-to-Fork).",
      "Accurate assessment of raw material quality before harvest.",
      "Monitor contract grower adherence to sustainability metrics.",
      "Minimize disruption risks with early yield fluctuation warnings."
    ],
    // Image of Cooperative Agricultural Meeting (Focuses on supply chain and agreements)
    image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmH4riju03nWaBQWYylXEpD3z4pana_DVJe7MePLNErzKHZOhDtj64YVHCZVHG"
  }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-blue-50 to-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-green-500/[0.02] bg-[size:20px_20px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-800 border-green-200 mb-6">
              Comprehensive Solutions
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Comprehensive 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                {" "}Agricultural Intelligence
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At Dotflick Ventures, we offer more than just products; we provide integrated solutions designed to address 
              the multifaceted challenges of modern agriculture. Our suite of offerings, centered around the Vaigo drone 
              and the Agro AI Ecosystem, empowers farmers with the tools and insights needed to optimize every aspect of their operations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">
                From Precision Application to Data-Driven Decision Making
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our integrated approach moves beyond traditional farming methods, enabling targeted interventions 
                that lead to healthier crops, reduced environmental impact, and significant cost savings.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-gray-100 hover:border-green-200 transition-colors">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg flex items-center justify-center">
                      <capability.icon className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm">{capability.title}</h3>
                      <p className="text-xs text-gray-600">{capability.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-3xl blur-3xl opacity-20 transform rotate-6" />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1586771107445-d3ca888129ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGZhcm0lMjBhZ3JpY3VsdHVyZSUyMGRyb25lfGVufDF8fHx8MTc1NTkzMzMzMXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Comprehensive agricultural solutions"
                className="relative z-10 w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Integrated Solution Suite
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each solution is designed to work seamlessly together, creating a comprehensive ecosystem 
              that addresses every aspect of modern agricultural operations.
            </p>
          </div>

          <div className="space-y-16">
            {solutions.map((solution, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-blue-100 rounded-xl flex items-center justify-center">
                      <solution.icon className="w-7 h-7 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{solution.title}</h3>
                      <p className="text-lg text-green-600 font-medium">{solution.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">{solution.description}</p>
                  
                  <div className="space-y-3">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button 
                    onClick={() => navigate('/products')}
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl blur-2xl opacity-20 transform rotate-3" />
                  <ImageWithFallback
                    src={solution.image}
                    alt={solution.title}
                    className="relative z-10 w-full h-auto rounded-2xl shadow-xl"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry-Specific Solutions */}
      <section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Header */}
    <div className="text-center mb-16">
      <Badge className="bg-blue-100 text-blue-800 border-blue-200 mb-4">
        Industry-Specific Solutions
      </Badge>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Tailored for Your Success
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        While our technology is broadly applicable, we develop industry-specific
        solutions to address the unique needs of various crops and agricultural sectors.
      </p>
    </div>

    {/* Solutions Grid */}
    <div className="space-y-12">
      {industrySpecific.map((solution, index) => (
        <Card
          key={index}
          className="border border-gray-200 overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left: Image Section */}
            <div className="relative h-64 lg:h-auto">
              <ImageWithFallback
                src={solution.image}
                alt={`${solution.crop} cultivation`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <div className="flex items-center space-x-2 mb-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{solution.location}</span>
                </div>
                <h3 className="text-2xl font-bold">
                  {solution.crop} Optimization
                </h3>
              </div>
            </div>

            {/* Right: Details Section */}
            <CardContent className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 break-words leading-tight">
                  Specialized Agricultural Solutions
                </h4>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
                  {solution.description}
                </p>

                {/* Benefits */}
                <div className="space-y-3 mb-6">
                  <h5 className="font-semibold text-gray-900">Key Benefits:</h5>
                  <ul className="space-y-2">
                    {solution.benefits.map((benefit, benefitIndex) => (
                      <li
                        key={benefitIndex}
                        className="flex items-start space-x-3"
                      >
                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 bg-green-500 rounded-full" />
                        </div>
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap items-center gap-3 mt-4">
                <Badge className="bg-green-100 text-green-800 text-xs">
                  MahaAgri-AI Policy Aligned
                </Badge>
                <Badge className="bg-blue-100 text-blue-800 text-xs">
                  Climate-Adaptive Design
                </Badge>
              </div>
            </CardContent>
          </div>
        </Card>
      ))}
    </div>
  </div>
</section>

      {/* Advanced Features */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced Agricultural Intelligence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our solutions leverage cutting-edge AI and digital twin technology to provide 
              unprecedented insights and control over your agricultural operations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border border-green-100 hover:border-green-200 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Climate-Adaptive Crop Design</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  AI-powered simulation of crop growth under diverse climate conditions, 
                  recommending optimal genetic traits for enhanced resilience.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-blue-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Activity className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Real-Time Quality Grading</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Monitor quality parameters like sugar content directly on growing plants, 
                  transforming pricing, procurement, and contract management.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-purple-100 hover:border-purple-200 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Database className="w-7 h-7 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Digital Twin Integration</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Complete virtual replica of your farmland with granular Pixel, Cube, 
                  and Tile analysis secured by blockchain technology.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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