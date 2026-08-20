import React from "react";
import { Route, Routes } from "react-router-dom";
import Create from "./components/Create";
import Read from "./components/Read";
import Update from "./components/Update";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Read />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
    </div>
  );
}

export default App;