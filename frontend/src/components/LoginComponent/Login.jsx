import { useEffect, useState } from "react";
import "./Login.css";
import { useAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); // Clear previous error messages

    try {
      await login(email, password);
      navigate("/"); // Redirect to home on successful login
    } catch (error) {
      setMessage(error.message); // Display Firebase error message
    }
  };

  return (
    <>
      <form className="loginForm" onSubmit={handleSubmit}>
        <div className="loginFormGroup">
          <label htmlFor="email" className="loginFormLabel">
            Email:
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            className="loginFormInput"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="loginFormGroup">
          <label htmlFor="password" className="loginFormLabel">
            Password:
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            className="loginFormInput"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="loginFormButtonContainer">
          <button type="submit" className="loginFormButton">
            Login
          </button>
        </div>
        {message && <p className="errorMessage">{message}</p>} {/* Show error message */}
      </form>
    </>
  );
}
