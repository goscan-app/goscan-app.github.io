import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Import React Router

function App() {
  return (
    <Router>
      <>
        {/* Navbar */}
        <header className="navbar">
          <div className="logo">GoScan</div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/platform">Cloud Platform</Link>
            <Link to="/security">Security</Link>
            <Link to="/features">Features</Link>
            <Link to="/team">Team</Link>
            <Link to="/login">Login</Link>
          </nav>
        </header>

        {/* Routes for different pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/security" element={<Security />} />
          <Route path="/features" element={<Features />} />
          <Route path="/team" element={<Team />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </>
    </Router>
  );
}

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Hey, We're <span className="highlight">GoScan</span></h1>
            <p>Transforming the in-person shopping experience with real-time AI-powered analytics for seamless and secure checkout.</p>
          </div>
          <div className="hero-image">
            <img src="/src/Assets/cart.gif" alt="Shopping Cart" />
          </div>
        </div>
      </section>

      {/* Vision and Mission Section */}
      <section className="vision-mission">
        <h2>Our Vision & Mission</h2>
        <p>We aim to revolutionize retail with AI-driven technology that provides customers a seamless, secure, and fast shopping experience.</p>
      </section>

      {/* Our Approach Section */}
      <section className="approach">
        <h2>Our Approach</h2>
        <p>We integrate cutting-edge AI with real-time analytics to create an innovative, user-friendly platform, ensuring security and efficiency.</p>
      </section>

      {/* What Clients are Saying */}
      <section className="testimonials">
        <h2>What Clients Are Saying</h2>
        <p>“GoScan has transformed the way our customers shop, making the checkout process faster and more secure than ever before.” - Retail Partner</p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 GoScan. All Rights Reserved.</p>
        <p>Contact us: contact@goscan.com</p>
        <p>Connect with us on <a href="#">LinkedIn</a>, <a href="#">Twitter</a>, <a href="#">Facebook</a></p>
      </footer>
    </>
  );
}

function Platform() {
  return <h1>Cloud Platform Page</h1>;
}

function Security() {
  return <h1>Security Page</h1>;
}

function Features() {
  return <h1>Features Page</h1>;
}

function Team() {
  return <h1>Team Page</h1>;
}

function Login() {
  return <h1>Login Page</h1>;
}

export default App;
