import { useState } from "react";
import "./LoginSignup.css";
import Login from "../../components/LoginComponent/Login";
import Signup from "../../components/SignupComponent/Signup";

export default function LoginSignup() {
  const [isLogin, setIsLogin] = useState(true);
  const toggleMode = () => {
    setIsLogin(!isLogin);
  };
  return (
    <>
      <div className="LoginSignup">
        <div className="loginSignupContainer">
          <div className="LoginSignupBackground"></div>
          {isLogin ? (
            <>
              <h1 className="LoginSignupContainerHeading">Login</h1>
              <Login />
              <p className="LoginSignupContainerMessage">
                Don't have an account?{" "}
                <span
                  onClick={toggleMode}
                  className="LoginSignupToggle BlueHighlight"
                >
                  Sign Up
                </span>
              </p>
            </>
          ) : (
            <>
              <h1 className="LoginSignupContainerHeading">SignUp</h1>
              <Signup />
              <p className="LoginSignupContainerMessage">
                Already have an account?{" "}
                <span
                  onClick={toggleMode}
                  className="LoginSignupToggle Highlight"
                >
                  Login{" "}
                </span>
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
}
