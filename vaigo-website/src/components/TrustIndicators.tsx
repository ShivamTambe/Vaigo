import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './ImageWithFallback';
import { 
  Shield, 
  Award, 
  Users, 
  CheckCircle2,
  Star,
  Verified
} from 'lucide-react';

export function TrustIndicators() {
  const certifications = [
    {
      icon: Shield,
      title: "ISO 9001 Certified",
      description: "Quality Management System",
      category: "Certification"
    },
    {
      icon: Verified,
      title: "FAA Part 137 Compliant",
      description: "Agricultural Aircraft Operations",
      category: "Certification"
    },
    {
      icon: Award,
      title: "Agricultural Innovation Award",
      description: "Winner 2023",
      category: "Award"
    },
    {
      icon: Users,
      title: "Strategic Partner",
      description: "Leading Ag-Tech Companies",
      category: "Partnership"
    }
  ];

  const testimonials = [
    {
      quote: "Vaigo has revolutionized our spraying operations. The precision is unmatched, and we've seen a significant reduction in chemical usage, which is great for both our bottom line and the environment. The ease of use is a huge plus, even for our less tech-savvy team members.",
      name: "Rajesh Kumar",
      role: "Large-Scale Sugarcane Farmer",
      location: "Maharashtra, India",
      rating: 5
    },
    {
      quote: "The integration of Vaigo with the Agro AI Ecosystem has given us insights into our fields we never thought possible. The digital twin concept is a game-changer for managing our crops, and the predictive analytics have saved us from potential pest outbreaks multiple times. Dotflick Ventures is truly leading the way.",
      name: "Dr. Anjali Sharma",
      role: "Head of Agricultural Services",
      company: "AgriSolutions Inc.",
      rating: 5
    },
    {
      quote: "As an agricultural cooperative, investing in Vaigo was a strategic decision to empower our members. The training and support provided by Dotflick Ventures have been exceptional, ensuring smooth adoption and immediate benefits for our farmers. We're seeing increased yields and happier members.",
      name: "Suresh Reddy",
      role: "Chairman",
      company: "Deccan Farmers Cooperative",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-blue-100 text-blue-800 border-blue-200 mb-4">
            Trust Indicators
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Commitment to Your Success
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            At Dotflick Ventures, we are committed to delivering not just cutting-edge technology, but also tangible results and unwavering support. 
            Our solutions are built on a foundation of rigorous research, development, and real-world testing, ensuring reliability and performance.
          </p>
        </div>

        {/* Certifications and Recognition Grid */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Industry Recognition & Certifications
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((item, index) => (
              <Card key={index} className="border border-gray-100 hover:border-green-200 transition-all duration-300 hover:shadow-lg group text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <Badge className="bg-gray-100 text-gray-700 text-xs mb-3">
                    {item.category}
                  </Badge>
                  <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Visual Trust Elements */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <Card className="border border-green-100 overflow-hidden group hover:shadow-lg transition-all duration-300">
            <div className="relative h-48">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1587567818566-3272be7d64c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJ0aWZpY2F0aW9uJTIwcXVhbGl0eSUyMGFzc3VyYW5jZSUyMGJhZGdlfGVufDF8fHx8MTc1NTkzMzI0Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Quality certifications and standards"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-semibold">Quality Assurance</h4>
                <p className="text-sm opacity-90">Certified Standards</p>
              </div>
            </div>
          </Card>

          <Card className="border border-blue-100 overflow-hidden group hover:shadow-lg transition-all duration-300">
            <div className="relative h-48">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1632679090212-612ac1f4d76f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbm5vdmF0aW9uJTIwYXdhcmQlMjB0cm9waHklMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1NTkzMzI0Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Innovation awards and recognition"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-semibold">Innovation Excellence</h4>
                <p className="text-sm opacity-90">Award Winning Technology</p>
              </div>
            </div>
          </Card>

          <Card className="border border-green-100 overflow-hidden group hover:shadow-lg transition-all duration-300">
            <div className="relative h-48">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1745847768380-2caeadbb3b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBhcnRuZXJzaGlwJTIwaGFuZHNoYWtlJTIwY29vcGVyYXRpb258ZW58MXx8fHwxNzU1OTMzMjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Strategic partnerships and collaboration"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-semibold">Strategic Partnerships</h4>
                <p className="text-sm opacity-90">Industry Collaboration</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Customer Testimonials Preview */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear directly from farmers and agricultural professionals who have experienced 
            the transformative impact of Vaigo and the Agro AI Ecosystem.
          </p>
        </div>

        {/* Featured Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-gray-100 hover:border-green-200 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t border-gray-100 pt-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-100 to-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      {testimonial.company && (
                        <p className="text-sm text-gray-500">{testimonial.company}</p>
                      )}
                      {testimonial.location && (
                        <p className="text-sm text-gray-500">{testimonial.location}</p>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}