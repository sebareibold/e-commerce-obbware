
import React, { useState } from "react";
import './Navbar.css'
import CartWidget from "../CartWidget/CartWidget";
import { Link } from 'react-router-dom';


const NavBar = () => {
    const [activePage, setActivePage] = useState("Productos");

    return (
        <header>
            <h1>OBBWARE</h1>
            <nav className="nav-list">
                <ul>
                    <li className="button" >
                        <Link to="/home" className={`button-content ${activePage === "Home" ? "active" : ""}`} onClick={() => setActivePage("Home")}>Home</Link>
                    </li>

                    <li className="button" >
                        <Link to="/productos" className={`button-content  ${activePage === "Productos" ? "active" : ""}` }onClick={() => setActivePage("Productos")} >Productos</Link>
                    </li>

                    <li className="button" >
                        <Link to="/contactos"className={`button-content  ${activePage === "Contactos" ? "active" : ""}` } onClick={() => setActivePage("Contactos")}>Contactos</Link>
                    </li>

                    <li className="cart">
                        <CartWidget />
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default NavBar;