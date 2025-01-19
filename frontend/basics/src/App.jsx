import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import Main from "./components/Main";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/uploadFiles" element={<Home />} />
        <Route path="/main" element={<Main />} />
        <Route path="/"  element={<Main />}  />
      </Routes>
    </Router>
  );
}

export default App;
