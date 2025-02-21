import React from "react";
import { Link } from "react-router-dom";
import "./LiteralTopbar.css";

export default function LiteralTopbar() {
  return (
    <header className="Literal_topbar">
      <div className="Literal_topbar-left">
        <Link to="/literature/" className="Literal_topbar-logo">
          Petitions
        </Link>
      </div>
      <div className="Literal_topbar-center">
        <ul className="Literal_topbar-nav">
          <li>
            <Link to="/literature/explore">Explore</Link>
          </li>
          <li>
            <Link to="/literature/saved">Saved</Link>
          </li>
          <li>
            <Link to="/literature/post">Post</Link> {/* Corrected route */}
          </li>
        </ul>
      </div>
    </header>
  );
}
