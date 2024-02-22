import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VirtualArtGallery from './Pages/VirtualArtGallery';
import Payment from './Pages/Payment';
import PaymentDone from './Pages/PaymentDone';
import Cashondel from './Pages/Cashondel';

function Main() {
  return (
    <Router>
      <div className="Main">
        <Routes>
          <Route path="/" element={<VirtualArtGallery />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/paymentdone" element={<PaymentDone/>}/>
          <Route path="/cashondel" element={<Cashondel/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default Main;