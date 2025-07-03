import React from "react";
import background from '../assets/images/background.jpg';

function Register() {
  return (
    <div className="register-container" style={{
      background: `linear-gradient(rgba(255, 255, 255, 0.24), rgba(255, 255, 255, 0.45)), url(${background})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: "100vh",
      padding: "2rem 0"
    }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xl-6">
            <div className="card shadow-lg border-0 rounded-4 overflow-hidden">

              {/* En-tête */}
              <div className="card-header py-4" style={{ 
                backgroundColor: "#4a8f29",
                borderBottom: "3px solid #3a7a19"
              }}>
                <div className="d-flex align-items-center justify-content-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" viewBox="0 0 16 16" className="me-2">
                    <path d="M8 1a6 6 0 0 1 6 6c0 3.31-3.134 5.824-6 6.5-2.866-.676-6-3.19-6-6.5a6 6 0 0 1 6-6zm0 1a5 5 0 0 0-5 5c0 2.628 2.874 4.913 5 5.337 2.126-.424 5-2.709 5-5.337a5 5 0 0 0-5-5z"/>
                    <path d="M8 3a4 4 0 0 1 4 4c0 1.457-1.522 3.051-4 3.5-2.478-.449-4-2.043-4-3.5a4 4 0 0 1 4-4z"/>
                  </svg>
                  <h2 className="mb-0 text-white">Olivium</h2>
                </div>
              </div>

              {/* Corps */}
              <div className="card-body p-4 p-md-5">
                <h3 className="text-center mb-4" style={{ color: "#4a8f29" }}>Formulaire d'inscription</h3>
                
                <form>
                  <div className="mb-3">
                    <label htmlFor="fullName" className="form-label fw-bold small text-uppercase text-muted">Nom complet</label>
                    <div className="input-group">
                      <span className="input-group-text bg-light">
                        <i className="bi bi-person-fill text-muted"></i>
                      </span>
                      <input type="text" className="form-control" id="fullName" placeholder="Votre nom complet" />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label fw-bold small text-uppercase text-muted">Adresse e-mail</label>
                    <div className="input-group">
                      <span className="input-group-text bg-light">
                        <i className="bi bi-envelope-fill text-muted"></i>
                      </span>
                      <input type="email" className="form-control" id="email" placeholder="exemple@domaine.com" />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="company" className="form-label fw-bold small text-uppercase text-muted">Nom de l'entreprise</label>
                    <div className="input-group">
                      <span className="input-group-text bg-light">
                        <i className="bi bi-building text-muted"></i>
                      </span>
                      <input type="text" className="form-control" id="company" placeholder="Nom de votre entreprise" />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="type" className="form-label fw-bold small text-uppercase text-muted">Type d'utilisateur</label>
                    <div className="input-group">
                      <span className="input-group-text bg-light">
                        <i className="bi bi-person-badge text-muted"></i>
                      </span>
                      <select className="form-select" id="type">
                        <option value="">Sélectionnez un type</option>
                        <option value="farmer">Producteur d'olives</option>
                        <option value="mill">Moulin à huile</option>
                        <option value="transporter">Transporteur</option>
                        <option value="bottler">Conditionneur</option>
                      </select>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="phone" className="form-label fw-bold small text-uppercase text-muted">Téléphone</label>
                      <div className="input-group">
                        <span className="input-group-text bg-light">
                          <i className="bi bi-telephone-fill text-muted"></i>
                        </span>
                        <input type="tel" className="form-control" id="phone" placeholder="+212 6 12 34 56 78" />
                      </div>
                    </div>

                    <div className="col-md-6 mb-3">
                      <label htmlFor="location" className="form-label fw-bold small text-uppercase text-muted">Localisation</label>
                      <div className="input-group">
                        <span className="input-group-text bg-light">
                          <i className="bi bi-geo-alt-fill text-muted"></i>
                        </span>
                        <input type="text" className="form-control" id="location" placeholder="Ville ou région" />
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="password" className="form-label fw-bold small text-uppercase text-muted">Mot de passe</label>
                    <div className="input-group">
                      <span className="input-group-text bg-light">
                        <i className="bi bi-lock-fill text-muted"></i>
                      </span>
                      <input type="password" className="form-control" id="password" placeholder="Minimum 8 caractères" />
                    </div>
                    <div className="form-text">Inclure chiffres, lettres et caractères spéciaux</div>
                  </div>

                  <button type="submit" className="btn w-100 py-3 fw-bold text-white" style={{
                    backgroundColor: "#4a8f29",
                    border: "none",
                    borderRadius: "8px",
                    transition: "all 0.3s ease",
                    fontSize: "1.1rem"
                  }}>
                    <i className="bi bi-shield-lock me-2"></i>
                    S'inscrire
                  </button>
                </form>

                <div className="text-center mt-4">
                  <p className="text-muted mb-0" style={{ fontSize: "0.9rem" }}>
                    Vous avez déjà un compte ?{' '}
                    <a href="/login" style={{ color: "#4a8f29", fontWeight: "500" }}>
                      Connectez-vous
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
