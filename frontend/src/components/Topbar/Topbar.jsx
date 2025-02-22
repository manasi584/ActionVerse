import { useState } from "react";
import "./topbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons for hamburger menu

export default function Topbar() {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [liveCampaignsOpen, setLiveCampaignsOpen] = useState(false); // For nested dropdown

  function handleLogout(e) {
    e.preventDefault();
    logout();
    navigate("/");
  }

  return (
    <div className="top">
      <div className="topLeft">
        <img src="/logo1.png" alt="Logo" className="topLeftLogo" />
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

          {/* Campaigns Dropdown */}
          <li
            className="topListItem campaignDropdown"
            onMouseEnter={() => setLiveCampaignsOpen(true)}
            onMouseLeave={() => setLiveCampaignsOpen(false)}
          >
            Campaign
            <ul className="topbarSubCategories">
              {/* Live Campaigns (with nested options) */}
              <li
                className="nestedDropdown"
                onMouseEnter={() => setLiveCampaignsOpen(true)}
                onMouseLeave={() => setLiveCampaignsOpen(false)}
              >
                Live Campaigns ▾
                {liveCampaignsOpen && (
                  <ul className="nestedDropdownMenu">
                    <li>
                      <Link to="/live-campaigns/environmental" onClick={() => setMenuOpen(false)}>
                        Environmental
                      </Link>
                    </li>
                    <li>
                      <Link to="/live-campaigns/digital-media-hub" onClick={() => setMenuOpen(false)}>
                        Digital Media Hub
                      </Link>
                    </li>
                    <li>
                      <Link to="/live-campaigns/human-rights" onClick={() => setMenuOpen(false)}>
                        Human Rights
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              {/* Other Campaign options */}
              <li>
                <Link to="/petitions" onClick={() => setMenuOpen(false)}>
                  Petitions
                </Link>
              </li>
              <li>
                <Link to="/campaign-launchpad" onClick={() => setMenuOpen(false)}>
                  Campaign Launchpad
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
