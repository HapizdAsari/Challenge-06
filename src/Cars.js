import React from "react";
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/HeroCariMobil';
import Footer from "./components/Footer";


function Cars() {
  return (
    <>
    <Navbar />
    <Hero />
    <Footer/>
    </>
  );
}

export default Cars;