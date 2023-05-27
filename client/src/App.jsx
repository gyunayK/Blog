import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Blogs from "./components/Blogs";
import { Routes, Route } from "react-router-dom";
import Index from "./components/Index";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="*" element={<h1>Not Found!</h1>} />
      </Routes>
    </>
  );
}

export default App;
