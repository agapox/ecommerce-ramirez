import Item from "../Item/Item"
import Loading from "../Loading/Loading"

const ItemList = ({products, catName}) => {

    return (
        <section>
            <h2 className="section__title">
                {
                    catName !== undefined ? catName : 'Products'
                }
            </h2>
            { products.length === 0 && <Loading /> }
            <div className="product__list">
                { products.length > 0 && products.map((product, i) => <Item product={product} key={i} />) }
            </div>
        </section>
    )
}

export default ItemList
