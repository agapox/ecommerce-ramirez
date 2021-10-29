import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ productDetail }) => {

    return (
        <>
            <h1>Product Details</h1>
            <img src={ productDetail.image } alt={ productDetail.title } />
            <h2>{ productDetail.title }</h2>
            <p>{ productDetail.price }</p>
            <p>{ productDetail.stock }</p>
            <p>{ productDetail.description }</p>
            <p>{ productDetail.category }</p>
            <p>{ productDetail.rating?.rate } ({ productDetail.rating?.count })</p>
            <ItemCount product={productDetail} />
        </>
    )

}

export default ItemDetail