import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ import useNavigate
import axios from "axios";

function SignUp() {
  const navigate = useNavigate(); // ✅ initialize navigate

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3002/auth/signup", formData);
      setMessage("Signup successful! ✅");
      localStorage.setItem("token", res.data.token);

      navigate("/"); // ✅ redirect to home page after signup
    } catch (err) {
      setMessage(err.response?.data?.message || "Signup failed ❌");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Create an Account</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: "400px" }}>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email Address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Sign Up
        </button>
      </form>

      {message && <p className="mt-3">{message}</p>}
    </div>
  );
}

export default SignUp;
