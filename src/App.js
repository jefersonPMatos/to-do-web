import React from 'react'

import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Cadastrar } from "./pages/Cadastrar";
import { Login }  from "./pages/Login";
import { Error } from "./pages/Error";

import { AuthProvider } from "./Contexts/AuthContext";

export function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastrar" element={<Cadastrar />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
