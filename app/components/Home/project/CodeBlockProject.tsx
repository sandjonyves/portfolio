import React, { useEffect } from 'react';

const CodeBlockProject: React.FC = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.25.0/themes/prism-okaidia.min.css';
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.25.0/prism.min.js';
    document.body.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  const copyToClipboard = () => {
    const codeElement = document.querySelector('.language-javascript code') as HTMLElement;
    const textArea = document.createElement('textarea');
    textArea.value = codeElement.textContent || '';
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('Code copied to clipboard!');
  };

  return (
    <div className="max-w-sm mx-auto mt-24 bg-gray-900 rounded-lg overflow-hidden">
      <div className="p-4">
        <div className="flex items-center justify-between">
          <span className="text-gray-200 text-xl font-bold">Code Snippet</span>
          <button
            id="copyButton"
            className="px-4 py-2 text-white bg-teal-500 rounded hover:bg-teal-600 focus:outline-none focus:ring focus:ring-red-400"
            onClick={copyToClipboard}
          >
            Copy
          </button>
        </div>
      </div>

      <div className="px-3 py-2">
        <pre className="language-javascript">
          <code className="text-sm">// Your JavaScript code goes here
            const projects ={
                
            }
</code>
        </pre>
      </div>
    </div>
  );
};

export default CodeBlockProject;