import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Portfolio from "./components/pages/Portfolio";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/portfolio" element={<Portfolio/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);
