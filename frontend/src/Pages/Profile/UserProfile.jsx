import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./UserProfile.css";
import Topbar from "../../components/Topbar/Topbar";
import Footer from "../../components/Footer/Footer";


const UserProfile = () => {
  const [posts, setPosts] = useState([
    "/assets/posts/post1.jpg",
    "/assets/posts/post2.jpg",
    "/assets/posts/post1.jpg",
    "/assets/posts/post2.jpg",
    "/assets/posts/post1.jpg",
    "/assets/posts/post2.jpg",
    "/assets/posts/post1.jpg",
  ]);

  const [profileImage, setProfileImage] = useState("/profile.jpg");
  const [username, setUsername] = useState("@username");
  const [bio, setBio] = useState("🎨 Passionate Digital Artist | Open for commissions");
  const [isEditing, setIsEditing] = useState(false);

  // Handle file uploads for new posts
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPosts([imageUrl, ...posts]); // Add new post to the beginning
    }
  };

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

<Topbar/>
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
            <span><strong>{posts.length}</strong> Posts</span>
            <span><strong>1.2K</strong> Followers</span>
            <span><strong>500</strong> Following</span>
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
        <input type="file" id="fileUpload" onChange={handleFileUpload} hidden />
        <label htmlFor="fileUpload" className="upload-btn">Upload New Work</label>

        {/* Start Live Button */}
        <Link to="/start-live" className="live-btn">
          🎥 Start Live
        </Link>
      </div>

      {/* Posts Grid */}
      <div className="posts-grid">
        {posts.map((post, index) => (
          <img key={index} src={post} alt={`Post ${index + 1}`} className="post-img" />
        ))}
      </div>
    </div>
    <Footer></Footer>
    </>
    
  );
};

export default UserProfile;
