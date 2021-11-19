import { useEffect, useState } from "react"
import { useParams } from "react-router";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loading from "../../Loading/Loading";
import { app } from "../../../firebase/firebase";
import { getFirestore, doc, getDoc } from 'firebase/firestore/lite';
import NotFound from "../../NotFound/NotFound";

const ItemDetailContainer = () => {

    const { id } = useParams()    

    const [productDetail, setProductDetail] = useState();

    
    useEffect(() => {
        const db = getFirestore(app);
        const getProductDetail = async (id) => {
            const productRef = doc(db, "products", id);
            const productSnap = await getDoc(productRef);
            if (productSnap.exists()) {
                const product = productSnap.data()
                setProductDetail(product)
            } else {
                setProductDetail(null)
                console.log("No such document!");
            }
        }
        getProductDetail(id)
    },[id])

    return (
        productDetail ? <ItemDetail productDetail={productDetail} /> : 
        productDetail !== null ? <Loading /> : <NotFound />
    )

}

export default ItemDetailContainer
