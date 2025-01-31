import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Portfolio</h1>
        <p>I'm [Your Name], a passionate software developer!</p>

        <div className="grid">
          <a href="#about" className="card">
            <h3>About Me &rarr;</h3>
            <p>Learn more about me and my skills.</p>
          </a>

          <a href="#projects" className="card">
            <h3>Projects &rarr;</h3>
            <p>Check out some of my awesome projects.</p>
          </a>

          <a href="#contact" className="card">
            <h3>Contact &rarr;</h3>
            <p>Get in touch with me!</p>
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
