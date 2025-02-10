// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore, writeBatch, doc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsRU2tqsTOwMsFOA7c4WojuzuAiijDFYE",
  authDomain: "obbware-ecommerce.firebaseapp.com",
  projectId: "obbware-ecommerce",
  storageBucket: "obbware-ecommerce.firebasestorage.app",
  messagingSenderId: "980866115580",
  appId: "1:980866115580:web:a83ac09da636140e0bf479",
  measurementId: "G-6JQ4X4WZD1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export async function getItems() {
  const querySnapshot = await getDocs(collection(db, 'items'));
  querySnapshot.forEach(doc => console.log(`${doc.id} => ${doc.data().nombre}`))
}





/*
const misProductos = [
  { nombre: "Laptop Gaming", categoria: "Hardware", precio: 1500, especificaciones: "Procesador: Intel Core i7, RAM: 16GB, Almacenamiento: 1TB SSD, Pantalla: 15.6'' FHD", img: "/laptop.png" },
  { nombre: "Teclado Mecánico RGB", categoria: "Hardware", precio: 120, especificaciones: "Tipo: Mecánico, Conexión: USB, Retroiluminación: RGB, Teclas: 104", img: "/public/teclado.jpg" },
  { nombre: "Antivirus Premium", categoria: "Software", precio: 50, especificaciones: "Plataforma: Windows - macOS, Licencia: 1 año, Protección: Completa contra malware", img: "/antivirus.png" },
  { nombre: "Mouse Inalámbrico", categoria: "Hardware", precio: 40, especificaciones: "Tipo: Óptico, Conexión: Bluetooth, DPI: 1600, Batería: 12 meses", img: "/MOUSE.jpg" },
  { nombre: "Editor de Video Pro", categoria: "Software", precio: 200, especificaciones: "Plataforma: Windows - macOS, Características: Edición 4K, Formatos: MP4, AVI, MOV", img: "/OIP.jpg" },
  { nombre: "Tarjeta Gráfica RTX 3060", categoria: "Hardware", precio: 700, especificaciones: "Memoria: 8GB GDDR6, Marca: OBBWAREDIA, Modelo: RTX 3060, Núcleos CUDA: 3584", img: "/TAREJTAG.jpg" },
  { nombre: "Auriculares Inalámbricos", categoria: "Hardware", precio: 80, especificaciones: "Conexión: Bluetooth, Batería: 20 horas, Cancelación de ruido: Sí, Micrófono: Incorporado", img: "/auris.jpg" },
  { nombre: "Software Empresarial", categoria: "Software", precio: 500, especificaciones: "Plataforma: Windows - macOS, Funcionalidades: Gestión de proyectos, CRM, ERP", img: "/OIP.jpg" },
  { nombre: "Monitor 27'' 144Hz", categoria: "Hardware", precio: 300, especificaciones: "Tamaño: 27'', Resolución: 2560x1440, Frecuencia: 144Hz, Panel: IPS", img: "/monitor.jpg" },
  { nombre: "Disco Duro Externo 2TB", categoria: "Hardware", precio: 90, especificaciones: "Capacidad: 2TB, Conexión: USB 3.0, Velocidad: 5400RPM", img: "/disco_duro.jpg" },
  { nombre: "Impresora Multifunción", categoria: "Hardware", precio: 150, especificaciones: "Tipo: Láser, Conectividad: WiFi - USB, Funciones: Impresión, escaneo, copiado", img: "/impresora.jpg" },
  { nombre: "Silla Gamer", categoria: "Accesorios", precio: 250, especificaciones: "Material: Cuero sintético, Reclinable: Sí, Altura ajustable: Sí", img: "/silla_gamer.jpg" },
  { nombre: "Cámara Web HD", categoria: "Hardware", precio: 60, especificaciones: "Resolución: 1080p, Micrófono: Integrado, Conexión: USB", img: "/camara_web.jpg" },
  { nombre: "Software de Diseño Gráfico", categoria: "Software", precio: 300, especificaciones: "Plataforma: Windows - macOS, Funcionalidades: Diseño vectorial, edición de imágenes", img: "/software_diseno.jpg" },
  { nombre: "Microprocesador Ryzen 7", categoria: "Hardware", precio: 350, especificaciones: "Núcleos: 8, Hilos: 16, Frecuencia: 3.8GHz", img: "/procesador.jpg" },
  { nombre: "Memoria RAM 16GB DDR4", categoria: "Hardware", precio: 75, especificaciones: "Capacidad: 16GB, Velocidad: 3200MHz, Tipo: DDR4", img: "/ram.jpg" },
  { nombre: "Fuente de Poder 750W", categoria: "Hardware", precio: 110, especificaciones: "Potencia: 750W, Certificación: 80+ Gold, Modular: Sí", img: "/fuente_poder.jpg" },
  { nombre: "Mouse Pad RGB", categoria: "Accesorios", precio: 35, especificaciones: "Tamaño: 90x40 cm, Iluminación: RGB, Base: Antideslizante", img: "/mousepad.jpg" },
  { nombre: "Porta Auriculares con USB", categoria: "Accesorios", precio: 50, especificaciones: "Material: Aluminio, Puertos: 3x USB 3.0, Iluminación: RGB", img: "/porta_auris.jpg" },
  { nombre: "Soporte para Monitor", categoria: "Accesorios", precio: 45, especificaciones: "Material: Acero, Ajustable: Sí, Capacidad: Hasta 27''", img: "/soporte_monitor.jpg" },
  { nombre: "Kit de Limpieza para PC", categoria: "Accesorios", precio: 20, especificaciones: "Incluye: Brocha, paño de microfibra, aire comprimido, solución limpiadora", img: "/kit_limpieza.jpg" },
  { nombre: "Reposamuñecas Ergonómico", categoria: "Accesorios", precio: 15, especificaciones: "Material: Gel de memoria, Base: Antideslizante, Uso: Teclado y mouse", img: "/reposamuñecas.jpg" },
  { nombre: "Organizador de Cables", categoria: "Accesorios", precio: 10, especificaciones: "Material: Silicona, Capacidad: 5 cables, Adhesivo: Sí", img: "/organizador_cables.jpg" },
  { nombre: "Lámpara LED de Escritorio", categoria: "Accesorios", precio: 60, especificaciones: "Brillo: Ajustable, Modos: 3 temperaturas de color, Puerto USB: Sí", img: "/lampara_led.jpg" }
];


const subirProductos = async () => {
  const batch = writeBatch(db);
  const productosRef = collection(db,"productos");

  misProductos.forEach((producto)=> {
    const nuevoDoc = doc(productosRef) ;
    batch.set(nuevoDoc, producto);
  })

  try{
    await batch.commit();
    console.log("Se subieron todos los archivos");
  }catch(error){
    console.log("Error al subir los archivos:", error);
  }
}

//subirProductos()

 */