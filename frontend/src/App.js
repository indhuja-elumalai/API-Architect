import React from 'react';
import './App.css'; // <-- New import
import './index.css'; // Existing import
import AuthForm from './components/AuthForm';

function App() {
  return (
    <div className="App"> 
      <h1>API Architect</h1>
      <AuthForm />
    </div>
  );
}

export default App;