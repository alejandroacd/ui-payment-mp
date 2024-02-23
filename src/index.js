import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { PaymentContextProvider } from './context/ContextPayment';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PaymentContextProvider>
    <App />
    </PaymentContextProvider>
  </React.StrictMode>
);

reportWebVitals();
