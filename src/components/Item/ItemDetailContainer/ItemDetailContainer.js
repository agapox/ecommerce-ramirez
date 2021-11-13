import { useEffect, useState } from "react"
import { useParams } from "react-router";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loading from "../../Loading/Loading";
import { app } from "../../../firebase/firebase";
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore/lite';

const ItemDetailContainer = () => {

    const { id } = useParams()    

    const [productDetail, setProductDetail] = useState();

    
    useEffect(() => {
        const db = getFirestore(app);
        const productsCol = collection(db, 'products')
        const getProductDetail = async (id) => {
            const productQuery = query(productsCol, where("id", "==", Number(id)))
            const querySnapshot = await getDocs(productQuery)
            const product = querySnapshot.docs.map(doc => doc.data()).pop()
            console.log(product)
            setProductDetail(product)
        }
        getProductDetail(id)
    },[id])

    return (
        productDetail ? <ItemDetail productDetail={productDetail} /> : <Loading />
    )

}

export default ItemDetailContainer
