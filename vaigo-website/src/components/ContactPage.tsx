import { useState } from "react";
import Reveal from "./animations/Reveal";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "./ui/select";
import { ImageWithFallback } from "./ImageWithFallback";
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
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import { log } from "console";

// -----------------------------
// CONTACT PAGE
// -----------------------------
export function ContactPage() {
  const navigate = useNavigate();

  const [errors, setErrors] = useState({
  inquiry: false
});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    inquiry: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let hasError = false;

    if (!formData.inquiry) {
      setErrors(prev => ({ ...prev, inquiry: true }));
      hasError = true;
    }

    if (hasError) return;
    
    try {
      // Use localhost in development, vaigo.in in production
      const apiUrl = import.meta.env.DEV 
        ? "http://localhost:5000/api/contact" 
        : "https://vaigo.in/api/contact";

      // const apiUrl = "http://localhost:5000/api/contact";
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(apiUrl);
      console.log(formData);
      console.log(response)
      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          inquiry: '',
          message: ''
        });
      } else {
        alert(`Failed: ${data.message}`);
      }
    } catch (error) {
      alert("Something went wrong. Try again later.");
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "General Inquiries",
      value: "info@vaigo.in",
      description: "For questions about Vaigo and our solutions",
    },
    {
      icon: Headphones,
      title: "Technical Support",
      value: "info@vaigo.in",
      description: "For existing customers needing assistance",
    },
    {
      icon: Users,
      title: "Partnership Inquiries",
      value: "info@vaigo.in",
      description: "For collaboration and business development",
    },
    {
      icon: Phone,
      title: "Phone Support",
      value: "+91 88050 43855",
      description: "Monday - Friday, 9:00 AM - 5:00 PM (IST)",
    }
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* ----------------------------------- */}
      {/* HERO SECTION */}
      {/* ----------------------------------- */}
      <section className="bg-gradient-to-br from-green-50 via-blue-50 to-white py-12">
  <Reveal type="fade" y={10}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Get in Touch with{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
          Dotflick Ventures
        </span>
      </h1>

      <Reveal delay={0.1}>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Ready to revolutionize your farming operations? We're here to help you discover
          how Vaigo and the Agro AI Ecosystem can transform your agricultural practices.
        </p>
      </Reveal>
    </div>
  </Reveal>
</section>


      {/* ----------------------------------- */}
      {/* CONTACT METHODS */}
      {/* ----------------------------------- */}
      <section className="py-20">
        <Reveal>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Multiple Ways to Connect
            </h2>

            <Reveal delay={0.1}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the best way to reach us. Our team is ready to assist you with any questions.
              </p>
            </Reveal>
          </div>
        </Reveal>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method, index) => (
            <Reveal key={index} delay={index * 0.08}>
              <Card className="border border-green-100 hover:border-green-200 transition-all duration-300 hover:shadow-lg group">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-blue-100 rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <method.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{method.title}</h3>
                  <p className="text-lg text-green-600 font-medium mb-2">{method.value}</p>
                  <p className="text-lg text-gray-600">{method.description}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ----------------------------------- */}
      {/* CONTACT FORM */}
      {/* ----------------------------------- */}
      <section className="pt-10 bg-gradient-to-br from-gray-50 to-green-50">
        <Reveal>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Send Us a Message
            </h2>
            <p className="text-xl text-gray-600">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <Card className="max-w-4xl mx-auto border border-white shadow-xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Row 1 */}
                <div className="grid md:grid-cols-2 gap-6">
                  <Reveal delay={0.1}>
                    <div className="space-y-2">
                      <Label className="text-lg">Full Name *</Label>
                      <Input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Enter your full name"
                        required
                        className="text-lg"
                      />
                    </div>
                  </Reveal>

                  <Reveal delay={0.15}>
                    <div className="space-y-2">
                      <Label className="text-lg">Email Address *</Label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="Enter your email"
                        required
                        className="text-lg"
                      />
                    </div>
                  </Reveal>
                </div>

                {/* Row 2 */}
                <div className="grid md:grid-cols-2 gap-6">
                  <Reveal delay={0.2}>
                    <div className="space-y-2">
                      <Label className="text-lg">Company/Organization</Label>
                      <Input
                        type="text"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        placeholder="Enter your company name"
                        className="text-lg"
                      />
                    </div>
                  </Reveal>

                  <Reveal delay={0.25}>
                    <div className="space-y-2">
                      <Label className="text-lg">Phone Number</Label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="Enter your phone number"
                        required
                        className="text-lg"
                      />
                    </div>
                  </Reveal>
                </div>

                {/* Inquiry */}
                <Reveal delay={0.3}>
                  <div className="space-y-2">
                    <Label className="text-lg">
  Inquiry Type <span className="text-red-500">*</span>
