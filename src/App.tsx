import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app-container">
      {/* Header Section */}
      <header className="header">
        <h1>GoScan</h1>
        <nav>
          <ul>
            <li>Home</li>
            <li>Unified Cloud Platform</li>
            <li>Dual Camera Security</li>
            <li>Analytics & Features</li>
            <li>Interactive Avatar</li>
            <li>Dashboard</li>
            <li>Team</li>
            <li>Login</li>
          </ul>
        </nav>
      </header>

      {/* Main Intro Section */}
      <section className="intro-section">
        <h2>Hey, We’re GoScan</h2>
        <p>
          We aim to transform the in-person shopping experience and real-time store management by utilizing AI-powered analytics to boost user engagement, deliver meaningful insights, and ensure a secure, seamless checkout process.
        </p>
        <input type="text" placeholder="Search" />
      </section>

      {/* Vision & Mission Section */}
      <section className="vision-mission">
        <div className="vision">
          <h3>Our Vision</h3>
          <p>To redefine the in-store shopping experience by seamlessly blending technology and personalization, empowering users with a smart, intuitive platform that enhances convenience, engagement, and satisfaction.</p>
        </div>
        <div className="mission">
          <h3>Our Mission</h3>
          <p>To create a groundbreaking retail ecosystem that leverages advanced technologies, such as dual-camera interaction and personalized avatars, to provide users with a secure, efficient, and interactive shopping experience, while offering retailers innovative tools to better connect with their customers.</p>
        </div>
      </section>

      {/* Approach Section */}
      <section className="approach">
        <h3>Our Approach</h3>
        <ul>
          <li>Unified Cloud Platform</li>
          <li>Dual Camera Security</li>
          <li>Real-Time User and Store Data Analytics</li>
          <li>Interactive Avatar based Shopping Assistant</li>
        </ul>
      </section>

      {/* Clients Section */}
      <section className="clients">
        <h3>What Clients are Saying</h3>
        <div className="testimonial">
          <p>"We understand the changing landscape of retail and the growing demand for convenience, speed, and personalization. After evaluating GoScan’s features, including instant product scanning, integrated verified digital ID, and advanced AI-driven analytics, we are confident that integrating GoScan into our existing retail operations will significantly enhance our customers' experience."</p>
          <p><strong>Satyan K N, CEO & MD, Sindhoor Textiles, India</strong></p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq">
        <h3>FAQ</h3>
        <ul>
          <li>How Do We Begin?</li>
          <li>What Are My Prices?</li>
          <li>How Long Does an Engagement Last?</li>
        </ul>
      </section>
    </div>
  );
}

export default App;
