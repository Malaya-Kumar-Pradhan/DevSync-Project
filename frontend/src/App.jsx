import React, { useState } from 'react';
import Editor from '@monaco-editor/react';

function App() {
  const [code, setCode] = useState('// Paste your code here...');
  const [review, setReview] = useState('');
  const [loading, setLoading] = useState(false);

  const handleReview = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://devsync-project.onrender.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code }),
      });
      const data = await response.json();
      setReview(data.review);
    } catch (error) {
      setReview("Error connecting to the audit server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white p-4">
      <div className="w-1/2 pr-2 flex flex-col">
        <h2 className="text-xl font-bold mb-2">DevSync Editor</h2>
        <div className="flex-grow border border-gray-700 rounded overflow-hidden">
          <Editor
            height="100%"
            defaultLanguage="javascript"
            theme="vs-dark"
            value={code}
            onChange={(value) => setCode(value)}
          />
        </div>
        <button 
          onClick={handleReview} 
          disabled={loading}
          className="mt-4 bg-blue-600 hover:bg-blue-700 p-2 rounded font-bold"
        >
          {loading ? 'Analyzing...' : 'Run Security & Performance Audit'}
        </button>
      </div>
      
      <div className="w-1/2 pl-2 flex flex-col">
        <h2 className="text-xl font-bold mb-2">AI Audit Report</h2>
        <div className="flex-grow bg-gray-800 border border-gray-700 rounded p-4 overflow-y-auto whitespace-pre-wrap">
          {review || "Awaiting code submission..."}
        </div>
      </div>
    </div>
  );
}

export default App;
