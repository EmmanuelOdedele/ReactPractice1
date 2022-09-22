import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import PaginationPage from "./components/PaginationPage";


function App() {
  return (
    <section className="main-page">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/pagination" element={<PaginationPage />} />
      </Routes>
    </section>
  );
}

export default App;
