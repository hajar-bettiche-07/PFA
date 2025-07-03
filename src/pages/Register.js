import React, { useState } from "react";
import { ethers } from "ethers";
import background from '../assets/images/background.jpg';

function Register() {
  const [address, setAddress] = useState(null);
  const [error, setError] = useState(null);

  const connectWallet = async () => {
    if (!window.ethereum) {
      setError("MetaMask n'est pas installé");
      return;
    }
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      setAddress(accounts[0]);
      setError(null);
    } catch (err) {
      setError("Connexion refusée");
    }
  };

  return (
    <div
      className="register-container"
      style={{
        background: `linear-gradient(rgba(255, 255, 255, 0.24), rgba(255, 255, 255, 0.45)), url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: "2rem 0",
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xl-6">
            <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
              {/* En-tête */}
              <div
                className="card-header py-4"
                style={{
                  backgroundColor: "#4a8f29",
                  borderBottom: "3px solid #3a7a19",
                }}
              >
                <div className="d-flex align-items-center justify-content-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="white"
                    viewBox="0 0 16 16"
                    className="me-2"
                  >
                    <path d="M8 1a6 6 0 0 1 6 6c0 3.31-3.134 5.824-6 6.5-2.866-.676-6-3.19-6-6.5a6 6 0 0 1 6-6zm0 1a5 5 0 0 0-5 5c0 2.628 2.874 4.913 5 5.337 2.126-.424 5-2.709 5-5.337a5 5 0 0 0-5-5z" />
                    <path d="M8 3a4 4 0 0 1 4 4c0 1.457-1.522 3.051-4 3.5-2.478-.449-4-2.043-4-3.5a4 4 0 0 1 4-4z" />
                  </svg>
                  <h2 className="mb-0 text-white">Olivium</h2>
                </div>
              </div>

              {/* Corps */}
              <div className="card-body p-4 p-md-5">
                <h3
                  className="text-center mb-4"
                  style={{ color: "#4a8f29" }}
                >
                  Connexion Wallet
                </h3>

                {!address ? (
                  <>
                    <button
                      onClick={connectWallet}
                      className="btn w-100 py-3 fw-bold text-white"
                      style={{
                        backgroundColor: "#4a8f29",
                        border: "none",
                        borderRadius: "8px",
                        transition: "all 0.3s ease",
                        fontSize: "1.1rem",
                        cursor: "pointer",
                      }}
                    >
                      <i className="bi bi-wallet2 me-2"></i>
                      Se connecter avec MetaMask
                    </button>
                    {error && (
                      <p
                        style={{
                          color: "red",
                          marginTop: "10px",
                          fontWeight: "600",
                        }}
                      >
                        {error}
                      </p>
                    )}
                  </>
                ) : (
                  <div style={{ textAlign: "center", marginTop: "2rem" }}>
                    <p>
                      Connecté :{" "}
                      <span
                        style={{
                          fontWeight: "bold",
                          fontSize: "1.1rem",
                          wordBreak: "break-word",
                        }}
                      >
                        {address}
                      </span>
                    </p>
                    <p>Bienvenue dans TraceOil 👨‍🌾🫒</p>
                  </div>
                )}

                <div className="text-center mt-4">
                  <p
                    className="text-muted mb-0"
                    style={{ fontSize: "0.9rem" }}
                  >
                    Vous n’avez pas MetaMask ?{" "}
                    <a
                      href="https://metamask.io/download.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#4a8f29", fontWeight: "500" }}
                    >
                      Installez-le ici
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
