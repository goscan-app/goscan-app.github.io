import './App.css'

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
        <div className="hero-text">
          <h1>Hey, We're GoScan</h1>
          <p>
            Transforming the in-person shopping experience with real-time AI-powered analytics for seamless and secure checkout.
          </p>
        </div>
        <div className="hero-image">
          <img src="https://goscan-app.github.io/src/Assets/cart.gif" alt="Shopping Cart" />
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2024 GoScan. All Rights Reserved.</p>
      </footer>
    </>
  );
}


export default App
