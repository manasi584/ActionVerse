import { visualArtworks } from "../../Context/index";  
import { FaHeart, FaRegBookmark, FaComment } from "react-icons/fa";
import "./VisualArt.css"; 
import Topbar from "../../components/Topbar/Topbar";
import Footer from "../Footer/Footer";

const VisualArt = () => {
  return (
    <>
    <Topbar/>
    <div className="visualArt">
      <h1 className="pageTitle">Visual Art Space 🎨</h1>
      <p className="subText">A creative space for Indian visual artists</p>

      <div className="artGallery">
        {visualArtworks.map((art) => (
          <div key={art.id} className="artCard">
            {/* Artist Profile */}
            <div className="artistProfile">
              <img src={art.profilePic} alt={art.artist} className="profileImage" />
              <span className="artistName">{art.artist}</span>
            </div>

            {/* Artwork */}
            <img src={art.image} alt={art.description} className="artImage" />

            {/* Art Description */}
            <div className="artInfo">
              <p>{art.description}</p>
            </div>

            {/* Like, Save, Comment Buttons */}
            <div className="artActions">
              <button><FaHeart /></button>
              <button><FaRegBookmark /></button>
              <button><FaComment /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer></Footer>
    </>
    
  );
};

export default VisualArt;
