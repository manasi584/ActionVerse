import { useParams } from "react-router-dom";
import { useLiteral } from "../../Context/LiteralContext";
import { useEffect } from "react";
import LiteralTopbar from "../../components/LiteralTopbar/LiteralTopbar";

import "./LiteralArtElement.css";
import LiteralArtEl from "../../components/LiteralArtEl/LiteralArtEl";
import LiteralSidebar from "../../components/LiteralSidebar/LiteralSidebar";
export default function LiteralArtElement() {
  const { id } = useParams();
  const { getLiteral, currLiteral } = useLiteral();

  useEffect(() => {
    if (!currLiteral || currLiteral.id !== Number(id)) {
      getLiteral(Number(id));
    }
  }, [id, getLiteral]);

  return (
    <div className="LiteralArtElementContainer">
      <LiteralTopbar />
      <div className="LiteralArtElementContainer">
        <LiteralArtEl />
        <LiteralSidebar />
      </div>
    </div>
  );
}
