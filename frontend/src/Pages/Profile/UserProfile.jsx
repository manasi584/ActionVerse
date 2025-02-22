import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./UserProfile.css";
import Topbar from "../../components/Topbar/Topbar";
import Footer from "../../components/Footer/Footer";

const UserProfile = () => {
  const [posts, setPosts] = useState([
    "/assets/posts/post1.jpg",
    "/assets/posts/post2.jpg",
    "/activists.jpg",
    "/activists2.jpg",
    "/activists3.jpg",
  ]);

  const [campaigns, setCampaigns] = useState([
    { title: "Save the Rainforests", link: "/campaigns/rainforests" },
    { title: "Clean Water for All", link: "/campaigns/clean-water" },
    { title: "Stop Plastic Pollution", link: "/campaigns/plastic-pollution" },
    { title: "Education for Every Child", link: "/campaigns/education" },
  ]);

  const [profileImage, setProfileImage] = useState("/profile.jpg");
  const [username, setUsername] = useState("@aasha");
  const [bio, setBio] = useState(" Digital Activist | Impact Creator | Open for collaborations");
  const [isEditing, setIsEditing] = useState(false);

  // Upload a new work (post)
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPosts([imageUrl, ...posts]);
    }
  };

  // Upload a new profile image
  const handleProfileImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  return (
    <>
      <Topbar />
      <div className="profile-container">
        {/* Profile Header */}
        <div className="profile-header">
          <label htmlFor="profileImageUpload">
            <img src={profileImage} alt="Profile" className="profile-img" />
          </label>
          <input type="file" id="profileImageUpload" hidden onChange={handleProfileImageUpload} />

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
              <span><strong>{posts.length}</strong> Posts</span>
              <span><strong>1.5K</strong> Followers</span>
              <span><strong>720</strong> Following</span>
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
          <button className="edit-btn" onClick={() => setIsEditing(!isEditing)}>
            {isEditing ? "Save Profile" : "Edit Profile"}
          </button>
          <input type="file" id="fileUpload" hidden onChange={handleFileUpload} />
          <label htmlFor="fileUpload" className="upload-btn">📤 Upload Work</label>
          <Link to="/start-live" className="live-btn">📢 Start Live Activism</Link>
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
   
   

        {/* Posts Grid */}
        <div className="posts-grid">
          {posts.map((post, index) => (
            <img key={index} src={post} alt={`Post ${index + 1}`} className="post-img" />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default UserProfile;
