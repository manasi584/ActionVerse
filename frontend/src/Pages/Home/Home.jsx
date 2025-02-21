import Topbar from "../../components/Topbar/Topbar";
import HeroSection from "../../components/HeroSection/HeroSection";
import Workflow from "../../components/Workflow/Workflow";
import Pricing from "../../components/Pricing/Pricing";
import Testimonials from "../../components/Testimonials/Testimonials";
import Footer from "../../components/Footer/Footer";

import "./Home.css";

export default function Home() {
  return (
    <div className="Home">
      {/* Navbar */}
      <Topbar />

      {/* Landing Page Sections */}
      <HeroSection />
      <Workflow />
      <Pricing />
      <Testimonials />

      {/* Footer */}
      <Footer />
    </div>
  );
}
