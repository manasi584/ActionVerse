import video1 from "/video3.mp4";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero">
      {/* Background Video Section */}
      <div className="hero-video-container">
        <video 
          autoPlay 
          loop 
          muted 
          className="hero-video"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content Below Video */}
      <div className="hero-content">
        <h1 className="hero-title">
          Empowering Youth{" "}
          <span>Elevating Talent</span>
        </h1>
        <p className="hero-description">
          Artfluence is the ultimate marketplace for young street performers, artists, 
          and hustlers. Showcase your skills, get gigs, and earn directly from fans.
        </p>
        <div className="hero-buttons">
          <a href="#" className="hero-start">Get Started</a>
          <a href="#" className="hero-docs">Learn More</a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
