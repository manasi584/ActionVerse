import { Link } from "react-router-dom";
import "./LiteralArt.css";
import LiteralTopbar from "../../components/LiteralTopbar/LiteralTopbar";
import { useLiteral } from "../../Context/LiteralContext";
import Topbar from "../../components/Topbar/Topbar";
import Footer from "../../components/Footer/Footer";

export default function LiteralArt() {
  const { literalList } = useLiteral();
  return (
    <div className="LiteralArt">
      <Topbar />
      <h1 className="LiteralArtHeading">Literary Art</h1>
      <div className="LiteralArtLists">
        {literalList.map((piece) => (
          <Link
            to={`${piece.id}`}
            key={piece.id}
            className="LiteralArtListsElemenets"
          >
            <div className="LiteralArtListsElemenetsInner">
              <img
                src={piece.imageUrl}
                alt={piece.title}
                className="LiteralArtListsElemenetsImage"
              />
              <div className="LiteralArtListsElemenetsText">
                <h3 className="LiteralArtListsElemenetsTitle">{piece.title}</h3>
                <p className="LiteralArtListsElemenetsAuthor">
                  By: {piece.creator}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
}
