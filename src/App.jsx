import React from "react";
import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css';

import MyNavbar from "./components/MyNavbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Clients from "./components/Client";
import Contact from "./components/Contact";

export default function App() {
    return (
        <div>
            <MyNavbar />
            <Home />
            <About />
            <Services />
            <Resume />
            <Portfolio />
            <Clients />
            <Contact />
        </div>
    )
}