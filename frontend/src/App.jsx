import "./App.css";
import NoPage from "./NoPage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginSignup from "./Pages/LoginSignup/LoginSignup.jsx";
import { AuthProvider } from "./Context/AuthContext.jsx";
import { lazy } from "react";
import LiteralArtElement from "./Pages/LiteralArtElement/LiteralArtElement.jsx";
import { LiteralProvider } from "./Context/LiteralContext.jsx";
import VisualArt from "./Pages/VisulalArt/VisualArt.jsx";
import CrowdfundingPage from "./Pages/Crowdfunding/crowdfundingPage.jsx";
import Livestream from "./Pages/Livestream/Livestream.jsx";
import PerformingArtsFeed from "./Pages/PerformingArt/PerformingArtsFeed.jsx";
import UserProfile from "./Pages/Profile/UserProfile.jsx";
import LivestreamStart from "./Pages/StartLive/LivestreamStart.jsx"
import GeoMap from "./Pages/GeoMap/GeoMap.jsx"


const Home = lazy(() => import("./Pages/Home/Home.jsx"));
const LiteralArt = lazy(() => import("./Pages/LiteralArt/LiteralArt.jsx"));

function App() {
  return (
    <LiteralProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/loginSignUp" element={<LoginSignup />} />
            <Route path="/Literature" element={<LiteralArt />} />
            <Route path="/Literature/:id" element={<LiteralArtElement />} />
            <Route path="*" element={<NoPage />} />
            <Route path="/visual-art" element={<VisualArt />} />
            <Route path="/performing-art" element={<PerformingArtsFeed/> } />
            <Route path="/livestream" element={<Livestream/>} />
            <Route path="/crowdfund" element={<CrowdfundingPage></CrowdfundingPage>} />
            <Route path="/profile" element={<UserProfile/>} />
            <Route path="/start-live" element={<LivestreamStart></LivestreamStart>} />
            <Route path="/map" element={<GeoMap/>} />
            {/* <Route
            path="app"
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          > */}
            {/* this helps in mainitaining the url of the system  */}
            {/* <Route path="profile" element={} /> */}
            {/* <//Route> */}
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </LiteralProvider>
  );
}

export default App;
