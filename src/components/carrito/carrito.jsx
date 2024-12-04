import emptyCart from '../../images/illustration-empty-cart.svg'
import '../carrito/carrito.css'

const Carrito = ({carrito}) => {

    
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
    
                    {carrito.map(item => (
                        <div className='carrito-item'>
                            <div className='carrito-item-description'>
                            <span>{item.name}</span>
                            <div className='carrito-item-number'>
                                <span>{item.cantidad}x</span>
                                <span>@ ${item.price}</span>
                                <span>$250</span>
                            </div>
                            </div>
                            <button>x</button>
                        </div>
                    ))}
                   
                </div>
                }
                
            </div>

        </section>

    )
}

export default Carrito;