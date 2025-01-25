import React from 'react'
import "./Landing.css"


const LandingPage = () => {
  return (
    <div className="App " >
        
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
        <section className="hero h-screen bg-custom-image bg-cover bg-center">
          <div className="hero-content">
            <h2>Blockchain-Based Document Verification</h2>
            <p>
              A seamless, secure, and efficient system to verify documents using the power of blockchain.
            </p>
            <button className="cta-button"><a href="#get-started">Get Started</a></button>
          </div>
        </section>

        {/* About Section */}
        {/* <div className='bg-custom-image2 h-screen'> */}
        <section id="about" className="about bg-custom-image2 h-screen flex flex-col justify-around items-center">
  <h2 className='font-bold'>ABOUT PROMETHEUS</h2>
  <p className="w-1/2 mx-auto border-2 border-orange-500 p-4 rounded-md">
    Prometheus is a cutting-edge blockchain-based solution designed to
    revolutionize document verification. Using a decentralized system,
    it ensures security, transparency, and reliability. This project leverages the power of blockchain technology to revolutionize the way graduation certificates and other legal documents are verified. The primary goal is to create a secure, transparent, and decentralized platform where colleges publish certificates on the blockchain, allowing companies to verify their authenticity seamlessly.
  </p>
</section>

        {/* </div> */}
        

        {/* How It Works Section */}
        <section id="how-it-works" className="how-it-works bg-custom-image3 h-screen">
          <h2>How It Works</h2>
          <ol>
            <li>Upload your document to the system.</li>
            <li>The system generates a unique hash stored on the blockchain.</li>
            <li>Verify documents anytime by matching hashes.</li>

            🌟 Key Features <br />
                <li>Certificate Publishing: Colleges can upload certificates to the blockchain, ensuring they are tamper-proof and publicly verifiable.</li>
                <li>CInstant Verification: Companies can validate the authenticity of certificates without relying on intermediaries.</li>
                <li>C Security: The blockchain ensures that all records are immutable and protected against fraud.</li>
                <li>CDecentralized: Eliminates centralized points of failure, ensuring reliability and transparency.</li>
       
📜 Workflow
<li>Certificate Upload: Colleges upload certificates to the system.</li>
<li>Blockchain Integration: The certificate details are hashed and stored on the blockchain using smart contracts.</li>
<li>Verification: Companies can search for a certificate's hash to verify its authenticity instantly.</li>
<li>Immutable Records: Once published, certificates cannot be altered or deleted</li>
          </ol>
        </section>
        

        {/* Call to Action */}
        <section id="get-started" className="cta flex flex-col justify-around items-center bg-custom-image4 w-screen">
          <h2>Ready to Secure Your Documents?</h2>
          <button className="cta-button" onClick={() => { window.location.href = "/main";}}>Go to Upload Page</button>
        </section>
        
      </main>

      <footer className="footer">
        <p>&copy; 2025 Prometheus. All rights reserved.</p>
      </footer>
      
    </div>
  )
}

export default LandingPage
