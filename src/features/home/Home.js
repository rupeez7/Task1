import React, { useState, useEffect, useCallback } from 'react';
import '../../app.css';

function Home() {
  const [htmlCode, setHtmlCode] = useState('<p id="paragraph">Hello World</p>');
  const [cssCode, setCssCode] = useState('p { color: green; }');
  const [jsCode, setJsCode] = useState('document.getElementById("paragraph").innerHTML="Hello Folks";');
  const [activePanels, setActivePanels] = useState(['html', 'output']);

  const updateOutput = useCallback(() => {
    const iframe = document.getElementById('outputPanel');
    const iframeDocument = iframe.contentDocument;
    const html = `<html><head><style>${cssCode}</style></head><body>${htmlCode}</body></html>`;
    iframeDocument.open();
    iframeDocument.write(html);
    iframeDocument.close();
    iframe.contentWindow.eval(jsCode);
  }, [cssCode, htmlCode, jsCode]);

  const togglePanel = (panel) => {
    setActivePanels((prevActivePanels) => {
      if (panel === 'output') {
        updateOutput();
      }
      if (prevActivePanels.includes(panel)) {
        return prevActivePanels.filter((activePanel) => activePanel !== panel);
      } else {
        return [...prevActivePanels, panel];
      }
    });
  };

  const isPanelActive = useCallback((panel) => {
    return activePanels.includes(panel);
  }, [activePanels]);

  useEffect(() => {

    if (isPanelActive('output')) {
      updateOutput();
    }
  }, [htmlCode, cssCode, jsCode, isPanelActive, updateOutput]);

  return (
    <div>

      <div id="buttonContainer">
        <div className={`toggleButton ${isPanelActive('html') ? 'active' : ''}`} onClick={() => togglePanel('html')}>HTML</div>
        <div className={`toggleButton ${isPanelActive('css') ? 'active' : ''}`} onClick={() => togglePanel('css')}>CSS</div>
        <div className={`toggleButton ${isPanelActive('javascript') ? 'active' : ''}`} onClick={() => togglePanel('javascript')}>Javascript</div>
        <div className={`toggleButton ${isPanelActive('output') ? 'active' : ''}`} onClick={() => togglePanel('output')}>Output</div>
      </div>


      <div id="bodyContainer">
        <textarea className={`panel ${isPanelActive('html') ? '' : 'hidden'}`} value={htmlCode} onChange={(e) => setHtmlCode(e.target.value)}></textarea>
        <textarea className={`panel ${isPanelActive('css') ? '' : 'hidden'}`} value={cssCode} onChange={(e) => setCssCode(e.target.value)}></textarea>
        <textarea className={`panel ${isPanelActive('javascript') ? '' : 'hidden'}`} value={jsCode} onChange={(e) => setJsCode(e.target.value)}></textarea>
        <iframe id="outputPanel" title="Output Panel" className={`panel ${isPanelActive('output') ? '' : 'hidden'}`}></iframe>
      </div>
    </div>
  );
}

export default Home;
