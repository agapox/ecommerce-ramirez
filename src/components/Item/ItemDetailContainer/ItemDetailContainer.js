import { useEffect, useState } from "react"
import { useParams } from "react-router";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loading from "../../Loading/Loading";

const ItemDetailContainer = () => {

    const { id } = useParams()    

    const [productDetail, setProductDetail] = useState();

    
    useEffect(() => {
        const getProductDetail = (id) => {
            fetch('https://fakestoreapi.com/products/' + id)
            .then(res=>res.json())
            .then(json=> {
                setProductDetail({...json, stock: Math.floor(Math.random()*11 + 1) - 1})
            })
        }
        getProductDetail(id)
    },[id])

    return (
        productDetail ? <ItemDetail productDetail={productDetail} /> : <Loading />
    )

}

export default ItemDetailContainer
