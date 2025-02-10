import { useState, createContext } from "react";

export const CarritoContext = createContext({
    carrito: [],
    precioTotal: 0,
    cantidadTotal: 0
});

// eslint-disable-next-line react/prop-types
export const CarritoProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);
    const [precioTotal, setPrecioTotal] = useState(0);
    const [cantidadTotal, setCantidadTotal] = useState(0);



    const agregarCarrito = (item, cantidad) => {
        console.log(item);
        console.log(cantidad);

        const productoExistente = carrito.find(prod => prod.item.id == item.id);

        if (!productoExistente) {
            // Para items que NO están en el carrito
            setCarrito(prev => [...prev, { item, cantidad }]);
            setPrecioTotal(prev => prev + (item.precio * cantidad));
            setCantidadTotal(prev => prev + cantidad);

        } else {
            // Para items que ya están en el carrito
            setCarrito(prevCarrito => 
                prevCarrito.map(prod => 
                    prod.item.id === item.id ? { ...prod, cantidad: prod.cantidad + cantidad } : prod
                )
            );
        
            setCantidadTotal(prev => prev + cantidad);
            setPrecioTotal(prev => prev + (item.precio * cantidad));
        }
        console.log(carrito);
    };

    const eliminarProducto = (id) => {
        const productoSeleccionado = carrito.find(prod => prod.item.id === id);
        if (productoSeleccionado) {
            const carritoActualizado = carrito.filter(prod => prod.item.id !== id);

            setCarrito(carritoActualizado);
            setCantidadTotal(prev => prev - productoSeleccionado.cantidad);
            setPrecioTotal(prev => prev - (productoSeleccionado.item.precio * productoSeleccionado.cantidad));
        }
    };

    const vaciarCarrito = () => {
        setCarrito([]);
        setPrecioTotal(0);
        setCantidadTotal(0);
    };

    return (
        <CarritoContext.Provider value={{ carrito, cantidadTotal, precioTotal, agregarCarrito, eliminarProducto, vaciarCarrito }}>
            {children}
        </CarritoContext.Provider>
    );
};
