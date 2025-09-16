import React from 'react';
import './App.css';
import './index.css';
// import AuthForm from './components/AuthForm';
import AIGenerator from './components/AIGenerator';

function App() {
  return (
    <div className="App">
      <h1>API Architect</h1>
      <AIGenerator />
      {/* <AuthForm /> <-- Uncomment this line */}
    </div>
  );
}

export default App;