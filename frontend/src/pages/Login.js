import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    if (username === savedUsername && password === savedPassword) {
      alert("Login successful!");
      navigate("/home");  // Redirect to Home after login
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto", padding: 20, border: "1px solid #ccc", borderRadius: 8, boxShadow: "0 0 10px #ccc" }}>
      <h2 style={{ textAlign: "center", marginBottom: 20 }}>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ width: "100%", marginBottom: 15, padding: 10, fontSize: 16, borderRadius: 4, border: "1px solid #ddd" }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "100%", marginBottom: 15, padding: 10, fontSize: 16, borderRadius: 4, border: "1px solid #ddd" }}
        />
        <button type="submit" style={{ width: "100%", padding: 12, fontSize: 16, backgroundColor: "#004080", color: "white", border: "none", borderRadius: 4, cursor: "pointer" }}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;