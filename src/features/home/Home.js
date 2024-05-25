import React, { useState } from 'react';
import '../../app.css';

const Home = () => {
  const [html, setHtml] = useState('<div>Hello JSBin Clone!</div>');
  const [css, setCss] = useState('body { background-color: lightblue; }');
  const [js, setJs] = useState('console.log("JSBin Clone is running!");');

  const runCode = () => {
    const iframe = document.createElement('iframe');
    document.body.appendChild(iframe);

    const iframeContent = `
      <html>
        <head>
          <style>${css}</style>
        </head>
        <body>
          ${html}
          <script>${js}</script>
        </body>
      </html>
    `;

    iframe.srcdoc = iframeContent;
  };

  return (
    <div className="container">
      <div className="editor">
        <h3>HTML</h3>
        <div
          contentEditable
          className="code-editor"
          onInput={(e) => setHtml(e.target.innerHTML)}
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <h3>CSS</h3>
        <div
          contentEditable
          className="code-editor"
          onInput={(e) => setCss(e.target.innerHTML)}
          dangerouslySetInnerHTML={{ __html: css }}
        />
        <h3>JavaScript</h3>
        <div
          contentEditable
          className="code-editor"
          onInput={(e) => setJs(e.target.innerHTML)}
          dangerouslySetInnerHTML={{ __html: js }}
        />
        <button onClick={runCode}>Run</button>
      </div>
      <div className="preview">
        <iframe title="Output" />
      </div>
    </div>
  );
};

export default Home;
