import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { account } from "../../appwrite";

const SampleDashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const userData = await account.get();
        setUser(userData);
      } catch (error) {
        console.log(error)
        navigate("/login");
      }
    };
    
    getUserData();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await account.deleteSession("current");
      navigate("/login"); // Redirect to login after logout
    } catch (error) {
      console.error("Logout Error:", error.message);
    }
  };

  return (
    <div className="p-6">
      {user ? (
        <>
          <h1 className="text-3xl font-bold">Welcome, {user.name}</h1>
          <p>Email: {user.email}</p>
          <button className="bg-red-500 text-white px-4 py-2 mt-4 rounded" onClick={handleLogout}>
            Logout
          </button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SampleDashboard;