</Label>

<Select
  value={formData.inquiry}
  onValueChange={(value) => {
    handleInputChange("inquiry", value);
    setErrors(prev => ({ ...prev, inquiry: false })); // Clear error
  }}
>
  <SelectTrigger
    className={`
      text-lg sm:text-base border-gray-200 focus:border-green-500 
      ${errors.inquiry ? " border-red-500 focus:border-red-500" : ""}
    `}
  >
    <SelectValue placeholder="Select inquiry type" />
  </SelectTrigger>

  <SelectContent className="bg-white">
    <SelectItem value="demo" className="text-lg">Request a Demo</SelectItem>
    <SelectItem value="pricing" className="text-lg">Pricing Information</SelectItem>
    <SelectItem value="technical" className="text-lg">Technical Support</SelectItem>
    <SelectItem value="partnership" className="text-lg">Partnership</SelectItem>
    <SelectItem value="general" className="text-lg">General Questions</SelectItem>
    <SelectItem value="other" className="text-lg">Other</SelectItem>
  </SelectContent>
</Select>

{errors.inquiry && (
  <p className="text-red-500 text-sm mt-1">This field is required.</p>
)}

                  </div>
                </Reveal>

                {/* Message */}
                <Reveal delay={0.35}>
                  <div className="space-y-2">
                    <Label className="text-lg">Message</Label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Tell us about your farming operation..."
                      rows={6}
                      className="text-lg"
                    />
                  </div>
                </Reveal>

                {/* Buttons */}
                <Reveal delay={0.4}>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      type="submit"
                      size="lg"
                      className="text-lg py-3 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 flex-1"
                    >
                      Send Message
                      <Send className="ml-2 w-5 h-5" />
                    </Button>

                    <Button
                      type="button"
                      variant="outline"
                      size="lg"
                      onClick={() => navigate("/schedule-call")}
                      className="text-lg border-green-200 text-green-700 hover:bg-green-50"
                    >
                      <MessageSquare className="mr-2 w-5 h-5" />
                      Schedule a Call
                    </Button>
                  </div>
                </Reveal>
              </form>
            </CardContent>
          </Card>
        </Reveal>
      </section>

      {/* ----------------------------------- */}
      {/* SUPPORT & SERVICES (everything wrapped in Reveal) */}
      {/* ----------------------------------- */}
      {/* 🔥 To avoid exceeding message length, I will generate the rest in next message */}
                {/* ----------------------------------- */}
      {/* SUPPORT & SERVICES SECTION */}
      {/* ----------------------------------- */}
      <section className="pt-20 bg-white">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">

          <Reveal>
            <div className="text-center mb-16 px-4">
              <Badge className="bg-blue-100 text-blue-800 border-blue-200 mb-4">
                Support & Services
              </Badge>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Your Partner in Success
              </h2>

              <Reveal delay={0.1}>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  At Dotflick Ventures, we understand that investing in advanced agricultural
                  technology is a significant decision. That’s why our commitment to your success
                  extends far beyond the sale of our products.
                </p>
              </Reveal>
            </div>
          </Reveal>

          {/* Service Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              { icon: GraduationCap, title: "Training & Certification", desc: "Comprehensive programs for operators and technical staff" },
              { icon: Headphones, title: "Technical Support / Demo", desc: "Expert assistance when you need it most" },
              { icon: Wrench, title: "Maintenance Services", desc: "Peak performance and longevity assurance" },
              { icon: FileText, title: "Documentation & Resources", desc: "Comprehensive information at your fingertips" }
            ].map((item, i) => (
              <Reveal delay={i * 0.08} key={i}>
                <Card className="border border-green-100 hover:border-green-200 transition-all duration-300 hover:shadow-lg group text-center">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-blue-100 rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <item.icon className="w-7 h-7 text-green-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-lg text-gray-600">{item.desc}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>

          {/* ----------------------------------- */}
          {/* TRAINING & CERTIFICATION */}
          {/* ----------------------------------- */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              {/* Text */}
              <Reveal>
                <div className="space-y-8 px-4">
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-blue-100 rounded-xl flex items-center justify-center">
                        <GraduationCap className="w-6 h-6 text-green-600" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                        Training and Certification
                      </h3>
                    </div>

                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                      Empowering Your Team with comprehensive training programs designed for operators,
                      farm managers, and technical staff.
                    </p>
                  </div>

                  {/* List Sections */}
                  {[
                    {
                      color: "green",
                      title: "Operator Training (Basic & Advanced)",
                      points: [
                        "Basic Flight Operations: Fundamental drone control and safety protocols",
                        "Intelligent Flight Planning: Mission planning and route optimization",
                        "Spraying System Operation: Chemical handling and spray pattern optimization"
                      ]
                    },
                    {
                      color: "blue",
                      title: "Agro AI Ecosystem Utilization",
                      points: [
                        "Digital Twin Navigation: Understanding Pixel, Cube, and Tile systems",
                        "AI Analytics Interpretation for farm insights",
                        "Blockchain Integration: Tokenized farm units & traceability"
                      ]
                    },
                    {
                      color: "purple",
                      title: "Regulatory Compliance Training",
                      points: [
                        "Local & International Regulations",
                        "Certification Assistance for commercial drone licenses"
                      ]
                    }
                  ].map((section, sIndex) => (
                    <Reveal delay={0.1 + sIndex * 0.1} key={sIndex}>
                      <div className={`border-l-4 border-${section.color}-500 pl-6`}>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{section.title}</h4>
                        <ul className="space-y-2 text-gray-600">
                          {section.points.map((pt, pIndex) => (
                            <li className="flex items-start space-x-2" key={pIndex}>
                              <CheckCircle className={`w-4 h-4 text-${section.color}-500 mt-0.5 flex-shrink-0`} />
                              <span className="text-lg">{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </Reveal>

              {/* Image */}
              <Reveal delay={0.2} type="zoom">
                <div className="relative px-4">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl blur-2xl opacity-20 transform rotate-3" />
                  <ImageWithFallback
                    src="https://i.ibb.co/HfCmchh6/IMG-20251113-WA0056.jpg"
                    alt="Agricultural training and certification"
                    className="relative z-10 w-full h-auto rounded-2xl shadow-xl"
                  />
                </div>
              </Reveal>

            </div>
          </div>

          {/* ----------------------------------- */}
          {/* TECHNICAL SUPPORT SECTION */}
          {/* ----------------------------------- */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              {/* Image */}
              <Reveal>
                <div className="relative lg:order-1 px-4">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-500 rounded-2xl blur-2xl opacity-20 transform -rotate-3" />
                  <ImageWithFallback
                    src="https://i.ibb.co/yFS6nxsf/Gemini-Generated-Image-bhdnm9bhdnm9bhdn.png"
                    alt="Technical support"
                    className="relative z-10 w-full h-auto rounded-2xl shadow-xl"
                  />
                </div>
              </Reveal>

              {/* Text */}
              <Reveal delay={0.1}>
                <div className="space-y-8 lg:order-2 px-4">

                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-green-100 rounded-xl flex items-center justify-center">
                        <Headphones className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                        Technical Support
                      </h3>
                    </div>

                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                      Expert assistance when you need it. Fast, effective, reliable.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      { icon: Smartphone, color: "blue", title: "Multi-Channel Support", desc: "Phone, email & online portal" },
                      { icon: Monitor, color: "green", title: "Remote Diagnostics", desc: "Instant remote issue resolution" },
                      { icon: BookOpen, color: "purple", title: "Knowledge Base", desc: "Guides, FAQs, manuals, videos" },
                      { icon: Download, color: "indigo", title: "Software Updates", desc: "Automatic updates & improvements" }
                    ].map((item, i) => (
                      <Reveal key={i} delay={0.15 + i * 0.05}>
                        <Card className="border border-gray-100 p-4">
                          <div className="flex items-center space-x-3 mb-3">
                            <item.icon className={`w-5 h-5 text-${item.color}-600`} />
                            <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
                          </div>
                          <p className="text-lg text-gray-600">{item.desc}</p>
                        </Card>
                      </Reveal>
                    ))}
                  </div>

                </div>
              </Reveal>

            </div>
          </div>

          {/* ----------------------------------- */}
          {/* MAINTENANCE SERVICES */}
          {/* ----------------------------------- */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center px-4">

              {/* Text */}
              <Reveal>
                <div className="space-y-8">
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl flex items-center justify-center">
                        <Wrench className="w-6 h-6 text-purple-600" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                        Maintenance Services
                      </h3>
                    </div>

                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                      Ensure peak performance & longevity of your drone ecosystem.
                    </p>
                  </div>

                  {[
                    { icon: Calendar, title: "Preventative Maintenance Programs", desc: "Scheduled checks to prevent issues", color: "green" },
                    { icon: Settings, title: "Expert Repair Services", desc: "Certified technicians & genuine parts", color: "blue" },
                    { icon: Zap, title: "Spare Parts Availability", desc: "Batteries, propellers, nozzles & more", color: "purple" },
                    { icon: Shield, title: "Annual Service Contracts", desc: "Priority repairs & discounted rates", color: "indigo" }
                  ].map((box, j) => (
                    <Reveal delay={0.1 + j * 0.1} key={j}>
                      <div className={`flex items-start space-x-4 p-4 bg-gradient-to-r from-${box.color}-50 to-blue-50 rounded-lg`}>
                        <box.icon className={`w-6 h-6 text-${box.color}-600 flex-shrink-0 mt-1`} />
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-1">{box.title}</h4>
                          <p className="text-lg text-gray-600">{box.desc}</p>
                        </div>
                      </div>
                    </Reveal>
                  ))}

                </div>
              </Reveal>

              {/* Image */}
              <Reveal delay={0.15} type="zoom">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-500 rounded-2xl blur-2xl opacity-20 transform rotate-3" />
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1556745753-b2904692b3cd?q=80&w=1073"
                    alt="Maintenance Services"
                    className="relative z-10 rounded-2xl shadow-xl w-full"
                  />
                </div>
              </Reveal>

            </div>
          </div>

          {/* ----------------------------------- */}
          {/* DOCUMENTATION & RESOURCES */}
          {/* ----------------------------------- */}
          <div className="mb-10">
            <Reveal>
              <div className="text-center mb-12 px-4">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-green-100 rounded-xl flex items-center justify-center">
                    <FileText className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Documentation and Resources
                  </h3>
                </div>

                <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Comprehensive information to help you understand, operate, and maintain your Vaigo drone.
                </p>
              </div>
            </Reveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: BookOpen, color: "indigo", title: "User Manuals", desc: "Detailed guides for operation & troubleshooting" },
                { icon: Settings, color: "blue", title: "Technical Specifications", desc: "Complete documentation for all systems" },
                { icon: Shield, color: "green", title: "Safety Guidelines", desc: "Operational safety & chemical handling" },
                { icon: Droplets, color: "purple", title: "Application Guides", desc: "Best practices for crop spraying" },
                { icon: Video, color: "orange", title: "Webinars & Tutorials", desc: "In-depth video learning resources" },
                { icon: AlertCircle, color: "teal", title: "Troubleshooting Resources", desc: "Quick fixes & diagnostic help" }
              ].map((item, i) => (
                <Reveal delay={i * 0.08} key={i}>
                  <Card className="border border-gray-100 hover:border-indigo-200 hover:shadow-lg transition-all duration-300 group">
                    <CardContent className="p-6 text-center">
                      <div className={`w-14 h-14 bg-gradient-to-br from-${item.color}-100 to-blue-100 rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <item.icon className={`w-7 h-7 text-${item.color}-600`} />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-lg text-gray-600 leading-relaxed">{item.desc}</p>
                    </CardContent>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>

          {/* ----------------------------------- */}
          {/* OFFICE INFORMATION */}
          {/* ----------------------------------- */}
          <section className="py-10 px-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">

              {/* Office Details */}
              <Reveal>
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Location</h2>

                    <div className="space-y-6">

                      {/* Address */}
                      <Reveal>
                        <div className="flex items-start space-x-4">
                          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                            <MapPin className="w-5 h-5 text-green-600" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-1">Headquarters</h3>
                            <p className="text-lg text-gray-600">
                              Dotflick Ventures Private Limited<br />
                              D705, The Cliff Garden, Hinjewadi IT park phase 3<br />
                              Pune, Maharashtra - 411057<br />
                              India
                            </p>
                          </div>
                        </div>
                      </Reveal>

                      {/* Business Hours */}
                      <Reveal delay={0.1}>
                        <div className="flex items-start space-x-4">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            <Clock className="w-5 h-5 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-1">Business Hours</h3>
                            <p className="text-lg text-gray-600">
                              Monday-Friday: 9 AM - 5 PM<br />
                              Saturday: 9 AM - 1 PM<br />
                              Sunday: Closed
                            </p>
                          </div>
                        </div>
                      </Reveal>

                      {/* Support Hours */}
                      <Reveal delay={0.2}>
                        <div className="flex items-start space-x-4">
                          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                            <Headphones className="w-5 h-5 text-green-600" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-1">Support Hours</h3>
                            <p className="text-lg text-gray-600">
                              Technical Support: Mon-Sat, 9 AM - 6 PM<br />
                              Emergency Support: 24/7<br />
                              Phone: +91 88050 43855
                            </p>
                          </div>
                        </div>
                      </Reveal>

                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Map */}
              <Reveal delay={0.15} type="zoom">
                 {/* Map Placeholder */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Location</h2>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345!2d73.8567!3d18.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0651f9f7b6d%3A0xabcdef123456!2sPune!5e0!3m2!1sen!2sin!4v1693579900000"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
              </Reveal>

            </div>
          </section>

          {/* ----------------------------------- */}
          {/* FINAL CTA SECTION */}
          {/* ----------------------------------- */}
          <Reveal>
            <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to Transform Your Farm?
                </h2>

                <Reveal delay={0.1}>
                  <p className="text-xl text-green-100 mb-8 leading-relaxed">
                    Contact us to schedule a personalized demonstration of Vaigo and the Agro AI Ecosystem.
                  </p>
                </Reveal>

                <Reveal delay={0.2}>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      type="button"
                      variant="outline"
                      size="lg"
                      onClick={() => navigate("/schedule-call")}
                      className="text-lg border-green-200 text-green-100 hover:bg-green-50 hover:text-green-700"
                    >
                      <MessageSquare className="mr-2 w-5 h-5" />
                      Schedule Demo Call
                    </Button>
                  </div>
                </Reveal>
              </div>
            </section>
          </Reveal>

        </div>
      </section>

    </div>
  );
}
