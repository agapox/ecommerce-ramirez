import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = ({ product }) => {
    

    const [productDetail, setProductDetail] = useState();

    
    useEffect(() => {
        const getProductDetail = (product) => {
            fetch('https://fakestoreapi.com/products/' + product.id)
            .then(res=>res.json())
            .then(json=> {
                setProductDetail({...json, stock: product.stock})
            })
        }
        getProductDetail(product)
    },[product])

    return (
        productDetail ? <ItemDetail productDetail={productDetail} /> : ''
    )

}

export default ItemDetailContainer
