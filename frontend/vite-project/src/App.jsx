import {useState,useEffect} from "react"
import { Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage"
import RegisterPage from "./pages/RegisterPage"
import ServicePage from "./pages/ServicePage"
import BookingPage from "./pages/MyBookingPage"
import MyBookingPage from "./pages/MyBookingPage";
import Aboutpage from "./pages/Aboutpage"
import ContactPage from "./pages/ContactPage"

function App() {
  return (
    <>
      <Navbar />

     <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path ="/register" element ={<RegisterPage />} />
        <Route path="/services" element ={<ServicePage />}/>
        <Route path="/bookings" element={<MyBookingPage />}/>
        <Route path="/about" element={<Aboutpage />}/>
        <Route path="/contact" element ={<ContactPage />}/>
     </Routes>
    </>
  );
}

export default App;