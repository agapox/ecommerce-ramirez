import ItemCount from "../ItemCount/ItemCount"

const Item = ({ product }) => {
    return (
        <div className="product__item">
            <div className="product__item__img">
                <img src={ product.image } alt={ product.title } />
            </div>
            <p className="product__item__title">{ product.title }</p>
            <h2 className="product__item__price">${product.price.toFixed(2)}</h2>
            <ItemCount product={ product } />
        </div>
    )
}

export default Item
