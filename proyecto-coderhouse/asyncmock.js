const misProductos = [
    { id: 1, nombre: "Laptop Gaming", categoria: "Hardware", precio: 1500, especificaciones: "Procesador: Intel Core i7, RAM: 16GB, Almacenamiento: 1TB SSD", img: "/laptop.png" },
    { id: 2, nombre: "Teclado Mecánico RGB", categoria: "Hardware", precio: 120, especificaciones: "Tipo: Mecánico, Conexión: Cable USB, Retroiluminación: RGB", img: "/public/teclado.jpg"},
    { id: 3, nombre: "Antivirus Premium", categoria: "Software", precio: 50, especificaciones: "Plataforma: Windows - macOS, Licencia: 1 año ", img: "/antivirus.png" },
    { id: 4, nombre: "Mouse Inalámbrico", categoria: "Hardware", precio: 40, especificaciones: "Tipo: Óptico, Conexión: Bluetooth, DPI: 1600", img: "/MOUSE.jpg" },
    { id: 5, nombre: "Editor de Video Pro", categoria: "Software", precio: 200, especificaciones: "Plataforma: Windows - macOS, Características: Edición 4K", img: "/OIP.jpg" },
    { id: 6, nombre: "Tarjeta Gráfica", categoria: "Hardware", precio: 700, especificaciones: "Memoria: 8GB GDDR6, Marca: OBBWAREDIA, Modelo: RTX 3060", img: "/TAREJTAG.jpg" },
    { id: 7, nombre: "Auriculares Inalámbricos", categoria: "Hardware", precio: 80, especificaciones: "Conexión: Bluetooth, Batería: 20 horas, Cancelación de ruido: Sí", img: "/auris.jpg" },
    { id: 8, nombre: "Software Empresarial", categoria: "Software", precio: 500, especificaciones: "Plataforma: Windows - macOS", img: "/OIP.jpg" }
];

export const getProductos = (filtro) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                const filtrados = filtro ? misProductos.filter(filtro) : misProductos;
                resolve(filtrados);
            } catch (error) {
                reject(new Error("Error al filtrar los productos"));
            }
        }, 1500);
    });
};
export const getProducto = (id) => {
    return new Promise(resolve => {
        const producto = misProductos.find(item => item.id === id);
        resolve(producto)
    }, 1500)    
}
