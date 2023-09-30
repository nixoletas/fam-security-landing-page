import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutComp from "../components/aboutComp";

export default function About() {
    return (
        <>
        <div className='content-container'>
        <Navbar/>
        <AboutComp />
        <Footer/>
        </div>
        </>
    )
}