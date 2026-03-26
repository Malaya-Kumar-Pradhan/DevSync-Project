import Editor from '@monaco-editor/react';

export default function EditorPane({ code, setCode }) {
  return (
    <div className="flex-grow border border-gray-700 rounded overflow-hidden">
      <Editor
        height="100%"
        defaultLanguage="javascript"
        theme="vs-dark"
        value={code}
        onChange={(value) => setCode(value)}
      />
    </div>
  );
}