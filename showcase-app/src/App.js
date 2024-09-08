import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css"
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CV from "./components/CV/CV";
import Blog from "./components/Blog/Blog";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="content-container">
        <Routes>
          <Route path="/" element={<CV />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes> 
      </div>
      <Footer />
    </div>
  );
}

export default App;
