import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: "#3d5a29ff", padding: "1rem 2rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {/* Logo + Title — wrapped in a Link to Home */}
        <Link
          to="/features"   // 👈 change this path if your homepage is different
          style={{ display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none" }}
        >
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OyWTluWJsXSyObRFIELNPfNTkOUjf0.png"
            alt="Olivium Logo"
            style={{ width: "40px", height: "40px", borderRadius: "50%" }}
          />
          <span
            style={{
              color: "white",
              fontSize: "1.5rem",
              fontWeight: "bold",
              letterSpacing: "0.5px",
            }}
          >
            𝐎𝐥𝐢𝐯𝐢𝐮𝐦
          </span>
        </Link>

        {/* Navigation Links */}
        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          <Link
            to="/features"
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "1rem",
              fontWeight: "500",
            }}
          >
            Features
          </Link>
          <Link
            to="/how-it-works"
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "1rem",
              fontWeight: "500",
            }}
          >
            How It Works
          </Link>
          <Link
            to="/faq"
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "1rem",
              fontWeight: "500",
            }}
          >
            FAQ
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
