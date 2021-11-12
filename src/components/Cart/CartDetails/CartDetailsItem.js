const CartDetailsItem = ({ product }) => {

    return (
        <div className="cart-details__item">
            <img src={ product.image } alt={ product.title } />
            <p className="cart-details__item__title">{ product.title }</p>
            <p className="cart-details__item__qtty">{ product.qtty }</p>
            <p className="cart-details__item__price">${ product.price }</p>
            <p className="cart-details__item__total">${ (product.price * product.qtty).toFixed(2) }</p>
        </div>
    )
}

export default CartDetailsItem
