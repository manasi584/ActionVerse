import video1 from "/video.mp4";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero">

      {/* Content before Video */}
      <div className="hero-content">
        <h1 className="hero-title">
        United by Purpose, Driven by Action{" "}
          <span>ActionVerse</span>
        </h1>
        <p className="hero-description">
        ActionVerse is a decentralized hub empowering activists and changemakers to connect, organize, fund, and amplify social movements.  It features a real-time geo-map of causes, secure campaign organization tools with encrypted chats and live streaming, and blockchain-based crowdfunding and grant opportunities.
        </p>
        <div className="hero-buttons">
          <a href="#" className="hero-start">Get Started</a>
          <a href="#" className="hero-docs">Learn More</a>
        </div>
      </div>



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

    </div>
  );
};

export default HeroSection;
