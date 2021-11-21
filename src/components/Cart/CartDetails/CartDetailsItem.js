import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../../context/cartContext"
import transformAmount from "../../../utilities/transformAmount"

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
                <Link className="cart-details__item__image"
                    to={`/product/${product.id}`}>
                    <img src={ product.image } alt={ product.title } />
                </Link>
                <Link className="cart-details__item__title"
                    to={`/product/${product.id}`}>
                    <p>{ product.title }</p>
                </Link>
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
                <p className="cart-details__item__price">{ transformAmount(product.price) }</p>
                <p className="cart-details__item__total">{ transformAmount(product.price * product.qtty) }</p>
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
