// components/FranchisePage.jsx
import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapContainer,
  TileLayer,
  Marker,
  Polygon,
  useMap,
  useMapEvents,
  LayersControl,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-geosearch/dist/geosearch.css";

/**
 * Full updated FranchisePage.jsx
 * - All original content preserved (fields, map modes, search, file uploads)
 * - Added framer-motion animations for sections, controls, lists, previews
 * - Added "Detect My Location" button (Option A) — user clicks to request geolocation
 *   - Uses browser geolocation API
 *   - Reverse geocodes via LocationIQ (same provider used for search)
 *   - Fills proposedAddress, proposedPincode, district, state, latitude, longitude
 *   - Centers the map to detected location
 * - Keeps boundary & point modes intact
 * - Uses uploaded placeholder image path:
 *   "/mnt/data/ec6ee516-0520-4723-b97f-10a4dc51b7c2.png"
 *
 * Notes:
 * - Make sure you have VITE_LOCATIONIQ_API_KEY in env (same as used in search)
 * - Requires framer-motion and react-leaflet packages
 */

// Marker icon (default leaflet marker image)
const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

// Helper: compute center from polygon bounding box (Option B)
function getPolygonBoundsCenter(latLngPairs) {
  if (!latLngPairs || latLngPairs.length === 0) return null;
  try {
    const poly = L.polygon(latLngPairs);
    const center = poly.getBounds().getCenter();
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
  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      setBoundary((prev) => [...prev, [lat, lng]]);
    },
  });

  return (
    <>
      {showVertexMarkers &&
        boundary.map((pt, i) => (
          <Marker key={`v-${i}`} position={pt} icon={markerIcon} />
        ))}

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
  const [boundary, setBoundary] = useState([]); // polygon points by clicks
  // Completed polygon boundary coords (null until finished)
  const [boundaryCoords, setBoundaryCoords] = useState(null); // same shape as boundary
  // Polygon center (calculated when "Finish Boundary" clicked)
  const [polygonCenter, setPolygonCenter] = useState(null);

  // Search suggestions
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // Detect location UI state
  const [detecting, setDetecting] = useState(false);
  const [detectError, setDetectError] = useState(null);

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
        ? [
            "Drone Sales",
            "Drone Rental",
            "Drone Training",
            "Drone Repairing & Maintenance",
            "Drone Port",
            "All",
          ]
        : [
            "Agriculture",
            "Photography",
            "Logistics",
            "Industrial",
            "Security",
            "Emergency Response",
            "All",
          ];

    if (value === "All") {
      if (formData[field].length === allOptions.length) {
        setFormData({ ...formData, [field]: [] });
      } else {
        setFormData({ ...formData, [field]: allOptions });
      }
      return;
    }

    let updated = formData[field].includes(value)
      ? formData[field].filter((item) => item !== value)
      : [...formData[field], value];

    updated = updated.filter((item) => item !== "All");
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
    }
  };

  const handleClearBoundary = () => {
    setBoundary([]);
    setBoundaryCoords(null);
    setPolygonCenter(null);
  };

  // ---------- Detect Location: user-triggered (Option A) ----------
  const handleDetectLocation = () => {
    setDetectError(null);
    if (!navigator.geolocation) {
      setDetectError("Geolocation not supported in this browser.");
      return;
    }

    setDetecting(true);

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;

        // set coords & center map
        setLatitude(lat);
        setLongitude(lon);
        setMapCenter([lat, lon]);

        // Reverse geocode using LocationIQ (same provider used previously)
        try {
          const apiKey = import.meta.env.VITE_LOCATIONIQ_API_KEY;
          if (!apiKey) {
            console.warn("VITE_LOCATIONIQ_API_KEY not set - skipping reverse geocode");
            setDetecting(false);
            return;
          }

          const revUrl = `https://us1.locationiq.com/v1/reverse.php?key=${apiKey}&lat=${lat}&lon=${lon}&format=json`;
          const resp = await fetch(revUrl);
          const rev = await resp.json();

          // LocationIQ returns address object with fields like address.postcode, state, county, town, village
          const addressObj = rev?.address || {};
          const display = rev?.display_name || "";

          const pincode = addressObj.postcode || "";
          const state = addressObj.state || "";
          // district might be county, county may be district depending on data
          const district = addressObj.county || addressObj.state_district || addressObj.city_district || "";

          // Build a readable address to fill proposedAddress (you can tweak format)
          const addressParts = [
            addressObj.road,
            addressObj.suburb,
            addressObj.village || addressObj.town || addressObj.city,
            addressObj.county,
            addressObj.state,
            addressObj.country,
          ].filter(Boolean);
          const proposedAddress = display || addressParts.join(", ");

          setFormData((f) => ({
            ...f,
            proposedAddress: proposedAddress || "",
            proposedPincode: pincode,
            district: district || "",
            state: state || "",
          }));
        } catch (err) {
          console.error("Reverse geocode failed", err);
          setDetectError("Reverse geocoding failed — try reloading or enter address manually.");
        } finally {
          setDetecting(false);
        }
      },
      (err) => {
        console.error("Geolocation error", err);
        setDetecting(false);
        if (err.code === 1) {
          setDetectError("Permission denied. Please allow location access.");
        } else if (err.code === 2) {
          setDetectError("Position unavailable.");
        } else if (err.code === 3) {
          setDetectError("Timeout while fetching location.");
        } else {
          setDetectError("Failed to get location.");
        }
      },
      { enableHighAccuracy: true, maximumAge: 0, timeout: 20000 }
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const fd = new FormData();

    // Append all normal fields
    Object.keys(formData).forEach((key) => {
      if (key !== "images" && key !== "video") {
        fd.append(key, formData[key] ?? "");
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
    fd.append("latitude", latitude ?? "");
    fd.append("longitude", longitude ?? "");
    fd.append("boundaryCoords", JSON.stringify(boundaryCoords ?? []));

    // Example POST (update endpoint as per your server)
    fetch("/api/submit-franchise", {
      method: "POST",
      body: fd,
    })
      .then(() => {
        alert("Form submitted!");
      })
      .catch((err) => {
        console.error("Submit failed", err);
        alert("Submit failed. Check console.");
      });
  };

  // Hybrid layer (commented in original) kept here for future usage
  const HybridLayer = () => (
    <>
      <TileLayer
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        attribution="Tiles © Esri"
      />
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png"
        attribution="© CartoDB"
        zIndex={9999}
      />
    </>
  );

  // Animation variants
  const sectionFade = { initial: { opacity: 0, y: 14 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.45 } };
  const staggerParent = { initial: {}, animate: { transition: { staggerChildren: 0.06 } } };
  const itemFade = { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.45 } };

  // placeholder image path uploaded earlier (developer instruction)
  const placeholderImage = "/mnt/data/ec6ee516-0520-4723-b97f-10a4dc51b7c2.png";

  return (
    <motion.div initial="initial" animate="animate" className="max-w-5xl mx-auto p-6">
      <motion.h1 variants={itemFade} className="text-3xl font-bold mb-6 text-center">
        Franchise Application Form
      </motion.h1>

      <motion.form onSubmit={handleSubmit} className="space-y-6" variants={staggerParent}>
        {/* Basic fields */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4" variants={itemFade}>
          <input
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name*"
            className="border p-2 rounded w-full"
          />
          <input
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="Email ID*"
            className="border p-2 rounded w-full"
          />
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          >
            <option value="" disabled>
              Gender
            </option>
            <option>Male</option>
            <option>Female</option>
          </select>
          <input
            name="mobile"
            required
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Mobile No.*"
            className="border p-2 rounded w-full"
          />
          <input
            name="address"
            required
            value={formData.address}
            onChange={handleChange}
            placeholder="Address*"
            className="border p-2 rounded w-full"
          />
        </motion.div>

        {/* Employment/Income */}
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-4" variants={itemFade}>
          <select
            name="employment"
            value={formData.employment}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          >
            <option value="" disabled>
              Employment Status
            </option>
            <option>Employed</option>
            <option>Unemployed</option>
            <option>Self Employed</option>
          </select>
          <input
            name="occupation"
            value={formData.occupation}
            onChange={handleChange}
            placeholder="Occupation"
            className="border p-2 rounded w-full"
          />
          <input
            name="income"
            value={formData.income}
            onChange={handleChange}
            placeholder="₹ Annual Income"
            className="border p-2 rounded w-full"
          />
        </motion.div>

        {/* Proposed VAIGO Center fields */}
        <motion.div variants={itemFade}>
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-xl font-semibold mt-6">Proposed VAIGO Center</h2>

            {/* Detect Location Button group */}
            <div className="flex items-center gap-3">
              <motion.button
                type="button"
                onClick={handleDetectLocation}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="px-4 py-2 rounded bg-emerald-600 text-white shadow"
                aria-disabled={detecting}
              >
                {detecting ? "Detecting..." : "📍 Detect My Location"}
              </motion.button>

              <AnimatePresence>
                {detectError && (
                  <motion.div
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 8 }}
                    className="text-sm text-red-600"
                  >
                    {detectError}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
            <input
              name="proposedAddress"
              value={formData.proposedAddress}
              onChange={handleChange}
              placeholder="Address"
              className="border p-2 rounded w-full"
            />
            <input
              name="proposedPincode"
              value={formData.proposedPincode}
              onChange={handleChange}
              placeholder="Pin Code"
              className="border p-2 rounded w-full"
            />
            <input
              name="village"
              value={formData.village}
              onChange={handleChange}
              placeholder="Village / Area"
              className="border p-2 rounded w-full"
            />
            <input
              name="panchayat"
              value={formData.panchayat}
              onChange={handleChange}
              placeholder="Panchayat"
              className="border p-2 rounded w-full"
            />
            <input
              name="block"
              value={formData.block}
              onChange={handleChange}
              placeholder="Block / Tehsil"
              className="border p-2 rounded w-full"
            />
            <input
              name="district"
              value={formData.district}
              onChange={handleChange}
              placeholder="District"
              className="border p-2 rounded w-full"
            />
            <input
              name="state"
              value={formData.state}
              onChange={handleChange}
              placeholder="State"
              className="border p-2 rounded w-full"
            />
          </div>
        </motion.div>

        {/* Infrastructure */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4" variants={itemFade}>
          <input
            name="railway"
            value={formData.railway}
            onChange={handleChange}
            placeholder="Nearest Railway Station"
            className="border p-2 rounded w-full"
          />

          <input
            name="police"
            value={formData.police}
            onChange={handleChange}
            placeholder="Nearest Police Station"
            className="border p-2 rounded w-full"
          />

          <select
            name="electricity"
            value={formData.electricity}
            onChange={handleChange}
            className="border p-2 rounded w-full"
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
            className="border p-2 rounded w-full"
          />

          <select
            name="internet"
            value={formData.internet}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          >
            <option value="" disabled>
              Internet Availability
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </motion.div>

        {/* Map Mode Buttons */}
        <motion.div className="flex flex-wrap gap-3 items-center" variants={itemFade}>
          <motion.button
            type="button"
            onClick={() => setMode("point")}
            whileHover={{ scale: 1.03 }}
            className={`px-4 py-2 rounded whitespace-nowrap ${mode === "point" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
          >
            Pick Location
          </motion.button>

          <motion.button
            type="button"
            onClick={() => setMode("boundary")}
            whileHover={{ scale: 1.03 }}
            className={`px-4 py-2 rounded whitespace-nowrap ${mode === "boundary" ? "bg-green-600 text-white" : "bg-gray-200"}`}
          >
            Select Boundary
          </motion.button>

          <motion.button
            type="button"
            onClick={handleFinishBoundary}
            whileHover={{ scale: 1.03 }}
            className="px-4 py-2 rounded bg-indigo-600 text-white whitespace-nowrap"
          >
            Finish Boundary
          </motion.button>

          <motion.button
            type="button"
            onClick={handleClearBoundary}
            whileHover={{ scale: 1.03 }}
            className="px-4 py-2 rounded bg-red-400 text-white whitespace-nowrap"
          >
            Clear Boundary
          </motion.button>

          <div className="text-sm text-gray-600 ml-auto whitespace-nowrap mt-2 sm:mt-0">
            Mode: <strong>{mode === "point" ? "Pick Location" : "Select Boundary"}</strong>
          </div>
        </motion.div>

        {/* Map Section */}
        <motion.div variants={itemFade}>
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
              <AnimatePresence>
                {suggestions.length > 0 && (
                  <motion.ul
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="absolute top-full left-0 w-full bg-white border rounded-md shadow z-[1400] max-h-60 overflow-y-auto"
                  >
                    {suggestions.map((s, i) => (
                      <motion.li
                        key={i}
                        onClick={() => handleSelectSuggestion(s)}
                        whileHover={{ backgroundColor: "rgba(0,0,0,0.03)" }}
                        className="p-2 hover:bg-gray-100 cursor-pointer"
                      >
                        {s.label}
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>

            <motion.div whileHover={{ scale: 1.01 }} className="h-full rounded-md overflow-hidden">
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

                  {/* Hybrid option left commented (as original) */}
                  {/* <LayersControl.BaseLayer name="Hybrid Mode (Satellite + Names)">
                    <HybridLayer />
                  </LayersControl.BaseLayer> */}
                </LayersControl>

                <MapMover center={mapCenter} />

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

                {boundaryCoords && boundaryCoords.length >= 3 && (
                  <Polygon positions={boundaryCoords} pathOptions={{ color: "#3388ff", weight: 2 }} />
                )}

                {polygonCenter && <Marker position={polygonCenter} icon={markerIcon} />}
              </MapContainer>
            </motion.div>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white border p-3 rounded-md shadow-md text-center z-[1200] min-w-[260px]">
              <p>
                <strong>Latitude:</strong> {latitude ?? "Not selected"}
              </p>
              <p>
                <strong>Longitude:</strong> {longitude ?? "Not selected"}
              </p>
              <p>
                <strong>Boundary points:</strong> {boundary.length}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Reference */}
        <motion.div variants={itemFade}>
          <h2 className="text-xl font-semibold mt-6">Reference</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select
              name="reference"
              value={formData.reference}
              onChange={handleChange}
              className="border p-2 rounded"
            >
              <option value="" disabled>
                Reference
              </option>
              <option>By Online</option>
              <option>By Representative</option>
            </select>
            <input
              name="representativeName"
              value={formData.representativeName}
              onChange={handleChange}
              placeholder="Representative Name"
              className="border p-2 rounded"
            />
            <input
              name="representativeMobile"
              value={formData.representativeMobile}
              onChange={handleChange}
              placeholder="Representative Mobile"
              className="border p-2 rounded"
            />
          </div>
        </motion.div>

        {/* Interests */}
        <motion.div variants={itemFade}>
          <h2 className="text-xl font-semibold mt-6">Interested In</h2>
          <div className="flex flex-wrap gap-3 mt-2">
            {["Drone Sales", "Drone Rental", "Drone Training", "Drone Repairing & Maintenance", "Drone Port", "All"].map(
              (item) => (
                <label key={item} className="flex items-center gap-2 bg-white border px-3 py-1 rounded shadow-sm">
                  <input
                    type="checkbox"
                    checked={formData.interestedIn.includes(item)}
                    onChange={() => handleMultiSelect("interestedIn", item)}
                  />
                  <span className="text-sm">{item}</span>
                </label>
              )
            )}
          </div>
        </motion.div>

        {/* Industry */}
        <motion.div variants={itemFade}>
          <h2 className="text-xl font-semibold mt-6">Industry</h2>
          <div className="flex flex-wrap gap-3 mt-2">
            {["Agriculture", "Photography", "Logistics", "Industrial", "Security", "Emergency Response", "All"].map(
              (item) => (
                <label key={item} className="flex items-center gap-2 bg-white border px-3 py-1 rounded shadow-sm">
                  <input
                    type="checkbox"
                    checked={formData.industry.includes(item)}
                    onChange={() => handleMultiSelect("industry", item)}
                  />
                  <span className="text-sm">{item}</span>
                </label>
              )
            )}
          </div>
        </motion.div>

        {/* Investment */}
        <motion.div variants={itemFade}>
          <h2 className="text-xl font-semibold mt-6">Proposed Investment</h2>
          <select
            name="investment"
            value={formData.investment}
            onChange={handleChange}
            className="border p-2 rounded w-full md:w-1/2"
          >
            <option value="" disabled>
              Select Investment Range
            </option>
            <option>0 - 1 Lakh</option>
            <option>1 - 5 Lakh</option>
            <option>5 - 10 Lakh</option>
            <option>10 - 25 Lakh</option>
            <option>25 - 50 Lakh</option>
            <option>50 Lakh - 1 Cr</option>
            <option>More than 1 Cr</option>
          </select>
        </motion.div>

        {/* Images & Video Upload */}
        <motion.div variants={itemFade}>
          <h2 className="text-xl font-semibold mt-6">Upload Site Images & Video</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-3">
            {/* Image Upload */}
            <div>
              <label className="block font-medium mb-2">Upload Images (Multiple Allowed)</label>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={(e) =>
                  setFormData((f) => ({
                    ...f,
                    images: Array.from(e.target.files),
                  }))
                }
                className="border p-2 rounded w-full"
              />

              {/* Preview Images (animated) */}
              <div className="mt-3">
                <AnimatePresence>
                  {formData.images?.length > 0 ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="grid grid-cols-2 gap-2"
                    >
                      {formData.images.map((img, i) => (
                        <motion.img
                          key={i}
                          src={URL.createObjectURL(img)}
                          alt={`preview-${i}`}
                          className="h-32 w-full object-cover rounded border"
                          initial={{ opacity: 0, scale: 0.98 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0 }}
                        />
                      ))}
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="grid grid-cols-1 gap-2"
                    >
                      {/* fallback placeholder */}
                      <img
                        src={placeholderImage}
                        alt="placeholder"
                        className="h-40 w-full object-cover rounded border"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Video Upload */}
            <div>
              <label className="block font-medium mb-2">Upload Video</label>
              <input
                type="file"
                accept="video/*"
                onChange={(e) =>
                  setFormData((f) => ({
                    ...f,
                    video: e.target.files[0],
                  }))
                }
                className="border p-2 rounded w-full"
              />

              {/* Video Preview */}
              <div className="mt-3">
                <AnimatePresence>
                  {formData.video ? (
                    <motion.video
                      controls
                      className="w-full rounded border"
                      src={URL.createObjectURL(formData.video)}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                    />
                  ) : (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                      <div className="h-40 w-full rounded border bg-gray-50 flex items-center justify-center text-gray-400">
                        No video uploaded
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Submit */}
        <motion.div className="text-center" variants={itemFade}>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 shadow"
          >
            Submit Franchise Form
          </motion.button>
        </motion.div>
      </motion.form>
    </motion.div>
  );
}
