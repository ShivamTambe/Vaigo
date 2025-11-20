// FranchisePage.jsx
import React, { useEffect, useState, useRef } from "react";
import { LayersControl } from "react-leaflet";
import {
  MapContainer,
  TileLayer,
  Marker,
  Polygon,
  useMap,
  useMapEvents,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-geosearch/dist/geosearch.css";

// Marker icon (default leafet marker image)
const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

// Helper: compute center from polygon bounding box (Option B)
function getPolygonBoundsCenter(latLngPairs) {
  // latLngPairs: [[lat, lng], [lat, lng], ...]
  if (!latLngPairs || latLngPairs.length === 0) return null;
  try {
    const poly = L.polygon(latLngPairs);
    const center = poly.getBounds().getCenter(); // returns LatLng
    return [center.lat, center.lng];
  } catch (e) {
    console.error("Failed to compute bounds center", e);
    return null;
  }
}

// MapMover: set view to center when center changes
function MapMover({ center }) {
  const map = useMap();
  useEffect(() => {
    if (!map || !center) return;
    map.setView(center, map.getZoom() || 13);
  }, [center, map]);
  return null;
}

// LocationMarker for "Pick Location" mode: places marker on click
function ClickToPickMarker({ setLatLng, selected }) {
  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      setLatLng([lat, lng]);
    },
  });

  return selected ? <Marker position={selected} icon={markerIcon} /> : null;
}

// BoundarySelector for "Select Boundary" mode: click to add vertices, shows vertices & polygon
function BoundarySelector({
  boundary,
  setBoundary,
  showVertexMarkers = true,
}) {
  // add point on map click
  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      setBoundary((prev) => [...prev, [lat, lng]]);
    },
  });

  return (
    <>
      {/* Vertex markers */}
      {showVertexMarkers &&
        boundary.map((pt, i) => (
          <Marker key={`v-${i}`} position={pt} icon={markerIcon} />
        ))}

      {/* Polygon preview when 3+ points */}
      {boundary.length >= 3 && <Polygon positions={boundary} />}
    </>
  );
}

