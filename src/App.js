import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/HOME2"; // or ./pages/Home.js if you renamed it
import BatchVerif from "./pages/batchverif";
import FarmerDashboard from "./pages/dashboard";
import MillDashboard from "./pages/mill2";
import QualityControl from "./pages/QualityControl";
import DistributorDashboard from "./pages/DitributorDash";
import RetailerDashboard from "./pages/Retailer";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route */}
        <Route path="/" element={<Navigate to="/home" />} />

        {/* Main home/landing page */}
        <Route path="/home" element={<Home />} />

        {/* Other pages */}
        <Route path="/batchverif" element={<BatchVerif />} />
        <Route path="/dashboard" element={<FarmerDashboard />} />
        <Route path="/mill" element={<MillDashboard />} />
        <Route path="/quality" element={<QualityControl />} />
        <Route path="/distributor" element={<DistributorDashboard />} />
        <Route path="/retailer" element={<RetailerDashboard />} />

        {/* Fallback route */}
        <Route path="*" element={<h2 style={{ textAlign: 'center', marginTop: '50px' }}>404 - Page Not Found</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
