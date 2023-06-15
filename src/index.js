import React from 'react';
import ReactDOM from 'react-dom/client';
import  App  from './components/App';
import './index.css';
import Headers from './components/head/head';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Headers />
  </React.StrictMode>
);
