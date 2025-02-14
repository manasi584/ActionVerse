import React, { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { ChevronDown } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
import {categories,dummyUsers} from "../../Context/Map"
import Topbar from "../../components/Topbar/Topbar";
import Footer from "../Footer/Footer";

// Fix default marker icon issue in Leaflet
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;




const GeoMap = () => {
  const [userLocation, setUserLocation] = useState({ lat: 20.5937, lng: 78.9629 });
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredUsers, setFilteredUsers] = useState(dummyUsers);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => console.error("Error getting location:", error)
    );
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = () => {
    const lowerQuery = searchQuery.toLowerCase();

    const matchedUsers = dummyUsers.filter(
      (user) =>
        (user.name.toLowerCase().includes(lowerQuery) || user.city.toLowerCase().includes(lowerQuery)) &&
        (selectedCategory === "All" || user.category === selectedCategory)
    );

    setFilteredUsers(matchedUsers);

    if (matchedUsers.length > 0) {
      setUserLocation({ lat: matchedUsers[0].lat, lng: matchedUsers[0].lng });
    }
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setDropdownOpen(false); // Close dropdown after selection

    const matchedUsers = dummyUsers.filter(
      (user) =>
        (searchQuery === "" || user.name.toLowerCase().includes(searchQuery.toLowerCase()) || user.city.toLowerCase().includes(searchQuery.toLowerCase())) &&
        (category === "All" || user.category === category)
    );

    setFilteredUsers(matchedUsers);
  };

  return (
    <>
    <Topbar/>
    <div className="container mt-4">
      <h3 className="text-center">🌍 User Location & Geo-Mapping</h3>

      {/* Search & Filter Bar */}
      <div className="d-flex justify-content-center mb-3 gap-2">
        <input
          type="text"
          placeholder="Search by city..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="form-control w-50"
        />
        <button onClick={handleSearch} className="btn btn-primary">Search</button>

        {/* Filter Button with Clickable Dropdown */}
        <div className="position-relative" ref={dropdownRef}>
          <button onClick={() => setDropdownOpen(!dropdownOpen)} className="btn btn-secondary d-flex align-items-center">
            Filter By <ChevronDown size={18} className="ms-1" />
          </button>
          
          {dropdownOpen && (
            <ul className="dropdown-menu show position-absolute">
              {categories.map((category) => (
                <li key={category}>
                  <button className="dropdown-item" onClick={() => handleCategorySelect(category)}>
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Map Display */}
      <MapContainer center={[userLocation.lat, userLocation.lng]} zoom={5} style={{ height: "400px", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        <ChangeMapView coords={userLocation} />

        {/* User's own location marker */}
        <Marker position={[userLocation.lat, userLocation.lng]}>
          <Popup>📍 You are here</Popup>
        </Marker>

        {/* Other users' markers */}
        {filteredUsers.map((user) => (
          <Marker key={user.id} position={[user.lat, user.lng]}>
            <Popup>{user.name} ({user.city}) - {user.category}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
    <Footer/>
    </>
  );
};

// Helper function to change the map view dynamically
const ChangeMapView = ({ coords }) => {
  const map = useMap();
  map.setView([coords.lat, coords.lng], 5);
  return null;
};

export default GeoMap;
