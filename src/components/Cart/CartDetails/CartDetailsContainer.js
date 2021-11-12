import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../../context/cartContext"
import CartDetailsItem from "./CartDetailsItem"

const CartDetailsContainer = ({productsInCart, totalInCart}) => {

    const cartContext = useContext(CartContext)

    const [products, setProducts] = useState([])

    useEffect(() => {
        const getProductsInCart = () => {
            setProducts([...cartContext.getCart()])
        }
        getProductsInCart();
    }, [cartContext])

    return (
        <>
            {
                products.map((product, i) => {
                    return <CartDetailsItem product={product} key={i} />
                })
            }
            {
                productsInCart > 0 && (
                    <>
                        <p>{ productsInCart } items in cart</p>
                        <p>Total: ${ totalInCart }</p>
                    </>
                )
            }
        </>
    )
}

export default CartDetailsContainer
