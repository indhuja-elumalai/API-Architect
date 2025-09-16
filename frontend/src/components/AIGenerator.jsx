import React, { useState } from 'react';
import './AIGenerator.css'; // <-- Add this line

const AIGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const generateContent = async () => {
    setLoading(true);
    setError('');
    setContent('');
    try {
      const response = await fetch('/api/ai/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch AI content.');
      }

      const data = await response.json();
      setContent(data.content);
    } catch (err) {
      setError(err.message);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ai-generator-container"> {/* Add this class */}
      <h2>AI Content Generator</h2>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        rows="4"
        cols="50"
        placeholder="Enter a prompt here..."
      />
      <button onClick={generateContent} disabled={loading}>
        {loading ? 'Generating...' : 'Generate Content'}
      </button>
      {error && <p className="error-message">{error}</p>} {/* Add this class */}
      {content && (
        <div className="generated-content-container"> {/* Add this class */}
          <h3>Generated Content:</h3>
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default AIGenerator;