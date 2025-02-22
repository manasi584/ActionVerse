import { useState } from "react";
import Topbar from "../../components/Topbar/Topbar";
import CampaignForm from "../../components/CampaignForm/CampaignForm";
import CampaignList from "../../components/CampaignList/CampaignList";
import "./CampaignLaunch.css"; // Import CSS

const initialCampaigns = [
  {
    id: 1,
    title: "Save the Amazon Rainforest",
    description: "Petition to stop deforestation in the Amazon.",
    type: "petition",
    category: "Environmental",
  },
  {
    id: 2,
    title: "Digital Literacy for Seniors",
    description: "Awareness drive to teach seniors basic computer skills.",
    type: "awareness",
    category: "Digital Media Hub",
  },
  {
    id: 3,
    title: "End Child Labor",
    description:
      "Fundraising campaign to support organizations fighting child labor.",
    type: "fundraising",
    category: "Human Rights",
  },
  {
    id: 4,
    title: "Plastic-Free Oceans",
    description: "Petition to ban single-use plastics.",
    type: "petition",
    category: "Environmental",
  },
  {
    id: 5,
    title: "Online Safety for Children",
    description: "Awareness drive to educate parents about online safety.",
    type: "awareness",
    category: "Digital Media Hub",
  },
  {
    id: 6,
    title: "Justice for All",
    description:
      "Fundraising campaign to provide legal aid to marginalized communities.",
    type: "fundraising",
    category: "Human Rights",
  },
];

export default function CampaignLaunch() {
  const [campaigns, setCampaigns] = useState(initialCampaigns);

  const addCampaign = (newCampaign) => {
    setCampaigns([...campaigns, newCampaign]);
  };

  return (
    <div>
      <Topbar />
      <div className="campaign-launch-container">
        <h1 className="campaign-launch-heading">Campaign Launchpad</h1>
        <div className="campaign-launch-content">
          <CampaignForm onAddCampaign={addCampaign} />
          <CampaignList campaigns={campaigns} />
        </div>
      </div>
    </div>
  );
}
