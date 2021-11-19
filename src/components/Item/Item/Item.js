import { Link } from "react-router-dom"
import transformAmount from "../../../utilities/transformAmount"
import ItemCount from "../ItemCount/ItemCount"

const Item = ({ product }) => {
    return (
        <div className="product__item">
            <h2 className="product__item__price">{transformAmount(product.price)}</h2>
            <Link to={ `/product/${product.id}` }>
                <div className="product__item__img">
                    <img src={ product.image } alt={ product.title } />
                </div>
            </Link>
            <Link to={ `/product/${product.id}` }>
                <p className="product__item__title">{ product.title }</p>
            </Link>
            <ItemCount product={ product } />
        </div>
    )
}

export default Item
