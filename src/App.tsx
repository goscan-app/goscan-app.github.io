import './App.css';
import visionMissionImage from 'src/Assets/Vision.gif'; // Update the path to where your image is located

function App() {
  return (
    <>
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">GoScan</div>
        <nav>
          <a href="#home">Home</a>
          <a href="#platform">Cloud Platform</a>
          <a href="#security">Security</a>
          <a href="#features">Features</a>
          <a href="#team">Team</a>
          <a href="#login">Login</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Hey, We're <span className="highlight">GoScan</span></h1>
            <p>
              Transforming the in-person shopping experience with real-time AI-powered analytics for seamless and secure checkout.
            </p>
          </div>
          <div className="hero-image">
            <img src="./src/Assets/cart.gif" alt="Shopping Cart" />
          </div>
        </div>
      </section>

      {/* Vision and Mission Section */}
      <section className="vision-mission">
        <img src={visionMissionImage} alt="Vision and Mission" className="vision-mission-image" />
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 GoScan. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default App;
