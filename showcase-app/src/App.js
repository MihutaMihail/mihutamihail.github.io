import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CV from "./components/CV/CV";
import Blog from "./components/Blog/Blog";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<CV />} />{" "}
        <Route path="/blog" element={<Blog />} />{" "}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
