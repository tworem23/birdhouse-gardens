import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { getUser } from '../../utilities/users-service';
import About from '../About/About'
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import CheckoutPage from '../CheckoutPage/CheckoutPage';
import Header from '../../components/Header/Header';

export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      { user ?
      <>
        <Header />
        <Routes>
          <Route path="/about" element={<About user={user} setUser={setUser} />} />
          <Route path="/orders/new" element={<NewOrderPage user={user} setUser={setUser} />} />
          <Route path="/orders" element={<CheckoutPage user={user} setUser={setUser} />} />
          <Route path="/*" element={<Navigate to="/orders/new" />} />
        </Routes>
      </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
