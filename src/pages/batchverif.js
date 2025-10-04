import React, { useState } from "react";
import { Container, Row, Col, Button, Form, InputGroup, Navbar, Nav } from "react-bootstrap";
import { ArrowLeft, Search, Wallet } from 'lucide-react';

// CSS styles to match the Olivium dashboard design
const styles = `
:root {
  --olive-green: #2d5016;
  --olive-light: #90ee90;
  --olive-yellow: #daa520;
  --olive-cream: #f5f5dc;
  --beige: #f5f5dc;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif;
}

.btn {
  border-radius: 8px;
  transition: all 0.3s ease;
}

.btn:hover {
  transform: translateY(-1px);
}

.form-control {
  border-radius: 8px;
  transition: all 0.3s ease;
}

.form-control:focus {
  border-color: #28a745;
  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
}

.olivium-logo {
  width: 28px;
  height: 28px;
  filter: invert(1);
}

.verification-card {
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border: 1px solid #dee2e6;
  transition: all 0.3s ease;
}

.verification-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.feature-card {
  background: linear-gradient(135deg, #cdffd6ff 0%, #ffeaa7 100%);
  border-left: 4px solid #ea7a10ff;
  border-radius: 12px;
  padding: 20px;
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.search-icon-container {
  background: linear-gradient(135deg, #28a745,#9de82cff);
  color: white;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
}

.wallet-btn {
  background-color: #9de82cff !important;
  border-color: #9de82cff !important;
  color: #2d5016 !important;
  font-weight: bold !important;
}

.wallet-btn:hover {
  background-color: #90c032ff !important;
  border-color: #9acd32 !important;
  color: #2d5016 !important;
}

@media (max-width: 768px) {
  .display-4 {
    font-size: 2.5rem !important;
  }
  
  .fs-4 {
    font-size: 1.25rem !important;
  }
}
`;

export default function VerifyBatch() {
  const [batchId, setBatchId] = useState("");

  const handleSearch = () => {
    if (batchId.trim()) {
      console.log("Searching for batch:", batchId);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      {/* Inject CSS styles */}
      <style>{styles}</style>
      
      <div style={{ minHeight: "100vh", backgroundColor: "#f5f5dc" }}>
        {/* Navigation */}
        <Navbar expand="lg" className="px-4 py-3 shadow-sm" style={{ backgroundColor: "#2d5016" }}>
          <Navbar.Brand href="#" className="d-flex align-items-center gap-2">
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OyWTluWJsXSyObRFIELNPfNTkOUjf0.png" 
              alt="Olivium Logo" 
              className="olivium-logo"
            />
            <span style={{ fontSize: "1.8rem", color: "#FFFFFF", fontWeight: "bold" }}>Olivium</span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="me-auto d-none d-md-flex gap-4">
              <Nav.Link href="#" style={{ color: "#FFFFFF" }}>Features</Nav.Link>
              <Nav.Link href="#" style={{ color: "#FFFFFF" }}>How It Works</Nav.Link>
              <Nav.Link href="#" style={{ color: "#FFFFFF" }}>FAQ</Nav.Link>
            </Nav>
            <Button className="wallet-btn">
              <Wallet size={18} className="me-2" />
              Connect Wallet
            </Button>
          </Navbar.Collapse>
        </Navbar>

        {/* Main Content */}
        <Container className="py-5">
          <Button 
            variant="link" 
            className="text-success mb-4 fw-bold" 
            onClick={() => window.history.back()}
            style={{ textDecoration: "none" }}
          >
            <ArrowLeft size={18} className="me-2" />
            Back to Home
          </Button>

          <Row className="align-items-center g-5">
            {/* LEFT SECTION */}
            <Col lg={6}>
              <h1 className="display-4 fw-bold mb-4" style={{ color: "#2d5016", fontSize: "4rem" }}>
                Traceability
              </h1>
              <p className="fs-4 mb-4" style={{ color: "#6c757d", fontSize: "1.5rem" }}>
                Search for a batch to view its complete supply chain journey.
              </p>
              
              <Form.Group className="mt-4">
                <Form.Label className="fw-bold mb-3" style={{ color: "#2d5016" }}>
                  Enter batch ID
                </Form.Label>
                <InputGroup size="lg">
                  <Form.Control
                    type="text"
                    placeholder="BATCH001"
                    value={batchId}
                    onChange={(e) => setBatchId(e.target.value)}
                    onKeyPress={handleKeyPress}
                    style={{
                      backgroundColor: "#FFFFFF",
                      borderColor: "#dee2e6",
                      color: "#495057",
                      borderRadius: "8px",
                      fontSize: "1.1rem",
                      padding: "12px 16px"
                    }}
                  />
                </InputGroup>
                <Form.Text style={{ color: "#6c757d", fontSize: "0.9rem" }}>
                  Enter a batch ID to view its journey through the blockchain.
                </Form.Text>
              </Form.Group>

              <Button
                className="mt-4 px-4 py-3 fw-bold"
                style={{ 
                  backgroundColor: " #28a745", 
                  color: "#FFFFFF", 
                  borderRadius: "8px",
                  border: "none",
                  fontSize: "1.1rem"
                }}
                disabled={!batchId.trim()}
                onClick={handleSearch}
              >
                <Search size={20} className="me-2" />
                Search Batch
              </Button>
            </Col>

            {/* RIGHT SECTION */}
            <Col lg={6}>
              <div className="verification-card rounded-4 d-flex flex-column align-items-center justify-content-center text-center p-5">
                <div className="search-icon-container">
                  <Search size={40} />
                </div>
                <h4 style={{ color: "#2d5016", fontWeight: "bold" }}>
                  Blockchain Verification
                </h4>
                <p style={{ color: "#6c757d", fontSize: "1.1rem" }}>
                  Every batch is recorded on an immutable ledger for full transparency.
                </p>
              </div>
            </Col>
          </Row>

          {/* BOTTOM SECTION */}
          <Row className="mt-5 pt-5 g-4" style={{ borderTop: "2px solid #dee2e6" }}>
            <Col md={4}>
              <div className="feature-card h-100">
                <h5 style={{ color: "#856404", fontWeight: "bold", marginBottom: "15px" }}>
                  Origin Verification
                </h5>
                <p style={{ color: "#6c757d", marginBottom: "0" }}>
                  Trace back to the olive grove, harvest date, and farming methods.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="feature-card h-100">
                <h5 style={{ color: "#856404", fontWeight: "bold", marginBottom: "15px" }}>
                  Production Transparency
                </h5>
                <p style={{ color: "#6c757d", marginBottom: "0" }}>
                  View all processing methods, lab tests, and certifications.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="feature-card h-100">
                <h5 style={{ color: "#856404", fontWeight: "bold", marginBottom: "15px" }}>
                  Supply Chain Journey
                </h5>
                <p style={{ color: "#6c757d", marginBottom: "0" }}>
                  Track the full journey from grove to your table.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}