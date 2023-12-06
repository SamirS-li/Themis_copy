import React from "react";
import { BrowserRouter as Router,Routes,Route,redirect} from "react-router-dom";
import MainMenu from './MainMenu';
import MenuContent from './MenuContent';
import About from "./Menu/About";
import Services from "./Menu/Services";
import Clients from "./Menu/Clients";
import Practice from "./Menu/Practice";
import Contact from "./Menu/Contact";
// import MenuContent from "./MenuContent";


export default function Main(){
    
   
    
    return(

        <div id="Main" >
            <Router>
                <Routes>
                {/* <Route index element={<MainMenu />} /> */}
                <Route
                        exact
                        path="/"
                        element={<MainMenu />}
                />
                <Route path="/menuContent" element={<MenuContent />}>
                    <Route path="/menuContent/about" element={<About />}/>
                    <Route path="/menuContent/services" element={<Services />}/>
                    <Route path="/menuContent/clients" element={<Clients />}/>
                    <Route path="/menuContent/practice" element={<Practice />}/>
                    <Route path="/menuContent/contact" element={<Contact />}/>
                </Route>
                
                </Routes>
            </Router>
        </div>
    )
}