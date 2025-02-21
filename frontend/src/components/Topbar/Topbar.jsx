import { useState } from "react";
import "./topbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons for hamburger menu

export default function Topbar() {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  function handleLogout(e) {
    e.preventDefault();
    logout();
    navigate("/");
  }

  return (
    <div className="top">
      <div className="topLeft">
        <img src="/logo.png" alt="Logo" className="topLeftLogo" />
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </div>

      {/* Navigation Links */}
      <div className={`topCenter ${menuOpen ? "active" : ""}`}>
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>

          <li className="topListItem">
            Campaign
            <ul className="topbarSubCategories">
              <li>
                <Link to="/visual-art" onClick={() => setMenuOpen(false)}>
                  Environmental
                </Link>
              </li>
              <li>
                <Link to="/literature" onClick={() => setMenuOpen(false)}>
                  Petitions
                </Link>
              </li>
              <li>
                <Link to="/digital-media" onClick={() => setMenuOpen(false)}>
                  Digital Campaigns
                </Link>
              </li>
              <li>
                <Link to="/performing-art" onClick={() => setMenuOpen(false)}>
                  Human rights
                </Link>
              </li>
            </ul>
          </li>

          <li className="topListItem">
            <Link to="/crowdfund" onClick={() => setMenuOpen(false)}>
              Crowdfunding
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/livestream" onClick={() => setMenuOpen(false)}>
              Live Stream
            </Link>
          </li>

          {isAuthenticated && (
            <>
              <li className="topListItem">
                <Link to="/profile" onClick={() => setMenuOpen(false)}>
                  Profile
                </Link>
              </li>
              <li className="topListItem">
                <Link to="/map" onClick={() => setMenuOpen(false)}>
                  Find Activist Near Me
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>

      <div className="topRight">
        {isAuthenticated ? (
          <>
            <span className="topbarUser">
              Welcome {user?.email?.split("@")[0]} !!
            </span>
            <button className="topbarButton" onClick={handleLogout}>
              LogOut
            </button>
          </>
        ) : (
          <button className="topbarButton">
            <Link to="/loginSignUp">Login/SignUp</Link>
          </button>
        )}
      </div>
    </div>
  );
}
