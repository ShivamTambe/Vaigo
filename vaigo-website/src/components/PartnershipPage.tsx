import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Checkbox } from './ui/checkbox';
import { ImageWithFallback } from './ImageWithFallback';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

import { 
  Handshake,
  Users,
  TrendingUp,
  Shield,
  Award,
  CheckCircle,
  Upload,
  Send,
  Zap,
  Globe,
  Target,
  ArrowRight
} from 'lucide-react';

interface PartnershipPageProps {
  onNavigate?: (page: string) => void;
}

export function PartnershipPage({ onNavigate }: PartnershipPageProps) {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 150]);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    droneModel: '',
    expectedPrice: '',
    quantity: '',
    partnershipType: '',
    message: '',
    termsAccepted: false
  });

  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Partnership form submitted:', formData, selectedFiles);
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      company: '',
      droneModel: '',
      expectedPrice: '',
      quantity: '',
      partnershipType: '',
      message: '',
      termsAccepted: false
    });
    setSelectedFiles([]);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFiles(Array.from(e.target.files));
    }
  };

  const benefits = [
    {
      icon: TrendingUp,
      title: "Expand Your Reach",
      description: "Access our global distribution network and reach farmers worldwide"
    },
    {
      icon: Shield,
      title: "Trusted Platform",
      description: "Partner with a certified and ISO-compliant agricultural technology leader"
    },
    {
      icon: Users,
      title: "Collaborative Growth",
      description: "Join a community of innovators transforming agriculture together"
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Benefit from our rigorous quality standards and certification process"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Submit Your Details",
      description: "Fill out the partnership form with your drone specifications and business details"
    },
    {
      number: "02",
      title: "Initial Review",
      description: "Our team evaluates your submission and reaches out within 48 hours"
    },
    {
      number: "03",
      title: "Technical Assessment",
      description: "We conduct a thorough technical review and compatibility check"
    },
    {
      number: "04",
      title: "Partnership Agreement",
      description: "Finalize terms and begin your journey with Vaigo's ecosystem"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-blue-50 to-white py-20 overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-grid-green-500/[0.02] bg-[size:20px_20px]"
          style={{ y: heroY }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Badge className="bg-green-100 text-green-800 border-green-200">
                  <Handshake className="w-4 h-4 mr-2" />
                  Partnership Opportunities
                </Badge>
              </motion.div>
              
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Partner With Us
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-600 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Sell your drone or collaborate with us easily. Join Vaigo's ecosystem and help transform agriculture worldwide with cutting-edge drone technology.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-8 py-3"
                  onClick={() => {
                    document.getElementById('partnership-form')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Become a Partner
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
            </motion.div>

            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-3xl blur-3xl opacity-20 transform rotate-6" />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1745847768380-2caeadbb3b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBhcnRuZXJzaGlwJTIwaGFuZHNoYWtlfGVufDF8fHx8MTc2MzYwMDMxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Partnership opportunities with Vaigo"
                className="relative z-10 w-full h-auto rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Partner With Vaigo?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a thriving ecosystem of agricultural technology innovators and expand your impact in precision farming.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="border border-green-100 hover:border-green-200 transition-all duration-300 hover:shadow-lg group h-full">
                  <CardContent className="p-6">
                    <motion.div 
                      className="w-12 h-12 bg-gradient-to-br from-green-100 to-blue-100 rounded-xl flex items-center justify-center mb-4"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <benefit.icon className="w-6 h-6 text-green-600" />
                    </motion.div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Form */}
      <section id="partnership-form" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Start Your Partnership Journey
            </h2>
            <p className="text-xl text-gray-600">
              Fill out the form below and our team will get back to you within 48 hours.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <Card className="border-2 border-green-100 shadow-xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                      <Users className="w-5 h-5 mr-2 text-green-600" />
                      Personal Information
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">Full Name *</Label>
                        <Input
                          id="fullName"
                          type="text"
                          placeholder="Enter your full name"
                          value={formData.fullName}
                          onChange={(e) => handleInputChange('fullName', e.target.value)}
                          required
                          className="border-gray-300 focus:border-green-500 focus:ring-green-500"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                          className="border-gray-300 focus:border-green-500 focus:ring-green-500"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          required
                          className="border-gray-300 focus:border-green-500 focus:ring-green-500"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company">Company / Brand Name</Label>
                        <Input
                          id="company"
                          type="text"
                          placeholder="Your company name (optional)"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          className="border-gray-300 focus:border-green-500 focus:ring-green-500"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Drone Information */}
                  <div className="space-y-4 pt-6 border-t border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                      <Zap className="w-5 h-5 mr-2 text-blue-600" />
                      Drone Information
                    </h3>

                    <div className="space-y-2">
                      <Label htmlFor="dronePhotos">Upload Drone Photos *</Label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-green-500 transition-colors">
                        <div className="flex flex-col items-center space-y-2">
                          <Upload className="w-8 h-8 text-gray-400" />
                          <div className="text-center">
                            <label htmlFor="dronePhotos" className="cursor-pointer">
                              <span className="text-green-600 hover:text-green-700 font-medium">
                                Click to upload
                              </span>
                              <span className="text-gray-600"> or drag and drop</span>
                            </label>
                            <p className="text-sm text-gray-500 mt-1">
                              PNG, JPG, JPEG up to 10MB (Multiple files allowed)
                            </p>
                          </div>
                          <Input
                            id="dronePhotos"
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={handleFileChange}
                            className="hidden"
                          />
                        </div>
                        {selectedFiles.length > 0 && (
                          <div className="mt-4 space-y-2">
                            <p className="text-sm font-medium text-gray-700">
                              Selected files ({selectedFiles.length}):
                            </p>
                            <ul className="text-sm text-gray-600 space-y-1">
                              {selectedFiles.map((file, index) => (
                                <li key={index} className="flex items-center space-x-2">
                                  <CheckCircle className="w-4 h-4 text-green-500" />
                                  <span>{file.name}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="droneModel">Drone Model / Product Details *</Label>
                      <Textarea
                        id="droneModel"
                        placeholder="Provide detailed specifications: model name, payload capacity, flight time, features, etc."
                        value={formData.droneModel}
                        onChange={(e) => handleInputChange('droneModel', e.target.value)}
                        required
                        rows={4}
                        className="border-gray-300 focus:border-green-500 focus:ring-green-500 resize-none"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expectedPrice">Expected Selling Price *</Label>
                        <Input
                          id="expectedPrice"
                          type="text"
                          placeholder="$0,000 USD"
                          value={formData.expectedPrice}
                          onChange={(e) => handleInputChange('expectedPrice', e.target.value)}
                          required
                          className="border-gray-300 focus:border-green-500 focus:ring-green-500"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="quantity">Quantity Available *</Label>
                        <Input
                          id="quantity"
                          type="number"
                          placeholder="Enter quantity"
                          value={formData.quantity}
                          onChange={(e) => handleInputChange('quantity', e.target.value)}
                          required
                          min="1"
                          className="border-gray-300 focus:border-green-500 focus:ring-green-500"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Partnership Type */}
                  <div className="space-y-4 pt-6 border-t border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                      <Target className="w-5 h-5 mr-2 text-purple-600" />
                      Partnership Details
                    </h3>

                    <div className="space-y-2">
                      <Label htmlFor="partnershipType">Partnership Type *</Label>
                      <Select value={formData.partnershipType} onValueChange={(value) => handleInputChange('partnershipType', value)}>
                        <SelectTrigger id="partnershipType" className="border-gray-300 focus:border-green-500 focus:ring-green-500">
                          <SelectValue placeholder="Select partnership type" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          <SelectItem value="reseller">Reseller / Distributor</SelectItem>
                          <SelectItem value="manufacturer">Drone Manufacturer</SelectItem>
                          <SelectItem value="technology">Technology Partner</SelectItem>
                          <SelectItem value="service">Service Provider</SelectItem>
                          <SelectItem value="other">Other Collaboration</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Additional Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your partnership goals, experience, and what you hope to achieve..."
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        rows={5}
                        className="border-gray-300 focus:border-green-500 focus:ring-green-500 resize-none"
                      />
                    </div>
                  </div>

                  {/* Terms and Submit */}
                  <div className="space-y-6 pt-6 border-t border-gray-200">
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="terms"
                        checked={formData.termsAccepted}
                        onCheckedChange={(checked) => handleInputChange('termsAccepted', checked as boolean)}
                        className="mt-1"
                      />
                      <label htmlFor="terms" className="text-sm text-gray-600 leading-relaxed cursor-pointer">
                        I agree to the{' '}
                        <button type="button" className="text-green-600 hover:text-green-700 underline">
                          Terms & Conditions
                        </button>{' '}
                        and{' '}
                        <button type="button" className="text-green-600 hover:text-green-700 underline">
                          Privacy Policy
                        </button>
                        . I understand that Vaigo will review my submission and contact me within 48 hours.
                      </label>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white py-6"
                      disabled={!formData.termsAccepted}
                    >
                      <Send className="mr-2 w-5 h-5" />
                      Submit Partnership Application
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Partnership Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A simple, transparent process from application to partnership activation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-green-200 to-blue-200 transform -translate-x-1/2" />
                )}
                <Card className="border border-gray-200 hover:border-green-200 transition-all duration-300 hover:shadow-lg h-full relative z-10 bg-white">
                  <CardContent className="p-6">
                    <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-600 mb-4">
                      {step.number}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-green-600 to-blue-600"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Have Questions About Partnership?
          </motion.h2>
          <motion.p 
            className="text-xl text-green-100 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Our partnership team is here to help you understand the opportunities and guide you through the process.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/contact">
              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-white text-green-600 hover:bg-gray-50 px-8 py-3"
              >
                Contact Us
              </Button>
            </Link>
            <Link to="/about">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-3"
              >
                Learn About Vaigo
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
