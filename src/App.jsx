import { useState,useEffect } from 'react';
import './App.css'
import MostrarProductos from './components/mostrarProductos/MostrarProductos'
import Carrito from './components/carrito/carrito'

function App() {
  const [productos,setProductos] = useState([]);
  const [carrito,setCarrito] = useState([]);

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

  useEffect(()=> {
    fetch('./data.json')
    .then(response => response.json())
    .then(data => setProductos(data))
    .catch(error => console.log('Error cargando productos:',error))
},[])

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
    carrito={carrito}/>
    </main>
  )
}

export default App
