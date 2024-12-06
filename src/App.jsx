import { useState,useEffect } from 'react';
import './App.css'
import MostrarProductos from './components/mostrarProductos/MostrarProductos'
import Carrito from './components/carrito/carrito'

function App() {
  const [productos,setProductos] = useState([]);
  const [carrito,setCarrito] = useState([]);
  const [pedidoConfirmado, setPedidoConfirmado] = useState([]);


  const agregarProductoAlCarrito = (producto) => {
          setCarrito([...carrito,{...producto, cantidad :1}]);
  };

  const agregarCantidad = (producto) => {
      const masCantidad = carrito.map(item => item.id === producto.id 
      ? {...item, cantidad: item.cantidad +1}
      : item);
      setCarrito(masCantidad) 
  };

  const reducirCantidad = (producto) => {
      const menosCantidad = carrito.map(item => item.id === producto.id && item.cantidad > 1 
      ? {...item, cantidad: item.cantidad -1}
      : item);
      setCarrito(menosCantidad)
  };

  const eliminarProducto = (productoCarrito) => {
    const productoEliminado = carrito.filter(item => item.id !== productoCarrito.id)
    setCarrito(productoEliminado)
  };

  const calcularTotal = () => {
    return carrito.reduce((total,producto)=> total + (producto.price * producto.cantidad), 0)
  }

  const cantidadCarrito = () => {
    return carrito.reduce((total,producto) => total + producto.cantidad, 0)
  }

  const confirmarPedido = () => {
    if (carrito.length > 0){
      setPedidoConfirmado([carrito])
    }
  }



  useEffect(()=> {
    fetch('./data.json')
    .then(response => response.json())
    .then(data => setProductos(data))
    .catch(error => console.log('Error cargando productos:',error))
},[]);


  return (
    <main>
    <MostrarProductos
    productos={productos}
    carrito={carrito}
    agregarProductoAlCarrito={agregarProductoAlCarrito}
    agregarCantidad={agregarCantidad}
    reducirCantidad={reducirCantidad}
    />
    <Carrito
    carrito={carrito}  
    eliminarProducto={eliminarProducto}
    calcularTotal={calcularTotal}
    cantidadCarrito={cantidadCarrito}
    confirmarPedido={confirmarPedido}
    />
    </main>
  )
}

export default App
