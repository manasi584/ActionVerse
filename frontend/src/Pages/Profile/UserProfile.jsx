import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./UserProfile.css";
import Topbar from "../../components/Topbar/Topbar";
import Footer from "../../components/Footer/Footer";

const UserProfile = () => {
  const [profileImage, setProfileImage] = useState("/profile.jpg");
  const [username, setUsername] = useState("@activist_handle");
  const [bio, setBio] = useState("🌍 Climate Advocate | Fighting for a Greener Future");
  const [isEditing, setIsEditing] = useState(false);

  const [campaigns, setCampaigns] = useState([
    { title: "Save the Rainforests", link: "/campaigns/rainforests" },
    { title: "Clean Water for All", link: "/campaigns/clean-water" },
    { title: "Stop Plastic Pollution", link: "/campaigns/plastic-pollution" },
    { title: "Education for Every Child", link: "/campaigns/education" },
  ]);

  // Handle profile image change
  const handleProfileImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  // Handle editing profile
  const handleEditProfile = () => {
    setIsEditing(!isEditing);
  };

  return (
    <>
      <Topbar />
      <div className="profile-container">
        {/* Profile Section */}
        <div className="profile-header">
          <label htmlFor="profileImageUpload">
            <img src={profileImage} alt="Profile" className="profile-img" />
          </label>
          <input
            type="file"
            id="profileImageUpload"
            hidden
            onChange={handleProfileImageUpload}
          />
          <div className="profile-info">
            {isEditing ? (
              <input
                type="text"
                className="edit-input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            ) : (
              <h2>{username}</h2>
            )}
            <div className="profile-stats">
              <span><strong>{campaigns.length}</strong> Campaigns Supported</span>
              <span><strong>2.5K</strong> Supporters</span>
              <span><strong>1.1K</strong> Movements Joined</span>
            </div>
            {isEditing ? (
              <textarea
                className="edit-textarea"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              />
            ) : (
              <p>{bio}</p>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="action-buttons">
          <button className="edit-btn" onClick={handleEditProfile}>
            {isEditing ? "Save Profile" : "Edit Profile"}
          </button>

          {/* Start Live Activism Button */}
          <Link to="/start-live" className="live-btn">
            📢 Start Live Activism
          </Link>
        </div>

        {/* Impact Stories / Campaigns */}
        <div className="campaign-list">
          <h3 className="campaign-header">📢 Impact Stories & Campaigns</h3>
          <ul>
            {campaigns.map((campaign, index) => (
              <li key={index}>
                <Link to={campaign.link} className="campaign-link">
                  {campaign.title} →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserProfile;
