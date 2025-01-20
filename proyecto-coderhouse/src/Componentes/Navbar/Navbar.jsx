
import React, { useState } from "react";
import './Navbar.css'
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    const [activePage, setActivePage] = useState("Productos");
  
    return (
        <header>
            <h1>OBBWARE</h1> 
            <nav className="nav-list">
                <ul>
                    <li className={`button ${activePage === "Home" ? "active" : ""}`} onClick={() => setActivePage("Home")}>
                        <span className="button-content">Home</span>
                    </li>
                    <li className={`button ${activePage === "Productos" ? "active" : ""}`} onClick={() => setActivePage("Productos")}>
                        <span className="button-content">Productos</span>
                    </li>
                    <li className={`button ${activePage === "Contactos" ? "active" : ""}`} onClick={() => setActivePage("Contactos")}>
                        <span className="button-content">Contactos</span>
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