import emptyCart from '../../images/illustration-empty-cart.svg'
import '../carrito/carrito.css'

const Carrito = ({carrito,eliminarProducto}) => {

    
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
    
                    {carrito.map(producto => (
                        <div className='carrito-item'>
                            <div className='carrito-item-description'>
                            <span>{producto.name}</span>
                            <div className='carrito-item-number'>
                                <span>{producto.cantidad}x</span>
                                <span>@ ${producto.price}</span>
                                <span>$250</span>
                            </div>
                            </div>
                            <button
                            onClick={() => eliminarProducto(producto)}>x</button>
                        </div>
                    ))}
                   
                </div>
                }
                
            </div>

        </section>

    )
}

export default Carrito;