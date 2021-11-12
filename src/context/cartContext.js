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
        console.log(cart.filter(((el) => el.id !== productId)))
        
        setCart(cart.filter(((el) => el.id !== productId)))
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

    const getProductsQttyInCart = () => {
        let count = 0;
        cart.forEach(prod => {
            count += prod.qtty
        });
        return count
    }
    const getProductsTotalInCart = () => {
        let amount = 0;
        cart.forEach(prod => {
            amount += prod.price * prod.qtty
        });
        return Number(amount.toFixed(2))
    }

    const updateCart = (productId, operation) => {
        const newCart = [...cart];
        if (operation === 'add') {
            newCart.map(el => el.id === productId && el.qtty++ && el)
        } else {
            newCart.map(el => el.id === productId && el.qtty-- && el)
        }
        setCart(newCart)
    }

    const cartMethods = {
        getCart,
        addToCart,
        removeFromCart,
        clearCart,
        getProductsQttyInCart,
        getProductsTotalInCart,
        updateCart
    }


    return (
        <Provider value={cartMethods}>
            {children}
        </Provider>
    )
}

export default CartProvider
