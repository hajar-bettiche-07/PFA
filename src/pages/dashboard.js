"use client"

import { useState } from "react"
import { Container, Row, Col, Card, Button, Badge, Table, Form, Modal, Navbar, Nav } from "react-bootstrap"
import * as Icon from "react-bootstrap-icons"

export default function FarmerDashboard() {
  const [showNewBatchModal, setShowNewBatchModal] = useState(false)
  const [walletConnected, setWalletConnected] = useState(false)

  // Sample IoT data
  const iotData = {
    gpsCoordinates: "32.3451N, 6.2405W",
    oliveVariety: "Picholine Marocaine",
    plantingYear: 2012,
    soilPH: 6.5,
    soilMoisture: "27%",
    soilSalinity: "EC 2.2",
    temperature: "24°C",
    humidity: "65%",
    rainfall: "12mm",
  }

  const batches = [
    {
      id: "BM2025-H01-A23",
      harvestDate: "2025-11-20",
      quantity: "450 kg",
      status: "Harvested",
      method: "Manual - handpicked",
    },
  ]

  const handleConnectWallet = () => {
    // IOTA wallet connection logic will go here
    setWalletConnected(!walletConnected)
  }

  return (
    <>
      <style>{`
        .navbar-custom {
          background-color: #3d5a29 !important;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          padding: 15px 0;
        }

        .nav-link {
          color: #FFFFFF !important;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .nav-link:hover {
          color: #90ee90 !important;
        }

        .connect-wallet-btn {
          background-color: #9de82c !important;
          border-color: #9de82c !important;
          color: #2d5016 !important;
          font-weight: bold !important;
        }

        .connect-wallet-btn:hover {
          background-color: #8bc926 !important;
          border-color: #8bc926 !important;
          color: #2d5016 !important;
        }

        .olivium-logo {
          width: 40px;
          height: 40px;
        }
      `}</style>

      <div style={{ backgroundColor: "#f5f3e8", minHeight: "100vh" }}>
        <Navbar className="navbar-custom">
          <Container style={{ justifyContent: "space-between", display: "flex" }}>
            <Navbar.Brand
              href="/"
              style={{ color: "#FFFFFF", fontSize: "30px", display: "flex", alignItems: "center", gap: "10px" }}
            >
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-04%20%C3%A0%2021.28.23_3da5555a-oeviOe6rZHzTHhT0qcZIy9XYCIJcft.jpg"
                alt="Olivium Logo"
                className="olivium-logo"
              />
              𝐎𝐥𝐢𝐯𝐢𝐮𝐦
            </Navbar.Brand>
            <Nav>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#how-it-works">How It Works</Nav.Link>
              <Nav.Link href="#faq">FAQ</Nav.Link>
            </Nav>
            <Button
              className="connect-wallet-btn"
              style={{ display: "flex", alignItems: "center", gap: "8px" }}
              onClick={handleConnectWallet}
            >
              <Icon.Wallet size={18} />
              {walletConnected ? "Wallet Connected" : "Connect Wallet"}
            </Button>
          </Container>
        </Navbar>

        <Container className="py-4">
          {/* Welcome Section */}
          <Row className="mb-4">
            <Col>
              <h2 style={{ color: "#4a6741", fontStyle: "italic", fontSize: "2rem" }}>Farmer Dashboard</h2>
              <p style={{ color: "#6b7280" }}>
                Welcome back, Maria Olivera. Monitor your olive groves and manage your batches.
              </p>
            </Col>
          </Row>

          {/* Stats Cards */}
          <Row className="mb-4">
            <Col md={3}>
              <Card style={{ border: "1px solid #d1d5db", borderRadius: "8px" }}>
                <Card.Body>
                  <h6 style={{ color: "#6b7280", fontSize: "0.875rem" }}>Total Batches</h6>
                  <h3 style={{ color: "#4a6741", fontWeight: "bold" }}>1</h3>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card style={{ border: "1px solid #d1d5db", borderRadius: "8px" }}>
                <Card.Body>
                  <h6 style={{ color: "#6b7280", fontSize: "0.875rem" }}>Active Groves</h6>
                  <h3 style={{ color: "#4a6741", fontWeight: "bold" }}>3</h3>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card style={{ border: "1px solid #d1d5db", borderRadius: "8px" }}>
                <Card.Body>
                  <h6 style={{ color: "#6b7280", fontSize: "0.875rem" }}>Total Harvest</h6>
                  <h3 style={{ color: "#4a6741", fontWeight: "bold" }}>450 kg</h3>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card style={{ border: "1px solid #d1d5db", borderRadius: "8px" }}>
                <Card.Body>
                  <h6 style={{ color: "#6b7280", fontSize: "0.875rem" }}>Cost/Hectare</h6>
                  <h3 style={{ color: "#4a6741", fontWeight: "bold" }}>MAD 4,200</h3>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Supply Chain Progress */}
          <Row className="mb-4">
            <Col>
              <Card style={{ border: "1px solid #d1d5db", borderRadius: "8px" }}>
                <Card.Header style={{ backgroundColor: "#4a6741", color: "white" }}>
                  <h5 className="mb-0">Supply Chain Progress</h5>
                </Card.Header>
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="text-center">
                      <div
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "50%",
                          backgroundColor: "#c4e538",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          margin: "0 auto",
                        }}
                      >
                        ✓
                      </div>
                      <small style={{ color: "#4a6741", fontWeight: "600" }}>Harvested</small>
                    </div>
                    <div style={{ flex: 1, height: "2px", backgroundColor: "#d1d5db" }}></div>
                    <div className="text-center">
                      <div
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "50%",
                          backgroundColor: "#e5e7eb",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          margin: "0 auto",
                        }}
                      >
                        2
                      </div>
                      <small style={{ color: "#6b7280" }}>Pressed</small>
                    </div>
                    <div style={{ flex: 1, height: "2px", backgroundColor: "#d1d5db" }}></div>
                    <div className="text-center">
                      <div
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "50%",
                          backgroundColor: "#e5e7eb",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          margin: "0 auto",
                        }}
                      >
                        3
                      </div>
                      <small style={{ color: "#6b7280" }}>Quality Check</small>
                    </div>
                    <div style={{ flex: 1, height: "2px", backgroundColor: "#d1d5db" }}></div>
                    <div className="text-center">
                      <div
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "50%",
                          backgroundColor: "#e5e7eb",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          margin: "0 auto",
                        }}
                      >
                        4
                      </div>
                      <small style={{ color: "#6b7280" }}>Distributed</small>
                    </div>
                    <div style={{ flex: 1, height: "2px", backgroundColor: "#d1d5db" }}></div>
                    <div className="text-center">
                      <div
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "50%",
                          backgroundColor: "#e5e7eb",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          margin: "0 auto",
                        }}
                      >
                        5
                      </div>
                      <small style={{ color: "#6b7280" }}>Retail</small>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Farmer Profile */}
          <Row className="mb-4">
            <Col>
              <Card style={{ border: "1px solid #d1d5db", borderRadius: "8px" }}>
                <Card.Header style={{ backgroundColor: "#4a6741", color: "white" }}>
                  <h5 className="mb-0">👤 Farmer Profile</h5>
                </Card.Header>
                <Card.Body>
                  <Row>
                    <Col md={6}>
                      <div className="mb-3">
                        <small style={{ color: "#6b7280" }}>Full Name</small>
                        <p style={{ color: "#4a6741", fontWeight: "600", marginBottom: "0.5rem" }}>Maria Olivera</p>
                      </div>
                      <div className="mb-3">
                        <small style={{ color: "#6b7280" }}>Farm Name</small>
                        <p style={{ color: "#4a6741", fontWeight: "600", marginBottom: "0.5rem" }}>
                          Olivera Family Groves
                        </p>
                      </div>
                      <div className="mb-3">
                        <small style={{ color: "#6b7280" }}>Farm Location</small>
                        <p style={{ color: "#4a6741", fontWeight: "600", marginBottom: "0.5rem" }}>Andalusia, Spain</p>
                      </div>
                      <div className="mb-3">
                        <small style={{ color: "#6b7280" }}>Total Farm Area</small>
                        <p style={{ color: "#4a6741", fontWeight: "600", marginBottom: "0.5rem" }}>15 hectares</p>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="mb-3">
                        <small style={{ color: "#6b7280" }}>Contact Email</small>
                        <p style={{ color: "#4a6741", fontWeight: "600", marginBottom: "0.5rem" }}>
                          maria.olivera@olivium.com
                        </p>
                      </div>
                      <div className="mb-3">
                        <small style={{ color: "#6b7280" }}>Phone Number</small>
                        <p style={{ color: "#4a6741", fontWeight: "600", marginBottom: "0.5rem" }}>+34 612 345 678</p>
                      </div>
                      <div className="mb-3">
                        <small style={{ color: "#6b7280" }}>Certification</small>
                        <p style={{ color: "#4a6741", fontWeight: "600", marginBottom: "0.5rem" }}>
                          Organic Certified (EU)
                        </p>
                      </div>
                      <div className="mb-3">
                        <small style={{ color: "#6b7280" }}>Member Since</small>
                        <p style={{ color: "#4a6741", fontWeight: "600", marginBottom: "0.5rem" }}>January 2020</p>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* IoT Sensor Data */}
          <Row className="mb-4">
            <Col lg={6}>
              <Card style={{ border: "1px solid #d1d5db", borderRadius: "8px" }}>
                <Card.Header style={{ backgroundColor: "#4a6741", color: "white" }}>
                  <h5 className="mb-0">🌡️ Real-Time IoT Sensor Data</h5>
                </Card.Header>
                <Card.Body>
                  <Row>
                    <Col md={6} className="mb-3">
                      <div>
                        <small style={{ color: "#6b7280" }}>GPS Coordinates</small>
                        <p style={{ color: "#4a6741", fontWeight: "600", marginBottom: "0.5rem" }}>
                          {iotData.gpsCoordinates}
                        </p>
                      </div>
                    </Col>
                    <Col md={6} className="mb-3">
                      <div>
                        <small style={{ color: "#6b7280" }}>Olive Variety</small>
                        <p style={{ color: "#4a6741", fontWeight: "600", marginBottom: "0.5rem" }}>
                          {iotData.oliveVariety}
                        </p>
                      </div>
                    </Col>
                    <Col md={6} className="mb-3">
                      <div>
                        <small style={{ color: "#6b7280" }}>Soil pH</small>
                        <p style={{ color: "#4a6741", fontWeight: "600", marginBottom: "0.5rem" }}>{iotData.soilPH}</p>
                      </div>
                    </Col>
                    <Col md={6} className="mb-3">
                      <div>
                        <small style={{ color: "#6b7280" }}>Soil Moisture</small>
                        <p style={{ color: "#4a6741", fontWeight: "600", marginBottom: "0.5rem" }}>
                          {iotData.soilMoisture}
                        </p>
                      </div>
                    </Col>
                    <Col md={6} className="mb-3">
                      <div>
                        <small style={{ color: "#6b7280" }}>Temperature</small>
                        <p style={{ color: "#4a6741", fontWeight: "600", marginBottom: "0.5rem" }}>
                          {iotData.temperature}
                        </p>
                      </div>
                    </Col>
                    <Col md={6} className="mb-3">
                      <div>
                        <small style={{ color: "#6b7280" }}>Humidity</small>
                        <p style={{ color: "#4a6741", fontWeight: "600", marginBottom: "0.5rem" }}>
                          {iotData.humidity}
                        </p>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>

            {/* Grove Information */}
            <Col lg={6}>
              <Card style={{ border: "1px solid #d1d5db", borderRadius: "8px" }}>
                <Card.Header style={{ backgroundColor: "#4a6741", color: "white" }}>
                  <h5 className="mb-0"> Grove Information</h5>
                </Card.Header>
                <Card.Body>
                  <Row>
                    <Col md={6} className="mb-3">
                      <div>
                        <small style={{ color: "#6b7280" }}>Planting Year</small>
                        <p style={{ color: "#4a6741", fontWeight: "600", marginBottom: "0.5rem" }}>
                          {iotData.plantingYear}
                        </p>
                      </div>
                    </Col>
                    <Col md={6} className="mb-3">
                      <div>
                        <small style={{ color: "#6b7280" }}>Soil Salinity</small>
                        <p style={{ color: "#4a6741", fontWeight: "600", marginBottom: "0.5rem" }}>
                          {iotData.soilSalinity}
                        </p>
                      </div>
                    </Col>
                    <Col md={6} className="mb-3">
                      <div>
                        <small style={{ color: "#6b7280" }}>Rainfall</small>
                        <p style={{ color: "#4a6741", fontWeight: "600", marginBottom: "0.5rem" }}>
                          {iotData.rainfall}
                        </p>
                      </div>
                    </Col>
                    <Col md={6} className="mb-3">
                      <div>
                        <small style={{ color: "#6b7280" }}>Irrigation</small>
                        <p style={{ color: "#4a6741", fontWeight: "600", marginBottom: "0.5rem" }}>
                          Drip, 20L/tree/day
                        </p>
                      </div>
                    </Col>
                    <Col md={12} className="mb-3">
                      <div>
                        <small style={{ color: "#6b7280" }}>Fertilizer Records</small>
                        <p style={{ color: "#4a6741", fontWeight: "600", marginBottom: "0.5rem" }}>
                          Organic - Last applied: 2025-10-15
                        </p>
                      </div>
                    </Col>
                    <Col md={12}>
                      <div>
                        <small style={{ color: "#6b7280" }}>Pest Control</small>
                        <p style={{ color: "#4a6741", fontWeight: "600", marginBottom: "0.5rem" }}>
                          Manual/Organic methods only
                        </p>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Batch Management */}
          <Row className="mb-4">
            <Col>
              <Card style={{ border: "1px solid #d1d5db", borderRadius: "8px" }}>
                <Card.Header
                  style={{ backgroundColor: "#4a6741", color: "white" }}
                  className="d-flex justify-content-between align-items-center"
                >
                  <h5 className="mb-0"> Batch Management</h5>
                  <Button
                    style={{
                      backgroundColor: "#c4e538",
                      border: "none",
                      color: "#2d3e2d",
                      fontWeight: "600",
                    }}
                    onClick={() => setShowNewBatchModal(true)}
                  >
                    + Register New Batch
                  </Button>
                </Card.Header>
                <Card.Body>
                  <Table responsive hover>
                    <thead>
                      <tr>
                        <th>Batch ID</th>
                        <th>Harvest Date</th>
                        <th>Quantity</th>
                        <th>Method</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {batches.map((batch) => (
                        <tr key={batch.id}>
                          <td style={{ color: "#4a6741", fontWeight: "600" }}>{batch.id}</td>
                          <td>{batch.harvestDate}</td>
                          <td>{batch.quantity}</td>
                          <td>{batch.method}</td>
                          <td>
                            <Badge bg="success">{batch.status}</Badge>
                          </td>
                          <td>
                            <Button
                              size="sm"
                              style={{
                                backgroundColor: "#4a6741",
                                border: "none",
                              }}
                            >
                              View Details
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        {/* New Batch Modal */}
        <Modal show={showNewBatchModal} onHide={() => setShowNewBatchModal(false)} size="lg">
          <Modal.Header closeButton style={{ backgroundColor: "#4a6741", color: "white" }}>
            <Modal.Title>Register New Batch</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Batch ID</Form.Label>
                    <Form.Control type="text" placeholder="BM2025-H01-A24" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Harvest Date</Form.Label>
                    <Form.Control type="date" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Quantity (kg)</Form.Label>
                    <Form.Control type="number" placeholder="450" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Harvest Method</Form.Label>
                    <Form.Select>
                      <option>Manual - handpicked</option>
                      <option>Mechanical</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Worker ID</Form.Label>
                    <Form.Control type="text" placeholder="WID-1011" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Cooperative ID</Form.Label>
                    <Form.Control type="text" placeholder="Co-op 5" />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3">
                <Form.Label>GPS Coordinates</Form.Label>
                <Form.Control type="text" value={iotData.gpsCoordinates} readOnly />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Olive Variety</Form.Label>
                <Form.Control type="text" value={iotData.oliveVariety} readOnly />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowNewBatchModal(false)}>
              Cancel
            </Button>
            <Button
              style={{
                backgroundColor: "#c4e538",
                border: "none",
                color: "#2d3e2d",
                fontWeight: "600",
              }}
              onClick={() => {
                // Submit to IOTA blockchain
                alert("Batch registered and anchored to IOTA Tangle!")
                setShowNewBatchModal(false)
              }}
            >
              Register & Anchor to IOTA
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  )
}
