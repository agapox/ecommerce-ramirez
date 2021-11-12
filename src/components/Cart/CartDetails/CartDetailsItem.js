import { useContext } from "react"
import { CartContext } from "../../../context/cartContext"

const CartDetailsItem = ({ product }) => {

    const cartContext = useContext(CartContext)

    const deleteProductFromCart = (id) => {
        cartContext.removeFromCart(id)
    }

    const updateCart = (productid, operation) => {
        cartContext.updateCart(productid, operation)
    }

    return (
        <>
            <div className="cart-details__item">
                <img src={ product.image } alt={ product.title } />
                <p className="cart-details__item__title">{ product.title }</p>
                <div className="cart-details__item__qtty">
                    <button className="minus"
                        disabled={product.qtty === 1}
                        onClick={() => updateCart(product.id, 'remove')}>
                        <span className="material-icons">
                            remove_circle
                        </span>
                    </button>
                    <span className="number">
                        { product.qtty }
                    </span>
                    <button className="plus"
                        onClick={() => updateCart(product.id, 'add')}>
                        <span className="material-icons">
                            add_circle
                        </span>
                    </button>
                </div>
                <p className="cart-details__item__price">${ product.price }</p>
                <p className="cart-details__item__total">${ (product.price * product.qtty).toFixed(2) }</p>
                <div className="cart-details__item__delete">
                    <button onClick={() => deleteProductFromCart(product.id)}>
                        <span className="material-icons">
                            delete_forever
                        </span>
                    </button>
                </div>
            </div>            
        </>
    )
}

export default CartDetailsItem
