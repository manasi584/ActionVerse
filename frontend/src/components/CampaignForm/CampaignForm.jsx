import React, { useState } from "react";
import "./CampaignForm.css";

function CampaignForm({ onAddCampaign }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("petition");
  const [startDate, setStartDate] = useState("");
  const [isOffline, setIsOffline] = useState(false); // Add isOffline state
  const [offlineLocation, setOfflineLocation] = useState(""); // Add offlineLocation state
  const handleSubmit = (e) => {
    e.preventDefault();
    const newCampaign = {
      id: Date.now(),
      title,
      description,
      type,
      startDate,
      isOffline: type === "digital media hub" ? false : isOffline, // Ensure digital campaigns are always online
      offlineLocation:
        isOffline && type !== "digital media hub" ? offlineLocation : null, // Only include location if offline and not digital
    };
    onAddCampaign(newCampaign);
    setTitle("");
    setDescription("");
    setStartDate("");
    setIsOffline(false);
    setOfflineLocation("");
  };

  return (
    <form onSubmit={handleSubmit} className="campaign-form">
      <div className="form-group">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          placeholder="Enter campaign title"
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          placeholder="Describe your campaign"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="type">Type:</label>
        <select
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="petition">Petition</option>
          <option value="environmental">Environmental</option>
          <option value="digital media hub">Digital Media Hub</option>
          <option value="human rights">Human Rights</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="startDate">Start Date:</label>
        <input
          type="date"
          id="startDate"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>
          <input
            type="checkbox"
            checked={isOffline}
            onChange={(e) => setIsOffline(e.target.checked)}
            disabled={type === "digital media hub"} // Disable checkbox for digital campaigns
          />
          Offline Campaign
        </label>
      </div>
      {isOffline &&
        type !== "digital media hub" && ( // Only show location if offline and not digital
          <div className="form-group">
            <label htmlFor="offlineLocation">Location:</label>
            <input
              type="text"
              id="offlineLocation"
              value={offlineLocation}
              onChange={(e) => setOfflineLocation(e.target.value)}
              required
              placeholder="Enter location"
            />
          </div>
        )}
      <button type="submit" className="submit-button">
        Create Campaign
      </button>
    </form>
  );
}

export default CampaignForm;
