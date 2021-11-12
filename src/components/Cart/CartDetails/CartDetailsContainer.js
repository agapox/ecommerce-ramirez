import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../../context/cartContext"
import CartDetailsItem from "./CartDetailsItem"

const CartDetailsContainer = () => {

    const cartContext = useContext(CartContext)

    const [products, setProducts] = useState([])
    const [productsInCart, setProductsInCart] = useState(0)
    const [totalInCart, setTotalInCart] = useState(0)

    useEffect(() => {
        const getProductsInCart = () => {
            setProducts([...cartContext.getCart()])
        }
        const getProductQtty = () => {
            setProductsInCart(cartContext.getProductsQttyInCart())
        }
        const getProductsTotalInCart = () => {
            setTotalInCart(cartContext.getProductsTotalInCart())
        }
        getProductQtty()
        getProductsTotalInCart()
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
