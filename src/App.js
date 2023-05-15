import React from "react";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import ProductPage from "./containers/productsListing";
import Header from "./containers/Header";
import "./App.css";
import ProductDetail from "./containers/productDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<ProductPage/>} />
          <Route path="/product/:productId" element={<ProductDetail/>} />
          <Route>404 Not Found!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
