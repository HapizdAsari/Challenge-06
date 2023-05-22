import React from "react";
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/HeroCariMobil';
import FilterCars from "./components/Filtercars";
import Footer from "./components/Footer";



function Cars() {
  return (
    <>
    <Navbar />
    <Hero />
    <FilterCars/>
    <Footer/>
    </>
  );
}

export default Cars;