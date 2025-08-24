import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { ImageWithFallback } from './ImageWithFallback';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  MessageSquare,
  Users,
  Headphones,
  GraduationCap,
  Shield,
  Wrench,
  FileText,
  Award,
  CheckCircle,
  Monitor,
  AlertCircle,
  BookOpen,
  Video,
  Download,
  Settings,
  Zap,
  Calendar,
  Smartphone,
  Droplets
} from 'lucide-react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    inquiry: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      inquiry: '',
      message: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "General Inquiries",
      value: "info@dotflickventures.com",
      description: "For questions about Vaigo and our solutions"
    },
    {
      icon: Headphones,
      title: "Technical Support",
      value: "support@dotflickventures.com",
      description: "For existing customers needing assistance"
    },
    {
      icon: Users,
      title: "Partnership Inquiries",
      value: "partnerships@dotflickventures.com",
      description: "For collaboration and business development"
    },
    {
      icon: Phone,
      title: "Phone Support",
      value: "+91-XXXXXXXXXX",
      description: "Monday - Friday, 9:00 AM - 5:00 PM (IST)"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get in Touch with 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                {" "}Dotflick Ventures
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to revolutionize your farming operations? We're here to help you discover how 
              Vaigo and the Agro AI Ecosystem can transform your agricultural practices.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Multiple Ways to Connect
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the best way to reach us. Our team is ready to assist you with any questions 
              about our products, services, or partnership opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="border border-green-100 hover:border-green-200 transition-all duration-300 hover:shadow-lg group">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <method.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-green-600 font-medium mb-2">{method.value}</p>
                  <p className="text-sm text-gray-600">{method.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Send Us a Message
            </h2>
            <p className="text-xl text-gray-600">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>

          <Card className="border border-white shadow-xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Enter your full name"
                      required
                      className="border-gray-200 focus:border-green-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="Enter your email address"
                      required
                      className="border-gray-200 focus:border-green-500"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company/Organization</Label>
                    <Input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      placeholder="Enter your company name"
                      className="border-gray-200 focus:border-green-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="Enter your phone number"
                      className="border-gray-200 focus:border-green-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="inquiry">Type of Inquiry *</Label>
                  <Select value={formData.inquiry} onValueChange={(value) => handleInputChange('inquiry', value)}>
                    <SelectTrigger className="border-gray-200 focus:border-green-500 bg-white">
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent className='bg-white'>
                      <SelectItem value="demo">Request a Demo</SelectItem>
                      <SelectItem value="pricing">Pricing Information</SelectItem>
                      <SelectItem value="technical">Technical Support</SelectItem>
                      <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                      <SelectItem value="general">General Questions</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Tell us about your farming operation and how we can help..."
                    rows={6}
                    required
                    className="border-gray-200 focus:border-green-500"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 flex-1"
                  >
                    Send Message
                    <Send className="ml-2 w-5 h-5" />
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline" 
                    size="lg" 
                    className="border-green-200 text-green-700 hover:bg-green-50"
                  >
                    <MessageSquare className="mr-2 w-5 h-5" />
                    Schedule a Call
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Support & Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 border-blue-200 mb-4">
              Support & Services
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Partner in Success
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At Dotflick Ventures, we understand that investing in advanced agricultural technology is a significant decision. 
              That's why our commitment to your success extends far beyond the sale of our products. We offer a comprehensive 
              suite of support and services designed to ensure you maximize the value of your Vaigo drone and the Agro AI Ecosystem.
            </p>
          </div>

          {/* Service Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <Card className="border border-green-100 hover:border-green-200 transition-all duration-300 hover:shadow-lg group text-center">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Training & Certification</h3>
                <p className="text-sm text-gray-600">Comprehensive programs for operators and technical staff</p>
              </CardContent>
            </Card>

            <Card className="border border-blue-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg group text-center">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-green-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Headphones className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Technical Support</h3>
                <p className="text-sm text-gray-600">Expert assistance when you need it most</p>
              </CardContent>
            </Card>

            <Card className="border border-purple-100 hover:border-purple-200 transition-all duration-300 hover:shadow-lg group text-center">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-green-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Wrench className="w-7 h-7 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Maintenance Services</h3>
                <p className="text-sm text-gray-600">Peak performance and longevity assurance</p>
              </CardContent>
            </Card>

            <Card className="border border-indigo-100 hover:border-indigo-200 transition-all duration-300 hover:shadow-lg group text-center">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-7 h-7 text-indigo-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Documentation & Resources</h3>
                <p className="text-sm text-gray-600">Comprehensive information at your fingertips</p>
              </CardContent>
            </Card>
          </div>

          {/* Training and Certification Detail */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-blue-100 rounded-xl flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Training and Certification</h3>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Empowering Your Team with comprehensive training programs designed for operators, farm managers, 
                    and technical staff, catering to various levels of experience.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="border-l-4 border-green-500 pl-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Operator Training (Basic & Advanced)</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Basic Flight Operations: Fundamental drone control and safety protocols</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Intelligent Flight Planning: Mission planning and route optimization</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Spraying System Operation: Chemical handling and spray pattern optimization</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Agro AI Ecosystem Utilization</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Digital Twin Navigation: Understanding Pixel, Cube, and Tile systems</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">AI Analytics Interpretation: Translating insights into actionable decisions</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Blockchain Integration: Understanding tokenized farm units and traceability</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Regulatory Compliance Training</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Local & International Regulations: FAA Part 137 and aviation authority compliance</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Certification Assistance: Guidance for commercial drone operation licenses</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl blur-2xl opacity-20 transform rotate-3" />
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Agricultural training and certification"
                  className="relative z-10 w-full h-auto rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>

          {/* Technical Support Detail */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative lg:order-1">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-500 rounded-2xl blur-2xl opacity-20 transform -rotate-3" />
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobmljYWwlMjBzdXBwb3J0JTIwYWdyaWN1bHR1cmF8ZW58MXx8fHwxNzU1OTMzMzc5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Technical support and assistance"
                  className="relative z-10 w-full h-auto rounded-2xl shadow-xl"
                />
              </div>

              <div className="space-y-8 lg:order-2">
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-green-100 rounded-xl flex items-center justify-center">
                      <Headphones className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Technical Support</h3>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Expert Assistance When You Need It. Our dedicated technical support team provides prompt 
                    and effective assistance, minimizing downtime and ensuring continuous operation.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="border border-gray-100 p-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <Smartphone className="w-5 h-5 text-blue-600" />
                      <h4 className="font-semibold text-gray-900">Multi-Channel Support</h4>
                    </div>
                    <p className="text-sm text-gray-600">Access support via phone, email, and dedicated online portal with specialist assistance</p>
                  </Card>

                  <Card className="border border-gray-100 p-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <Monitor className="w-5 h-5 text-green-600" />
                      <h4 className="font-semibold text-gray-900">Remote Diagnostics</h4>
                    </div>
                    <p className="text-sm text-gray-600">Software-related issues resolved remotely without need for on-site visits</p>
                  </Card>

                  <Card className="border border-gray-100 p-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <BookOpen className="w-5 h-5 text-purple-600" />
                      <h4 className="font-semibold text-gray-900">Knowledge Base & FAQs</h4>
                    </div>
                    <p className="text-sm text-gray-600">Comprehensive self-help resources with manuals, guides, and video tutorials</p>
                  </Card>

                  <Card className="border border-gray-100 p-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <Download className="w-5 h-5 text-indigo-600" />
                      <h4 className="font-semibold text-gray-900">Software Updates</h4>
                    </div>
                    <p className="text-sm text-gray-600">Regular updates for enhanced performance and new features with automatic delivery</p>
                  </Card>
                </div>
              </div>
            </div>
          </div>

          {/* Maintenance Services Detail */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl flex items-center justify-center">
                      <Wrench className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Maintenance Services</h3>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Ensuring Peak Performance and Longevity. Regular maintenance is crucial for optimal performance. 
                    We offer flexible maintenance plans to keep your equipment in top condition.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
                    <Calendar className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Preventative Maintenance Programs</h4>
                      <p className="text-sm text-gray-600">Scheduled maintenance checks to identify and address potential issues before disruptions</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                    <Settings className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Expert Repair Services</h4>
                      <p className="text-sm text-gray-600">Certified technicians using genuine parts for all Vaigo components and systems</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-purple-50 to-green-50 rounded-lg">
                    <Zap className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Spare Parts Availability</h4>
                      <p className="text-sm text-gray-600">Ready inventory of essential parts including batteries, propellers, nozzles, and electronics</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg">
                    <Shield className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Annual Service Contracts</h4>
                      <p className="text-sm text-gray-600">Comprehensive coverage with scheduled maintenance, priority repairs, and discounted rates</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-500 rounded-2xl blur-2xl opacity-20 transform rotate-3" />
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1556745753-b2904692b3cd?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Maintenance and repair services"
                  className="relative z-10 w-full h-auto rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>

          {/* Documentation and Resources Detail */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-green-100 rounded-xl flex items-center justify-center">
                  <FileText className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Documentation and Resources</h3>
              </div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Comprehensive Information at Your Fingertips. We provide extensive documentation and resources 
                to help you understand, operate, and maintain your Vaigo drone and Agro AI Ecosystem effectively.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border border-gray-100 hover:border-indigo-200 transition-all duration-300 hover:shadow-lg group">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="w-7 h-7 text-indigo-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">User Manuals</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Detailed guides covering every aspect of Vaigo's operation, maintenance, and troubleshooting procedures
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg group">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-green-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Settings className="w-7 h-7 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Technical Specifications</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Comprehensive documentation of all technical parameters and performance capabilities
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-gray-100 hover:border-green-200 transition-all duration-300 hover:shadow-lg group">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-7 h-7 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Safety Guidelines</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Strict safety protocols and best practices for drone operation and chemical handling
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-gray-100 hover:border-purple-200 transition-all duration-300 hover:shadow-lg group">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Droplets className="w-7 h-7 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Application Guides</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Recommendations and best practices for applying various agricultural inputs for different crop types
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-gray-100 hover:border-orange-200 transition-all duration-300 hover:shadow-lg group">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-red-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Video className="w-7 h-7 text-orange-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Webinars and Tutorials</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Library of online webinars and video tutorials from basic operation to advanced data analysis
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-gray-100 hover:border-teal-200 transition-all duration-300 hover:shadow-lg group">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-teal-100 to-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <AlertCircle className="w-7 h-7 text-teal-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Troubleshooting Resources</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Step-by-step troubleshooting guides and FAQs for quick problem resolution
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Support CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Experience Comprehensive Support
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
                Our commitment to support and service ensures that you have the resources and expertise 
                you need to succeed with Vaigo and the Agro AI Ecosystem. Partner with us for a seamless and productive farming experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700">
                  <GraduationCap className="mr-2 w-5 h-5" />
                  Enroll in Training
                </Button>
                <Button size="lg" variant="outline" className="border-green-200 text-green-700 hover:bg-green-50">
                  <Headphones className="mr-2 w-5 h-5" />
                  Contact Support
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Office Details */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Location</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Headquarters</h3>
                      <p className="text-gray-600">
                        Dotflick Ventures Private Limited<br />
                        [Address Line 1]<br />
                        [City, State, Zip Code]<br />
                        India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 5:00 PM (IST)<br />
                        Saturday: 9:00 AM - 1:00 PM (IST)<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Headphones className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Support Hours</h3>
                      <p className="text-gray-600">
                        Technical Support Available:<br />
                        Monday - Saturday: 9:00 AM - 6:00 PM (IST)<br />
                        Emergency Support: 24/7
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Interactive Map</h3>
                  <p className="text-gray-600">
                    [Google Maps Embed Placeholder]<br />
                    Showing Dotflick Ventures Location
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Farm?
          </h2>
          <p className="text-xl text-green-100 mb-8 leading-relaxed">
            Don't wait to experience the future of farming. Contact us today to schedule 
            a personalized demonstration of Vaigo and the Agro AI Ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-white text-green-600 hover:bg-gray-50 px-8 py-3"
            >
              Schedule Demo Call
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-3"
            >
              Download Brochure
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}