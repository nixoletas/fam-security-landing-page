import React from "react";
import Navbar from "../components/Navbar";

export default function Service() {
    return (
        <>
        <Navbar/>
        <div className='text-4xl p-6 text-white h-screen'>
        <div id='services' className='w-full h-20'></div>
        <h1 className="animate-fade-in-down">Services</h1>
        </div>
        </>
    )
}