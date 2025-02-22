import React from "react";
// import "./CampaignItem.css"; // Import CSS for styling

function CampaignItem({ campaign }) {
  const shareCampaign = () => {
    const shareText = `Check out this campaign: ${campaign.title} - ${campaign.description}`;
    const shareUrl = window.location.href; // Or a more specific URL.
    if (navigator.share) {
      navigator
        .share({
          title: campaign.title,
          text: shareText,
          url: shareUrl,
        })
        .then(() => {
          console.log("Shared successfully");
        })
        .catch((error) => {
          console.error("Sharing failed:", error);
        });
    } else {
      alert("Sharing not supported in this browser.");
    }
  };

  return (
    <div className="campaign-item">
      <h3>{campaign.title}</h3>
      <p>{campaign.description}</p>
      {/* <p>Type: {campaign.type}</p> */}
      <p>Category: {campaign.category}</p>
      <button className="share-button" onClick={shareCampaign}>
        Share
      </button>
    </div>
  );
}

export default CampaignItem;
