import ReactMarkdown from 'react-markdown';

export default function AuditReport({ review }) {
  return (
    <div className="flex-grow bg-gray-800 border border-gray-700 rounded p-4 overflow-y-auto">
      {review ? (
        <ReactMarkdown>{String(review)}</ReactMarkdown>
      ) : (
        "Awaiting code submission..."
      )}
    </div>
  );
}