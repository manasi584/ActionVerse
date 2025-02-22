import { useParams } from "react-router-dom";
import { useLiteral } from "../../Context/LiteralContext";
import { useEffect } from "react";
import LiteralTopbar from "../../components/LiteralTopbar/LiteralTopbar";
import LiteralArtEl from "../../components/LiteralArtEl/LiteralArtEl";
import LiteralSidebar from "../../components/LiteralSidebar/LiteralSidebar";
import "./LiteralArtElement.css";

export default function LiteralArtElement() {
  const { id } = useParams();
  const { getLiteral, currLiteral, isLoading, error } = useLiteral();

  useEffect(() => {
    if (!currLiteral || currLiteral.id !== Number(id)) {
      getLiteral(Number(id));
    }
  }, [id, getLiteral, currLiteral]);
  

  if (isLoading) return <p>Loading Literal Art...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!currLiteral) return <p>Literal Art not found.</p>;

  return (
    <div className="LiteralArtElementContainer">
      <LiteralTopbar />
      <div className="LiteralArtElementContent">
        <LiteralArtEl literal={currLiteral} />
        <LiteralSidebar />
      </div>
    </div>
  );
}
