import React from 'react';
import Home from './pages/Home';
import { Routes, Route, Navigate } from 'react-router-dom';
import Register from './pages/Register';
import LoginForm from './pages/Login';
import Profile from './pages/Profile';
import { Toaster } from 'react-hot-toast';

const App: React.FC = () => {
  const user = localStorage.getItem("userData");

  return (
    <>
      <Toaster position="top-center" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginForm />} />
        <Route
          path="/profile"
          element={user ? <Profile /> : <Navigate to="/" replace />}
        />
      </Routes>
    </>
  );
};

export default App;
