import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BuyCredit from "./pages/BuyCredit";
import Result from "./pages/Result";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/login";
import { AppContext } from "./context/AppContext";

const App = () => {
  const { showLogin } = useContext(AppContext);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-teal-50 to-orange-50">
      <Navbar />
      {showLogin && <Login />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/buy" element={<BuyCredit />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
