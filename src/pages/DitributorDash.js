"use client"

import { useState } from "react"
import { Container, Row, Col, Card, Button, Badge, Modal, Form, ProgressBar } from "react-bootstrap"
import {
  Check,
  Upload,
  RefreshCcw,
  Truck,
  MapPin,
  Thermometer,
  Fuel,
  Hash,
  Package,
  Clock,
  AlertTriangle,
  Shield,
  Leaf,
  Settings,
  Box,
  CheckCircle,
  ShoppingCart,
} from "lucide-react"

export default function DistributorDashboard() {
  const [showModal, setShowModal] = useState(false)
  const [showDeliveryModal, setShowDeliveryModal] = useState(false)

  const supplyChainStages = [
    { name: "Harvested", icon: Leaf, completed: true },
    { name: "Pressed", icon: Settings, completed: true },
    { name: "Bottled", icon: Box, completed: true },
    { name: "Quality Checked", icon: CheckCircle, completed: true },
    { name: "Distributed", icon: Truck, completed: false, current: true },
    { name: "Retail", icon: ShoppingCart, completed: false },
  ]

  const currentStageIndex = supplyChainStages.findIndex((stage) => stage.current)
  const progressPercentage = (currentStageIndex / (supplyChainStages.length - 1)) * 100

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f5f3e8" }}>
      {/* Navbar - Same as Farmer Dashboard */}
      <nav
        style={{
          backgroundColor: "#3d5a29ff",
          padding: "1rem 2rem",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        <Container fluid>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-04%20%C3%A0%2021.28.23_3da5555a-oeviOe6rZHzTHhT0qcZIy9XYCIJcft.jpg"
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
              <a href="#features" style={{ color: "white", textDecoration: "none" }}>
                Features
              </a>
              <a href="#how-it-works" style={{ color: "white", textDecoration: "none" }}>
                How It Works
              </a>
              <a href="#faq" style={{ color: "white", textDecoration: "none" }}>
                FAQ
              </a>
            </div>
          </div>
        </Container>
      </nav>

      <Container fluid style={{ padding: "2rem" }}>
        {/* Stats Cards */}
        <Row className="mb-4">
          <Col md={3}>
            <Card style={{ border: "none", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
              <Card.Body>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <div style={{ color: "#666", fontSize: "0.9rem" }}>Total Shipments</div>
                    <div style={{ fontSize: "2rem", fontWeight: "bold", color: "#3d5a29ff" }}>24</div>
                  </div>
                  <Truck size={40} color="#c4e538" />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card style={{ border: "none", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
              <Card.Body>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <div style={{ color: "#666", fontSize: "0.9rem" }}>Active Deliveries</div>
                    <div style={{ fontSize: "2rem", fontWeight: "bold", color: "#3d5a29ff" }}>3</div>
                  </div>
                  <Package size={40} color="#c4e538" />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card style={{ border: "none", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
              <Card.Body>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <div style={{ color: "#666", fontSize: "0.9rem" }}>Pending Actions</div>
                    <div style={{ fontSize: "2rem", fontWeight: "bold", color: "#3d5a29ff" }}>1</div>
                  </div>
                  <AlertTriangle size={40} color="#c4e538" />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card style={{ border: "none", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
              <Card.Body>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <div style={{ color: "#666", fontSize: "0.9rem" }}>On-Time Rate</div>
                    <div style={{ fontSize: "2rem", fontWeight: "bold", color: "#3d5a29ff" }}>98%</div>
                  </div>
                  <Clock size={40} color="#c4e538" />
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col>
            <Card style={{ border: "none", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
              <Card.Body style={{ padding: "2rem" }}>
                <Card.Title style={{ color: "#3d5a29ff", marginBottom: "2rem", fontWeight: "bold" }}>
                  Supply Chain Progress
                </Card.Title>

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
                      backgroundColor: "#d3d3d3",
                      zIndex: 0,
                    }}
                  >
                    {/* Progress Line Fill */}
                    <div
                      style={{
                        height: "100%",
                        width: `${progressPercentage}%`,
                        backgroundColor: "#3d5a29ff",
                        transition: "width 0.3s ease",
                      }}
                    ></div>
                  </div>

                  {supplyChainStages.map((stage, index) => {
                    const IconComponent = stage.icon
                    return (
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
                            backgroundColor: stage.current ? "#ffc107" : stage.completed ? "#3d5a29ff" : "#d3d3d3",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            margin: "0 auto 0.5rem",
                            transition: "all 0.3s ease",
                            boxShadow: stage.current
                              ? "0 4px 8px rgba(255, 193, 7, 0.4)"
                              : stage.completed
                                ? "0 2px 4px rgba(61, 90, 41, 0.3)"
                                : "none",
                          }}
                        >
                          <IconComponent
                            size={24}
                            color={stage.current || stage.completed ? "white" : "#999"}
                            strokeWidth={2}
                          />
                        </div>
                        <small
                          style={{
                            color: stage.current ? "#ffc107" : stage.completed ? "#3d5a29ff" : "#999",
                            fontWeight: stage.current || stage.completed ? "600" : "normal",
                            fontSize: "0.8rem",
                            display: "block",
                          }}
                        >
                          {stage.name}
                        </small>
                      </div>
                    )
                  })}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Distributor Profile */}
        <Row className="mb-4">
          <Col md={4}>
            <Card style={{ border: "none", boxShadow: "0 2px 8px rgba(0,0,0,0.1)", marginBottom: "1rem" }}>
              <Card.Body>
                <Card.Title style={{ color: "#3d5a29ff", marginBottom: "1.5rem" }}>Distributor Profile</Card.Title>

                <div style={{ marginBottom: "1rem" }}>
                  <strong style={{ color: "#3d5a29ff" }}>Company Name:</strong>
                  <div>Olive Express Logistics</div>
                </div>

                <div style={{ marginBottom: "1rem" }}>
                  <strong style={{ color: "#3d5a29ff" }}>Contact Person:</strong>
                  <div>Carlos Delivery</div>
                </div>

                <div style={{ marginBottom: "1rem" }}>
                  <strong style={{ color: "#3d5a29ff" }}>Email:</strong>
                  <div>carlos@oliveexpress.ma</div>
                </div>

                <div style={{ marginBottom: "1rem" }}>
                  <strong style={{ color: "#3d5a29ff" }}>Phone:</strong>
                  <div>+212 6 12 34 56 78</div>
                </div>

                <div style={{ marginBottom: "1rem" }}>
                  <strong style={{ color: "#3d5a29ff" }}>Fleet Size:</strong>
                  <div>12 Refrigerated Trucks</div>
                </div>

                <div style={{ marginBottom: "1rem" }}>
                  <strong style={{ color: "#3d5a29ff" }}>Coverage Area:</strong>
                  <div>Morocco, Spain, France</div>
                </div>

                <div style={{ marginBottom: "1rem" }}>
                  <strong style={{ color: "#3d5a29ff" }}>Certifications:</strong>
                  <div>
                    <Badge
                      bg="success"
                      style={{ marginRight: "0.5rem", backgroundColor: "#c4e538", color: "#3d5a29ff" }}
                    >
                      ISO 9001
                    </Badge>
                    <Badge bg="success" style={{ backgroundColor: "#c4e538", color: "#3d5a29ff" }}>
                      Cold Chain Certified
                    </Badge>
                  </div>
                </div>
              </Card.Body>
            </Card>

            {/* Current Batch Info */}
            <Card style={{ border: "none", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
              <Card.Body>
                <Card.Title style={{ color: "#3d5a29ff", marginBottom: "1.5rem" }}>Active Batch</Card.Title>

                <div style={{ marginBottom: "1rem" }}>
                  <strong style={{ color: "#3d5a29ff" }}>Batch ID:</strong>
                  <div>BM2025-H01-A23</div>
                </div>

                <div style={{ marginBottom: "1rem" }}>
                  <strong style={{ color: "#3d5a29ff" }}>Origin:</strong>
                  <div>Andalusia, Spain</div>
                </div>

                <div style={{ marginBottom: "1rem" }}>
                  <strong style={{ color: "#3d5a29ff" }}>Harvest Date:</strong>
                  <div>May 8, 2025</div>
                </div>

                <div style={{ marginBottom: "1rem" }}>
                  <strong style={{ color: "#3d5a29ff" }}>Status:</strong>
                  <Badge bg="warning" style={{ backgroundColor: "#c4e538", color: "#3d5a29ff" }}>
                    Awaiting Distribution Confirmation
                  </Badge>
                </div>

                <Button
                  style={{
                    backgroundColor: "#c4e538",
                    border: "none",
                    color: "#3d5a29ff",
                    fontWeight: "bold",
                    width: "100%",
                    marginTop: "1rem",
                  }}
                  onClick={() => setShowDeliveryModal(true)}
                >
                  <Check size={16} style={{ marginRight: "0.5rem" }} />
                  Confirm Delivery
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Shipment & Logistics Details */}
          <Col md={8}>
            <Card style={{ border: "none", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
              <Card.Body>
                <Card.Title style={{ color: "#3d5a29ff", marginBottom: "1.5rem" }}>
                  <Truck size={24} style={{ marginRight: "0.5rem" }} />
                  Shipment & Logistics Details
                </Card.Title>

                <Row>
                  <Col md={6} style={{ marginBottom: "1.5rem" }}>
                    <div
                      style={{
                        padding: "1rem",
                        backgroundColor: "#f9f9f9",
                        borderRadius: "8px",
                        borderLeft: "4px solid #c4e538",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", marginBottom: "0.5rem" }}>
                        <Hash size={18} color="#3d5a29ff" style={{ marginRight: "0.5rem" }} />
                        <strong style={{ color: "#3d5a29ff" }}>Shipment ID:</strong>
                      </div>
                      <div>SHIP-BM-CASA-1024</div>
                    </div>
                  </Col>

                  <Col md={6} style={{ marginBottom: "1.5rem" }}>
                    <div
                      style={{
                        padding: "1rem",
                        backgroundColor: "#f9f9f9",
                        borderRadius: "8px",
                        borderLeft: "4px solid #c4e538",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", marginBottom: "0.5rem" }}>
                        <Truck size={18} color="#3d5a29ff" style={{ marginRight: "0.5rem" }} />
                        <strong style={{ color: "#3d5a29ff" }}>Truck ID:</strong>
                      </div>
                      <div>TRK-456</div>
                    </div>
                  </Col>

                  <Col md={6} style={{ marginBottom: "1.5rem" }}>
                    <div
                      style={{
                        padding: "1rem",
                        backgroundColor: "#f9f9f9",
                        borderRadius: "8px",
                        borderLeft: "4px solid #c4e538",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", marginBottom: "0.5rem" }}>
                        <MapPin size={18} color="#3d5a29ff" style={{ marginRight: "0.5rem" }} />
                        <strong style={{ color: "#3d5a29ff" }}>GPS Trail (IOTA Hash):</strong>
                      </div>
                      <div style={{ fontSize: "0.85rem", wordBreak: "break-all" }}>0xabc123def456789...</div>
                    </div>
                  </Col>

                  <Col md={6} style={{ marginBottom: "1.5rem" }}>
                    <div
                      style={{
                        padding: "1rem",
                        backgroundColor: "#f9f9f9",
                        borderRadius: "8px",
                        borderLeft: "4px solid #c4e538",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", marginBottom: "0.5rem" }}>
                        <Thermometer size={18} color="#3d5a29ff" style={{ marginRight: "0.5rem" }} />
                        <strong style={{ color: "#3d5a29ff" }}>Cold Chain Monitoring:</strong>
                      </div>
                      <div>21.3°C avg, no break</div>
                      <Badge
                        bg="success"
                        style={{ marginTop: "0.5rem", backgroundColor: "#c4e538", color: "#3d5a29ff" }}
                      >
                        Optimal
                      </Badge>
                    </div>
                  </Col>

                  <Col md={6} style={{ marginBottom: "1.5rem" }}>
                    <div
                      style={{
                        padding: "1rem",
                        backgroundColor: "#f9f9f9",
                        borderRadius: "8px",
                        borderLeft: "4px solid #c4e538",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", marginBottom: "0.5rem" }}>
                        <Clock size={18} color="#3d5a29ff" style={{ marginRight: "0.5rem" }} />
                        <strong style={{ color: "#3d5a29ff" }}>Departure → Arrival:</strong>
                      </div>
                      <div>08:10 → 14:25</div>
                      <div style={{ fontSize: "0.85rem", color: "#666" }}>Transit Duration: 6h 15m</div>
                    </div>
                  </Col>

                  <Col md={6} style={{ marginBottom: "1.5rem" }}>
                    <div
                      style={{
                        padding: "1rem",
                        backgroundColor: "#f9f9f9",
                        borderRadius: "8px",
                        borderLeft: "4px solid #c4e538",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", marginBottom: "0.5rem" }}>
                        <AlertTriangle size={18} color="#3d5a29ff" style={{ marginRight: "0.5rem" }} />
                        <strong style={{ color: "#3d5a29ff" }}>Sensor Alert Logs:</strong>
                      </div>
                      <div>No anomaly detected</div>
                      <div style={{ fontSize: "0.85rem", color: "#666" }}>Hash: 0x789ghi0jkl12...</div>
                    </div>
                  </Col>

                  <Col md={6} style={{ marginBottom: "1.5rem" }}>
                    <div
                      style={{
                        padding: "1rem",
                        backgroundColor: "#f9f9f9",
                        borderRadius: "8px",
                        borderLeft: "4px solid #c4e538",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", marginBottom: "0.5rem" }}>
                        <Shield size={18} color="#3d5a29ff" style={{ marginRight: "0.5rem" }} />
                        <strong style={{ color: "#3d5a29ff" }}>Insurance & Manifest:</strong>
                      </div>
                      <a href="#" style={{ color: "#3d5a29ff", textDecoration: "none" }}>
                        View Documents (PDF + hash)
                      </a>
                    </div>
                  </Col>

                  <Col md={6} style={{ marginBottom: "1.5rem" }}>
                    <div
                      style={{
                        padding: "1rem",
                        backgroundColor: "#f9f9f9",
                        borderRadius: "8px",
                        borderLeft: "4px solid #c4e538",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", marginBottom: "0.5rem" }}>
                        <Fuel size={18} color="#3d5a29ff" style={{ marginRight: "0.5rem" }} />
                        <strong style={{ color: "#3d5a29ff" }}>Fuel/Delivery Fees:</strong>
                      </div>
                      <div>MAD 1,200/trip</div>
                    </div>
                  </Col>
                </Row>

                {/* Action Buttons */}
                <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                    marginTop: "2rem",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    style={{
                      backgroundColor: "#c4e538",
                      border: "none",
                      color: "#3d5a29ff",
                      fontWeight: "bold",
                    }}
                    onClick={() => setShowDeliveryModal(true)}
                  >
                    <Check size={16} style={{ marginRight: "0.5rem" }} />
                    Validate Delivery
                  </Button>
                  <Button
                    style={{
                      backgroundColor: "#3d5a29ff",
                      border: "none",
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    <Upload size={16} style={{ marginRight: "0.5rem" }} />
                    Export Report
                  </Button>
                  <Button
                    style={{
                      backgroundColor: "#3d5a29ff",
                      border: "none",
                      color: "white",
                      fontWeight: "bold",
                    }}
                    onClick={() => setShowModal(true)}
                  >
                    <RefreshCcw size={16} style={{ marginRight: "0.5rem" }} />
                    Sync with IOTA
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* IOTA Sync Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton style={{ borderBottom: "2px solid #c4e538" }}>
          <Modal.Title style={{ color: "#3d5a29ff" }}>Sync with IOTA Tangle</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Syncing shipment data to IOTA Tangle for immutable record keeping...</p>
          <ProgressBar animated now={75} label="75%" style={{ height: "25px" }} variant="success" />
          <div style={{ marginTop: "1rem", fontSize: "0.9rem", color: "#666" }}>
            <strong>Transaction Hash:</strong> 0xIOTA123abc456def789...
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            style={{
              backgroundColor: "#c4e538",
              border: "none",
              color: "#3d5a29ff",
              fontWeight: "bold",
            }}
            onClick={() => setShowModal(false)}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Delivery Confirmation Modal */}
      <Modal show={showDeliveryModal} onHide={() => setShowDeliveryModal(false)} centered>
        <Modal.Header closeButton style={{ borderBottom: "2px solid #c4e538" }}>
          <Modal.Title style={{ color: "#3d5a29ff" }}>Confirm Delivery</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Delivery Date & Time</Form.Label>
              <Form.Control type="datetime-local" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Recipient Name</Form.Label>
              <Form.Control type="text" placeholder="Enter recipient name" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Delivery Location</Form.Label>
              <Form.Control type="text" placeholder="Enter delivery address" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Condition on Arrival</Form.Label>
              <Form.Select>
                <option>Excellent</option>
                <option>Good</option>
                <option>Fair</option>
                <option>Damaged</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Additional Notes</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Any additional comments..." />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeliveryModal(false)}>
            Cancel
          </Button>
          <Button
            style={{
              backgroundColor: "#c4e538",
              border: "none",
              color: "#3d5a29ff",
              fontWeight: "bold",
            }}
            onClick={() => {
              setShowDeliveryModal(false)
              setShowModal(true)
            }}
          >
            Confirm & Sync to IOTA
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
