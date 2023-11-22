import React from "react";
import About from "./Menu/About";
import Services from "./Menu/Services";
import Clients from "./Menu/Clients";
import Practice from "./Menu/Practice";
import Contact from "./Menu/Contact";

export default function Menus(){
    return(
        <div>
            <h2>This is Menus component</h2>
            <About/>
            <Services/>
            <Clients/>
            <Practice/>
            <Contact/>
            <h4>Menu list</h4>
        </div>
    )
}