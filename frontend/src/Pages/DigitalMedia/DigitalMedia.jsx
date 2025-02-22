import { digitalMediaWorks } from "../../data/index";  
import { FaHeart, FaRegBookmark, FaComment } from "react-icons/fa";
import "./DigitalMedia.css"; 
import Topbar from "../../components/Topbar/Topbar";
import Footer from "../../components/Footer/Footer";

const DigitalMedia = () => {
  return (
    <>
      <Topbar />
      <div className="digitalMedia">
        <h1 className="pageTitle">Digital Media Hub 🎬</h1>
        <p className="subText">A Creative Hub for Social Change.</p>

        <div className="mediaGallery">
          {digitalMediaWorks.map((media) => (
            <div key={media.id} className="mediaCard">
              {/* Creator Profile */}
              <div className="creatorProfile">
                <img src={media.profilePic} alt={media.artist} className="profileImage" />
                <span className="creatorName">{media.artist}</span>
              </div>

              {/* Media Content  */}
              {media.type === "video" ? (
                <video className="mediaContent" controls>
                  <source src={media.image} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img src={media.image} alt={media.description} className="mediaContent" />
              )}

              {/* Media Description */}
              <div className="mediaInfo">
                <p>{media.description}</p>
              </div>

              {/* Like, Save, Comment Buttons */}
              <div className="mediaActions">
                <button><FaHeart /></button>
                <button><FaRegBookmark /></button>
                <button><FaComment /></button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DigitalMedia;
