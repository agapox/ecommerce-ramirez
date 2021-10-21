import ItemCount from "../ItemCount/ItemCount"

const ItemListContainer = ({products}) => {
    console.log(products)
    return (
        <div>
            <h3>Products</h3>
            <div className="product__list">
                {
                    products.map((prod, i) => (
                        <div
                            className="product__container"
                            key={'product-'+i}>
                            <p>{ prod.name } ({ prod.stock })</p>
                            <img
                                className="product__img"
                                src={prod.img}
                                alt={ prod.name } />

                            <ItemCount product={prod} />
                        </div>
                    )
                    
                )}
            </div>
        </div>
    )
}

export default ItemListContainer
