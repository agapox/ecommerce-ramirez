import Item from "../Item/Item"
import Loading from "../Loading/Loading"

const ItemList = ({products}) => {

    return (
        <div>
            <h2>Products</h2>
            { products.length === 0 && <Loading /> }
            <div className="product__list">
                { products.length > 0 && products.map((product, i) => <Item product={product} key={i} />) }
            </div>
        </div>
    )
}

export default ItemList
