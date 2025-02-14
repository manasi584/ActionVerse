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
  }, [isAuthenticated]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(isAuthenticated, email, password);
    try {
      await login(email, password);
      if (!isAuthenticated) setMessage("Invalid credentials. Please try again");
    } catch (error) {
      console.error("Login failed:", error);
      alert("Invalid credentials. Please try again.");
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
            placeholder="Enter email:"
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

        <button type="submit" className="loginFormButton">
          Login
        </button>
        <p>{message}</p>
      </form>
    </>
  );
}
