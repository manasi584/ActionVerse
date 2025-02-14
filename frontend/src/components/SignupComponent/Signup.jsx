import { useNavigate } from "react-router-dom";
import "../LoginComponent/Login.css";
import { useEffect, useState } from "react";
import { useAuth } from "../../Context/AuthContext";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const { signup, isAuthenticated } = useAuth();

  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/", { replace: true });
    }
  }, [isAuthenticated]);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic input validation
    if (!name || !email || !password || !confirmPassword) {
      setMessage("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }
    console.log("Registration successful!");
    signup(email, password, name);
    if (!isAuthenticated) setMessage("Invalid credentials. Please try again");
  };

  return (
    <form className="loginForm" onSubmit={handleSubmit}>
      <div className="loginFormGroup">
        <label htmlFor="name" className="loginFormLabel">
          Name:
        </label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          className="loginFormInput"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="loginFormGroup">
        <label htmlFor="email" className="loginFormLabel">
          Email:
        </label>
        <input
          type="text"
          id="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="loginFormInput"
        />
      </div>
      <div className="loginFormGroup">
        <label htmlFor="password" className="loginFormLabel">
          Password:
        </label>
        <input
          type="text"
          id="password"
          placeholder="Enter password"
          className="loginFormInput"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="loginFormGroup">
        <label htmlFor="confirmPassword" className="loginFormLabel">
          Confirm Password:
        </label>
        <input
          type="text"
          id="confirmPassword"
          placeholder="Confirm password"
          className="loginFormInput"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </div>

      <button type="submit" className="loginFormButton">
        Create account
      </button>
      <p>{message}</p>
    </form>
  );
}
