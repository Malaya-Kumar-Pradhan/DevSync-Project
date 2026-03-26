export default function RunButton({ loading, handleReview }) {
  return (
    <button
      onClick={handleReview}
      disabled={loading}
      className="mt-4 bg-blue-600 hover:bg-blue-700 p-2 rounded font-bold"
    >
      {loading ? 'Analyzing...' : 'Run Security & Performance Audit'}
    </button>
  );
}