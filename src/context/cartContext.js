import { createContext , useEffect, useState } from "react"

export const CartContext = createContext([])
const { Provider } = CartContext

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    useEffect(() => {
        console.log(cart)
    }, [cart])

    const addToCart = (product, qtty) => {
        if (!isProductInCart(product.id)) {
            console.log("CartContext => addToCart")
            product.qtty = qtty
            delete product.stock
            setCart([...cart, product])
        } else {
            let newCart = cart
            newCart.find((el) => el.id === product.id).qtty += Number(qtty)
            setCart([...newCart])
        }
    }

    const removeFromCart = (productId) => {
        console.log("CartContext => removeFromCart")
        console.log(productId)
    }

    const clearCart = () => {
        console.log("CartContext => clearCart")
        setCart([])
        console.log(cart)
    }

    const isProductInCart = (productId) => {
        return cart.filter(product => product.id === productId).length > 0
    }

    const getCart = () => {
        return cart
    }

    const cartMethods = {
        getCart,
        addToCart,
        removeFromCart,
        clearCart
    }

    // const valorDelContexto = {
    //     cart : cart,
    //     addToCart : addToCart
    // }


    return (
        <Provider value={cartMethods}>
            {children}
        </Provider>
    )
}

export default CartProvider
