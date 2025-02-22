import React from "react";
import CampaignItem from "./CampaignItem";
import "./CampaignList.css";

function CampaignList({ campaigns }) {
  return (
    <div className="campaign-list-container">
      <h2>Campaigns</h2>
      <div>
        {campaigns.map((campaign) => (
          <CampaignItem key={campaign.id} campaign={campaign} />
        ))}
      </div>
    </div>
  );
}

export default CampaignList;
