import { createContext, useState } from "react"

export const CartContext = createContext([])
const { Provider } = CartContext

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const addToCart = (product, qtty) => {
        if (!isProductInCart(product.id)) {
            const cartProduct = {...product}
            cartProduct.qtty = qtty
            delete cartProduct.stock
            setCart([...cart, cartProduct])
        } else {
            let newCart = [...cart]
            newCart.find((el) => el.id === product.id).qtty += Number(qtty)
            setCart([...newCart])
        }
        product.stock -= qtty;
    }

    const removeFromCart = (productId) => {
        console.log("CartContext => removeFromCart")
        console.log(productId)
    }

    const clearCart = () => {
        setCart([])
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
