import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import for React 18+
import './index.css';
import App from './App';

// Updated rendering method for React 18+
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
