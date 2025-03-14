import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ID } from "appwrite";
import { account } from "../../appwrite";

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // Create a new user
      await account.create(ID.unique(), user.email, user.password, user.name);
      await account.createEmailSession(user.email, user.password);
      navigate("/dashboard"); // Redirect on success
    } catch (err) {
      console.error("Signup Error:", err);
      setError(err.message);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-sm w-full">
        <h2 className="text-3xl font-bold text-gray-800 text-center">Create an Account</h2>
        
        {error && <p className="text-red-600 text-sm text-center">{error}</p>}

        <form onSubmit={handleSignup} className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="name"
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
              placeholder="Enter your full name"
              onChange={handleChange}
              value={user.name}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full border p-2 rounded"
              onChange={handleChange}
              value={user.email}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Create a password"
              className="w-full border p-2 rounded"
              onChange={handleChange}
              value={user.password}
              required
            />
          </div>

          <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
            Create Account
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 font-medium hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
