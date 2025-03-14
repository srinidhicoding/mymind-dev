import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { account } from "../../appwrite";
const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await account.createSession(user.email, user.password);
      navigate("/dashboard"); // Redirect to dashboard
    } catch (err) {
      console.error("Login Error:", err);
      setError("Invalid email or password. Please try again.");
    }
  };

  const handleGoogleLogin = async () => {
    try {
        await account.createOAuth2Session(
        "google",
        "http://localhost:5173/dashboard", // Success redirect
        "http://localhost:5173/login" // Failure redirect
      );
    } catch (err) {
      console.error("Google Auth Error:", err.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Login</h1>
      {error && <p className="text-red-500">{error}</p>}
      <form className="flex flex-col">
        <input type="email" placeholder="Email" className="border p-2 m-2 w-64" onChange={(e) => setUser({ ...user, email: e.target.value })} />
        <input type="password" placeholder="Password" className="border p-2 m-2 w-64" onChange={(e) => setUser({ ...user, password: e.target.value })} />
        <button className="bg-blue-500 text-white px-4 py-2 m-2 rounded" onClick={handleLogin}>
          Login
        </button>
      </form>
      <button className="bg-red-500 text-white px-4 py-2 m-2 rounded-3xl" onClick={handleGoogleLogin}>
        Login with Google
      </button>
      <p>Don't have an account? <a href="/signup" className="text-blue-500">Sign up</a></p>
    </div>
  );
};

export default Login;
