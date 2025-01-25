import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="navbar">
        <h1 className="title">Prometheus</h1>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#get-started">Get Started</a>
        </nav>
      </header>
      
      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <h2>Blockchain-Based Document Verification</h2>
            <p>
              A seamless, secure, and efficient system to verify documents using the power of blockchain.
            </p>
            <button className="cta-button">Get Started</button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about">
          <h2>About Prometheus</h2>
          <p>
            Prometheus is a cutting-edge blockchain-based solution designed to
            revolutionize document verification. Using a decentralized system,
            it ensures security, transparency, and reliability.
          </p>
          <div className="image-placeholder">
            <p>Space for Image</p>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="how-it-works">
          <h2>How It Works</h2>
          <ol>
            <li>Upload your document to the system.</li>
            <li>The system generates a unique hash stored on the blockchain.</li>
            <li>Verify documents anytime by matching hashes.</li>
          </ol>
          <div className="image-placeholder">
            <p>Space for Diagram</p>
          </div>
        </section>

        {/* Call to Action */}
        <section id="get-started" className="cta">
          <h2>Ready to Secure Your Documents?</h2>
          <button className="cta-button">Go to Upload Page</button>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2025 Prometheus. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
