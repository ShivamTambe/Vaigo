import { useRef, useCallback, useState } from "react";
import {
  GoogleMap,
  Marker,
  useLoadScript,
  Autocomplete,
  DrawingManager,
} from "@react-google-maps/api";

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
  SelectValue,
} from "./ui/select";
import { Checkbox } from "./ui/checkbox";
import { ImageWithFallback } from "./ImageWithFallback";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

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
  Target,
  ArrowRight,
} from "lucide-react";

interface PartnershipPageProps {
  onNavigate?: (page: string) => void;
}

type MapTypeId = "roadmap" | "satellite" | "hybrid" | "terrain";

export function PartnershipPage({ onNavigate }: PartnershipPageProps) {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 150]);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    droneModel: "",
    expectedPrice: "",
    quantity: "",
    partnershipType: "",
    message: "",
    termsAccepted: false,
    address: "",
    lat: null as number | null,
    lng: null as number | null,
    drawingData: null as string | null, // store drawing as GeoJSON
  });

  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [errors, setErrors] = useState({
    partnershipType: false,
  });

  // Google Maps setup
  const libraries = ["places", "drawing"] as ("places" | "drawing")[];

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  console.log("Google loaded:", window.google);
  console.log("Drawing loaded:", window.google?.maps?.drawing);
  console.log("DrawingManager exists:", window.google?.maps?.drawing?.DrawingManager);


  const mapRef = useRef<google.maps.Map | null>(null);
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  const drawingManagerRef = useRef<google.maps.drawing.DrawingManager | null>(null);

  const [marker, setMarker] = useState<{ lat: number; lng: number } | null>(null);
  const [mapType, setMapType] = useState<MapTypeId>("roadmap");
  const [drawingMode, setDrawingMode] = useState<google.maps.drawing.OverlayType | null>(null);
  const [drawnShapes, setDrawnShapes] = useState<google.maps.drawing.OverlayCompleteEvent[]>([]);

  const onMapLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map;
  }, []);

  const onPlaceLoad = (autocomplete: google.maps.places.Autocomplete) => {
    autocompleteRef.current = autocomplete;
  };

  const onPlaceChanged = () => {
    const auto = autocompleteRef.current;
    if (!auto) return;

    const place = auto.getPlace();
    if (!place.geometry || !place.geometry.location) return;

    const lat = place.geometry.location.lat();
    const lng = place.geometry.location.lng();
    const address = place.formatted_address || "";

    setMarker({ lat, lng });
    setFormData((prev) => ({ ...prev, address, lat, lng }));

    if (mapRef.current) {
      mapRef.current.panTo({ lat, lng });
      mapRef.current.setZoom(14);
    }
  };

  const onMapClick = (e: google.maps.MapMouseEvent) => {
    if (!e.latLng) return;
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    setMarker({ lat, lng });
    setFormData((prev) => ({ ...prev, lat, lng }));
  };

  const setToCurrentLocation = () => {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition((pos) => {
      const lat = pos.coords.latitude;
      const lng = pos.coords.longitude;
      setMarker({ lat, lng });
      setFormData((prev) => ({ ...prev, lat, lng }));
      if (mapRef.current) {
        mapRef.current.panTo({ lat, lng });
        mapRef.current.setZoom(14);
      }
    });
  };

  // const handleDrawingToolClick = (tool: string) => {
  //   setDrawingMode(tool as any);
  //   console.log("Drawing tool selected:", tool);
  // };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFiles(Array.from(e.target.files));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  let hasError = false;

  if (!formData.partnershipType) {
  setErrors(prev => ({ ...prev, partnershipType: true }));

  console.log("Scrolling to partnership section");

  partnershipTypeRef.current?.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });

  return; // stop submit after scrolling
}


  if (hasError) return;
  
  if (!formData.partnershipType) {
  setErrors(prev => ({ ...prev, partnershipType: true }));

  console.log("Scrooling to partnership type field");
  
  partnershipTypeRef.current?.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });

  return; // stop submit
}


  try {
    const apiUrl = import.meta.env.DEV
      ? "http://localhost:5000/api/partnership"
      : "https://vaigo.in/api/partnership";

    const formDataWithFiles = new FormData();
    formDataWithFiles.append("fullName", formData.fullName);
    formDataWithFiles.append("email", formData.email);
    formDataWithFiles.append("phone", formData.phone);
    formDataWithFiles.append("company", formData.company);
    formDataWithFiles.append("droneModel", formData.droneModel);
    formDataWithFiles.append("expectedPrice", formData.expectedPrice);
    formDataWithFiles.append("quantity", formData.quantity);
    formDataWithFiles.append("partnershipType", formData.partnershipType);
    formDataWithFiles.append("message", formData.message);
    formDataWithFiles.append("termsAccepted", formData.termsAccepted.toString());
    
    // Add drawing data
    if (formData.drawingData) {
      formDataWithFiles.append("drawingData", formData.drawingData);
    }

    selectedFiles.forEach((file) => {
      formDataWithFiles.append("dronePhotos", file);
    });

    const response = await fetch(apiUrl, {
      method: "POST",
      body: formDataWithFiles,
    });

    const data = await response.json();

    if (response.ok) {
      alert("Partnership application submitted successfully!");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        droneModel: "",
        expectedPrice: "",
        quantity: "",
        partnershipType: "",
        message: "",
        termsAccepted: false,
        address: "",
        lat: null,
        lng: null,
        drawingData: null,
      });
      setSelectedFiles([]);
      setDrawnShapes([]);
      window.location.reload();
    } else {
      alert(`Failed: ${data.error}`);
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Something went wrong. Try again later.");
  }
};

