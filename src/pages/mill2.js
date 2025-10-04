"use client"

import React from "react"

import { useState } from "react"
import { Container, Row, Col, Card, Button, Badge, Table, Accordion, Modal, Form } from "react-bootstrap"
import {
  Droplets,
  Thermometer,
  Clock,
  BarChart3,
  FileText,
  Award,
  Search,
  Leaf,
  Archive,
  Download,
  Info,
  CheckCircle,
  Box,
  Package,
  ShoppingCart,
  Plus,
} from "lucide-react"

export default function MillOperatorDashboard() {
  const [showModal, setShowModal] = useState(false)
  const [showProcessModal, setShowProcessModal] = useState(false)

  const processStages = [
    { name: "Harvested", icon: Leaf, completed: true, active: false },
    { name: "Pressed", icon: Droplets, completed: false, active: true },
    { name: "Bottled", icon: Box, completed: false, active: false },
    { name: "Quality Checked", icon: CheckCircle, completed: false, active: false },
    { name: "Distributed", icon: Package, completed: false, active: false },
    { name: "Retail", icon: ShoppingCart, completed: false, active: false },
  ]

  const batchData = {
    batchId: "BM2025-H01-A23",
    millId: "CP-Mill-03, Beni Mellal",
    pressingTemp: "25.3°C",
    crushingMethod: "Stone mill (manual)",
    timeHarvestToPress: "3.5 hours",
    yieldPercentage: "22.1%",
    acidityTest: "0.4% (extra virgin)",
    peroxideValue: "10 meq/kg",
    labCertificate: "LAB-2024-001",
    batchTraceLog: "Farm-A-001, Farm-B-003",
    wasteManagement: "Olive pomace logged",
    costOfProcessing: "MAD 600/ton",
    status: "In Progress",
  }

  const millProfile = {
    name: "Antonio Pressori",
    millId: "CP-Mill-03",
    location: "Beni Mellal, Morocco",
    email: "antonio@cpmill03.ma",
    phone: "+212 6XX XXX XXX",
    certifications: ["Organic Certified", "Cold Press Certified", "ISO 22000"],
    capacity: "50 tons/day",
    established: "1998",
  }

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f5f3e8" }}>
      {/* Navbar - same as Farmer Dashboard */}
      <nav
        style={{
          backgroundColor: "#3d5a29ff",
          padding: "1rem 2rem",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
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
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-04%20%C3%A0%2021.28.23_3da5555a-oeviOe6rZHzTHhT0qcZIy9XYCIJcft.jpg"
              alt="Olivium Logo"
              style={{ width: "40px", height: "40px" }}
            />
            <span
              style={{
                color: "white",
                fontSize: "1.5rem",
                fontWeight: "bold",
                fontFamily: "Georgia, serif",
              }}
            >
              𝐎𝐥𝐢𝐯𝐢𝐮𝐦
            </span>
          </div>

          <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
            <a href="#" style={{ color: "white", textDecoration: "none" }}>
              Features
            </a>
            <a href="#" style={{ color: "white", textDecoration: "none" }}>
              How It Works
            </a>
            <a href="#" style={{ color: "white", textDecoration: "none" }}>
              FAQ
            </a>
          </div>
        </div>
      </nav>

      <Container fluid style={{ padding: "2rem", maxWidth: "1400px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: "2rem" }}>
          <h2 style={{ color: "#2d5016", fontWeight: "bold", marginBottom: "0.5rem" }}>Mill Operator Dashboard</h2>
          <p style={{ color: "#666", fontSize: "1rem" }}>Welcome back, {millProfile.name}</p>
        </div>

        {/* Summary Cards */}
        <Row style={{ marginBottom: "2rem" }}>
          <Col md={3}>
            <Card
              style={{
                border: "none",
                borderRadius: "12px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                backgroundColor: "white",
              }}
            >
              <Card.Body>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div
                    style={{
                      backgroundColor: "#e8f5e9",
                      padding: "1rem",
                      borderRadius: "12px",
                    }}
                  >
                    <BarChart3 size={24} style={{ color: "#2d5016" }} />
                  </div>
                  <div>
                    <h3 style={{ margin: 0, color: "#2d5016", fontWeight: "bold" }}>1</h3>
                    <p style={{ margin: 0, color: "#666", fontSize: "0.9rem" }}>Total Batches</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card
              style={{
                border: "none",
                borderRadius: "12px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                backgroundColor: "white",
              }}
            >
              <Card.Body>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div
                    style={{
                      backgroundColor: "#fff3cd",
                      padding: "1rem",
                      borderRadius: "12px",
                    }}
                  >
                    <Clock size={24} style={{ color: "#856404" }} />
                  </div>
                  <div>
                    <h3 style={{ margin: 0, color: "#856404", fontWeight: "bold" }}>1</h3>
                    <p style={{ margin: 0, color: "#666", fontSize: "0.9rem" }}>In Progress</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card
              style={{
                border: "none",
                borderRadius: "12px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                backgroundColor: "white",
              }}
            >
              <Card.Body>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div
                    style={{
                      backgroundColor: "#e3f2fd",
                      padding: "1rem",
                      borderRadius: "12px",
                    }}
                  >
                    <Droplets size={24} style={{ color: "#1976d2" }} />
                  </div>
                  <div>
                    <h3 style={{ margin: 0, color: "#1976d2", fontWeight: "bold" }}>22.1%</h3>
                    <p style={{ margin: 0, color: "#666", fontSize: "0.9rem" }}>Avg Yield</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card
              style={{
                border: "none",
                borderRadius: "12px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                backgroundColor: "white",
              }}
            >
              <Card.Body>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div
                    style={{
                      backgroundColor: "#fce4ec",
                      padding: "1rem",
                      borderRadius: "12px",
                    }}
                  >
                    <Thermometer size={24} style={{ color: "#c2185b" }} />
                  </div>
                  <div>
                    <h3 style={{ margin: 0, color: "#c2185b", fontWeight: "bold" }}>25.3°C</h3>
                    <p style={{ margin: 0, color: "#666", fontSize: "0.9rem" }}>Avg Temp</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Supply Chain Progress */}
        <Card
          style={{
            border: "none",
            borderRadius: "12px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            marginBottom: "2rem",
            backgroundColor: "white",
          }}
        >
          <Card.Body style={{ padding: "2rem" }}>
            <h5 style={{ color: "#2d5016", fontWeight: "bold", marginBottom: "2rem" }}>Supply Chain Progress</h5>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                position: "relative",
                padding: "2rem 0",
              }}
            >
              {/* Progress Line Background */}
              <div
                style={{
                  position: "absolute",
                  top: "calc(2rem + 25px)",
                  left: "calc(8.33% + 25px)",
                  right: "calc(8.33% + 25px)",
                  height: "4px",
                  backgroundColor: "#e0e0e0",
                  zIndex: 0,
                }}
              >
                {/* Progress Line Fill */}
                <div
                  style={{
                    height: "100%",
                    width: "20%",
                    backgroundColor: "#2d5016",
                    transition: "width 0.3s ease",
                  }}
                ></div>
              </div>

              {processStages.map((stage, index) => (
                <div
                  key={stage.name}
                  style={{
                    textAlign: "center",
                    position: "relative",
                    zIndex: 1,
                    flex: 1,
                  }}
                >
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      backgroundColor: stage.active ? "#ffc107" : stage.completed ? "#2d5016" : "#e0e0e0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 0.5rem",
                      transition: "all 0.3s ease",
                      boxShadow: stage.active ? "0 0 0 4px rgba(255, 193, 7, 0.2)" : "none",
                    }}
                  >
                    {React.createElement(stage.icon, {
                      size: 24,
                      style: {
                        color: stage.active || stage.completed ? "white" : "#999",
                      },
                    })}
                  </div>
                  <small
                    style={{
                      color: stage.active ? "#ffc107" : stage.completed ? "#2d5016" : "#999",
                      fontWeight: stage.active || stage.completed ? "bold" : "normal",
                      fontSize: "0.75rem",
                      display: "block",
                    }}
                  >
                    {stage.name}
                  </small>
                </div>
              ))}
            </div>
          </Card.Body>
        </Card>

        {/* Mill Profile */}
        <Card
          style={{
            border: "none",
            borderRadius: "12px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            marginBottom: "2rem",
            backgroundColor: "white",
          }}
        >
          <Card.Body style={{ padding: "2rem" }}>
            <h5 style={{ color: "#2d5016", fontWeight: "bold", marginBottom: "1.5rem" }}>Mill Profile</h5>
            <Row>
              <Col md={6}>
                <div style={{ marginBottom: "1rem" }}>
                  <strong style={{ color: "#2d5016" }}>Operator Name:</strong>
                  <p style={{ margin: "0.25rem 0 0 0", color: "#666" }}>{millProfile.name}</p>
                </div>
                <div style={{ marginBottom: "1rem" }}>
                  <strong style={{ color: "#2d5016" }}>Mill ID:</strong>
                  <p style={{ margin: "0.25rem 0 0 0", color: "#666" }}>{millProfile.millId}</p>
                </div>
                <div style={{ marginBottom: "1rem" }}>
                  <strong style={{ color: "#2d5016" }}>Location:</strong>
                  <p style={{ margin: "0.25rem 0 0 0", color: "#666" }}>{millProfile.location}</p>
                </div>
                <div style={{ marginBottom: "1rem" }}>
                  <strong style={{ color: "#2d5016" }}>Email:</strong>
                  <p style={{ margin: "0.25rem 0 0 0", color: "#666" }}>{millProfile.email}</p>
                </div>
              </Col>
              <Col md={6}>
                <div style={{ marginBottom: "1rem" }}>
                  <strong style={{ color: "#2d5016" }}>Phone:</strong>
                  <p style={{ margin: "0.25rem 0 0 0", color: "#666" }}>{millProfile.phone}</p>
                </div>
                <div style={{ marginBottom: "1rem" }}>
                  <strong style={{ color: "#2d5016" }}>Processing Capacity:</strong>
                  <p style={{ margin: "0.25rem 0 0 0", color: "#666" }}>{millProfile.capacity}</p>
                </div>
                <div style={{ marginBottom: "1rem" }}>
                  <strong style={{ color: "#2d5016" }}>Established:</strong>
                  <p style={{ margin: "0.25rem 0 0 0", color: "#666" }}>{millProfile.established}</p>
                </div>
                <div style={{ marginBottom: "1rem" }}>
                  <strong style={{ color: "#2d5016" }}>Certifications:</strong>
                  <div style={{ marginTop: "0.5rem", display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                    {millProfile.certifications.map((cert, index) => (
                      <Badge key={index} bg="success" style={{ backgroundColor: "#2d5016" }}>
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        {/* Current Batch Processing */}
        <Card
          style={{
            border: "none",
            borderRadius: "12px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            marginBottom: "2rem",
            backgroundColor: "white",
          }}
        >
          <Card.Body style={{ padding: "2rem" }}>
            <div
              style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}
            >
              <h5 style={{ color: "#2d5016", fontWeight: "bold", margin: 0 }}>Current Batch Processing</h5>
              <Button
                onClick={() => setShowProcessModal(true)}
                style={{
                  backgroundColor: "#c4e538",
                  border: "none",
                  color: "#2d5016",
                  fontWeight: "bold",
                  borderRadius: "8px",
                }}
              >
                <Plus size={18} style={{ marginRight: "0.5rem" }} />
                Process New Batch
              </Button>
            </div>

            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <Droplets style={{ color: "#2d5016" }} size={20} />
                    <strong>Batch {batchData.batchId}</strong>
                    <Badge bg="warning">{batchData.status}</Badge>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <Table responsive hover>
                    <tbody>
                      <tr>
                        <td style={{ fontWeight: "bold", color: "#2d5016" }}>
                          <Archive size={16} style={{ marginRight: "0.5rem" }} />
                          Mill ID / Location
                        </td>
                        <td>{batchData.millId}</td>
                        <td>
                          <Info
                            size={16}
                            style={{ color: "#999", cursor: "pointer" }}
                            title="Mill certification and location tracking"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td style={{ fontWeight: "bold", color: "#2d5016" }}>
                          <Thermometer size={16} style={{ marginRight: "0.5rem" }} />
                          Pressing Temperature
                        </td>
                        <td>{batchData.pressingTemp}</td>
                        <td>
                          <Info
                            size={16}
                            style={{ color: "#999", cursor: "pointer" }}
                            title="Cold press validation for quality"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td style={{ fontWeight: "bold", color: "#2d5016" }}>
                          <Droplets size={16} style={{ marginRight: "0.5rem" }} />
                          Crushing Method
                        </td>
                        <td>{batchData.crushingMethod}</td>
                        <td>
                          <Info
                            size={16}
                            style={{ color: "#999", cursor: "pointer" }}
                            title="Traditional vs modern processing method"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td style={{ fontWeight: "bold", color: "#2d5016" }}>
                          <Clock size={16} style={{ marginRight: "0.5rem" }} />
                          Time Harvest → Press
                        </td>
                        <td>{batchData.timeHarvestToPress}</td>
                        <td>
                          <Info
                            size={16}
                            style={{ color: "#999", cursor: "pointer" }}
                            title="Quality indicator - faster processing preserves quality"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td style={{ fontWeight: "bold", color: "#2d5016" }}>
                          <BarChart3 size={16} style={{ marginRight: "0.5rem" }} />
                          Yield (%)
                        </td>
                        <td>{batchData.yieldPercentage}</td>
                        <td>
                          <Info
                            size={16}
                            style={{ color: "#999", cursor: "pointer" }}
                            title="Oil extraction efficiency metric"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td style={{ fontWeight: "bold", color: "#2d5016" }}>
                          <Droplets size={16} style={{ marginRight: "0.5rem" }} />
                          Acidity Test
                        </td>
                        <td>{batchData.acidityTest}</td>
                        <td>
                          <Info
                            size={16}
                            style={{ color: "#999", cursor: "pointer" }}
                            title="Quality grading - lower is better"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td style={{ fontWeight: "bold", color: "#2d5016" }}>
                          <FileText size={16} style={{ marginRight: "0.5rem" }} />
                          Peroxide Value
                        </td>
                        <td>{batchData.peroxideValue}</td>
                        <td>
                          <Info size={16} style={{ color: "#999", cursor: "pointer" }} title="Shelf life indicator" />
                        </td>
                      </tr>
                      <tr>
                        <td style={{ fontWeight: "bold", color: "#2d5016" }}>
                          <Award size={16} style={{ marginRight: "0.5rem" }} />
                          Lab Certificate
                        </td>
                        <td>
                          <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
                            <span>{batchData.labCertificate}</span>
                            <Button variant="outline-success" size="sm">
                              <Download size={14} style={{ marginRight: "0.25rem" }} />
                              PDF
                            </Button>
                            <Button
                              variant="outline-primary"
                              size="sm"
                              style={{ borderColor: "#c4e538", color: "#2d5016" }}
                            >
                              Verify on IOTA
                            </Button>
                          </div>
                        </td>
                        <td>
                          <Info
                            size={16}
                            style={{ color: "#999", cursor: "pointer" }}
                            title="Official lab analysis with blockchain verification"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td style={{ fontWeight: "bold", color: "#2d5016" }}>
                          <Search size={16} style={{ marginRight: "0.5rem" }} />
                          Batch Trace Log
                        </td>
                        <td>{batchData.batchTraceLog}</td>
                        <td>
                          <Info
                            size={16}
                            style={{ color: "#999", cursor: "pointer" }}
                            title="Source farm batch tracking"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td style={{ fontWeight: "bold", color: "#2d5016" }}>
                          <Leaf size={16} style={{ marginRight: "0.5rem" }} />
                          Waste Management
                        </td>
                        <td>{batchData.wasteManagement}</td>
                        <td>
                          <Info
                            size={16}
                            style={{ color: "#999", cursor: "pointer" }}
                            title="Sustainability tracking"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td style={{ fontWeight: "bold", color: "#2d5016" }}>
                          <BarChart3 size={16} style={{ marginRight: "0.5rem" }} />
                          Cost of Processing
                        </td>
                        <td>{batchData.costOfProcessing}</td>
                        <td>
                          <Info
                            size={16}
                            style={{ color: "#999", cursor: "pointer" }}
                            title="Economic input tracking"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Card.Body>
        </Card>
      </Container>

      {/* Process New Batch Modal */}
      <Modal show={showProcessModal} onHide={() => setShowProcessModal(false)} size="lg">
        <Modal.Header closeButton style={{ backgroundColor: "#f5f3e8", borderBottom: "2px solid #2d5016" }}>
          <Modal.Title style={{ color: "#2d5016", fontWeight: "bold" }}>Process New Batch</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#f5f3e8" }}>
          <Form>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label style={{ color: "#2d5016", fontWeight: "bold" }}>Batch ID</Form.Label>
                  <Form.Control type="text" placeholder="e.g., BM2025-H01-A24" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label style={{ color: "#2d5016", fontWeight: "bold" }}>Source Farm Batch</Form.Label>
                  <Form.Control type="text" placeholder="e.g., Farm-A-001" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label style={{ color: "#2d5016", fontWeight: "bold" }}>Pressing Temperature (°C)</Form.Label>
                  <Form.Control type="number" step="0.1" placeholder="e.g., 25.3" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label style={{ color: "#2d5016", fontWeight: "bold" }}>Crushing Method</Form.Label>
                  <Form.Select>
                    <option>Stone mill (manual)</option>
                    <option>Hammer mill</option>
                    <option>Disc mill</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label style={{ color: "#2d5016", fontWeight: "bold" }}>Time from Harvest (hours)</Form.Label>
                  <Form.Control type="number" step="0.1" placeholder="e.g., 3.5" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label style={{ color: "#2d5016", fontWeight: "bold" }}>Yield (%)</Form.Label>
                  <Form.Control type="number" step="0.1" placeholder="e.g., 22.1" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label style={{ color: "#2d5016", fontWeight: "bold" }}>Acidity (%)</Form.Label>
                  <Form.Control type="number" step="0.01" placeholder="e.g., 0.4" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label style={{ color: "#2d5016", fontWeight: "bold" }}>Peroxide Value (meq/kg)</Form.Label>
                  <Form.Control type="number" placeholder="e.g., 10" />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3">
              <Form.Label style={{ color: "#2d5016", fontWeight: "bold" }}>Waste Management Notes</Form.Label>
              <Form.Control as="textarea" rows={2} placeholder="e.g., Olive pomace logged for composting" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "#f5f3e8", borderTop: "2px solid #2d5016" }}>
          <Button variant="secondary" onClick={() => setShowProcessModal(false)} style={{ borderRadius: "8px" }}>
            Cancel
          </Button>
          <Button
            onClick={() => setShowProcessModal(false)}
            style={{
              backgroundColor: "#c4e538",
              border: "none",
              color: "#2d5016",
              fontWeight: "bold",
              borderRadius: "8px",
            }}
          >
            Submit to IOTA Tangle
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
