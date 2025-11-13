import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMap,
  useMapEvents,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { OpenStreetMapProvider } from "leaflet-geosearch";
import "leaflet-geosearch/dist/geosearch.css";

const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

// 📍 Marker component
function LocationMarker({
  onSelect,
}: {
  onSelect: (lat: number, lng: number) => void;
}) {
  const [position, setPosition] = useState<[number, number] | null>(null);

  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      setPosition([lat, lng]);
      onSelect(lat, lng);
    },
  });

  return position ? <Marker position={position} icon={markerIcon} /> : null;
}

function MapMover({ center }: { center: [number, number] }) {
  const map = useMap();
  map.setView(center, 13);
  return null;
}

export function FranchisePage() {
  // Form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dob: "",
    gender: "",
    mobile: "",
    address: "",
    pincode: "",
    education: "",
    employment: "",
    occupation: "",
    income: "",
    proposedAddress: "",
    proposedPincode: "",
    village: "",
    panchayat: "",
    block: "",
    district: "",
    state: "",
    railway: "",
    police: "",
    electricity: "Yes",
    landArea: "",
    internet: "Yes",
    reference: "",
    representativeName: "",
    representativeMobile: "",
    interestedIn: [] as string[],
    industry: [] as string[],
    investment: "",
  });

  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [mapCenter, setMapCenter] = useState<[number, number]>([18.5204, 73.8567]); // Pune default
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const provider = new OpenStreetMapProvider();

  const handleSearchChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    if (value.length < 3) {
      setSuggestions([]);
      return;
    }

    try {
      const apiKey = import.meta.env.VITE_LOCATIONIQ_API_KEY;// LocationIQ key
      const url = `https://us1.locationiq.com/v1/search?key=${apiKey}&q=${encodeURIComponent(
        value
      )}&format=json&limit=3`;

      const response = await fetch(url);
      const data = await response.json();

      setSuggestions(
        data.map((item: any) => ({
          label: item.display_name,
          x: item.lon,
          y: item.lat,
        }))
      );
    } catch (err) {
      console.error("Search failed", err);
    }
  };

  const handleSelect = (result: any) => {
    const lat = parseFloat(result.y);
    const lng = parseFloat(result.x);
    setLatitude(lat);
    setLongitude(lng);
    setMapCenter([lat, lng]);
    setSearch(result.label);
    setSuggestions([]);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleMultiSelect = (field: "interestedIn" | "industry", value: string) => {
    setFormData((prev) => {
      const current = prev[field];
      const updated = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      return { ...prev, [field]: updated };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ ...formData, latitude, longitude });
    alert("Form submitted! Check console for data.");
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Franchise Application Form</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" className="border p-2 rounded" />
          <input name="email" value={formData.email} onChange={handleChange} placeholder="Email ID" className="border p-2 rounded" />
          <input type="date" name="dob" value={formData.dob} onChange={handleChange} className="border p-2 rounded" />
          <select name="gender" value={formData.gender} onChange={handleChange} className="border p-2 rounded">
            <option value="">Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>
          <input name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Mobile No." className="border p-2 rounded" />
          <input name="address" value={formData.address} onChange={handleChange} placeholder="Address" className="border p-2 rounded" />
          <input name="pincode" value={formData.pincode} onChange={handleChange} placeholder="Pin Code" className="border p-2 rounded" />
          <input name="education" value={formData.education} onChange={handleChange} placeholder="Highest Education" className="border p-2 rounded" />
        </div>

        {/* Employment Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <select name="employment" value={formData.employment} onChange={handleChange} className="border p-2 rounded">
            <option value="">Employment Status</option>
            <option>Employed</option>
            <option>Unemployed</option>
            <option>Self Employed</option>
          </select>
          <input name="occupation" value={formData.occupation} onChange={handleChange} placeholder="Occupation" className="border p-2 rounded" />
          <input name="income" value={formData.income} onChange={handleChange} placeholder="Annual Income" className="border p-2 rounded" />
        </div>

        {/* Proposed VAIGO Center */}
        <h2 className="text-xl font-semibold mt-6">Proposed VAIGO Center</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="proposedAddress" value={formData.proposedAddress} onChange={handleChange} placeholder="Address" className="border p-2 rounded" />
          <input name="proposedPincode" value={formData.proposedPincode} onChange={handleChange} placeholder="Pin Code" className="border p-2 rounded" />
          <input name="village" value={formData.village} onChange={handleChange} placeholder="Village / Area" className="border p-2 rounded" />
          <input name="panchayat" value={formData.panchayat} onChange={handleChange} placeholder="Panchayat" className="border p-2 rounded" />
          <input name="block" value={formData.block} onChange={handleChange} placeholder="Block / Tehsil" className="border p-2 rounded" />
          <input name="district" value={formData.district} onChange={handleChange} placeholder="District" className="border p-2 rounded" />
          <input name="state" value={formData.state} onChange={handleChange} placeholder="State" className="border p-2 rounded" />
        </div>

        {/* Infrastructure */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="railway" value={formData.railway} onChange={handleChange} placeholder="Nearest Railway Station" className="border p-2 rounded" />
          <input name="police" value={formData.police} onChange={handleChange} placeholder="Nearest Police Station" className="border p-2 rounded" />
          <select name="electricity" value={formData.electricity} onChange={handleChange} className="border p-2 rounded">
            <option>Electricity Availability</option>
            <option>Yes</option>
            <option>No</option>
          </select>
          <input name="landArea" value={formData.landArea} onChange={handleChange} placeholder="Land Area (sq.ft / acre)" className="border p-2 rounded" />
          <select name="internet" value={formData.internet} onChange={handleChange} className="border p-2 rounded">
            <option>Internet Availability</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>

        {/* 📍 Map Section */}
        <h2 className="text-xl font-semibold mt-6">Location of Land</h2>
        <div className="relative w-full h-[450px] mt-4">
          <div className="absolute top-3 left-1/2 transform -translate-x-1/2 z-[1000] w-[80%] max-w-md">
            <input
              type="text"
              value={search}
              onChange={handleSearchChange}
              placeholder="Search location..."
              className="w-full p-2 border rounded-md shadow bg-white"
            />
            {suggestions.length > 0 && (
              <ul className="absolute top-full left-0 w-full bg-white border rounded-md shadow z-[1500] max-h-60 overflow-y-auto">
                {suggestions.slice(0, 3).map((item, index) => (
                  <li
                    key={index}
                    onClick={() => handleSelect(item)}
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {item.label}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <MapContainer
            center={mapCenter}
            zoom={12}
            scrollWheelZoom={true}
            style={{ height: "100%", width: "100%", borderRadius: "8px" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
            />
            <MapMover center={mapCenter} />
            <LocationMarker
              onSelect={(lat, lng) => {
                setLatitude(lat);
                setLongitude(lng);
              }}
            />
          </MapContainer>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white border p-3 rounded-md shadow-md text-center z-[1000]">
            <p><strong>Latitude:</strong> {latitude ?? "Not selected"}</p>
            <p><strong>Longitude:</strong> {longitude ?? "Not selected"}</p>
          </div>
        </div>

        {/* Reference */}
        <h2 className="text-xl font-semibold mt-6">Reference</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <select name="reference" value={formData.reference} onChange={handleChange} className="border p-2 rounded">
            <option value="">Reference</option>
            <option>By Online</option>
            <option>By Representative</option>
          </select>
          <input name="representativeName" value={formData.representativeName} onChange={handleChange} placeholder="Representative Name" className="border p-2 rounded" />
          <input name="representativeMobile" value={formData.representativeMobile} onChange={handleChange} placeholder="Representative Mobile" className="border p-2 rounded" />
        </div>

        {/* Interests */}
        <h2 className="text-xl font-semibold mt-6">Interested In</h2>
        <div className="flex flex-wrap gap-3">
          {["Drone Sales", "Drone Rental", "Drone Training", "Drone Repairing & Maintenance", "Drone Port", "All"].map(
            (item) => (
              <label key={item} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={formData.interestedIn.includes(item)}
                  onChange={() => handleMultiSelect("interestedIn", item)}
                />
                {item}
              </label>
            )
          )}
        </div>

        {/* Industry */}
        <h2 className="text-xl font-semibold mt-6">Industry</h2>
        <div className="flex flex-wrap gap-3">
          {["Agriculture", "Photography", "Logistics", "Industrial", "Security", "Emergency Response", "All"].map(
            (item) => (
              <label key={item} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={formData.industry.includes(item)}
                  onChange={() => handleMultiSelect("industry", item)}
                />
                {item}
              </label>
            )
          )}
        </div>

        {/* Investment */}
        <h2 className="text-xl font-semibold mt-6">Proposed Investment</h2>
        <select name="investment" value={formData.investment} onChange={handleChange} className="border p-2 rounded w-full md:w-1/2">
          <option value="">Select Investment Range</option>
          <option>10-25 Lakh</option>
          <option>25-50 Lakh</option>
          <option>50 Lakh – 1 Cr</option>
          <option>1–5 Cr</option>
        </select>

        {/* Submit */}
        <div className="text-center">
          <button type="submit" className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Submit Franchise Form
          </button>
        </div>
      </form>
    </div>
  );
}
