import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../../context/cartContext";
import CartDetailsContainer from "../CartDetails/CartDetailsContainer";

const CartWidget = ({ username }) => {

    const [showCartDetails, setShowCartDetails] = useState(false)
    
    const { name, lastname } = username
    const cartContext = useContext(CartContext)

    const [productsInCart, setProductsInCart] = useState(0)
    const [totalInCart, setTotalInCart] = useState(0)

    useEffect(() => {
        const getProductsInCart = () => {
            let count = 0;
            cartContext.getCart().forEach(prod => {
                count += prod.qtty
            });
            setProductsInCart(count)
        }
        getProductsInCart()
        const getProductsTotalInCart = () => {
            let amount = 0;
            cartContext.getCart().forEach(prod => {
                amount += prod.price * prod.qtty
            });
            setTotalInCart(Number(amount.toFixed(2)))
        }
        getProductsInCart()
        getProductsTotalInCart()
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
                        <CartDetailsContainer
                            productsInCart={productsInCart}
                            totalInCart={totalInCart}/>
                        <NavLink to={'/cart'} className="go-to-checkout">Go to checkout</NavLink>
                    </div>
                )
            }
        </div>
    )
}

export default CartWidget
