"use client"

import { useState } from "react"
import {
  Leaf,
  Settings,
  Box,
  CheckCircle,
  Truck,
  ShoppingCart,
  MapPin,
  QrCode,
  Star,
  DollarSign,
  Tag,
  Clock,
  Info,
  Package,
  TrendingUp,
  Users,
  AlertCircle,
} from "lucide-react"

export default function RetailerDashboard() {
  const [activeStage, setActiveStage] = useState(5) // Retail is active (index 5)

  const supplyChainStages = [
    { name: "Harvested", icon: Leaf, index: 0 },
    { name: "Pressed", icon: Settings, index: 1 },
    { name: "Bottled", icon: Box, index: 2 },
    { name: "Quality Checked", icon: CheckCircle, index: 3 },
    { name: "Distributed", icon: Truck, index: 4 },
    { name: "Retail", icon: ShoppingCart, index: 5 },
  ]

  const retailerProfile = {
    name: "Sophie Sales",
    storeName: "Organic Market Casablanca",
    storeType: "Premium Organic Retailer",
    location: "Casablanca, Morocco",
    email: "sophie@organicmarket.ma",
    phone: "+212 522 123 456",
    certifications: ["Organic Certified", "Fair Trade Partner", "Premium Retailer"],
    yearsInBusiness: "8 years",
  }

  const batchData = {
    batchId: "BM-2025-123",
    location: "Andalusia, Spain",
    harvestedDate: "May 8, 2025",
    bottleInventory: "1,500 bottles",
    arrivalTimestamp: "2025-11-25 09:45",
    shelfLocation: "Organic shelf, Aisle 3",
    qrScanLogs: "45 scans/day avg",
    feedbackRatings: 4.8,
    certificationStatus: "Verified via IOTA",
    retailPrice: "MAD 160 / 500ml",
    promoCampaigns: "Buy 2, get 1 free",
    stockLevel: "In Stock",
    reorderPoint: "500 bottles",
  }

  const salesMetrics = {
    totalSales: "MAD 48,000",
    unitsSold: "300 bottles",
    avgDailySales: "15 bottles/day",
    customerSatisfaction: "4.8/5",
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f5f5dc" }}>
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
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-04%20%C3%A0%2021.28.23_3da5555a-oeviOe6rZHzTHhT0qcZIy9XYCIJcft.jpg"
              alt="Olivium Logo"
              style={{ width: "40px", height: "40px", borderRadius: "50%" }}
            />
            <span style={{ color: "white", fontSize: "1.5rem", fontWeight: "bold" }}>𝐎𝐥𝐢𝐯𝐢𝐮𝐦</span>
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

      {/* Main Content */}
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "2rem" }}>
        {/* Header */}
        <div style={{ marginBottom: "2rem" }}>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: "#3d5a29ff", marginBottom: "0.5rem" }}>
            Retailer Dashboard
          </h1>
          <p style={{ color: "#666", fontSize: "1rem" }}>Welcome back, {retailerProfile.name}</p>
        </div>

        {/* Stats Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1.5rem",
            marginBottom: "2rem",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "1.5rem",
              borderRadius: "12px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div style={{ backgroundColor: "#e8f5e9", padding: "0.75rem", borderRadius: "50%" }}>
                <TrendingUp size={24} style={{ color: "#3d5a29ff" }} />
              </div>
              <div>
                <div style={{ fontSize: "1.75rem", fontWeight: "bold", color: "#3d5a29ff" }}>
                  {salesMetrics.totalSales}
                </div>
                <div style={{ color: "#666", fontSize: "0.875rem" }}>Total Sales</div>
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundColor: "white",
              padding: "1.5rem",
              borderRadius: "12px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div style={{ backgroundColor: "#fff3cd", padding: "0.75rem", borderRadius: "50%" }}>
                <ShoppingCart size={24} style={{ color: "#856404" }} />
              </div>
              <div>
                <div style={{ fontSize: "1.75rem", fontWeight: "bold", color: "#856404" }}>
                  {salesMetrics.unitsSold}
                </div>
                <div style={{ color: "#666", fontSize: "0.875rem" }}>Units Sold</div>
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundColor: "white",
              padding: "1.5rem",
              borderRadius: "12px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div style={{ backgroundColor: "#e3f2fd", padding: "0.75rem", borderRadius: "50%" }}>
                <Package size={24} style={{ color: "#1976d2" }} />
              </div>
              <div>
                <div style={{ fontSize: "1.75rem", fontWeight: "bold", color: "#1976d2" }}>
                  {batchData.bottleInventory}
                </div>
                <div style={{ color: "#666", fontSize: "0.875rem" }}>Current Stock</div>
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundColor: "white",
              padding: "1.5rem",
              borderRadius: "12px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div style={{ backgroundColor: "#fff3e0", padding: "0.75rem", borderRadius: "50%" }}>
                <Users size={24} style={{ color: "#e65100" }} />
              </div>
              <div>
                <div style={{ fontSize: "1.75rem", fontWeight: "bold", color: "#e65100" }}>
                  {salesMetrics.customerSatisfaction}
                </div>
                <div style={{ color: "#666", fontSize: "0.875rem" }}>Customer Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* Supply Chain Progress */}
        <div
          style={{
            backgroundColor: "white",
            padding: "2rem",
            borderRadius: "12px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            marginBottom: "2rem",
          }}
        >
          <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#3d5a29ff", marginBottom: "2rem" }}>
            Supply Chain Progress
          </h2>
          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "1rem 0",
            }}
          >
            {/* Progress Line Background */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "5%",
                right: "5%",
                height: "4px",
                backgroundColor: "#e0e0e0",
                transform: "translateY(-50%)",
                zIndex: 0,
              }}
            />

            {/* Progress Line Fill */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "5%",
                width: "85%",
                height: "4px",
                backgroundColor: "#3d5a29ff",
                transform: "translateY(-50%)",
                zIndex: 0,
              }}
            />

            {/* Stage Icons */}
            {supplyChainStages.map((stage, index) => {
              const isCompleted = index < activeStage
              const isActive = index === activeStage
              const isPending = index > activeStage

              return (
                <div
                  key={stage.name}
                  style={{ display: "flex", flexDirection: "column", alignItems: "center", zIndex: 1, flex: 1 }}
                >
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      backgroundColor: isActive ? "#c4e538" : isCompleted ? "#3d5a29ff" : "#e0e0e0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "0.5rem",
                      boxShadow: isActive ? "0 0 20px rgba(196, 229, 56, 0.5)" : "none",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <stage.icon size={24} color={isActive || isCompleted ? "white" : "#999"} />
                  </div>
                  <span
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: isActive ? "bold" : "normal",
                      color: isActive ? "#c4e538" : isCompleted ? "#3d5a29ff" : "#999",
                      textAlign: "center",
                    }}
                  >
                    {stage.name}
                  </span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Retailer Profile */}
        <div
          style={{
            backgroundColor: "white",
            padding: "2rem",
            borderRadius: "12px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            marginBottom: "2rem",
          }}
        >
          <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#3d5a29ff", marginBottom: "1.5rem" }}>
            Retailer Profile
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
            <div>
              <h3 style={{ fontSize: "1.125rem", fontWeight: "600", color: "#3d5a29ff", marginBottom: "1rem" }}>
                Store Information
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "0.5rem 0",
                    borderBottom: "1px solid #e0e0e0",
                  }}
                >
                  <span style={{ color: "#666" }}>Store Name:</span>
                  <span style={{ fontWeight: "600", color: "#333" }}>{retailerProfile.storeName}</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "0.5rem 0",
                    borderBottom: "1px solid #e0e0e0",
                  }}
                >
                  <span style={{ color: "#666" }}>Store Type:</span>
                  <span style={{ fontWeight: "600", color: "#333" }}>{retailerProfile.storeType}</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "0.5rem 0",
                    borderBottom: "1px solid #e0e0e0",
                  }}
                >
                  <span style={{ color: "#666" }}>Location:</span>
                  <span style={{ fontWeight: "600", color: "#333" }}>{retailerProfile.location}</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "0.5rem 0",
                    borderBottom: "1px solid #e0e0e0",
                  }}
                >
                  <span style={{ color: "#666" }}>Years in Business:</span>
                  <span style={{ fontWeight: "600", color: "#333" }}>{retailerProfile.yearsInBusiness}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 style={{ fontSize: "1.125rem", fontWeight: "600", color: "#3d5a29ff", marginBottom: "1rem" }}>
                Contact Details
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "0.5rem 0",
                    borderBottom: "1px solid #e0e0e0",
                  }}
                >
                  <span style={{ color: "#666" }}>Email:</span>
                  <span style={{ fontWeight: "600", color: "#333" }}>{retailerProfile.email}</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "0.5rem 0",
                    borderBottom: "1px solid #e0e0e0",
                  }}
                >
                  <span style={{ color: "#666" }}>Phone:</span>
                  <span style={{ fontWeight: "600", color: "#333" }}>{retailerProfile.phone}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 style={{ fontSize: "1.125rem", fontWeight: "600", color: "#3d5a29ff", marginBottom: "1rem" }}>
                Certifications
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {retailerProfile.certifications.map((cert, index) => (
                  <span
                    key={index}
                    style={{
                      backgroundColor: "#e8f5e9",
                      color: "#3d5a29ff",
                      padding: "0.5rem 1rem",
                      borderRadius: "20px",
                      fontSize: "0.875rem",
                      fontWeight: "500",
                    }}
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Retail Information Panel */}
        <div
          style={{
            backgroundColor: "white",
            padding: "2rem",
            borderRadius: "12px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            marginBottom: "2rem",
          }}
        >
          <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#3d5a29ff", marginBottom: "1.5rem" }}>
            Current Batch Details
          </h2>

          {/* Quick Info Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "1rem",
              marginBottom: "2rem",
            }}
          >
            <div
              style={{
                backgroundColor: "#fff3cd",
                padding: "1rem",
                borderRadius: "8px",
                borderLeft: "4px solid #ffc107",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                <Box size={20} style={{ color: "#856404" }} />
                <span style={{ fontWeight: "600", color: "#856404" }}>Bottle Inventory</span>
              </div>
              <div style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#333" }}>{batchData.bottleInventory}</div>
            </div>

            <div
              style={{
                backgroundColor: "#e3f2fd",
                padding: "1rem",
                borderRadius: "8px",
                borderLeft: "4px solid #1976d2",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                <Clock size={20} style={{ color: "#1976d2" }} />
                <span style={{ fontWeight: "600", color: "#1976d2" }}>Arrival Time</span>
              </div>
              <div style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#333" }}>{batchData.arrivalTimestamp}</div>
            </div>

            <div
              style={{
                backgroundColor: "#f3e5f5",
                padding: "1rem",
                borderRadius: "8px",
                borderLeft: "4px solid #7b1fa2",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                <MapPin size={20} style={{ color: "#7b1fa2" }} />
                <span style={{ fontWeight: "600", color: "#7b1fa2" }}>Shelf Location</span>
              </div>
              <div style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#333" }}>{batchData.shelfLocation}</div>
            </div>
          </div>

          {/* Detailed Information Table */}
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <tbody>
                <tr style={{ borderBottom: "1px solid #e0e0e0" }}>
                  <td
                    style={{
                      padding: "1rem",
                      fontWeight: "600",
                      color: "#666",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <QrCode size={18} style={{ color: "#3d5a29ff" }} />
                    QR Scan Logs
                  </td>
                  <td style={{ padding: "1rem", color: "#333" }}>{batchData.qrScanLogs}</td>
                  <td style={{ padding: "1rem", textAlign: "right" }}>
                    <Info size={16} style={{ color: "#999", cursor: "pointer" }} />
                  </td>
                </tr>
                <tr style={{ borderBottom: "1px solid #e0e0e0" }}>
                  <td
                    style={{
                      padding: "1rem",
                      fontWeight: "600",
                      color: "#666",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <Star size={18} style={{ color: "#ffc107" }} />
                    Feedback Ratings
                  </td>
                  <td style={{ padding: "1rem", color: "#333" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <span>{batchData.feedbackRatings}/5</span>
                      <div style={{ display: "flex", gap: "2px" }}>
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            size={16}
                            style={{ color: star <= Math.floor(batchData.feedbackRatings) ? "#ffc107" : "#e0e0e0" }}
                            fill={star <= Math.floor(batchData.feedbackRatings) ? "#ffc107" : "none"}
                          />
                        ))}
                      </div>
                    </div>
                  </td>
                  <td style={{ padding: "1rem", textAlign: "right" }}>
                    <Info size={16} style={{ color: "#999", cursor: "pointer" }} />
                  </td>
                </tr>
                <tr style={{ borderBottom: "1px solid #e0e0e0" }}>
                  <td
                    style={{
                      padding: "1rem",
                      fontWeight: "600",
                      color: "#666",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <CheckCircle size={18} style={{ color: "#28a745" }} />
                    Certification Status
                  </td>
                  <td style={{ padding: "1rem", color: "#333" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <span>{batchData.certificationStatus}</span>
                      <button
                        style={{
                          backgroundColor: "#3d5a29ff",
                          color: "white",
                          border: "none",
                          padding: "0.25rem 0.75rem",
                          borderRadius: "4px",
                          fontSize: "0.875rem",
                          cursor: "pointer",
                        }}
                      >
                        Verify on IOTA
                      </button>
                    </div>
                  </td>
                  <td style={{ padding: "1rem", textAlign: "right" }}>
                    <Info size={16} style={{ color: "#999", cursor: "pointer" }} />
                  </td>
                </tr>
                <tr style={{ borderBottom: "1px solid #e0e0e0" }}>
                  <td
                    style={{
                      padding: "1rem",
                      fontWeight: "600",
                      color: "#666",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <DollarSign size={18} style={{ color: "#28a745" }} />
                    Retail Price
                  </td>
                  <td style={{ padding: "1rem", color: "#333", fontWeight: "bold" }}>{batchData.retailPrice}</td>
                  <td style={{ padding: "1rem", textAlign: "right" }}>
                    <Info size={16} style={{ color: "#999", cursor: "pointer" }} />
                  </td>
                </tr>
                <tr style={{ borderBottom: "1px solid #e0e0e0" }}>
                  <td
                    style={{
                      padding: "1rem",
                      fontWeight: "600",
                      color: "#666",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <Tag size={18} style={{ color: "#dc3545" }} />
                    Promo Campaigns
                  </td>
                  <td style={{ padding: "1rem", color: "#333" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <span
                        style={{
                          backgroundColor: "#dc3545",
                          color: "white",
                          padding: "0.25rem 0.5rem",
                          borderRadius: "12px",
                          fontSize: "0.75rem",
                          fontWeight: "600",
                        }}
                      >
                        ACTIVE
                      </span>
                      <span>{batchData.promoCampaigns}</span>
                    </div>
                  </td>
                  <td style={{ padding: "1rem", textAlign: "right" }}>
                    <Info size={16} style={{ color: "#999", cursor: "pointer" }} />
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      padding: "1rem",
                      fontWeight: "600",
                      color: "#666",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <AlertCircle size={18} style={{ color: "#ff9800" }} />
                    Reorder Point
                  </td>
                  <td style={{ padding: "1rem", color: "#333" }}>{batchData.reorderPoint}</td>
                  <td style={{ padding: "1rem", textAlign: "right" }}>
                    <Info size={16} style={{ color: "#999", cursor: "pointer" }} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Action Buttons */}
          <div style={{ display: "flex", gap: "1rem", marginTop: "2rem", flexWrap: "wrap" }}>
            <button
              style={{
                backgroundColor: "#3d5a29ff",
                color: "white",
                border: "none",
                padding: "0.75rem 1.5rem",
                borderRadius: "8px",
                fontSize: "1rem",
                fontWeight: "600",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <CheckCircle size={20} />
              Update Stock Level
            </button>
            <button
              style={{
                backgroundColor: "#c4e538",
                color: "#3d5a29ff",
                border: "none",
                padding: "0.75rem 1.5rem",
                borderRadius: "8px",
                fontSize: "1rem",
                fontWeight: "600",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <QrCode size={20} />
              Generate QR Code
            </button>
            <button
              style={{
                backgroundColor: "white",
                color: "#3d5a29ff",
                border: "2px solid #3d5a29ff",
                padding: "0.75rem 1.5rem",
                borderRadius: "8px",
                fontSize: "1rem",
                fontWeight: "600",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <Package size={20} />
              Export Sales Report
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

