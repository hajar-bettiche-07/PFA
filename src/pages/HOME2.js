import '../App.css';
import React, { useState } from 'react';
import { Navbar, Container, Nav, Button, Image, Card, Form, Modal } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import { HiOutlineQrcode } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import pic1 from '../assets/images/pic1.png';
import wallet from '../iota';

// Wallet logos (ensure these exist in /src/assets/images)
import IotaLogo from '../assets/images/iota.png';
import MetaMaskLogo from '../assets/images/metamask.png';
import WalletConnectLogo from '../assets/images/walletconnect.png';
import CoinbaseLogo from '../assets/images/coinbase.webp';

function Home() {
  const navigate = useNavigate();
  const [walletConnected, setWalletConnected] = useState(false);
  const [role, setRole] = useState(localStorage.getItem('userRole') || '');
  const [showModal, setShowModal] = useState(false);
  const [selectedWallet, setSelectedWallet] = useState(null);
  const [walletAddress, setWalletAddress] = useState('');

  const handleConnectClick = () => setShowModal(true);

  const handleConnectWallet = async () => {
    try {
      if (!selectedWallet) return alert('Please select a wallet first.');
      if (selectedWallet === 'IOTA Wallet' && !walletAddress)
        return alert('Please enter your IOTA wallet address.');

      setWalletConnected(true);
      alert(`Connected!\nWallet: ${selectedWallet}\nAddress: ${walletAddress || 'N/A'}`);
      setShowModal(false);
    } catch (err) {
      console.error('Wallet connection failed:', err);
      alert('Failed to connect wallet.');
    }
  };

  const handleRoleSelect = (e) => {
    const selectedRole = e.target.value;
    setRole(selectedRole);
    localStorage.setItem('userRole', selectedRole);

    const routes = {
      farmer: '/dashboard',
      mill: '/mill',
      quality: '/quality',
      distributor: '/distributor',
      retailer: '/retailer',
    };
    if (routes[selectedRole]) navigate(routes[selectedRole]);
  };

  const handleVerifyBatch = () => navigate('/batchverif');

  const wallets = [
    { name: 'IOTA Wallet', logo: IotaLogo, description: 'Official IOTA Foundation wallet' },
    { name: 'MetaMask', logo: MetaMaskLogo, description: 'Popular Ethereum wallet' },
    { name: 'WalletConnect', logo: WalletConnectLogo, description: 'Connect various mobile wallets' },
    { name: 'Coinbase Wallet', logo: CoinbaseLogo, description: "Coinbase's self-custody wallet" },
  ];

  return (
    <>
      {/* STYLES */}
      <style>{`
        body { font-family: 'Segoe UI', sans-serif; background-color: #f5f5dc; }
        .navbar-custom {
          background-color: #3d5a29ff !important;
          padding: 15px 0;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .connect-wallet-btn {
          background-color: #9de82c !important;
          color: #2d5016 !important;
          border: none;
          font-weight: bold;
        }
        .connect-wallet-btn:hover { background-color: #8bc926 !important; }

        /* Modal styling */
        .modal-content {
          background-color: #121212;
          color: white;
          border-radius: 15px;
          border: 1px solid #333;
        }
        .modal-header {
          border-bottom: 1px solid #333;
        }
        .modal-title {
          color: #9de82c;
          font-weight: bold;
        }

        .wallet-option {
          display: flex;
          align-items: center;
          gap: 15px;
          background: #1e1e1e;
          color: white;
          padding: 12px 18px;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.2s ease;
          border: 1px solid transparent;
        }
        .wallet-option:hover {
          background: #292929;
          border: 1px solid #9de82c;
          transform: translateY(-2px);
        }
        .wallet-option.active {
          border: 2px solid #9de82c;
          background: #2b2b2b;
        }
        .wallet-option img {
          width: 38px;
          height: 38px;
        }

        .wallet-info {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .wallet-name {
          font-weight: 600;
          font-size: 1.1rem;
        }
        .wallet-desc {
          font-size: 0.9rem;
          color: #c0c0c0;
        }

        .connect-btn {
          background-color: #9de82c !important;
          color: #1e1e1e !important;
          border: none;
          font-weight: bold;
          border-radius: 10px;
          width: 100%;
          padding: 10px;
          transition: all 0.2s ease;
        }
        .connect-btn:hover {
          background-color: #8bc926 !important;
          transform: translateY(-1px);
        }

        .wallet-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        @media(max-width: 768px){
          .wallet-grid { grid-template-columns: 1fr; }
        }

        .right-panel {
          background-color: #1b1b1b;
          border-radius: 12px;
          padding: 15px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .selected-wallet-box {
          display: flex;
          align-items: center;
          gap: 10px;
          border: 1px solid #333;
          border-radius: 10px;
          background: #2b2b2b;
          padding: 10px 12px;
          margin-top: 10px;
        }
        .selected-wallet-box img {
          width: 30px;
          height: 30px;
        }
      `}</style>

      {/* NAVBAR */}
      <Navbar className="navbar-custom">
        <Container style={{ justifyContent: 'space-between' }}>
          <Navbar.Brand
            onClick={() => navigate('/home')}
            style={{
              color: '#FFFFFF', fontSize: '30px', display: 'flex',
              alignItems: 'center', gap: '10px', cursor: 'pointer'
            }}
          >
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OyWTluWJsXSyObRFIELNPfNTkOUjf0.png"
              alt="Olivium Logo"
              style={{ width: 40, height: 40, filter: 'invert(1)' }}
            />
            𝐎𝐥𝐢𝐯𝐢𝐮𝐦
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="#features" style={{ color: 'white' }}>Features</Nav.Link>
            <Nav.Link href="#how-it-works" style={{ color: 'white' }}>How It Works</Nav.Link>
            <Nav.Link href="#faq" style={{ color: 'white' }}>FAQ</Nav.Link>
          </Nav>
          <Button className="connect-wallet-btn" onClick={handleConnectClick}>
            <Icon.Wallet size={18} />
            {walletConnected ? 'Wallet Connected' : 'Connect Wallet'}
          </Button>
        </Container>
      </Navbar>

      {/* HERO SECTION */}
      <div style={{ backgroundColor: '#f5f5dc', minHeight: '100vh' }}>
        <Image
          src={pic1}
          className="hero-image"
          style={{ height: '500px', float: 'right', marginRight: '100px', marginTop: '20px' }}
          rounded
        />
        <Container style={{ width: '60%', marginLeft: '100px', marginTop: '20px', fontSize: '25px' }}>
          <Card.Title style={{ fontSize: '45px', color: '#627d33ff', fontWeight: 'bold' }}>
            𝙒𝙚𝙡𝙘𝙤𝙢𝙚 𝙩𝙤 𝙊𝙡𝙞𝙫𝙞𝙪𝐦 :
          </Card.Title>
          <Card.Body className="p-0">
            <div style={{ color: '#6c757d', lineHeight: '1.6' }}>
              Olivium is a blockchain-powered platform that brings transparency and trust to every drop
              of olive oil — connecting farmers, mills, distributors, and retailers through IOTA’s decentralized technology.
            </div>
            <Button
              onClick={handleVerifyBatch}
              style={{
                backgroundColor: '#9de82c', borderColor: '#9de82c',
                color: '#2d5016', fontWeight: 'bold', fontSize: '30px',
                marginTop: '25px', padding: '12px 24px', display: 'flex', alignItems: 'center', gap: '7px'
              }}
            >
              <HiOutlineQrcode size={40} />
              Verify a Batch
            </Button>

            {walletConnected && (
              <div style={{ marginTop: '40px' }}>
                <h4>Select Your Role:</h4>
                <Form.Select
                  value={role}
                  onChange={handleRoleSelect}
                  style={{
                    width: '300px', fontSize: '1rem', marginTop: '10px',
                    borderRadius: '8px', padding: '10px',
                  }}
                >
                  <option value="">-- Choose Role --</option>
                  <option value="farmer">Farmer</option>
                  <option value="mill">Mill</option>
                  <option value="quality">Quality Control</option>
                  <option value="distributor">Distributor</option>
                  <option value="retailer">Retailer</option>
                </Form.Select>
              </div>
            )}
          </Card.Body>
        </Container>
      </div>

      {/* CONNECT WALLET MODAL */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Connect Your Wallet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="wallet-grid">
            {/* LEFT SIDE — WALLET OPTIONS */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {wallets.map((w) => (
                <div
                  key={w.name}
                  className={`wallet-option ${selectedWallet === w.name ? 'active' : ''}`}
                  onClick={() => setSelectedWallet(w.name)}
                >
                  <img src={w.logo} alt={w.name} />
                  <div className="wallet-info">
                    <div className="wallet-name">{w.name}</div>
                    <div className="wallet-desc">{w.description}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT SIDE — ADDRESS + SELECTED WALLET */}
            <div className="right-panel">
              <div>
                <Form.Label>Type Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter wallet address..."
                  value={walletAddress}
                  onChange={(e) => setWalletAddress(e.target.value)}
                  style={{ backgroundColor: '#1e1e1e', color: 'white', border: '1px solid #333' }}
                  disabled={selectedWallet !== 'IOTA Wallet'}
                />
                <div style={{ marginTop: '20px' }}>
                  <Form.Label>Selected Wallet</Form.Label>
                  <div className="selected-wallet-box">
                    {selectedWallet ? (
                      <>
                        <img
                          src={wallets.find(w => w.name === selectedWallet)?.logo}
                          alt={selectedWallet}
                        />
                        <div>
                          <div style={{ fontWeight: '600' }}>{selectedWallet}</div>
                          <div style={{ fontSize: '0.85rem', color: '#bbb' }}>
                            {wallets.find(w => w.name === selectedWallet)?.description}
                          </div>
                        </div>
                      </>
                    ) : (
                      <div style={{ color: '#888' }}>No wallet selected</div>
                    )}
                  </div>
                </div>
              </div>

              <Button
                className="connect-btn"
                onClick={handleConnectWallet}
                disabled={!selectedWallet}
                style={{ marginTop: '20px' }}
              >
                Connect {selectedWallet || 'Wallet'}
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Home;
