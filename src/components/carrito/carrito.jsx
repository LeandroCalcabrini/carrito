import emptyCart from '../../images/illustration-empty-cart.svg'
import '../carrito/carrito.css'
import iconRemove from '../../images/icon-remove-item.svg'
import iconCarcon from '../../images/icon-carbon-neutral.svg'

const Carrito = ({carrito, eliminarProducto, calcularTotal, cantidadCarrito, confirmarPedido}) => {

  
    return(
        <section className="carrito-container">
            <div className='carrito'>
            <h3 className='carrito-title'>Your Cart ({cantidadCarrito()})</h3>
            <div className="carrito-container">
                {carrito.length === 0 
                ? <div>
                    <div className='emptyimg-container'>
                    <img src={emptyCart} alt="imagen de una torta" />

                    </div>
                   
                    <p className='text-vacio'>Your added items will appear here</p>

                </div> 
                : <div>
                    {carrito.map(productoCarrito => (
                        <div 
                        key={productoCarrito.id}
                        className='carrito-item'>
                            <div className='carrito-item-description'>
                            <span className='carrito-nombre'>{productoCarrito.name}</span>
                            <div className='carrito-item-number'>
                                <span className='carrito-cantidad'>{productoCarrito.cantidad}x</span>
                                <span className='carrito-precio'>@ ${productoCarrito.price}</span>
                                <span className='carrito-subtotal'>${productoCarrito.price * productoCarrito.cantidad}</span>
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
                    <div className='total-container'>
                        <p>Orden total</p>
                        <span className='precio-total'>${calcularTotal()}</span>   
                    </div>
                    
                    <div className='neutral-container'>
                        <img src={iconCarcon} alt="icono de un arbol" />
                        <p>This is a <span className='neutral-span'>carbon-neutral</span> delivery</p>
                    </div>
                    <button 
                    className='btn-confirm'
                    onClick={()=>confirmarPedido()}>Confirm Orden</button>    
                </div>
                }
                
            </div>
            </div>           
        </section>

    )
}

export default Carrito;