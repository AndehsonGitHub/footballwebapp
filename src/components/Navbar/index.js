import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";
import 'normalize.css'
import 'concrete.css'
 
const Navbar = () => {
    return (
        <>  
            <Nav>
                <NavMenu>
                    <NavLink to="/About" >
                        <button>About</button>
                    </NavLink>
                    <NavLink to="/blah">
                        <button>Blah</button>
                    </NavLink> 
                    <NavLink to="/Luton">
                        <button>Luton</button>
                    </NavLink>
                    <NavLink to="/mciars.js" >
                        <button>MCI 0-0 ARS</button>
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;