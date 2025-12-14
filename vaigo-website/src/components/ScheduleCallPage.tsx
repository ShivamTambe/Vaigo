import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
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
} from 'lucide-react';
import { useNavigate } from "react-router-dom";
import Reveal from "./animations/Reveal";

type FormData = {
  name: string;
  email: string;
  company: string;
  phone: string;
  jobTitle: string;
  farmSize: string;
  meetingType: string;
  callPurpose: string;
  preferredDate: string;
  preferredTime: string;
  duration: string;
  timeZone: string;
  currentChallenges: string;
  additionalNotes: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

export function ScheduleCallPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<FormData>({
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

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // clear error on change
    if (errors[field]) {
      setErrors(prev => {
        const copy = { ...prev };
        delete copy[field];
        return copy;
      });
    }
  };

  const meetingTypes = [
    { value: 'virtual', label: 'Virtual Meeting (Zoom/Teams)', icon: Video },
    { value: 'phone', label: 'Phone Call', icon: Phone },
    { value: 'in-person', label: 'In-Person Meeting', icon: MapPin }
  ];

  const callPurposes = [
    { value: 'demo', label: 'Product Demo & Overview', icon: Target },
    { value: 'consultation', label: 'Agricultural Consultation', icon: Users },
    { value: 'pricing', label: 'Pricing & Implementation', icon: Globe },
    { value: 'technical', label: 'Technical Discussion', icon: Zap },
    { value: 'partnership', label: 'Partnership Opportunities', icon: Phone }
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

  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.meetingType) newErrors.meetingType = "Meeting type is required";
    if (!formData.callPurpose) newErrors.callPurpose = "Call purpose is required";
    if (!formData.preferredDate) newErrors.preferredDate = "Preferred date is required";
    if (!formData.preferredTime) newErrors.preferredTime = "Preferred time is required";
    if (!formData.duration) newErrors.duration = "Duration is required";
    if (!formData.timeZone) newErrors.timeZone = "Time zone is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    const apiUrl = import.meta.env.DEV 
        ? "http://localhost:5000/api/schedule" 
        : "https://vaigo.in/api/schedule";

    try {
      const response = await fetch(apiUrl, {
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

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-white flex items-center justify-center">
        <div className="max-w-md mx-auto px-4">
          <Card className="border border-green-200 shadow-xl">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Call Scheduled Successfully!
              </h2>
              <p className="text-gray-600 mb-6">
                Thank you for scheduling a call with us. We'll send you a confirmation email with the meeting details shortly.
              </p>
              <p className="text-lg text-gray-500">
                Redirecting back to contact page...
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Button
              variant="ghost"
              onClick={() => navigate('/contact')}
              className="text-lg mb-6 text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Contact
            </Button>

            <Reveal type="slide" y={18}>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Schedule a Consultation with
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                  {" "}Our Experts
                </span>
              </h1>
            </Reveal>

            <Reveal type="fade" delay={0.06}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Ready to transform your farming operations with Vaigo? Let's discuss how our advanced
                agricultural drones and AI-powered ecosystem can benefit your specific needs.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Benefits of Scheduling */}
      <section className="pt-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Reveal type="zoom">
              <Card className="border border-green-100 hover:border-green-200 transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Target className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Personalized Demo</h3>
                  <p className="text-lg text-gray-600">
                    See Vaigo in action with a customized demonstration tailored to your crops and farming challenges
                  </p>
                </CardContent>
              </Card>
            </Reveal>

            <Reveal type="zoom" delay={0.06}>
              <Card className="border border-blue-100 hover:border-blue-200 transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Expert Consultation</h3>
                  <p className="text-lg text-gray-600">
                    Get professional advice on implementing precision agriculture solutions for your specific operation
                  </p>
                </CardContent>
              </Card>
            </Reveal>

            <Reveal type="zoom" delay={0.12}>
              <Card className="border border-purple-100 hover:border-purple-200 transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">ROI Analysis</h3>
                  <p className="text-lg text-gray-600">
                    Understand the potential return on investment and cost savings for your farming operation
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Scheduling Form */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="bg-green-100 text-green-800 border-green-200 mb-4">
              Schedule Your Call
            </Badge>
            <Reveal type="slide" y={18}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Book Your Consultation
              </h2>
            </Reveal>
            <Reveal type="fade" delay={0.06}>
              <p className="text-xl text-gray-600">
                Fill out the details below and we'll connect you with the right expert for your needs.
              </p>
            </Reveal>
          </div>

          <Reveal type="zoom" delay={0.04}>
            <Card className="border border-white shadow-xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Contact Information */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                      <Users className="w-5 h-5 mr-2 text-green-600" />
                      Contact Information
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="space-y-2">
                        <Label htmlFor="name" className='text-lg'>Full Name *</Label>
                        <Input
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Enter your full name"
                          required
                          className={`border-gray-200 focus:border-green-500 ${errors.name ? 'border-red-500 focus:border-red-500' : ''}`}
                        />
                        {errors.name && (
                          <p className="text-lg text-red-500 mt-1">{errors.name}</p>
                        )}
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <Label htmlFor="email" className='text-lg'>Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="Enter your email address"
                          required
                          className={`border-gray-200 focus:border-green-500 ${errors.email ? 'border-red-500 focus:border-red-500' : ''}`}
                        />
                        {errors.email && (
                          <p className="text-lg text-red-500 mt-1">{errors.email}</p>
                        )}
                      </div>

                      {/* Phone */}
                      <div className="space-y-2">
                        <Label htmlFor="phone" className='text-lg'>Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="Enter your phone number"
                          required
                          className={`border-gray-200 focus:border-green-500 ${errors.phone ? 'border-red-500 focus:border-red-500' : ''}`}
                        />
                        {errors.phone && (
                          <p className="text-lg text-red-500 mt-1">{errors.phone}</p>
                        )}
                      </div>

                      {/* Company */}
                      <div className="space-y-2">
                        <Label htmlFor="company" className='text-lg'>Company/Farm Name</Label>
                        <Input
                          id="company"
                          type="text"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          placeholder="Enter your company or farm name"
                          className="border-gray-200 focus:border-green-500"
                        />
                      </div>

                      {/* Job Title */}
                      <div className="space-y-2">
                        <Label htmlFor="jobTitle" className='text-lg'>Job Title/Role</Label>
                        <Input
                          id="jobTitle"
                          type="text"
                          value={formData.jobTitle}
                          onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                          placeholder="e.g., Farm Manager, Owner, Agronomist"
                          className="border-gray-200 focus:border-green-500"
                        />
                      </div>

                      {/* Farm Size */}
                      <div className="space-y-2">
                        <Label htmlFor="farmSize" className='text-lg'>Farm Size (acres/hectares)</Label>
                        <Input
                          id="farmSize"
                          type="text"
                          value={formData.farmSize}
                          onChange={(e) => handleInputChange('farmSize', e.target.value)}
                          placeholder="e.g., 500 acres, 200 hectares"
                          className="border-gray-20 0focus:border-green-500"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Meeting Preferences */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                      <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                      Meeting Preferences
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Meeting Type */}
                      <div className="space-y-2">
                        <Label htmlFor="meetingType" className='text-lg'>Meeting Type *</Label>
                        <Select
                          value={formData.meetingType}
                          onValueChange={(value) => handleInputChange('meetingType', value)}
                        >
                          <SelectTrigger
                            id="meetingType"
                            className={`border-gray-200 focus:border-green-500 ${errors.meetingType ? 'border-red-500 focus:border-red-500' : ''}`}
                            aria-invalid={!!errors.meetingType}
                          >
                            <SelectValue placeholder="Select meeting type" />
                          </SelectTrigger>
                          <SelectContent className="bg-white" className='text-lg'>
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
                        {errors.meetingType && (
                          <p className="text-lg text-red-500 mt-1">{errors.meetingType}</p>
                        )}
                      </div>

                      {/* Call Purpose */}
                      <div className="space-y-2">
                        <Label htmlFor="callPurpose" className='text-lg'>Call Purpose *</Label>
                        <Select
                          value={formData.callPurpose}
                          onValueChange={(value) => handleInputChange('callPurpose', value)}
                        >
                          <SelectTrigger
                            id="callPurpose"
                            className={`border-gray-200 focus:border-green-500 ${errors.callPurpose ? 'border-red-500 focus:border-red-500' : ''}`}
                            aria-invalid={!!errors.callPurpose}
                          >
                            <SelectValue placeholder="Select call purpose" />
                          </SelectTrigger>
                          <SelectContent className="bg-white">
                            {callPurposes.map((purpose) => (
                              <SelectItem key={purpose.value} value={purpose.value}>
                                <div className="flex items-center space-x-2">
                                  <purpose.icon className="w-4 h-4" />
                                  <span className='text-lg'>{purpose.label}</span>
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.callPurpose && (
                          <p className="text-lg text-red-500 mt-1">{errors.callPurpose}</p>
                        )}
                      </div>

                      {/* Preferred Date */}
                      <div className="space-y-2">
                        <Label htmlFor="preferredDate" className='text-lg'>Preferred Date *</Label>
                        <Input
                          id="preferredDate"
                          type="date"
                          value={formData.preferredDate}
                          onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                          required
                          className={`border-gray-200 focus:border-green-500 ${errors.preferredDate ? 'border-red-500 focus:border-red-500' : ''
                            }`}
                          min={new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString().split('T')[0]}
                        />
                        {errors.preferredDate && (
                          <p className="text-lg text-red-500 mt-1">{errors.preferredDate}</p>
                        )}
                      </div>

                      {/* Preferred Time */}
                      <div className="space-y-2">
                        <Label htmlFor="preferredTime" className='text-lg'>Preferred Time *</Label>
                        <Select
                          value={formData.preferredTime}
                          onValueChange={(value) => handleInputChange('preferredTime', value)}
                        >
                          <SelectTrigger
                            id="preferredTime"
                            className={`border-gray-200 focus:border-green-500 ${errors.preferredTime ? 'border-red-500 focus:border-red-500' : ''}`}
                            aria-invalid={!!errors.preferredTime}
                          >
                            <SelectValue placeholder="Select preferred time" />
                          </SelectTrigger>
                          <SelectContent className="bg-white">
                            {timeSlots.map((slot) => (
                              <SelectItem key={slot} value={slot}>
                                {slot}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.preferredTime && (
                          <p className="text-lg text-red-500 mt-1">{errors.preferredTime}</p>
                        )}
                      </div>

                      {/* Duration */}
                      <div className="space-y-2">
                        <Label htmlFor="duration" className='text-lg'>Expected Duration *</Label>
                        <Select
                          value={formData.duration}
                          onValueChange={(value) => handleInputChange('duration', value)}
                        >
                          <SelectTrigger
                            id="duration"
                            className={`border-gray-200 focus:border-green-500 ${errors.duration ? 'border-red-500 focus:border-red-500' : ''}`}
                            aria-invalid={!!errors.duration}
                          >
                            <SelectValue placeholder="Select duration" />
                          </SelectTrigger>
                          <SelectContent className="bg-white">
                            {durations.map((duration) => (
                              <SelectItem key={duration} value={duration}>
                                {duration}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.duration && (
                          <p className="text-lg text-red-500 mt-1">{errors.duration}</p>
                        )}
                      </div>

                      {/* Time Zone */}
                      <div className="space-y-2">
                        <Label htmlFor="timeZone" className='text-lg'>Time Zone *</Label>
                        <Select
                          value={formData.timeZone}
                          onValueChange={(value) => handleInputChange('timeZone', value)}
                        >
                          <SelectTrigger
                            id="timeZone"
                            className={`border-gray-200 focus:border-green-500 ${errors.timeZone ? 'border-red-500 focus:border-red-500' : ''}`}
                            aria-invalid={!!errors.timeZone}
                          >
                            <SelectValue placeholder="Select your time zone" />
                          </SelectTrigger>
                          <SelectContent className="text-lg bg-white">
                            {timeZones.map((zone) => (
                              <SelectItem key={zone} value={zone}>
                                {zone}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.timeZone && (
                          <p className="text-lg text-red-500 mt-1">{errors.timeZone}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                      <Globe className="w-5 h-5 mr-2 text-purple-600" />
                      Additional Information
                    </h3>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="currentChallenges" className='text-lg'>Current Farming Challenges</Label>
                        <Textarea
                          id="currentChallenges"
                          value={formData.currentChallenges}
                          onChange={(e) => handleInputChange('currentChallenges', e.target.value)}
                          placeholder="What are your current farming challenges? (e.g., pest management, yield optimization, labor costs)"
                          rows={4}
                          className="border-gray-200 focus:border-green-500"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="additionalNotes" className='text-lg'>Additional Notes</Label>
                        <Textarea
                          id="additionalNotes"
                          value={formData.additionalNotes}
                          onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
                          placeholder="Any specific topics you'd like to discuss or questions you have about our solutions..."
                          rows={4}
                          className="border-gray-200 focus:border-green-500"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <Button
                      type="submit"
                      size="lg"
                      className="text-lg py-3 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 flex-1"
                    >
                      Schedule My Call
                      <Calendar className="ml-2 w-5 h-5" />
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      size="lg"
                      onClick={() => navigate('/contact')}
                      className="text-lg border-gray-200 text-gray-700 hover:bg-gray-50"
                    >
                      <ArrowLeft className="mr-2 w-5 h-5" />
                      Back to Contact
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal type="slide" y={18}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What to Expect During Your Call
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our agricultural technology experts will provide you with valuable insights and solutions tailored to your farming needs.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Farm Assessment",
                desc: "We'll discuss your current farming practices, challenges, and goals"
              },
              {
                step: "2",
                title: "Solution Demo",
                desc: "Live demonstration of Vaigo and the Agro AI Ecosystem features"
              },
              {
                step: "3",
                title: "Custom Proposal",
                desc: "Tailored recommendations based on your specific requirements"
              },
              {
                step: "4",
                title: "Next Steps",
                desc: "Clear roadmap for implementation and ongoing support"
              },
            ].map((item, idx) => (
              <Reveal key={idx} type="zoom" delay={0.04 * idx}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-lg text-gray-600">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
