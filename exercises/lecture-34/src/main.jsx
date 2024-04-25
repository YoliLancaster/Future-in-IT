import React from "react";
import ReactDOM from "react-dom/client";
import Gallery from "./components/Gallery.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <Gallery />
    <Footer />
  </React.StrictMode>
);
