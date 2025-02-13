import React, { useState } from 'react';
import FileUpload from './components/FileUpload';
import Dashboard from './components/Dashboard';
import './App.css';

const App = () => {
  const [data, setData] = useState(null);
  const [view, setView] = useState('upload');

  return (
    <div className="App">
      <header className="header">
        <h1>Log &amp; GSC Data Analyzer</h1>
<p>By Jan-Willem Bobbink</p>
        <nav className="nav">
          <button onClick={() => setView('upload')}>Upload Files</button>
          <button onClick={() => setView('dashboard')}>Dashboard</button>
        </nav>
      </header>
      <main>
        {view === 'upload' && <FileUpload onDataProcessed={setData} />}
        {view === 'dashboard' && <Dashboard data={data} />}
      </main>
    </div>
  );
};

export default App;
