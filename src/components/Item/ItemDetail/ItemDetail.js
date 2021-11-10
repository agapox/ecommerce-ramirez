import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ productDetail }) => {

    return (
        <div className="product__details-cont">
            <h2>{ productDetail.title }</h2>
            <div className="product__details">
                <img className="product__details__img" src={ productDetail.image } alt={ productDetail.title } />
                <div>
                    <h3 className="product__details__description-title">Description</h3>
                    <p className="product__details__description-text">
                        { productDetail.description }
                    </p>
                    <h4 className="product__details__stock">
                        Stock: <span>{ productDetail.stock }</span>
                    </h4>
                    <h4 className="product__details__cat">
                        Category:
                        <Link to={`/category/${encodeURIComponent(productDetail.category)}`} >
                            { productDetail.category }
                        </Link>
                    </h4>
                    <h4 className="product__details__rating">
                        Rating: { productDetail.rating?.rate }
                        &nbsp;({ productDetail.rating?.count } reviews)
                    </h4>
                    <h4 className="product__details__price">
                        <span>USD $</span>{ productDetail.price }
                    </h4>
                    <ItemCount product={productDetail} />
                </div>
            </div>
        </div>
    )

}

export default ItemDetail