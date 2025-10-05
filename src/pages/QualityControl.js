"use client"

import { useState } from "react"
import { Container, Row, Col, Card, Button, Modal, Form, Badge, Accordion } from "react-bootstrap"
import {
  Leaf,
  Settings,
  Box,
  CheckCircle,
  Truck,
  ShoppingCart,
  FlaskConical,
  Award,
  FileText,
  Download,
  AlertCircle,
  TrendingUp,
  Clock,
  MapPin,
  User,
  Mail,
  Phone,
  Shield,
} from "lucide-react"


export default function QualityControlDashboard() {
  const [showTestModal, setShowTestModal] = useState(false)

  // Supply chain stages with Quality Checked as active
  const supplyChainStages = [
    { name: "Harvested", icon: Leaf, completed: true },
    { name: "Pressed", icon: Settings, completed: true },
    { name: "Bottled", icon: Box, completed: true },
    { name: "Quality Checked", icon: CheckCircle, completed: false, active: true },
    { name: "Distributed", icon: Truck, completed: false },
    { name: "Retail", icon: ShoppingCart, completed: false },
  ]

  // Sample batch data for quality testing
  const currentBatch = {
    batchId: "BM2025-H01-A23",
    millId: "CP-Mill-03",
    location: "Beni Mellal",
    pressingTemp: "25.3°C",
    crushingMethod: "Stone mill (manual)",
    timeFromHarvest: "3.5 hours",
    yieldPercentage: "22.1%",
    acidityTest: "0.4%",
    peroxideValue: "10 meq/kg",
    labCertificate: "Lab-2025-QC-045",
    testDate: "2025-11-22",
    status: "Pending Verification",
    iotHash: "0x7f8a9b2c...",
  }

  return (
    <div style={{ backgroundColor: "#f5f3e8", minHeight: "100vh" }}>
      {/* Navbar */}
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
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <img
            src="https://i.postimg.cc/3rFcFysG/Whats-App-20-Image-202025-10-04-20-C3-A0-2021-28-23-3da5555a-removebg-preview.png"
            alt="Olivium Logo"
            style={{ width: "40px", height: "40px", cursor: "pointer" }}
            onClick={() => window.location.href = '/'}
          />
          <span
            style={{ color: "white", fontSize: "1.5rem", fontWeight: "bold", fontFamily: "serif", cursor: "pointer" }}
            onClick={() => window.location.href = '/'}
          >
            𝐎𝐥𝐢𝐯𝐢𝐮𝐦
          </span>
        </div>
          <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
            <a href="#features" style={{ color: "white", textDecoration: "none", fontSize: "1rem" }}>
              Features
            </a>
            <a href="#how-it-works" style={{ color: "white", textDecoration: "none", fontSize: "1rem" }}>
              How It Works
            </a>
            <a href="#faq" style={{ color: "white", textDecoration: "none", fontSize: "1rem" }}>
              FAQ
            </a>
          </div>
        </div>
      </nav>

      <Container fluid className="p-4" style={{ maxWidth: "1400px" }}>
        {/* Header */}
        <div className="mb-4">
          <h2 style={{ color: "#3d5a29ff", fontWeight: "bold", marginBottom: "0.5rem" }}>Quality Control Dashboard</h2>
          <p style={{ color: "#666", marginBottom: 0 }}>Welcome back, Elena Qualiti - Quality Inspector</p>
        </div>

        {/* Summary Cards */}
        <Row className="mb-4">
          <Col md={4}>
            <Card style={{ border: "none", borderRadius: "12px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
              <Card.Body className="d-flex align-items-center">
                <div style={{ backgroundColor: "#e8f5e8", borderRadius: "50%", padding: "1rem", marginRight: "1rem" }}>
                  <FlaskConical size={28} style={{ color: "#3d5a29ff" }} />
                </div>
                <div>
                  <h3 style={{ color: "#3d5a29ff", marginBottom: "0.25rem", fontWeight: "bold" }}>1</h3>
                  <p style={{ color: "#666", marginBottom: 0, fontSize: "0.9rem" }}>Total Batches</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ border: "none", borderRadius: "12px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
              <Card.Body className="d-flex align-items-center">
                <div style={{ backgroundColor: "#fff3cd", borderRadius: "50%", padding: "1rem", marginRight: "1rem" }}>
                  <AlertCircle size={28} style={{ color: "#856404" }} />
                </div>
                <div>
                  <h3 style={{ color: "#856404", marginBottom: "0.25rem", fontWeight: "bold" }}>1</h3>
                  <p style={{ color: "#666", marginBottom: 0, fontSize: "0.9rem" }}>Pending Tests</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ border: "none", borderRadius: "12px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
              <Card.Body className="d-flex align-items-center">
                <div style={{ backgroundColor: "#d1ecf1", borderRadius: "50%", padding: "1rem", marginRight: "1rem" }}>
                  <Award size={28} style={{ color: "#0c5460" }} />
                </div>
                <div>
                  <h3 style={{ color: "#0c5460", marginBottom: "0.25rem", fontWeight: "bold" }}>98%</h3>
                  <p style={{ color: "#666", marginBottom: 0, fontSize: "0.9rem" }}>Pass Rate</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Supply Chain Progress */}
        <Card className="mb-4" style={{ border: "none", borderRadius: "12px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
          <Card.Body>
            <h5 style={{ color: "#3d5a29ff", fontWeight: "bold", marginBottom: "2rem" }}>Supply Chain Progress</h5>
            <div
              style={{
                position: "relative",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0 25px",
              }}
            >
              {/* Progress Line Background */}
              <div
                style={{
                  position: "absolute",
                  top: "25px",
                  left: "25px",
                  right: "25px",
                  height: "4px",
                  backgroundColor: "#e0e0e0",
                  zIndex: 1,
                }}
              />
              {/* Progress Line Fill */}
              <div
                style={{
                  position: "absolute",
                  top: "25px",
                  left: "25px",
                  width: "60%",
                  height: "4px",
                  backgroundColor: "#3d5a29ff",
                  zIndex: 1,
                }}
              />

              {supplyChainStages.map((stage, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    zIndex: 2,
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      backgroundColor: stage.active ? "#f7ec26ff" : stage.completed ? "#3d5a29ff" : "#e0e0e0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "0.5rem",
                      boxShadow: stage.active ? "0 0 0 4px rgba(247, 236, 38, 0.3)" : "none",
                    }}
                  >
                    <stage.icon size={24} style={{ color: stage.active ? "#3d5a29ff" : "white" }} />
                  </div>
                  <span
                    style={{
                      fontSize: "0.85rem",
                      color: stage.active || stage.completed ? "#3d5a29ff" : "#999",
                      fontWeight: stage.active ? "bold" : "normal",
                      textAlign: "center",
                    }}
                  >
                    {stage.name}
                  </span>
                </div>
              ))}
            </div>
          </Card.Body>
        </Card>

        {/* Inspector Profile */}
        <Card className="mb-4" style={{ border: "none", borderRadius: "12px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
          <Card.Body>
            <h5 style={{ color: "#3d5a29ff", fontWeight: "bold", marginBottom: "1.5rem" }}>Inspector Profile</h5>
            <Row>
              <Col md={6}>
                <div className="mb-3">
                  <div className="d-flex align-items-center mb-2">
                    <User size={18} style={{ color: "#3d5a29ff", marginRight: "0.5rem" }} />
                    <strong style={{ color: "#3d5a29ff" }}>Name:</strong>
                    <span style={{ marginLeft: "0.5rem" }}>Elena Qualiti</span>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <Shield size={18} style={{ color: "#3d5a29ff", marginRight: "0.5rem" }} />
                    <strong style={{ color: "#3d5a29ff" }}>Inspector ID:</strong>
                    <span style={{ marginLeft: "0.5rem" }}>QC-2025-045</span>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <Mail size={18} style={{ color: "#3d5a29ff", marginRight: "0.5rem" }} />
                    <strong style={{ color: "#3d5a29ff" }}>Email:</strong>
                    <span style={{ marginLeft: "0.5rem" }}>elena.qualiti@olivium.ma</span>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div className="mb-3">
                  <div className="d-flex align-items-center mb-2">
                    <Phone size={18} style={{ color: "#3d5a29ff", marginRight: "0.5rem" }} />
                    <strong style={{ color: "#3d5a29ff" }}>Phone:</strong>
                    <span style={{ marginLeft: "0.5rem" }}>+212 6 12 34 56 78</span>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <MapPin size={18} style={{ color: "#3d5a29ff", marginRight: "0.5rem" }} />
                    <strong style={{ color: "#3d5a29ff" }}>Lab Location:</strong>
                    <span style={{ marginLeft: "0.5rem" }}>Beni Mellal Quality Lab</span>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <Award size={18} style={{ color: "#3d5a29ff", marginRight: "0.5rem" }} />
                    <strong style={{ color: "#3d5a29ff" }}>Certifications:</strong>
                    <span style={{ marginLeft: "0.5rem" }}>ISO 17025, HACCP</span>
                  </div>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        {/* Current Batch Testing */}
        <Card className="mb-4" style={{ border: "none", borderRadius: "12px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
          <Card.Body>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 style={{ color: "#3d5a29ff", fontWeight: "bold", marginBottom: 0 }}>
                Current Batch - Quality Testing
              </h5>
              <Badge bg="warning" text="dark">
                Pending Verification
              </Badge>
            </div>

            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <strong>Batch {currentBatch.batchId} - Test Results</strong>
                </Accordion.Header>
                <Accordion.Body>
                  <Row>
                    <Col md={6}>
                      <div className="mb-3">
                        <p className="mb-2">
                          <strong style={{ color: "#3d5a29ff" }}>Mill ID:</strong> {currentBatch.millId}
                        </p>
                        <p className="mb-2">
                          <strong style={{ color: "#3d5a29ff" }}>Location:</strong> {currentBatch.location}
                        </p>
                        <p className="mb-2">
                          <strong style={{ color: "#3d5a29ff" }}>Pressing Temperature:</strong>{" "}
                          {currentBatch.pressingTemp}
                        </p>
                        <p className="mb-2">
                          <strong style={{ color: "#3d5a29ff" }}>Crushing Method:</strong> {currentBatch.crushingMethod}
                        </p>
                        <p className="mb-2">
                          <strong style={{ color: "#3d5a29ff" }}>Time from Harvest:</strong>{" "}
                          {currentBatch.timeFromHarvest}
                        </p>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="mb-3">
                        <p className="mb-2">
                          <strong style={{ color: "#3d5a29ff" }}>Yield Percentage:</strong>{" "}
                          {currentBatch.yieldPercentage}
                        </p>
                        <p className="mb-2">
                          <strong style={{ color: "#3d5a29ff" }}>Acidity Test:</strong>
                          <Badge bg="success" className="ms-2">
                            {currentBatch.acidityTest} (Extra Virgin)
                          </Badge>
                        </p>
                        <p className="mb-2">
                          <strong style={{ color: "#3d5a29ff" }}>Peroxide Value:</strong> {currentBatch.peroxideValue}
                        </p>
                        <p className="mb-2">
                          <strong style={{ color: "#3d5a29ff" }}>Lab Certificate:</strong> {currentBatch.labCertificate}
                        </p>
                        <p className="mb-2">
                          <strong style={{ color: "#3d5a29ff" }}>Test Date:</strong> {currentBatch.testDate}
                        </p>
                      </div>
                    </Col>
                  </Row>

                  <div className="mt-3 p-3" style={{ backgroundColor: "#f8f9fa", borderRadius: "8px" }}>
                    <div className="d-flex align-items-center mb-2">
                      <Shield size={18} style={{ color: "#3d5a29ff", marginRight: "0.5rem" }} />
                      <strong style={{ color: "#3d5a29ff" }}>IOTA Tangle Hash:</strong>
                    </div>
                    <code style={{ fontSize: "0.85rem", wordBreak: "break-all" }}>{currentBatch.iotHash}</code>
                  </div>

                  <div className="mt-4 d-flex gap-2">
                    <Button
                      style={{ backgroundColor: "#c4e538", border: "none", color: "#3d5a29ff", fontWeight: "bold" }}
                      onClick={() => setShowTestModal(true)}
                    >
                      <CheckCircle size={18} className="me-2" />
                      Approve Batch
                    </Button>
                    <Button variant="outline-danger">
                      <AlertCircle size={18} className="me-2" />
                      Reject Batch
                    </Button>
                    <Button variant="outline-secondary">
                      <Download size={18} className="me-2" />
                      Download Certificate
                    </Button>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Card.Body>
        </Card>

        {/* IoT Lab Sensors */}
        <Card style={{ border: "none", borderRadius: "12px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
          <Card.Body>
            <h5 style={{ color: "#3d5a29ff", fontWeight: "bold", marginBottom: "1.5rem" }}>
              Lab IoT Sensors - Real-time Monitoring
            </h5>
            <Row>
              <Col md={3}>
                <Card style={{ backgroundColor: "#e8f5e8", border: "none", textAlign: "center", padding: "1rem" }}>
                  <FlaskConical size={32} style={{ color: "#3d5a29ff", margin: "0 auto 0.5rem" }} />
                  <h6 style={{ color: "#3d5a29ff" }}>Lab Temperature</h6>
                  <h4 style={{ color: "#3d5a29ff", fontWeight: "bold" }}>22.5°C</h4>
                  <small style={{ color: "#666" }}>Optimal</small>
                </Card>
              </Col>
              <Col md={3}>
                <Card style={{ backgroundColor: "#e8f5e8", border: "none", textAlign: "center", padding: "1rem" }}>
                  <TrendingUp size={32} style={{ color: "#3d5a29ff", margin: "0 auto 0.5rem" }} />
                  <h6 style={{ color: "#3d5a29ff" }}>Humidity</h6>
                  <h4 style={{ color: "#3d5a29ff", fontWeight: "bold" }}>45%</h4>
                  <small style={{ color: "#666" }}>Normal</small>
                </Card>
              </Col>
              <Col md={3}>
                <Card style={{ backgroundColor: "#e8f5e8", border: "none", textAlign: "center", padding: "1rem" }}>
                  <Clock size={32} style={{ color: "#3d5a29ff", margin: "0 auto 0.5rem" }} />
                  <h6 style={{ color: "#3d5a29ff" }}>Test Duration</h6>
                  <h4 style={{ color: "#3d5a29ff", fontWeight: "bold" }}>2.5h</h4>
                  <small style={{ color: "#666" }}>In Progress</small>
                </Card>
              </Col>
              <Col md={3}>
                <Card style={{ backgroundColor: "#e8f5e8", border: "none", textAlign: "center", padding: "1rem" }}>
                  <FileText size={32} style={{ color: "#3d5a29ff", margin: "0 auto 0.5rem" }} />
                  <h6 style={{ color: "#3d5a29ff" }}>Tests Today</h6>
                  <h4 style={{ color: "#3d5a29ff", fontWeight: "bold" }}>3</h4>
                  <small style={{ color: "#666" }}>Completed</small>
                </Card>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>

      {/* Approval Modal */}
      <Modal show={showTestModal} onHide={() => setShowTestModal(false)} centered>
        <Modal.Header closeButton style={{ borderBottom: "2px solid #3d5a29ff" }}>
          <Modal.Title style={{ color: "#3d5a29ff" }}>Approve Quality Test</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Inspector Notes</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Add any additional notes about the quality test..." />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Quality Grade</Form.Label>
              <Form.Select>
                <option>Extra Virgin</option>
                <option>Virgin</option>
                <option>Refined</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check type="checkbox" label="Confirm all test results meet quality standards" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowTestModal(false)}>
            Cancel
          </Button>
          <Button
            style={{ backgroundColor: "#c4e538", border: "none", color: "#3d5a29ff", fontWeight: "bold" }}
            onClick={() => {
              alert("Batch approved and anchored to IOTA Tangle!")
              setShowTestModal(false)
            }}
          >
            Approve & Anchor to IOTA
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
