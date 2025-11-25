import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from './ui/select';

import Reveal from "./animations/Reveal";

import {
  Calendar,
  Video,
  MapPin,
  Phone,
  CheckCircle,
  ArrowLeft,
  Users,
  Globe,
  Target,
  Zap,
  Headphones,
  Building
} from 'lucide-react';

import { useNavigate } from "react-router-dom";

export function ScheduleCallPage() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    jobTitle: '',
    farmSize: '',
    meetingType: '',
    callPurpose: '',
    preferredDate: '',
    preferredTime: '',
    duration: '',
    timeZone: 'UTC+5:30 (IST - India Standard Time)',
    currentChallenges: '',
    additionalNotes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("https://vaigo.in/api/schedule", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubmitted(true);

        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          jobTitle: '',
          farmSize: '',
          meetingType: '',
          callPurpose: '',
          preferredDate: '',
          preferredTime: '',
          duration: '',
          timeZone: 'UTC+5:30 (IST - India Standard Time)',
          currentChallenges: '',
          additionalNotes: ''
        });

        setTimeout(() => {
          setIsSubmitted(false);
          navigate("/");
        }, 3000);
      } else {
        alert(`❌ Failed: ${data.error || "Something went wrong"}`);
      }
    } catch (error) {
      console.error("Error submitting schedule form:", error);
      alert("⚠️ Something went wrong. Try again later.");
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const meetingTypes = [
    { value: 'virtual', label: 'Virtual Meeting (Zoom/Teams)', icon: Video },
    { value: 'phone', label: 'Phone Call', icon: Phone },
    { value: 'in-person', label: 'In-Person Meeting', icon: MapPin }
  ];

  const callPurposes = [
    { value: 'demo', label: 'Product Demo & Overview', icon: Target },
    { value: 'consultation', label: 'Agricultural Consultation', icon: Users },
    { value: 'pricing', label: 'Pricing & Implementation', icon: Building },
    { value: 'technical', label: 'Technical Discussion', icon: Zap },
    { value: 'partnership', label: 'Partnership Opportunities', icon: Headphones }
  ];

  const timeSlots = [
    '9:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '12:00 PM - 1:00 PM',
    '1:00 PM - 2:00 PM',
    '2:00 PM - 3:00 PM',
    '3:00 PM - 4:00 PM',
    '4:00 PM - 5:00 PM'
  ];

  const durations = [
    '30 minutes',
    '45 minutes',
    '1 hour',
    '1.5 hours',
    '2 hours'
  ];

  const timeZones = [
    'UTC+5:30 (IST - India Standard Time)',
  ];

  // ================= SUCCESS SCREEN ==================

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-white flex items-center justify-center">

        <Reveal type="zoom">
          <Card className="border border-green-200 shadow-xl max-w-md mx-auto px-4">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-blue-100
                rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Call Scheduled Successfully!
              </h2>

              <p className="text-gray-600 mb-6">
                Thank you for scheduling a call with us. We'll send you a confirmation email shortly.
              </p>

              <p className="text-sm text-gray-500">
                Redirecting back to home page...
              </p>
            </CardContent>
          </Card>
        </Reveal>

      </div>
    );
  }

  // ================= MAIN PAGE ==================

  return (
    <div className="min-h-screen bg-white">

      {/* ------------------ HERO SECTION ------------------ */}
      <section className="bg-gradient-to-br from-green-50 via-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <Reveal type="fade">
            <Button
              variant="ghost"
              onClick={() => navigate('/contact')}
              className="mb-6 text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Contact
            </Button>
          </Reveal>

          <Reveal type="slide" y={25} delay={0.05}>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Schedule a Consultation with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                {" "}Our Experts
              </span>
            </h1>
          </Reveal>

          <Reveal type="fade" delay={0.1}>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your farming operations with Vaigo?
              Let's discuss how our advanced agricultural drones and AI-powered ecosystem can help.
            </p>
          </Reveal>

        </div>
      </section>

      {/* ------------------ BENEFITS SECTION ------------------ */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid md:grid-cols-3 gap-8 mb-12">

            {/* Card 1 */}
            <Reveal type="zoom" delay={0.05}>
              <Card className="border border-green-100 hover:border-green-200 transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-blue-100
                    rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Target className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Personalized Demo</h3>
                  <p className="text-sm text-gray-600">
                    See Vaigo in action with a custom demo.
                  </p>
                </CardContent>
              </Card>
            </Reveal>

            {/* Card 2 */}
            <Reveal type="zoom" delay={0.1}>
              <Card className="border border-blue-100 hover:border-blue-200 transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-green-100
                    rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Expert Consultation</h3>
                  <p className="text-sm text-gray-600">
                    Get professional advice from AgTech specialists.
                  </p>
                </CardContent>
              </Card>
            </Reveal>

            {/* Card 3 */}
            <Reveal type="zoom" delay={0.15}>
              <Card className="border border-purple-100 hover:border-purple-200 transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-green-100
                    rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">ROI Analysis</h3>
                  <p className="text-sm text-gray-600">
                    Understand cost savings & long-term benefits.
                  </p>
                </CardContent>
              </Card>
            </Reveal>

          </div>

        </div>
      </section>

      {/* ------------------ FORM SECTION ------------------ */}

      <section className="py-16 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <Reveal type="fade">
            <Badge className="bg-green-100 text-green-800 border-green-200 mb-4 mx-auto">
              Schedule Your Call
            </Badge>
          </Reveal>

          <Reveal type="slide" y={25}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
              Book Your Consultation
            </h2>
          </Reveal>

          <Reveal type="fade" delay={0.1}>
            <p className="text-xl text-gray-600 text-center mb-12">
              Fill out the details below and we’ll connect you with the right expert.
            </p>
          </Reveal>

          <Card className="border border-white shadow-xl">
            <CardContent className="p-8">

              <form onSubmit={handleSubmit} className="space-y-10">

                {/* ---------------- SECTION: CONTACT INFO ---------------- */}
                <Reveal type="slide" y={20}>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                    <Users className="w-5 h-5 mr-2 text-green-600" />
                    Contact Information
                  </h3>
                </Reveal>

                <div className="grid md:grid-cols-2 gap-6">

                  {/* FULL NAME */}
                  <Reveal type="fade" delay={0.05}>
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                  </Reveal>

                  {/* EMAIL */}
                  <Reveal type="fade" delay={0.08}>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </Reveal>

                  {/* PHONE */}
                  <Reveal type="fade" delay={0.11}>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                  </Reveal>

                  {/* COMPANY */}
                  <Reveal type="fade" delay={0.14}>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company / Farm Name</Label>
                      <Input
                        id="company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        placeholder="Enter your company or farm name"
                      />
                    </div>
                  </Reveal>

                  {/* JOB TITLE */}
                  <Reveal type="fade" delay={0.17}>
                    <div className="space-y-2">
                      <Label htmlFor="jobTitle">Job Title / Role</Label>
                      <Input
                        id="jobTitle"
                        type="text"
                        value={formData.jobTitle}
                        onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                        placeholder="e.g., Farm Manager, Owner"
                      />
                    </div>
                  </Reveal>

                  {/* FARM SIZE */}
                  <Reveal type="fade" delay={0.20}>
                    <div className="space-y-2">
                      <Label htmlFor="farmSize">Farm Size</Label>
                      <Input
                        id="farmSize"
                        type="text"
                        value={formData.farmSize}
                        onChange={(e) => handleInputChange('farmSize', e.target.value)}
                        placeholder="e.g., 500 acres"
                      />
                    </div>
                  </Reveal>

                </div>

                {/* ---------------- SECTION: MEETING PREFERENCES ---------------- */}

                <Reveal type="slide" y={20}>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                    Meeting Preferences
                  </h3>
                </Reveal>

                <div className="grid md:grid-cols-2 gap-6">

                  {/* MEETING TYPE */}
                  <Reveal type="fade" delay={0.1}>
                    <div className="space-y-2">
                      <Label>Meeting Type *</Label>
                      <Select
                        value={formData.meetingType}
                        onValueChange={(value) => handleInputChange('meetingType', value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select meeting type" />
                        </SelectTrigger>
                        <SelectContent>
                          {meetingTypes.map((type) => (
                            <SelectItem key={type.value} value={type.value}>
                              <div className="flex items-center space-x-2">
                                <type.icon className="w-4 h-4" />
                                <span>{type.label}</span>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </Reveal>

                  {/* CALL PURPOSE */}
                  <Reveal type="fade" delay={0.14}>
                    <div className="space-y-2">
                      <Label>Call Purpose *</Label>
                      <Select
                        value={formData.callPurpose}
                        onValueChange={(value) => handleInputChange('callPurpose', value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select call purpose" />
                        </SelectTrigger>
                        <SelectContent>
                          {callPurposes.map((p) => (
                            <SelectItem key={p.value} value={p.value}>
                              <div className="flex items-center space-x-2">
                                <p.icon className="w-4 h-4" />
                                <span>{p.label}</span>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </Reveal>

                  {/* DATE */}
                  <Reveal type="fade" delay={0.17}>
                    <div className="space-y-2">
                      <Label>Preferred Date *</Label>
                      <Input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                        required
                      />
                    </div>
                  </Reveal>

                  {/* TIME SLOT */}
                  <Reveal type="fade" delay={0.20}>
                    <div className="space-y-2">
                      <Label>Preferred Time *</Label>
                      <Select
                        value={formData.preferredTime}
                        onValueChange={(value) => handleInputChange('preferredTime', value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select preferred time" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((slot) => (
                            <SelectItem key={slot} value={slot}>
                              {slot}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </Reveal>

                  {/* DURATION */}
                  <Reveal type="fade" delay={0.23}>
                    <div className="space-y-2">
                      <Label>Expected Duration *</Label>
                      <Select
                        value={formData.duration}
                        onValueChange={(value) => handleInputChange('duration', value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select duration" />
                        </SelectTrigger>
                        <SelectContent>
                          {durations.map((duration) => (
                            <SelectItem key={duration} value={duration}>
                              {duration}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </Reveal>

                  {/* TIME ZONE */}
                  <Reveal type="fade" delay={0.26}>
                    <div className="space-y-2">
                      <Label>Time Zone *</Label>
                      <Select
                        value={formData.timeZone}
                        onValueChange={(value) => handleInputChange('timeZone', value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select time zone" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeZones.map((zone) => (
                            <SelectItem key={zone} value={zone}>
                              {zone}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </Reveal>

                </div>

                {/* ---------------- SECTION: ADDITIONAL INFO ---------------- */}

                <Reveal type="slide" y={20}>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                    <Globe className="w-5 h-5 mr-2 text-purple-600" />
                    Additional Information
                  </h3>
                </Reveal>

                {/* CHALLENGES */}
                <Reveal type="fade" delay={0.1}>
                  <div className="space-y-2">
                    <Label>Current Farming Challenges</Label>
                    <Textarea
                      value={formData.currentChallenges}
                      onChange={(e) => handleInputChange('currentChallenges', e.target.value)}
                      placeholder="What challenges are you facing?"
                      rows={4}
                    />
                  </div>
                </Reveal>

                {/* ADDITIONAL NOTES */}
                <Reveal type="fade" delay={0.15}>
                  <div className="space-y-2">
                    <Label>Additional Notes</Label>
                    <Textarea
                      value={formData.additionalNotes}
                      onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
                      placeholder="Any specific requirements?"
                      rows={4}
                    />
                  </div>
                </Reveal>

                {/* ---------------- SUBMIT BUTTON ---------------- */}
                <Reveal type="zoom" delay={0.20}>
                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <Button type="submit" size="lg"
                      className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 flex-1">
                      Schedule My Call
                      <Calendar className="ml-2 w-5 h-5" />
                    </Button>

                    <Button
                      type="button"
                      variant="outline"
                      size="lg"
                      onClick={() => navigate('/contact')}
                    >
                      <ArrowLeft className="mr-2 w-5 h-5" />
                      Back to Contact
                    </Button>
                  </div>
                </Reveal>

              </form>

            </CardContent>
          </Card>

        </div>
      </section>

      {/* ------------------ WHAT TO EXPECT ------------------ */}

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <Reveal type="slide" y={20}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              What to Expect During Your Call
            </h2>
          </Reveal>

          <Reveal type="fade" delay={0.1}>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
              Our experts will guide you through personalized recommendations.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Step 1 */}
            <Reveal type="zoom" delay={0.05}>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-blue-100
                  rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">1</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Farm Assessment</h3>
                <p className="text-sm text-gray-600">
                  Discuss your farming practices, challenges, and goals.
                </p>
              </div>
            </Reveal>

            {/* Step 2 */}
            <Reveal type="zoom" delay={0.1}>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100
                  rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Solution Demo</h3>
                <p className="text-sm text-gray-600">
                  See a live demo of Vaigo & Agro AI.
                </p>
              </div>
            </Reveal>

            {/* Step 3 */}
            <Reveal type="zoom" delay={0.15}>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-green-100
                  rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">3</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Custom Proposal</h3>
                <p className="text-sm text-gray-600">
                  Tailored recommendations for your farm.
                </p>
              </div>
            </Reveal>

            {/* Step 4 */}
            <Reveal type="zoom" delay={0.2}>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-indigo-100
                  rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-indigo-600">4</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Next Steps</h3>
                <p className="text-sm text-gray-600">
                  Clear roadmap for implementation & support.
                </p>
              </div>
            </Reveal>

          </div>

        </div>
      </section>

    </div>
  );
}
