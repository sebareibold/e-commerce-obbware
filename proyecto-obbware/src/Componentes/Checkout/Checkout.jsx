import { useContext, useState } from "react";
import "./Checkout.css";
import { db } from "../../Service/config";
import { collection, addDoc } from "firebase/firestore";
import { CarritoContext } from "../../Context/CarritoContext";

const Checkout = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmation, setEmailConfirmation] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [numeroTarjeta, setNumeroTarjeta] = useState("");
  const [fechaDeVencimiento, setFechaDeVencimiento] = useState("");
  const [cvv, setCvv] = useState("");
  const [error, setError] = useState("");
  const [ordenId, setOrdenId] = useState("");

  const { carrito, vaciarCarrito, precioTotal } = useContext(CarritoContext);

  // eslint-disable-next-line no-unused-vars
  const [muestroPedido, setMuestroPedido] = useState(false);

  const manejadorFormulario = async (e) => {
    e.preventDefault();

    if (!nombre || !email || !emailConfirmation || !direccion || !telefono || !numeroTarjeta || !fechaDeVencimiento || !cvv) {
      setError("Por favor, complete todos los campos.");
      return;
    }

    if (email !== emailConfirmation) {
      setError("Los correos electrónicos no coinciden.");
      return;
    }

    const orden = {
      items: carrito.map((prod) => ({
        id: prod.item.id,
        nombre: prod.item.nombre,
        cantidad: prod.cantidad,
      })),
      precioTotal,
      fecha: new Date(),
      nombre,
      email,
    };

    try {
      const docRef = await addDoc(collection(db, "ordenes"), orden);
      setOrdenId(docRef.id);
      setMuestroPedido(true); 
      vaciarCarrito();
    } catch (error) {
      setError(`Hubo un error al procesar tu pedido: ${error.message}`);
    }
  };

  return (
    <div className="checkout-container">

      <h3 className="checkout-titulo">{muestroPedido ? "Pedido Confirmado" : "Checkout"}</h3>

      {muestroPedido ? (
        <div className="pedido-confirmado">
          <h3>¡Gracias por tu compra!</h3>
          <p><strong>ID de Orden:</strong> {ordenId}</p>
          <p><strong>Fecha del pedido:</strong> {new Date().toLocaleString()}</p>
          <p>Te hemos enviado un correo con los detalles de tu compra.</p>
        </div>
      ) : (
        <form onSubmit={manejadorFormulario} className="form-checkout">
          <div className="checkout-detalles">
            <div className="info-facturacion">
              <h3>Información de facturación</h3>
              <div className="input-item">
                <label htmlFor="name">Nombre completo</label>
                <input type="text" name="name" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
              </div>
              <div className="input-item">
                <label htmlFor="email">Correo electrónico</label>
                <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div className="input-item">
                <label htmlFor="emailConfirmation">Confirmar correo electrónico</label>
                <input type="email" name="emailConfirmation" value={emailConfirmation} onChange={(e) => setEmailConfirmation(e.target.value)} required />
              </div>
              <div className="input-item">
                <label htmlFor="address">Dirección</label>
                <input type="text" name="address" value={direccion} onChange={(e) => setDireccion(e.target.value)} required />
              </div>
              <div className="input-item">
                <label htmlFor="phone">Teléfono</label>
                <input type="text" name="phone" value={telefono} onChange={(e) => setTelefono(e.target.value)} required />
              </div>
            </div>

            <div className="payment-info">
              <h3>Forma de pago</h3>
              <div className="input-item">
                <label htmlFor="card-number">Número de tarjeta</label>
                <input type="text" id="card-number" name="card-number" value={numeroTarjeta} onChange={(e) => setNumeroTarjeta(e.target.value)} required />
              </div>
              <div className="input-item">
                <label htmlFor="expiry-date">Fecha de caducidad</label>
                <input type="text" id="expiry-date" name="expiry-date" value={fechaDeVencimiento} onChange={(e) => setFechaDeVencimiento(e.target.value)} required />
              </div>
              <div className="input-item">
                <label htmlFor="cvv">CVV</label>
                <input type="text" id="cvv" name="cvv" value={cvv} onChange={(e) => setCvv(e.target.value)} required />
              </div>
            </div>
          </div>

          <div className="checkout-summary">
            <h3>Resumen del pedido</h3>
            {carrito.map((prod) => (
              <div key={prod.item.id} className="order-item">
                <span className="item-name">
                  {prod.item.nombre}, Cantidad: {prod.cantidad}
                </span>
                <span className="item-price">${prod.item.precio * prod.cantidad}</span>
              </div>
            ))}

            <div className="order-item total">
              <span className="item-name">Total</span>
              <span className="item-price">${precioTotal}</span>
            </div>

            <button className="btn-checkout" type="submit">
              Confirmar Pedido
            </button>

            {error && <div className="error">{error}</div>}
          </div>
        </form>
      )}
    </div>
  );
};

export default Checkout;
