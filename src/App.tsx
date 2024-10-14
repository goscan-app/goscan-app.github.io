import './App.css'

function App() {
  return (
    <>
      {/* Navbar */}
      <div className="navbar">
        <a href="#home">Home</a>
        <a href="#cloud-platform">Unified Cloud Platform</a>
        <a href="#security">Dual Camera Security</a>
        <a href="#analytics">Analytics & Features</a>
        <a href="#avatar">Interactive Avatar</a>
        <a href="#dashboard">Dashboard</a>
        <a href="#team">Team</a>
        <a href="#login">Login</a>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h1>Hey, We're GoScan</h1>
        <p>
          We aim to transform the in-person shopping experience and real-time store management by utilizing AI-powered analytics to boost user engagement, deliver meaningful insights, and ensure a secure, seamless checkout process.
        </p>

        {/* Search Bar */}
        <div className="search-bar">
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <h6>Copyrights of Pratheek</h6>
    </>
  );
}


export default App
