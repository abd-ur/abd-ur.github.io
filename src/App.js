import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Portfolio</h1>
        <p>
          Hello, I am [Your Name]. I am a web developer.
        </p>
        <ul>
          <li><a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/yourname" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="mailto:yourname@example.com">Email</a></li>
        </ul>
      </header>
    </div>
  );
}

export default App;
