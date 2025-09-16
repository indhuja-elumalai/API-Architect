import React, { useState, useEffect } from 'react';
import './index.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/greeting')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => console.error("Error fetching data:", err));
  }, []);

  return (
    <div className="App">
      <h1>Full-Stack Greeting</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
