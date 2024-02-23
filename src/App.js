import React from 'react';
import './App.css';
import InputPay from './views/input-pay/index.jsx'
import Mount from './views/mount/index.jsx'
import Checkout from './views/checkout/index'
import Ticket from './views/ticket/index'
import CoreData from './views/coredata';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className='App'>
    <Router>
      <Routes>
        <Route path='/' element={<CoreData />} />
        <Route path='/destination' element={<InputPay />} />
        <Route path='/mount' element={<Mount />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/ticket' element={<Ticket />} />
      </Routes>
    </Router>
    </div>
  )
}

export default App;
