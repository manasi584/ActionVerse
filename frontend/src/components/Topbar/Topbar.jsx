import { useState } from "react";
import "./topbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

export default function Topbar() {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  function handleClick(e) {
    e.preventDefault();
    logout();
    navigate("/");
  }
  return (
    <div className="top">
      <div className="topLeft">
        {/*  logo */}
        <img src="/logo.png" alt="" className="topLeftLogo" />
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to={"/"}> Home</Link>
          </li>
          <li className="topListItem">
            Categories
            <ul className="topbarSubCategories">
              <li>
                <Link to={"/visual-art"}> Visual Arts</Link>
              </li>
              <li>
                <Link to={"/Literature"}> Literal Arts</Link>
              </li>
              <li>
                <Link to={"/"}> Digital Media</Link>
              </li>
              <li>
                <Link to={"/performing-art"}> Performing Arts</Link>
              </li>
            </ul>
          </li>
          <li className="topListItem">
            <Link to={"/crowdfund"}>Crowdfunding</Link>
          </li>
          <li className="topListItem">
            <Link to={"/livestream"}>Live Stream</Link>
          </li>
          {isAuthenticated ? <li className="topListItem">
            <Link to={"/profile"}>Profile</Link>
            
          </li>
           : <></>}
          {isAuthenticated ? <li className="topListItem">
            <Link to={"/map"}>Find artists near me</Link>
            
          </li>
           : <></>}
        </ul>
      </div>
      <div className="topRight">
        {isAuthenticated ? (
          <>
            <button className="topbarButton" onClick={handleClick}>
              LogOut
            </button>
          </>
        ) : (
          <>
            <button className="topbarButton">
              <Link to="/loginSignUp">Login/SignUp</Link>
            </button>
          </>
        )}
      </div>
    </div>
  );
}
