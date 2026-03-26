import { useState } from 'react';
import EditorPane from './components/EditorPane';
import AuditReport from './components/AuditReport';
import RunButton from './components/RunButton';

function App() {
  const [code, setCode] = useState('// Paste your code here...');
  const [review, setReview] = useState('');
  const [loading, setLoading] = useState(false);

  const handleReview = async () => {
    setLoading(true);
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';
      const response = await fetch(`${apiUrl}/api/review`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code }),
      });
      const data = await response.json();
      setReview(data.review);
    } catch {
      setReview("Error connecting to the audit server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white p-4">
      <div className="w-1/2 pr-2 flex flex-col">
        <h2 className="text-xl font-bold mb-2">DevSync Editor</h2>
        <EditorPane code={code} setCode={setCode} />
        <RunButton loading={loading} handleReview={handleReview} />
      </div>
      <div className="w-1/2 pl-2 flex flex-col">
        <h2 className="text-xl font-bold mb-2">AI Audit Report</h2>
        <AuditReport review={review} />
      </div>
    </div>
  );
}

export default App;