export function FranchisePage() {
  // ---------- form state (kept same as your original) ----------
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
    electricity: "",
    landArea: "",
    internet: "",
    reference: "",
    representativeName: "",
    representativeMobile: "",
    interestedIn: [],
    industry: [],
    investment: "",
    images: [],
    video: null,
  });

  // ---------- location / map state ----------
  const [mode, setMode] = useState("point"); // "point" or "boundary"
  const [mapCenter, setMapCenter] = useState([18.5204, 73.8567]); // Pune default
  const [latitude, setLatitude] = useState(null); // single point lat
  const [longitude, setLongitude] = useState(null); // single point lng

  // Boundary points: array of [lat, lng]
  const [boundary, setBoundary] = useState([]); // building polygon points by clicks
  // Completed polygon boundary coords (null until finished)
  const [boundaryCoords, setBoundaryCoords] = useState(null); // same shape as boundary
  // Polygon center (calculated when "Finish Boundary" clicked)
  const [polygonCenter, setPolygonCenter] = useState(null);

  // Search suggestions
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // keep a ref to boundary so closure handlers always have latest value
  const boundaryRef = useRef(boundary);
  useEffect(() => {
    boundaryRef.current = boundary;
  }, [boundary]);

  // ---------- handlers ----------
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleMultiSelect = (field, value) => {
    const allOptions =
      field === "interestedIn"
        ? ["Drone Sales", "Drone Rental", "Drone Training", "Drone Repairing & Maintenance", "Drone Port", "All"]
        : ["Agriculture", "Photography", "Logistics", "Industrial", "Security", "Emergency Response", "All"];

    // If clicked on "All"
    if (value === "All") {
      // If ALL already selected → unselect all
      if (formData[field].length === allOptions.length) {
        setFormData({ ...formData, [field]: [] });
      } else {
        // Select EVERYTHING
        setFormData({ ...formData, [field]: allOptions });
      }
      return;
    }

    // Normal checkbox toggle
    let updated = formData[field].includes(value)
      ? formData[field].filter((item) => item !== value)
      : [...formData[field], value];

    // If user unchecks any option → remove "All"
    updated = updated.filter((item) => item !== "All");

    // Auto-select "All" when all items except "All" are selected
    const noAllOptions = allOptions.filter((opt) => opt !== "All");
    if (updated.length === noAllOptions.length) {
      updated.push("All");
    }

    setFormData({ ...formData, [field]: updated });
  };


  // Search (LocationIQ)
  const handleSearchChange = async (e) => {
    const value = e.target.value;
    setSearch(value);
    if (value.length < 3) {
      setSuggestions([]);
      return;
    }

    try {
      const apiKey = import.meta.env.VITE_LOCATIONIQ_API_KEY;
      const url = `https://us1.locationiq.com/v1/search?key=${apiKey}&q=${encodeURIComponent(
        value
      )}&format=json&limit=5`;
      const res = await fetch(url);
      const data = await res.json();
      if (Array.isArray(data)) {
        setSuggestions(
          data.map((item) => ({
            label: item.display_name,
            lat: parseFloat(item.lat),
            lon: parseFloat(item.lon),
          }))
        );
      } else {
        setSuggestions([]);
      }
    } catch (err) {
      console.error("Search failed", err);
      setSuggestions([]);
    }
  };

  const handleSelectSuggestion = (item) => {
    setSearch(item.label);
    setSuggestions([]);
    setMapCenter([item.lat, item.lon]);
  };

  // When in point mode and user clicks -> set lat/lng
  const handleSetPoint = (latlng) => {
    setLatitude(latlng[0]);
    setLongitude(latlng[1]);
    // Also set map center so marker is visible nicely
    setMapCenter([latlng[0], latlng[1]]);
  };

  // Finish boundary: compute center using polygon bounds (Option B)
  const handleFinishBoundary = () => {
    if (!boundaryRef.current || boundaryRef.current.length < 3) {
      alert("Please add at least 3 points to form a boundary.");
      return;
    }
    const center = getPolygonBoundsCenter(boundaryRef.current);
    if (center) {
      setPolygonCenter(center);
      setBoundaryCoords(boundaryRef.current);
      setLatitude(center[0]);
      setLongitude(center[1]);
      setMapCenter(center);
      // switch back to point mode optionally (we'll keep mode on boundary so user can edit if they want)
      // setMode("point");
    }
  };

  const handleClearBoundary = () => {
    setBoundary([]);
    setBoundaryCoords(null);
    setPolygonCenter(null);
    // do not clear latitude/longitude unless you want
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const fd = new FormData();

    // Append all normal fields
    Object.keys(formData).forEach((key) => {
      if (key !== "images" && key !== "video") {
        fd.append(key, formData[key]);
      }
    });

    // Append images
    if (formData.images) {
      formData.images.forEach((img) => fd.append("images", img));
    }

    // Append video
    if (formData.video) {
      fd.append("video", formData.video);
    }

    // Boundary & location
    fd.append("latitude", latitude);
    fd.append("longitude", longitude);
    fd.append("boundaryCoords", JSON.stringify(boundaryCoords));

    fetch("/api/submit-franchise", {
      method: "POST",
      body: fd,
    });

    alert("Form submitted!");
  };


  const HybridLayer = () => (
    <>
      {/* Satellite imagery */}
      <TileLayer
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        attribution="Tiles © Esri"
      />

      {/* Labels overlay that always works with Esri */}
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png"
        attribution="© CartoDB"
        zIndex={9999}   // <<< MOST IMPORTANT
      />
    </>
  );



  // ---------- UI ----------
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Franchise Application Form</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic fields (kept minimal here; copy more as you need) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="name" required value={formData.name} onChange={handleChange} placeholder="Full Name*" className="border p-2 rounded" />
          <input name="email" required value={formData.email} onChange={handleChange} placeholder="Email ID*" className="border p-2 rounded" />
          <input type="date" name="dob" value={formData.dob} onChange={handleChange} className="border p-2 rounded" />
          <select name="gender" value={formData.gender} onChange={handleChange} className="border p-2 rounded">
            <option value="" disabled>Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>
          <input name="mobile" required value={formData.mobile} onChange={handleChange} placeholder="Mobile No.*" className="border p-2 rounded" />
          <input name="address" required value={formData.address} onChange={handleChange} placeholder="Address*" className="border p-2 rounded" />
        </div>

        {/* Employment/Income */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <select name="employment" value={formData.employment} onChange={handleChange} className="border p-2 rounded">
            <option value="" disabled>Employment Status</option>
            <option>Employed</option>
            <option>Unemployed</option>
            <option>Self Employed</option>
          </select>
          <input name="occupation" value={formData.occupation} onChange={handleChange} placeholder="Occupation" className="border p-2 rounded" />
          <input name="income" value={formData.income} onChange={handleChange} placeholder="₹ Annual Income" className="border p-2 rounded" />
        </div>

        {/* Proposed VAIGO Center fields */}
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
          <input
            name="railway"
            value={formData.railway}
            onChange={handleChange}
            placeholder="Nearest Railway Station"
            className="border p-2 rounded"
          />

          <input
            name="police"
            value={formData.police}
            onChange={handleChange}
            placeholder="Nearest Police Station"
            className="border p-2 rounded"
          />

          <select
            name="electricity"
            value={formData.electricity}
            onChange={handleChange}
            className="border p-2 rounded"
          >
            <option value="" disabled>
              Electricity Availability
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>

          <input
            name="landArea"
            value={formData.landArea}
            onChange={handleChange}
            placeholder="Land Area (sq.ft / acre)"
            className="border p-2 rounded"
          />

          <select
            name="internet"
            value={formData.internet}
            onChange={handleChange}
            className="border p-2 rounded"
          >
            <option value="" disabled>
              Internet Availability
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>


        {/* Map Mode Buttons */}
        <div className="flex flex-wrap gap-3 items-center">

          <button
            type="button"
            onClick={() => setMode("point")}
            className={`px-4 py-2 rounded whitespace-nowrap ${mode === "point" ? "bg-blue-600 text-white" : "bg-gray-200"
              }`}
          >
            Pick Location
          </button>

          <button
            type="button"
            onClick={() => setMode("boundary")}
            className={`px-4 py-2 rounded whitespace-nowrap ${mode === "boundary" ? "bg-green-600 text-white" : "bg-gray-200"
              }`}
          >
            Select Boundary
          </button>

          <button
            type="button"
            onClick={handleFinishBoundary}
            className="px-4 py-2 rounded bg-indigo-600 text-white whitespace-nowrap"
          >
            Finish Boundary
          </button>

          <button
            type="button"
            onClick={handleClearBoundary}
            className="px-4 py-2 rounded bg-red-400 text-white whitespace-nowrap"
          >
            Clear Boundary
          </button>

          <div className="text-sm text-gray-600 ml-auto whitespace-nowrap mt-2 sm:mt-0">
            Mode: <strong>{mode === "point" ? "Pick Location" : "Select Boundary"}</strong>
          </div>
        </div>


        {/* Map Section */}
        <h2 className="text-xl font-semibold mt-6">Location of Land</h2>
        <div className="relative w-full h-[500px] mt-4">
          <div className="absolute top-3 left-1/2 transform -translate-x-1/2 z-[1200] w-[80%] max-w-md">
            <input
              type="text"
              value={search}
              onChange={handleSearchChange}
              placeholder="Search location..."
              className="w-full p-2 border rounded-md shadow bg-white"
            />
            {suggestions.length > 0 && (
              <ul className="absolute top-full left-0 w-full bg-white border rounded-md shadow z-[1400] max-h-60 overflow-y-auto">
                {suggestions.map((s, i) => (
                  <li
                    key={i}
                    onClick={() => handleSelectSuggestion(s)}
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {s.label}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <MapContainer
            center={mapCenter}
            zoom={13}
            scrollWheelZoom={true}
            style={{ height: "100%", width: "100%", borderRadius: "8px" }}
          >
            <LayersControl position="topright">

              <LayersControl.BaseLayer checked name="Default View">
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution="© OpenStreetMap"
                />
              </LayersControl.BaseLayer>

              {/* <LayersControl.BaseLayer name="Hybrid Mode (Satellite + Names)">
                <HybridLayer />
              </LayersControl.BaseLayer> */}

            </LayersControl>


            <MapMover center={mapCenter} />

            {/* Modes */}
            {mode === "point" && (
              <ClickToPickMarker
                setLatLng={(latlng) => {
                  handleSetPoint(latlng);
                }}
                selected={latitude && longitude ? [latitude, longitude] : null}
              />
            )}

            {mode === "boundary" && (
              <BoundarySelector boundary={boundary} setBoundary={setBoundary} showVertexMarkers={true} />
            )}

            {/* Show final polygon if boundaryCoords exist (finished polygon) */}
            {boundaryCoords && boundaryCoords.length >= 3 && (
              <Polygon positions={boundaryCoords} pathOptions={{ color: "#3388ff", weight: 2 }} />
            )}

            {/* Show polygon center marker when computed */}
            {polygonCenter && <Marker position={polygonCenter} icon={markerIcon} />}
          </MapContainer>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white border p-3 rounded-md shadow-md text-center z-[1200] min-w-[260px]">
            <p><strong>Latitude:</strong> {latitude ?? "Not selected"}</p>
            <p><strong>Longitude:</strong> {longitude ?? "Not selected"}</p>
            <p><strong>Boundary points:</strong> {boundary.length}</p>
          </div>
        </div>

        {/* Reference */}
        <h2 className="text-xl font-semibold mt-6">Reference</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <select name="reference" value={formData.reference} onChange={handleChange} className="border p-2 rounded">
            <option value="" disabled>Reference</option>
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
          <option value="" disabled>Select Investment Range</option>
          <option>0 - 1 Lakh</option>
          <option>1 - 5 Lakh</option>
          <option>5 - 10 Lakh</option>
          <option>10 - 25 Lakh</option>
          <option>25 - 50 Lakh</option>
          <option>50 Lakh - 1 Cr</option>
          <option>More than 1 Cr</option>
        </select>

        {/* ----------- Images & Video Upload ----------- */}
        <h2 className="text-xl font-semibold mt-6">Upload Site Images & Video</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Image Upload */}
          <div>
            <label className="block font-medium mb-2">Upload Images (Multiple Allowed)</label>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={(e) => setFormData((f) => ({
                ...f,
                images: Array.from(e.target.files)
              }))}
              className="border p-2 rounded w-full"
            />

            {/* Preview Images */}
            {formData.images?.length > 0 && (
              <div className="mt-3 grid grid-cols-2 gap-2">
                {formData.images.map((img, i) => (
                  <img
                    key={i}
                    src={URL.createObjectURL(img)}
                    alt={`preview-${i}`}
                    className="h-32 w-full object-cover rounded border"
                  />
                ))}
              </div>
            )}
          </div>

          {/* Video Upload */}
          <div>
            <label className="block font-medium mb-2">Upload Video</label>
            <input
              type="file"
              accept="video/*"
              onChange={(e) => setFormData((f) => ({
                ...f,
                video: e.target.files[0]
              }))}
              className="border p-2 rounded w-full"
            />

            {/* Video Preview */}
            {formData.video && (
              <video
                controls
                className="mt-3 w-full rounded border"
                src={URL.createObjectURL(formData.video)}
              />
            )}
          </div>

        </div>

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
