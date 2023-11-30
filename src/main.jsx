import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import ProjectProvider from './store/project-context';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProjectProvider>
      <App />
    </ProjectProvider>
  </React.StrictMode>
);
