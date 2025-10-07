import '../App.css';
import { Navbar, Container, Nav, Button, Image, Card, Form } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import pic1 from '../assets/images/pic1.png';
import { HiOutlineQrcode } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import wallet from '../iota'; // ✅ Import mock wallet (see src/iota.js below)

// CSS styles
const styles = `
:root {
  --olive-green: #2d5016;
  --olive-light: #90ee90;
  --olive-yellow: #daa520;
  --olive-cream: #f5f5dc;
  --beige: #f5f5dc;
  --button-green: #9de82cff;
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
.olivium-logo {
  width: 40px;
  height: 40px;
  filter: invert(1);
}
.navbar-custom {
  background-color: #3d5a29ff !important;
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
.connect-wallet-btn, .verify-batch-btn {
  background-color: #9de82c !important;
  border-color: #9de82c !important;
  color: #2d5016 !important;
  font-weight: bold !important;
}
.connect-wallet-btn:hover, .verify-batch-btn:hover {
  background-color: #8bc926 !important;
  border-color: #8bc926 !important;
  color: #2d5016 !important;
}
.hero-image {
  border-radius: 12px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}
.hero-image:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.15);
}
.welcome-title {
  color: #627d33ff !important;
  font-weight: bold;
  margin-bottom: 20px;
}
.welcome-text {
  color: #6c757d;
  line-height: 1.6;
}
@media (max-width: 768px) {
  .hero-image {
    float: none !important;
    margin: 20px auto !important;
    display: block;
  }
  .hero-container {
    width: 90% !important;
    margin-left: auto !important;
    margin-right: auto !important;
    text-align: center;
  }
  .welcome-title {
    font-size: 2.5rem !important;
  }
}
`;

function Home() {
  const navigate = useNavigate();
  const [walletConnected, setWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [role, setRole] = useState(localStorage.getItem('userRole') || '');

  // ✅ Connect mock wallet
const handleConnectWallet = async () => {
  try {
    console.log("Connecting wallet...");
    const result = await wallet.connect();
    console.log("Wallet result:", result);
    setWalletConnected(true);
    setWalletAddress(result.address);
    alert(`Wallet connected!\nMock Address:\n${result.address}`);
  } catch (error) {
    console.error('Wallet connection failed:', error);
    alert('Failed to connect wallet. See console for details.');
  }
};


  const handleDisconnectWallet = async () => {
    await wallet.disconnect();
    setWalletConnected(false);
    setWalletAddress('');
    localStorage.removeItem('userRole');
    setRole('');
    alert('Wallet disconnected!');
  };

  const handleRoleSelect = (e) => {
    const selectedRole = e.target.value;
    setRole(selectedRole);
    localStorage.setItem('userRole', selectedRole);

    switch (selectedRole) {
      case 'farmer':
        navigate('/dashboard');
        break;
      case 'mill':
        navigate('/mill');
        break;
      case 'quality':
        navigate('/quality');
        break;
      case 'distributor':
        navigate('/distributor');
        break;
      case 'retailer':
        navigate('/retailer');
        break;
      default:
        break;
    }
  };

  const handleVerifyBatch = () => {
    navigate('/batchverif');
  };

  return (
    <>
      <style>{styles}</style>

      <div style={{ backgroundColor: '#f5f5dc', minHeight: '100vh' }}>
        {/* NAVBAR */}
        <Navbar className="navbar-custom">
          <Container style={{ justifyContent: 'space-between', display: 'flex' }}>
            <Navbar.Brand
              onClick={() => navigate('/home')}
              style={{
                color: '#FFFFFF',
                fontSize: '30px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                cursor: 'pointer',
                textDecoration: 'none'
              }}
            >
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OyWTluWJsXSyObRFIELNPfNTkOUjf0.png"
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

            {walletConnected ? (
              <Button
                className="connect-wallet-btn"
                style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                onClick={handleDisconnectWallet}
              >
                <Icon.Wallet size={18} />
                Disconnect
              </Button>
            ) : (
              <Button
                className="connect-wallet-btn"
                style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                onClick={handleConnectWallet}
              >
                <Icon.Wallet size={18} />
                Connect Wallet
              </Button>
            )}
          </Container>
        </Navbar>

        {/* HERO SECTION */}
        <Image
          src={pic1}
          className="hero-image"
          style={{
            height: '500px',
            float: 'right',
            marginRight: '100px',
            marginTop: '20px',
          }}
          rounded
        />

        <Container
          className="hero-container"
          style={{ width: '60%', marginLeft: '100px', marginTop: '20px', fontSize: '25px' }}
        >
          <Card.Title className="welcome-title" style={{ fontSize: '45px' }}>
            𝙒𝙚𝙡𝙘𝙤𝙢𝙚 𝙩𝙤 𝙊𝙡𝙞𝙫𝙞𝙪𝙢 :
          </Card.Title>
          <Card.Body className="p-0">
            <div className="welcome-text">
              Olivium is a blockchain-powered web application that brings trust, traceability, and authenticity to every bottle of olive oil. By recording every step of the supply chain from olive harvesting to bottling and distribution on a secure, decentralized ledger, Olivium ensures that the information you see is accurate, tamper-proof, and fully verifiable.
            </div>

            {/* Verify Batch */}
            <Button
              onClick={handleVerifyBatch}
              className="verify-batch-btn"
              style={{
                fontSize: '30px',
                marginTop: '25px',
                padding: '12px 24px',
                display: 'flex',
                alignItems: 'center',
                gap: '7px',
              }}
            >
              <HiOutlineQrcode size={40} />
              Verify a Batch
            </Button>

            {/* Role Selection */}
            {walletConnected && (
              <div style={{ marginTop: '40px' }}>
                <h4>Select Your Role:</h4>
                <Form.Select
                  value={role}
                  onChange={handleRoleSelect}
                  style={{
                    width: '300px',
                    fontSize: '1rem',
                    marginTop: '10px',
                    borderRadius: '8px',
                    padding: '10px',
                  }}
                >
                  <option value="">-- Choose Role --</option>
                  <option value="farmer">Farmer</option>
                  <option value="mill">Mill</option>
                  <option value="quality">Quality Control</option>
                  <option value="distributor">Distributor</option>
                  <option value="retailer">Retailer</option>
                </Form.Select>

                {/* Show mock wallet address */}
                {walletAddress && (
                  <div style={{ marginTop: '15px', fontSize: '0.9rem', color: '#555' }}>
                    Connected as: <code>{walletAddress}</code>
                  </div>
                )}
              </div>
            )}
          </Card.Body>
        </Container>
      </div>
    </>
  );
}

export default Home;
