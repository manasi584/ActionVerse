import { FaHeart, FaShareAlt, FaTimes } from "react-icons/fa";
import { useLiteral } from "../../Context/LiteralContext";
import "./LiteralArtEl.css";
import { CiHeart } from "react-icons/ci";
import { LiaComments } from "react-icons/lia";
import { useState } from "react";

export default function LiteralArtEl() {
  const { currLiteral, isLoading } = useLiteral();
  const { author, content, imageUrl, title, comments } = currLiteral;
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

  return (
    <div className="LiteralArtElement">
      <div className="LiteralArtElementsTop">
        <h2 className="LiteralArtElementTitle">{title}</h2>
        <p className="LiteralArtElementAuthor">By: {author}</p>
      </div>
      <div className="LiteralArtElementMiddle">
        <img src={imageUrl} alt={title} className="LiteralArtElementImage" />
      </div>
      <div className="LiteralArtElementContent">
        {content &&
          content.split("\n").map((line, index) => <p key={index}>{line}</p>)}
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
          {comments.length > 0 ? (
            <ul className="CommentList">
              {comments.map((comment) => (
                <li key={comment.id}>
                  <b>{comment.author}:</b> {comment.text}
                </li>
              ))}
            </ul>
          ) : (
            <p className="NoComments">No comments yet.</p>
          )}
        </div>
      )}
    </div>
  );
}