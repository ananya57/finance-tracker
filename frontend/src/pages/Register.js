import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (username && password) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      alert("Registered successfully!");
      navigate("/login");
    } else {
      alert("Please fill both fields");
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto", padding: 20, border: "1px solid #ccc", borderRadius: 8, boxShadow: "0 0 10px #ccc" }}>
      <h2 style={{ textAlign: "center", marginBottom: 20 }}>Register</h2>
      <form onSubmit={handleRegister}>
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
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;