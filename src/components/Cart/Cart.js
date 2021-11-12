import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/cartContext"
import CartDetailsContainer from "./CartDetails/CartDetailsContainer"

const Cart = () => {

    const [items, setItems] = useState(0)

    const cartContext = useContext(CartContext)

    useEffect(() => {
        const getItems = () => {
            setItems(cartContext.getProductsQttyInCart())
        }
        getItems()
    }, [cartContext, items])

    return (
        <div className="cart">
            {
                items !== 0 ?
                <CartDetailsContainer /> : (
                    <div>
                        <h2>
                            ¿No sabes qué comprar?
                        </h2>
                        <div>
                            <span className="material-icons">
                                add_shopping_cart
                            </span>
                        </div>
                        <h4>
                            Te ayudamos a conseguirlo, <Link to={'/'}>haz click acá</Link>
                        </h4>
                    </div>
                )
            }
            {
                items !== 0 && (
                    <div className="cart__place-order">
                        <button>Place order</button>
                    </div>
                )
            }
        </div>
    )
}

export default Cart
