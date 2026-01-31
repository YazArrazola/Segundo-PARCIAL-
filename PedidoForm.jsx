import { useState } from "react";

function PedidoForm({ pedidos, setPedidos }) {
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState("");

  const agregarPedido = () => {
    if (nombre === "" || cantidad <= 0) {
      alert("Datos incorrectos");
      return;
    }

    const nuevo = { nombre, cantidad };

    setPedidos([...pedidos, nuevo]);
    setNombre("");
    setCantidad("");
  };

  return (
    <div className="card">
      <h2>Registrar Pedido</h2>
      <input
        placeholder="Nombre cliente"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="number"
        placeholder="Cantidad"
        value={cantidad}
        onChange={(e) => setCantidad(e.target.value)}
      />
      <button onClick={agregarPedido}>Agregar</button>
    </div>
  );
}

export default PedidoForm;
