import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import The718 from "./pages/718";
import The911 from "./pages/911";
import Taycan from "./pages/Taycan";
import Panamera from "./pages/Panamera";
import Macan from "./pages/Macan";
import Cayenne from "./pages/Cayenne";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/models/718" element={<The718 />} />
        <Route path="/models/911" element={<The911 />} />        
        <Route path="/models/Taycan" element={<Taycan />} />
        <Route path="/models/Panamera" element={<Panamera />} />
        <Route path="/models/Macan" element={<Macan />} />
        <Route path="/models/Cayenne" element={<Cayenne />} />
      </Routes>
    </Router>
  );
};

export default App;