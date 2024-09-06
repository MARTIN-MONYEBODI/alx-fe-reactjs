import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';  // Import the App component where UserProfile is used
import './index.css';  // Import your Tailwind CSS file

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);