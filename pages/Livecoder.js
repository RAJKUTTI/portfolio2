import React, { useState } from 'react';
import { LiveProvider, LiveEditor, LivePreview } from 'react-live';
import styles from '@/styles/Livecoder.module.css'
const Home = () => {
  const [code, setCode] = useState(`
    function greet(message) {
      return \`A message, \${message}!\`;
    }
    greet('Hi bro');
`);
  const [output, setOutput] = useState('');

  const handleClick = () => {
    const script = document.createElement('script');
    script.innerHTML = code;
    document.body.appendChild(script);
    const result = eval(code);
    setOutput(result);
    document.body.removeChild(script);
  };

  return (
    <div>
    <LiveProvider code={code}>
      <div className={styles.container}>
        <h1 className={styles.title}>Live Code Editor</h1>
        <LiveEditor 
          onChange={newCode => setCode(newCode)}
          className={styles.editor}
        />
        <button onClick={handleClick} className={styles.button}>
          Run Code
        </button>
        <div className={styles.outputContainer}>
          <h2>Output:</h2>
          <div className={styles.output}>{output}</div>
        </div>
      </div>
    </LiveProvider>
    </div>
  );
};

export default Home;



  