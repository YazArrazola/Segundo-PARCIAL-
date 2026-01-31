import { useEffect, useState } from "react";
import PedidoForm from "./components/PedidoForm";
import PedidoList from "./components/PedidoList";

function App() {
  const [pedidos, setPedidos] = useState([]);
  const [promo, setPromo] = useState(true);

  useEffect(() => {
    const data = localStorage.getItem("pedidos");
    if (data) setPedidos(JSON.parse(data));
  }, []);

  useEffect(() => {
    localStorage.setItem("pedidos", JSON.stringify(pedidos));
  }, [pedidos]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPromo(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container">
      <h1>🧼 Jabón Honeymoon</h1>

      {promo && <div className="promo">Promoción activa 10% descuento</div>}

      <PedidoForm setPedidos={setPedidos} pedidos={pedidos} />
      <PedidoList pedidos={pedidos} setPedidos={setPedidos} />
    </div>
  );
}

export default App;
