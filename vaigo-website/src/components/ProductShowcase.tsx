import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './ImageWithFallback';
import { 
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Plane,
  Target,
  Shield,
  Monitor,
  Users,
  BarChart3,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

interface ProductShowcaseProps {
  onNavigate: (page: string) => void;
}

export function ProductShowcase({ onNavigate }: ProductShowcaseProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const showcaseItems = [
    {
      id: 'Plane-flight',
      title: 'Vaigo in Flight Over Diverse Crops',
      description: 'Watch Vaigo navigate seamlessly over sugarcane, corn, and wheat fields with precision and efficiency',
      image: 'https://images.unsplash.com/photo-1677126577258-1a82fdf1a976?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcm9uZSUyMHNwcmF5aW5nJTIwcHJlY2lzaW9uJTIwYWdyaWN1bHR1cmV8ZW58MXx8fHwxNzU1ODY4NzAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      icon: Plane,
      features: [
        'Autonomous flight over various terrain types',
        'Adaptive height adjustment for different crops',
        'Real-time crop type recognition',
        'Optimized flight paths for maximum coverage'
      ],
      stats: { coverage: '15 hectares/hour', accuracy: '±1cm', altitude: '2-5 meters' }
    },
    {
      id: 'precision-spraying',
      title: 'Precision Spraying System in Action',
      description: 'Advanced centrifugal nozzles deliver uniform droplet size with minimal drift for optimal application',
      image: 'https://images.unsplash.com/photo-1738598665806-7ecc32c3594c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVjaXNpb24lMjBhZ3JpY3VsdHVyZSUyMHNlbnNvcnMlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1NTg2ODcyMHww&ixlib=rb-4.1.0&q=80&w=1080',
      icon: Target,
      features: [
        'Dual atomization technology for uniform coverage',
        'Variable rate application based on crop needs',
        'Anti-drift system for precise targeting',
        'Real-time flow rate monitoring'
      ],
      stats: { dropletSize: '150-300μm', sprayWidth: '6-10m', efficiency: '98% coverage' }
    },
    {
      id: 'obstacle-avoidance',
      title: 'Intelligent Detection & Avoidance',
      description: 'Multi-directional sensors detect and navigate around trees, power lines, and field obstructions',
      image: 'https://images.unsplash.com/photo-1632064535948-d387f1c8789c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3JuJTIwZmllbGQlMjBkcm9uZSUyMGFncmljdWx0dXJlJTIwYWVyaWFsJTIwdmlld3xlbnwxfHx8fDE3NTU4Njg3MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      icon: Shield,
      features: [
        'Millimeter-wave radar detection',
        'LiDAR precision mapping',
        'Binocular vision system',
        '360-degree situational awareness'
      ],
      stats: { detection: '30m range', response: '<0.2s', obstacles: 'All types', safety: '99.9%' }
    },
    {
      id: 'control-system',
      title: 'Ground Control System Interface',
      description: 'Intuitive dashboard for intelligent flight planning, real-time telemetry, and comprehensive data visualization',
      image: 'https://images.unsplash.com/photo-1666015212938-b96bb465f5b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyYWwlMjB0ZWNobm9sb2d5JTIwZGFzaGJvYXJkJTIwY29udHJvbCUyMHN5c3RlbXxlbnwxfHx8fDE3NTU4Njg3MDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      icon: Monitor,
      features: [
        'Real-time flight telemetry and status',
        'Automated mission planning',
        'Live video feed monitoring',
        'Data analytics and reporting'
      ],
      stats: { range: '5km', latency: '<50ms', features: '20+ tools', uptime: '99.8%' }
    },
    {
      id: 'farmer-interaction',
      title: 'Seamless Farmer Integration',
      description: 'Agricultural professionals easily interact with Vaigo system, emphasizing user-friendly operation and training',
      image: 'https://images.unsplash.com/photo-1744230673231-865d54a0aba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtZXIlMjB1c2luZyUyMHRhYmxldCUyMHRlY2hub2xvZ3klMjBzbWFydCUyMGZhcm1pbmd8ZW58MXx8fHwxNzU1ODY4NzA3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      icon: Users,
      features: [
        'Intuitive touchscreen interface',
        'Minimal training requirements',
        'One-touch automated operations',
        'Multi-language support'
      ],
      stats: { training: '2 hours', adoption: '95%', satisfaction: '4.8/5', support: '24/7' }
    },
    {
      id: 'crop-coverage',
      title: 'Multi-Crop Field Operations',
      description: 'Comprehensive coverage across sugarcane, corn, wheat, and specialty crops with crop-specific optimization',
      image: 'https://images.unsplash.com/photo-1681999735650-3b56d16ffd17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWdhcmNhbmUlMjBmaWVsZCUyMGFlcmlhbCUyMHZpZXclMjBhZ3JpY3VsdHVyZXxlbnwxfHx8fDE3NTU4Njg3MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      icon: BarChart3,
      features: [
        'Crop-specific spray patterns',
        'Adaptive application rates',
        'Multi-season compatibility',
        'Yield optimization tracking'
      ],
      stats: { crops: '15+ types', seasons: 'Year-round', optimization: '+25% yield', coverage: '1000+ hectares' }
    }
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % showcaseItems.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + showcaseItems.length) % showcaseItems.length);
  };

  const goToSlide = (index: number) => {
    setActiveSlide(index);
  };

  const currentItem = showcaseItems[activeSlide];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-green-100 text-green-800 border-green-200 mb-4">
            Product Showcase
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Vaigo in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Witness the power of Vaigo transforming agricultural operations. Our Plane is engineered for peak performance, 
            delivering unparalleled precision and efficiency in the field.
          </p>
        </div>

        {/* Main Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image Section */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <ImageWithFallback
                src={currentItem.image}
                alt={currentItem.title}
                className="w-full h-96 object-cover transition-transform duration-700 hover:scale-105"
              />
              
              {/* Video Play Overlay */}
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <Button 
                  size="lg" 
                  className="bg-white/90 text-gray-900 hover:bg-white"
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  {isPlaying ? <Pause className="w-6 h-6 mr-2" /> : <Play className="w-6 h-6 mr-2" />}
                  {isPlaying ? 'Pause' : 'Play'} Demo
                </Button>
              </div>

              {/* Slide Counter */}
              <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {activeSlide + 1} / {showcaseItems.length}
              </div>

              {/* Navigation Arrows */}
              <Button
                variant="ghost"
                size="sm"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 rounded-full w-10 h-10 p-0"
                onClick={prevSlide}
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 rounded-full w-10 h-10 p-0"
                onClick={nextSlide}
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex space-x-2 mt-4 overflow-x-auto pb-2">
              {showcaseItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => goToSlide(index)}
                  className={`flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    index === activeSlide ? 'border-green-500 shadow-lg' : 'border-gray-200 hover:border-green-300'
                  }`}
                >
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-blue-100 rounded-xl flex items-center justify-center">
                  <currentItem.icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{currentItem.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">{currentItem.description}</p>
            </div>

            {/* Features */}
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900">Key Features:</h4>
              {currentItem.features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <Card className="border border-green-100 bg-gradient-to-r from-green-50 to-blue-50">
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 mb-4">Performance Metrics:</h4>
                <div className="grid grid-cols-3 gap-4 text-center">
                  {Object.entries(currentItem.stats).map(([key, value]) => (
                    <div key={key}>
                      <div className="text-lg font-bold text-green-600">{value}</div>
                      <div className="text-xs text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700"
                onClick={() => onNavigate('products')}
              >
                Learn More About Vaigo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-green-200 text-green-700 hover:bg-green-50"
                onClick={() => onNavigate('contact')}
              >
                Request Live Demo
              </Button>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border border-green-100 hover:border-green-200 transition-all duration-300 hover:shadow-lg group">
            <CardContent className="p-6 text-center">
              <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Precision Application</h3>
              <p className="text-sm text-gray-600">Variable rate spraying with real-time field condition adaptation</p>
            </CardContent>
          </Card>

          <Card className="border border-blue-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg group">
            <CardContent className="p-6 text-center">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-green-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Advanced Safety</h3>
              <p className="text-sm text-gray-600">Multi-sensor obstacle detection ensures safe autonomous operation</p>
            </CardContent>
          </Card>

          <Card className="border border-green-100 hover:border-green-200 transition-all duration-300 hover:shadow-lg group">
            <CardContent className="p-6 text-center">
              <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Data-Driven Insights</h3>
              <p className="text-sm text-gray-600">Real-time analytics for continuous optimization and performance tracking</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}