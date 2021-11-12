import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/cartContext";
import CartDetailsContainer from "../CartDetails/CartDetailsContainer";

const CartWidget = ({ username }) => {

    const [showCartDetails, setShowCartDetails] = useState(false)
    
    const { name, lastname } = username
    const cartContext = useContext(CartContext)

    const [productsInCart, setProductsInCart] = useState(0)

    useEffect(() => {
        const getProductsInCart = () => {
            setProductsInCart(cartContext.getProductsQttyInCart())
        }
        getProductsInCart()
    }, [cartContext, productsInCart])

    const toggleCartDetails = () => {
        setShowCartDetails(showCartDetails ? false : true)
    }

    return (
        <div className="cart-widget">
            <button className="shopping-cart" onClick={toggleCartDetails}>
                <span className="username">{name} {lastname}</span>
                <span className="material-icons">
                    shopping_cart
                </span>
                {
                    productsInCart > 0 && <span>{ productsInCart }</span>
                }
            </button>
            {
                productsInCart > 0 && (
                    <div className={'shopping-cart__details' + (showCartDetails ? '' : ' hidden')}>
                        <CartDetailsContainer />
                        <Link to={'/cart'} className="go-to-checkout">
                            Checkout
                            <span className="material-icons">
                                shopping_cart_checkout
                            </span>
                        </Link>
                    </div>
                )
            }
        </div>
    )
}

export default CartWidget
