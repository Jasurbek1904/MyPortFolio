import React from "react";
import img from "../Images/imgDesign.jpg"
import MyTypeWriter from "typewriter-effect";

export default function Home() {
    return (
        <div className="home" id="home">
            <div className="mynavbar">
                <div className="card bg-dark text-white">
                    <img src={img} className="card-img" alt="..." />
                    <div className="card-img-overlay">
                        <div className="container">
                            <span className="topline">WelCome</span>
                            <h1 className="mt-3"><span className="multiText">
                                <MyTypeWriter options={{
                                    strings: ['I am Jasurbek.', 'I am Web Developer', 'I am Coder', "I am a Designer"],
                                    autoStart: true,
                                    loop: true

                                }} /></span></h1>
                            <p className="topline base">Based in Fergana city, Uzbekistan</p>
                            <button className="btnHire">Hire me</button>
                        </div>
                        <div>
                            <a href="#jasurbek">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-circle-fill arrowIcon" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}