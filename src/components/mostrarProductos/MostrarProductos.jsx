import './mostrarProductos.css'
import IconAddToCart from '../../images/icon-add-to-cart.svg'
const MostrarProductos = ({productos, carrito, agregarProductoAlCarrito, agregarCantidad, reducirCantidad}) => {
    return(
        <section>
            <h1 className='titulo'>Desserts</h1>
             <div className="container-article">
           {productos.map(producto => {
            const productoEnCarrito = carrito.find(item => item.id === producto.id);
            return(
                <article
                className="card-productos"
                key={producto.id}>
                    <div className="card-container-img">
                        <img
                         className={productoEnCarrito ? 'card-img active' : 'card-img'}
                         src={producto.image.desktop} 
                         alt={producto.name} />
                        {productoEnCarrito ?
                        <div className="card-container-btns-cantidad">
                        <button
                        className="btn-cantidad"
                        onClick={() => reducirCantidad(producto)}>-</button>
                        <span>{productoEnCarrito.cantidad}</span>
                        <button
                        className="btn-cantidad"
                        onClick={()=> agregarCantidad(producto)}>+</button>
                        </div>
                         : 
                         <button
                         className="card-button"
                         onClick={() => agregarProductoAlCarrito(producto)}>
                            <img src={IconAddToCart} alt="" />
                            Add to card
                        </button>
                         }
                        
                    </div>
                    <div className="card-container-text">
                        <span className="producto-categoria">{producto.category}</span>
                        <h3 className="producto-nombre">{producto.name}</h3>
                        <span className="producto-precio">$ {producto.price}</span>
                    </div>
                </article>
            )
           })}
        </div>
        </section>
       
    )
};

export default MostrarProductos;