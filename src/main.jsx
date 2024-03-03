import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource/montserrat'; // webfontをインポート
import 'bootstrap/dist/css/bootstrap.min.css'; // BootstrapのCSSをインポート
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
