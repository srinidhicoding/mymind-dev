import React from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/SignUP";
import Login from "./pages/Loginpage";
import MainPage from "./pages/mainpage";
// import SampleDashboard from "./components/SampleDashboard";
import Dashboard from "./components/Dashboard";

function App() {
  return (
      //  <Dashboard/>

      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
  );
}

export default App;
