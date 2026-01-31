function PedidoList({ pedidos, setPedidos }) {
  const dragItem = { current: null };

  const handleDragStart = (index) => {
    dragItem.current = index;
  };

  const handleDrop = (index) => {
    const copia = [...pedidos];
    const item = copia[dragItem.current];
    copia.splice(dragItem.current, 1);
    copia.splice(index, 0, item);
    setPedidos(copia);
  };

  const eliminar = (index) => {
    const copia = pedidos.filter((_, i) => i !== index);
    setPedidos(copia);
  };

  return (
    <div className="card">
      <h2>Pedidos</h2>

      {pedidos.map((p, index) => (
        <div
          key={index}
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragOver={(e) => e.preventDefault()}
          onDrop={() => handleDrop(index)}
          className="pedido"
        >
          {p.nombre} - {p.cantidad}
          <button onClick={() => eliminar(index)}>X</button>
        </div>
      ))}
    </div>
  );
}

export default PedidoList;
