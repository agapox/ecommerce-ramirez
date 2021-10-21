import { useState } from "react/cjs/react.development"

const ItemCount = ({product}) => {
    const [qtty, setQtty] = useState(0)

    const handleStock = (operation) => {
        console.log(operation)
        if (operation === 'add') {
            product.stock > qtty && setQtty(qtty + 1)
        } else {
            qtty > 0 && setQtty(qtty - 1)
        }
    }

    return (
        <>
            <div class="qtty-btns">
                <button
                    disabled={qtty === 0}
                    onClick={() => handleStock('substract')}>
                    <span class="material-icons">
                        remove_circle
                    </span>
                </button>
                <span>{ qtty }</span>
                <button
                    disabled={qtty === product.stock}
                    onClick={() => handleStock('add')}>
                    <span class="material-icons">
                        add_circle
                    </span>
                </button>
            </div>
            <div class="add-cart-btn">
                <button disabled={qtty === 0}>add to cart</button>
            </div>
        </>
    )
}

export default ItemCount
