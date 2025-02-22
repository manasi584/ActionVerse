import "./App.css";
import NoPage from "./NoPage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginSignup from "./Pages/LoginSignup/LoginSignup.jsx";
import { AuthProvider } from "./Context/AuthContext.jsx";
import { lazy } from "react";
import UserProfile from "./Pages/Profile/UserProfile.jsx";
import GeoMap from "./Pages/GeoMap/GeoMap.jsx";
import Livestream from "./Pages/Livestream/Livestream.jsx";
import LivestreamStart from "./Pages/StartLive/LivestreamStart.jsx";
import CrowdfundingPage from "./Pages/Crowdfunding/CrowdfundingPage.jsx";
import { LiteralProvider } from "./Context/LiteralContext.jsx";


// Lazy loading for better performance
const Home = lazy(() => import("./Pages/Home/Home.jsx"));
const DigitalMediaHub = lazy(() => import("./Pages/DigitalMedia/DigitalMedia.jsx")); 

// **Reused Components**
const Petitions = lazy(() => import("./Pages/LiteralArt/LiteralArt.jsx")); // Literature now points to Petitions
const EnvironmentalCampaigns = lazy(() => import("./Pages/VisulalArt/VisualArt.jsx")); // Visual Art now points to Environmental
const HumanRightsCampaigns = lazy(() => import("./Pages/PerformingArt/PerformingArtsFeed.jsx")); // Performing Arts now points to Human Rights

// Campaign Launchpad remains the same
// const CampaignLaunchpad = lazy(() => import("./Pages/CampaignLaunchpad/CampaignLaunchpad.jsx"));

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/loginSignUp" element={<LoginSignup />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/map" element={<GeoMap />} />
          <Route path="/livestream" element={<Livestream />} />
          <Route path="/start-live" element={<LivestreamStart />} />
          <Route path="/crowdfund" element={<CrowdfundingPage />} />

          {/* **Wrap Petitions inside LiteralProvider** */}
          <Route
            path="/petitions"
            element={
              <LiteralProvider>
                <Petitions />
              </LiteralProvider>
            }
          />

          {/* Live Campaigns */}
          <Route path="/live-campaigns/environmental" element={<EnvironmentalCampaigns />} />
          <Route path="/live-campaigns/digital-media-hub" element={<DigitalMediaHub />} />
          <Route path="/live-campaigns/human-rights" element={<HumanRightsCampaigns />} />

          {/* Other Campaign Pages */}
          {/*<Route path="/campaign-launchpad" element={<CampaignLaunchpad />} />*/}

          {/* Catch-all for 404 pages */}
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
export default App;