import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/cartContext";

const CartWidget = ({ username }) => {

    const [showCartDetails, setShowCartDetails] = useState(false)
    
    const { name, lastname } = username
    const cartContext = useContext(CartContext)

    const [productsInCart, setProductsInCart] = useState(0)

    useEffect(() => {
        const getProductsInCart = () => {
            let count = 0;
            cartContext.getCart().forEach(prod => {
                count += prod.qtty
            });
            setProductsInCart(count)
        }
        getProductsInCart()
    }, [cartContext])

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
                <span>{ productsInCart }</span>
            </button>
            <div className={'shopping-cart__details' + (showCartDetails ? '' : ' hidden')}>
                CartDetails
            </div>
        </div>
    )
}

export default CartWidget
