import { FaHeart, FaShareAlt, FaTimes } from "react-icons/fa";
import { useLiteral } from "../../Context/LiteralContext";
import "./LiteralArtEl.css";
import { CiHeart } from "react-icons/ci";
import { LiaComments } from "react-icons/lia";
import { useState } from "react";

export default function LiteralArtEl() {
  const { currLiteral, isLoading } = useLiteral();
  const [isHeartClicked, setIsHeartClicked] = useState(false);

  const [showComments, setShowComments] = useState(false);
  if (isLoading) {
    return <div className="LiteralArtElement-Loading">Loading...</div>;
  }

  if (!currLiteral) {
    return (
      <div className="LiteralArtElementDetail-NotFound">Piece not found.</div>
    );
  }
  const {
    description,
    imageUrl,
    title,
    comments,
    creator,
    target,
    signature_goal,
    current_signatures,
    created_date,
    status,
    signatures,
  } = currLiteral;

  console.log(currLiteral);
  return (
    <div className="LiteralArtElement">
      <div className="LiteralArtElementsTop">
        <h2 className="LiteralArtElementTitle">{title}</h2>
        <p className="LiteralArtElementAuthor">By: {creator}</p>
      </div>
      <div className="LiteralArtElementMiddle">
        <img src={imageUrl} alt={title} className="LiteralArtElementImage" />
      </div>
      <div className="LiteralArtElementContent">
        {description &&
          description
            .split("\n")
            .map((line, index) => <p key={index}>{line}</p>)}
        <p>
          {" "}
          <span className="bold">target:</span> {target}
        </p>{" "}
        {/* Added Target information */}
        <p>
          <span className="bold">Signatures:</span> {current_signatures} /{" "}
          {signature_goal || "Unlimited"}
        </p>{" "}
        {/* Display Signatures */}
        <p>
          {" "}
          <span className="bold">Status:</span> {status}
        </p>{" "}
        {/* Display Petition Status */}
        <p>
          {" "}
          <span className="bold">Created:</span>{" "}
          {new Date(created_date).toLocaleDateString()}
        </p>{" "}
        {/* Nicely formatted date */}
      </div>
      <div className="LiteralArtElementIcons">
        {isHeartClicked ? (
          <FaHeart fill="red" onClick={() => setIsHeartClicked(false)} />
        ) : (
          <CiHeart onClick={() => setIsHeartClicked(true)} />
        )}

        <LiaComments
          onClick={() => setShowComments(true)}
          fill={showComments ? "black" : "white"}
        />
        <FaShareAlt />
      </div>
      {showComments && (
        <div className="LiteralArtElementComments">
          <div className="CommentHeader">
            <span>Comments</span>
            <FaTimes onClick={() => setShowComments(false)} fill="red" />
          </div>
          {signatures && signatures.length > 0 ? ( // Use signatures array for comments
            <ul className="CommentList">
              {signatures.map(
                (
                  signature,
                  index // Map through signatures
                ) => (
                  <li key={index}>
                    {" "}
                    {/* Key by index since signatures might not have IDs */}
                    <b>{signature.name}:</b>{" "}
                    {signature.comment || "No comment provided."}{" "}
                    {/* Display signature comment or default message */}
                    <span
                      style={{
                        fontSize: "smaller",
                        opacity: 0.7,
                        marginLeft: "10px",
                      }}
                    >
                      ({new Date(signature.signed_date).toLocaleDateString()})
                    </span>
                  </li>
                )
              )}
            </ul>
          ) : (
            <p className="NoComments">No signatures yet.</p>
          )}
        </div>
      )}
    </div>
  );
}
