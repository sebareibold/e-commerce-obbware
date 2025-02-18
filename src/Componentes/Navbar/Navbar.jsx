import { useState } from "react";
import './Navbar.css';
import CartWidget from "../CartWidget/CartWidget";
import { Link } from 'react-router-dom';

const NavBar = ({ setCategoriaSeleccionada }) => {
    const [activePage, setActivePage] = useState("Productos");
    const [menuVisible, setMenuVisible] = useState(false);
    const [menuAbierto, setMenuAbierto] = useState(false);

    const desplegarCategorias = () => { setMenuVisible(true); };
    const plegarCategorias = () => { setMenuVisible(false); };

    const navSetearCategoria = (categoria) => {
        setCategoriaSeleccionada(categoria);
    };

    return (
        <header className="no-tailwind">
            <h1>OBBWARE</h1>

            {/* Botón menú hamburguesa */}
            <button className="menu-toggle" onClick={() => setMenuAbierto(!menuAbierto)}> ☰ </button>

            <nav className={`nav-list ${menuAbierto ? "open" : ""}`}>
                <ul>
                    <li className="button">
                        <Link to="/" className={`button-content ${activePage === "Home" ? "active" : ""}`} onClick={() => setActivePage("Home")}>Home</Link>
                    </li>

                    <li className="button dropdown-container" onMouseEnter={desplegarCategorias} onMouseLeave={plegarCategorias}>
                        <Link to="/productos" className={`button-content ${activePage === 'Productos' ? 'active' : ''}`}
                            onClick={() => { setActivePage('Productos'); setCategoriaSeleccionada(''); }} >Productos</Link>
                        {menuVisible &&
                            (<ul className="dropdown">
                                <li>
                                    <Link className="elementoMenu" to="/productos" onClick={() => { setActivePage('Productos'); navSetearCategoria('Hardware') }}>Hardware</Link>
                                </li>
                                <li>
                                    <Link className="elementoMenu" to="/productos" onClick={() => { setActivePage('Productos'); navSetearCategoria('Software') }}>Software</Link>
                                </li>
                                <li>
                                    <Link className="elementoMenu" to="/productos" onClick={() => { setActivePage('Productos'); navSetearCategoria('Accesorios') }}>Accesorios</Link>
                                </li>
                            </ul>)}
                    </li>

                    <li className="button">
                        <Link to="/contactos" className={`button-content  ${activePage === "Contactos" ? "active" : ""}`} onClick={() => setActivePage("Contactos")}>Contactos</Link>
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