const partnershipTypeRef = useRef<HTMLDivElement | null>(null);

  const benefits = [
    {
      icon: TrendingUp,
      title: "Expand Your Reach",
      description:
        "Access our global distribution network and reach farmers worldwide",
    },
    {
      icon: Shield,
      title: "Trusted Platform",
      description:
        "Partner with a certified and ISO-compliant agricultural technology leader",
    },
    {
      icon: Users,
      title: "Collaborative Growth",
      description:
        "Join a community of innovators transforming agriculture together",
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Benefit from our rigorous quality standards",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Submit Your Details",
      description:
        "Fill out the partnership form with your drone specifications and business details",
    },
    {
      number: "02",
      title: "Initial Review",
      description:
        "Our team evaluates your submission and reaches out within 48 hours",
    },
    {
      number: "03",
      title: "Technical Assessment",
      description:
        "We conduct a thorough technical review and compatibility check",
    },
    {
      number: "04",
      title: "Partnership Agreement",
      description: "Finalize terms and begin your journey with Vaigo",
    },
  ];

  const mapContainerStyle = { width: "100%", height: "280px" };
  const defaultCenter = { lat: 20.5937, lng: 78.9629 }; // India

  const onOverlayComplete = (event: google.maps.drawing.OverlayCompleteEvent) => {
    setDrawnShapes((prev) => [...prev, event]);

    // Convert all shapes to GeoJSON
    const allShapesGeoJson = drawnShapes.map((shape) =>
      shapeToGeoJson(shape.overlay as any, shape.type)
    );

    setFormData((prev) => ({
      ...prev,
      drawingData: JSON.stringify(allShapesGeoJson),
    }));

    console.log("Shape drawn:", event.type);
    console.log("Total shapes:", drawnShapes.length + 1);
  };

  const clearAllShapes = () => {
    drawnShapes.forEach((shape) => {
      (shape.overlay as any).setMap(null);
    });
    setDrawnShapes([]);
    setFormData((prev) => ({ ...prev, drawingData: null }));
    console.log("All shapes cleared");
  };

  // const onDrawingModeChange = (overlayType: google.maps.drawing.OverlayType | null) => {
  //   setDrawingMode(overlayType);
  //   // Ensure the drawing manager receives the mode change
  //   if (mapRef.current) {
  //     console.log("Drawing mode set to:", overlayType);
  //   }
  // };

  // Convert Google Maps shapes to GeoJSON
  const shapeToGeoJson = (
    overlay: google.maps.Polyline | google.maps.Polygon | google.maps.Circle | google.maps.Marker | google.maps.Rectangle,
    type: google.maps.drawing.OverlayType
  ) => {
    const coordinates: any[] = [];

    if (
      type === google.maps.drawing.OverlayType.POLYLINE ||
      type === google.maps.drawing.OverlayType.POLYGON
    ) {
      const path = (overlay as google.maps.Polyline | google.maps.Polygon).getPath();
      path.forEach((latLng) => {
        coordinates.push({ lat: latLng.lat(), lng: latLng.lng() });
      });
    } else if (type === google.maps.drawing.OverlayType.CIRCLE) {
      const center = (overlay as google.maps.Circle).getCenter();
      const radius = (overlay as google.maps.Circle).getRadius();
      coordinates.push({
        center: { lat: center!.lat(), lng: center!.lng() },
        radius: radius,
      });
    } else if (type === google.maps.drawing.OverlayType.MARKER) {
      const pos = (overlay as google.maps.Marker).getPosition();
      coordinates.push({ lat: pos!.lat(), lng: pos!.lng() });
    } else if (type === google.maps.drawing.OverlayType.RECTANGLE) {
      const bounds = (overlay as google.maps.Rectangle).getBounds();
      coordinates.push({
        ne: { lat: bounds!.getNorthEast().lat(), lng: bounds!.getNorthEast().lng() },
        sw: { lat: bounds!.getSouthWest().lat(), lng: bounds!.getSouthWest().lng() },
      });
    }

    return { type: type.toString(), coordinates };
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-blue-50 to-white pt-20 pb-10 overflow-hidden">
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
                Sell your drone or collaborate with us easily. Join Vaigo&apos;s
                ecosystem and help transform agriculture worldwide with
                cutting-edge drone technology.
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
                    document
                      .getElementById("partnership-form")
                      ?.scrollIntoView({ behavior: "smooth" });
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
                src="https://images.unsplash.com/photo-1745847768380-2caeadbb3b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Partnership opportunities with Vaigo"
                className="relative z-10 w-full h-auto rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="pt-10 bg-white">
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
              Join a thriving ecosystem of agricultural technology innovators
              and expand your impact in precision farming.
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
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Form */}
      <section
        id="partnership-form"
        className="pt-20 bg-gradient-to-br from-gray-50 to-white"
      >
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
              Fill out the form below and our team will get back to you within
              48 hours.
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
                          onChange={(e) =>
                            handleInputChange("fullName", e.target.value)
                          }
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
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
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
                          placeholder="+91 00000 00000"
                          value={formData.phone}
                          onChange={(e) =>
                            handleInputChange("phone", e.target.value)
                          }
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
                          onChange={(e) =>
                            handleInputChange("company", e.target.value)
                          }
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
                      <Label htmlFor="dronePhotos">Upload Drone Photos</Label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-green-500 transition-colors">
                        <div className="flex flex-col items-center space-y-2">
                          <Upload className="w-8 h-8 text-gray-400" />
                          <div className="text-center">
                            <label
                              htmlFor="dronePhotos"
                              className="cursor-pointer"
                            >
                              <span className="text-green-600 hover:text-green-700 font-medium">
                                Click to upload
                              </span>
                              <span className="text-gray-600">
                                {" "}
                                or drag and drop
                              </span>
                            </label>
                            <p className="text-sm text-gray-500 mt-1">
                              PNG, JPG, JPEG up to 10MB (Multiple files
                              allowed)
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
                                <li
                                  key={index}
                                  className="flex items-center space-x-2"
                                >
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
                      <Label htmlFor="droneModel">
                        Drone Model / Product Details *
                      </Label>
                      <Textarea
                        id="droneModel"
                        placeholder="Provide detailed specifications: model name, payload capacity, flight time, features, etc."
                        value={formData.droneModel}
                        onChange={(e) =>
                          handleInputChange("droneModel", e.target.value)
                        }
                        required
                        rows={4}
                        className="border-gray-300 focus:border-green-500 focus:ring-green-500 resize-none"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expectedPrice">
                          Expected Selling Price *
                        </Label>
                        <Input
                          id="expectedPrice"
                          type="number"
                          placeholder="₹0,00,000"
                          value={formData.expectedPrice}
                          onChange={(e) =>
                            handleInputChange("expectedPrice", e.target.value)
                          }
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
                          onChange={(e) =>
                            handleInputChange("quantity", e.target.value)
                          }
                          required
                          min={1}
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

                    <div ref={partnershipTypeRef}>
                      <Label htmlFor="partnershipType" className="mb-2">
                        Partnership Type <span className="text-red-500">*</span>
                      </Label>

                      <Select
                        value={formData.partnershipType}
                        onValueChange={(value) => {
                          handleInputChange("partnershipType", value);
                          setErrors((prev) => ({
                            ...prev,
                            partnershipType: false,
                          }));
                        }}
                      >
                        <SelectTrigger
                          id="partnershipType"
                          className={`border-gray-300 focus:border-green-500 focus:ring-green-500 ${errors.partnershipType
                              ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                              : ""
                            }`}
                        >
                          <SelectValue placeholder="Select partnership type" />
                        </SelectTrigger>

                        <SelectContent className="bg-white">
                          <SelectItem value="reseller">
                            Reseller / Distributor
                          </SelectItem>
                          <SelectItem value="manufacturer">
                            Drone Manufacturer
                          </SelectItem>
                          <SelectItem value="technology">
                            Technology Partner
                          </SelectItem>
                          <SelectItem value="service">
                            Service Provider
                          </SelectItem>
                          <SelectItem value="other">
                            Other Collaboration
                          </SelectItem>
                        </SelectContent>
                      </Select>

                      {errors.partnershipType && (
                        <p className="text-red-500 text-sm mt-1">
                          This field is required.
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Additional Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your partnership goals, experience, and what you hope to achieve..."
                        value={formData.message}
                        onChange={(e) =>
                          handleInputChange("message", e.target.value)
                        }
                        rows={5}
                        className="border-gray-300 focus:border-green-500 focus:ring-green-500 resize-none"
                      />
                    </div>
                  </div>

                  {/* Location / Map – inside the form */}
                  <div className="space-y-3 pt-6 border-t border-gray-200">
                    <Label>Location / Address Tools (optional)</Label>
                    {isLoaded ? (
                      <>
                        <Autocomplete
                          onLoad={onPlaceLoad}
                          onPlaceChanged={onPlaceChanged}
                        >
                          <Input
                            value={formData.address}
                            onChange={(e) =>
                              setFormData((prev) => ({
                                ...prev,
                                address: e.target.value,
                              }))
                            }
                            placeholder="Search address"
                          />
                        </Autocomplete>

                        <div className="flex flex-wrap items-center gap-2 mt-2">
                          <button
                            type="button"
                            onClick={() => setMapType("roadmap")}
                            className={`px-3 py-1 rounded text-sm ${mapType === "roadmap"
                                ? "bg-green-500 text-white"
                                : "bg-gray-100 text-gray-700"
                              }`}
                          >
                            Roadmap
                          </button>
                          <button
                            type="button"
                            onClick={() => setMapType("hybrid")}
                            className={`px-3 py-1 rounded text-sm ${mapType === "hybrid"
                                ? "bg-green-500 text-white"
                                : "bg-gray-100 text-gray-700"
                              }`}
                          >
                            Satellite
                          </button>
                          <button
                            type="button"
                            onClick={() => setMapType("terrain")}
                            className={`px-3 py-1 rounded text-sm ${mapType === "terrain"
                                ? "bg-green-500 text-white"
                                : "bg-gray-100 text-gray-700"
                              }`}
                          >
                            Terrain
                          </button>
                          <button
                            type="button"
                            onClick={setToCurrentLocation}
                            className="ml-auto px-3 py-1 rounded text-sm bg-blue-50 text-blue-700"
                          >
                            Use my location
                          </button>
                        </div>

                        <div className="mt-3 rounded overflow-hidden border">
                          <GoogleMap
                            mapContainerStyle={mapContainerStyle}
                            center={marker ?? defaultCenter}
                            zoom={marker ? 14 : 5}
                            onLoad={onMapLoad}
                            onClick={onMapClick}
                            options={{
                              mapTypeControl: false,
                              mapTypeId: mapType,
                              streetViewControl: false,
                              fullscreenControl: false,
                              zoomControl: true,
                            }}
                          >
                            {marker && <Marker position={marker} />}

                            {isLoaded && (
                              <DrawingManager
                                onOverlayComplete={onOverlayComplete}
                                options={{
                                  drawingControl: true,
                                  drawingControlOptions: {
                                    position: google.maps.ControlPosition.TOP_CENTER,
                                    drawingModes: [
                                      google.maps.drawing.OverlayType.MARKER,
                                      google.maps.drawing.OverlayType.CIRCLE,
                                      google.maps.drawing.OverlayType.POLYGON,
                                      google.maps.drawing.OverlayType.POLYLINE,
                                      google.maps.drawing.OverlayType.RECTANGLE,
                                    ],
                                  },

                                  markerOptions: { editable: true, draggable: true },
                                  polygonOptions: {
                                    editable: true,
                                    fillColor: "#22c55e",
                                    fillOpacity: 0.3,
                                    strokeColor: "#16a34a",
                                    strokeWeight: 2,
                                  },
                                  polylineOptions: {
                                    editable: true,
                                    strokeColor: "#2563eb",
                                    strokeWeight: 3,
                                  },
                                  rectangleOptions: {
                                    editable: true,
                                    fillColor: "#f59e0b",
                                    fillOpacity: 0.3,
                                    strokeColor: "#d97706",
                                    strokeWeight: 2,
                                  },
                                  circleOptions: {
                                    editable: true,
                                    fillColor: "#8b5cf6",
                                    fillOpacity: 0.3,
                                    strokeColor: "#7c3aed",
                                    strokeWeight: 2,
                                  },
                                }}
                              />
                            )}

                          </GoogleMap>

                        </div>

                        {/* Drawing Tools Controls */}
                        <div className="flex flex-wrap items-center gap-2 mt-4">
                          <button
                            type="button"
                            onClick={clearAllShapes}
                            className="px-4 py-2 rounded bg-red-50 text-red-600 border border-red-200 hover:bg-red-100"
                          >
                            🗑️ Clear All Shapes
                          </button>
                        </div>

                        {/* Drawing Tools Controls - Info Only */}
                        <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                          <p className="text-sm font-medium text-blue-900 mb-2">📍 How to draw shapes:</p>
                          <ul className="text-xs text-blue-800 space-y-1">
                            <li>• Look for the <strong>toolbar at the TOP-CENTER of the map</strong></li>
                            <li>• Click the tool you want (Marker, Circle, Polygon, Polyline, or Rectangle)</li>
                            <li>• <strong>Marker:</strong> Click once on the map</li>
                            <li>• <strong>Circle:</strong> Click center, drag to set radius, release</li>
                            <li>• <strong>Polygon:</strong> Click multiple times, double-click to finish</li>
                            <li>• <strong>Polyline:</strong> Click multiple times, double-click to finish</li>
                            <li>• <strong>Rectangle:</strong> Click and drag diagonally</li>
                          </ul>
                          <p className="text-xs text-blue-700 mt-3 font-medium">
                            ✓ Shapes drawn: {drawnShapes.length}
                          </p>
                        </div>
                      </>
                    ) : (
                      <Input placeholder="Loading map..." disabled />
                    )}
                  </div>

                  {/* Terms and Submit */}
                  <div className="space-y-6 pt-6 border-t border-gray-200">
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="terms"
                        checked={formData.termsAccepted}
                        onCheckedChange={(checked) =>
                          handleInputChange(
                            "termsAccepted",
                            Boolean(checked) as boolean
                          )
                        }
                        className="mt-1"
                      />
                      <label
                        htmlFor="terms"
                        className="text-sm text-gray-600 leading-relaxed cursor-pointer"
                      >
                        I agree to the{" "}
                        <button
                          type="button"
                          className="text-green-600 hover:text-green-700 underline"
                        >
                          Terms &amp; Conditions
                        </button>{" "}
                        and{" "}
                        <button
                          type="button"
                          className="text-green-600 hover:text-green-700 underline"
                        >
                          Privacy Policy
                        </button>
                        . I understand that Vaigo will review my submission and
                        contact me within 48 hours.
                      </label>
                    </div>

                    <Button
  type="submit"
  className="
    w-full 
    bg-gradient-to-r from-green-500 to-blue-600 
    hover:from-green-600 hover:to-blue-700 
    text-white 
    py-3               /* smaller height on mobile */
    rounded-lg 
    text-sm            /* small text on mobile */
    font-medium 
    flex items-center justify-center gap-2
    md:py-4            /* slightly bigger on tablet/desktop */
    md:text-base
  "
  disabled={!formData.termsAccepted}
>
  <Send className="w-4 h-4 md:w-5 md:h-5" />
  Submit Application
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
              A simple, transparent process from application to partnership
              activation.
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
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
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
            Our partnership team is here to help you understand the
            opportunities and guide you through the process.
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
