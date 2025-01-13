import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from "./reportWebVitals"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Defina o basename para corresponder ao nome do repositório apenas em produção
const basename = process.env.NODE_ENV === 'production' ? '/Pedro-portfolio' : '/';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router basename={basename}>
      <Routes>
        <Route path="/*" element={<App />}/>
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();