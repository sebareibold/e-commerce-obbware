
import React from "react";
import './Navbar.css'
import CartWidget from "../CartWidget/CartWidget";


const NavBar = () => {

    return (
        <>
            <header>
                <h1>OBBWARE</h1>
                <nav>
                    <li class="button">
                        <span class="button-content">Home</span>
                    </li>
                    <li class="button">
                        <span class="button-content">Productos</span>
                    </li>
                    <li class="button">
                        <span class="button-content">Contactos</span>
                    </li>
                    <li class="cart"><CartWidget /></li>
                </nav>
            </header>
        </>
    );
}
export default NavBar

