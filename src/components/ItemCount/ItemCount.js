import { useState } from "react/cjs/react.development"

const ItemCount = ({ product }) => {
    const [qtty, setQtty] = useState(0)
    const minStock = 0;

    const handleStock = (operation) => {
        if (operation === 'add') {
            qtty <= product.stock && setQtty(qtty + 1)
        } else {
            qtty >= minStock && setQtty(qtty - 1)
        }
    }

    const handleAddToCart = (product, qtty) => {
        console.log(`${qtty} Products added to cart`)
        console.log(product)
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
                <button className="btn__add-cart" disabled={qtty === 0} onClick={() => handleAddToCart(product, qtty)}>add to cart (<span>{ qtty }</span>)</button>
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
