import { useContext, useState } from "react"
import { useEffect } from "react/cjs/react.development";
import { CartContext } from "../../../context/cartContext";

const ItemCount = ({ product }) => {
    const [qtty, setQtty] = useState(0)
    const minStock = 0;

    const cartMethods = useContext(CartContext)
    useEffect(() => {
        console.log('hola')
    },[qtty])


    const handleStock = (operation) => {
        if (operation === 'add') {
            qtty <= product.stock && setQtty(qtty + 1)
        } else {
            qtty >= minStock && setQtty(qtty - 1)
        }
    }

    const handleAddToCart = (product, qtty) => {
        cartMethods.addToCart(product, Number(qtty))
        setQtty(0)
    }

    return (
        <>
            <div className="qtty-btns">
                <button
                    disabled={qtty === 0}
                    onClick={() => handleStock('substract')}>
                    <span className="material-icons">
                        remove_circle
                    </span>
                </button>
                <button
                    className="btn__add-cart"
                    disabled={qtty === 0}
                    onClick={() => handleAddToCart(product, qtty)}>
                    add to cart
                    {
                        qtty > 0 && (<span>
                            &nbsp;({ qtty })
                        </span>)
                    }
                </button>
                <button
                    disabled={qtty === product.stock}
                    onClick={() => handleStock('add')}>
                    <span className="material-icons">
                        add_circle
                    </span>
                </button>
            </div>
        </>
    )
}

export default ItemCount
