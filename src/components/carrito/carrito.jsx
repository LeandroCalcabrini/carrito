import emptyCart from '../../images/illustration-empty-cart.svg'
import '../carrito/carrito.css'
import iconRemove from '../../images/icon-remove-item.svg'

const Carrito = ({carrito,eliminarProducto,calcularTotal}) => {

    
    return(
        <section className="carrito">
            <h3 className='carrito-title'>Your Cart</h3>
            <div className="carrito-container">
                {carrito.length === 0 
                ? <div>
                    <img src={emptyCart} alt="" />
                    <p>Your added items will appear here</p>

                </div> 
                : <div>
    
                    {carrito.map(productoCarrito => (
                        <div 
                        key={productoCarrito.id}
                        className='carrito-item'>
                            <div className='carrito-item-description'>
                            <span>{productoCarrito.name}</span>
                            <div className='carrito-item-number'>
                                <span>{productoCarrito.cantidad}x</span>
                                <span>@ ${productoCarrito.price}</span>
                                <span>${productoCarrito.price * productoCarrito.cantidad}</span>
                            </div>
                            </div>
                            <div>
                                <img
                                className='img-borrar'
                                onClick={() => eliminarProducto(productoCarrito)}
                                src={iconRemove} alt="icono de cruz">
                                </img> 
                            </div>
                        </div>              
                    ))}
                    <span>Total: ${calcularTotal()}</span>        
                </div>
                }
                
            </div>

        </section>

    )
}

export default Carrito;