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
            <button className="shopping-cart" onMouseEnter={toggleCartDetails}>
                <span className="username">{name} {lastname}</span>
                <span className="material-icons">
                    shopping_cart
                </span>
                {
                    productsInCart > 0 && <span>{ productsInCart }</span>
                }
            </button>
            <div className={'shopping-cart__details' + (showCartDetails ? '' : ' hidden')} onMouseLeave={toggleCartDetails}>
                {
                    productsInCart > 0 ? (
                        <>
                            <CartDetailsContainer />
                            <Link to={'/cart'} className="go-to-checkout">
                                Checkout
                                <span className="material-icons">
                                    shopping_cart_checkout
                                </span>
                            </Link>
                        </>
                    ) : (
                        <>
                            <h3>You don't have products in your cart</h3>
                            <p>Add some products to </p>
                        </>
                    )
                }
            </div>
        </div>
    )
}

export default CartWidget
