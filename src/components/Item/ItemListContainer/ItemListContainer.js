import { useState, useEffect } from "react"
import { useParams } from "react-router"
import ItemList from "../ItemList/ItemList"
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore/lite';

import { app } from "../../../firebase/firebase"

const ItemListContainer = () => {

    const { catName } = useParams()
    
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        const db = getFirestore(app);
        const productsCol = collection(db, 'products')
        const getProducts = async (category) => {
            setProducts([])
            let productsSnapshot;
            if (category !== undefined) {
                const productsCategoryQuery = query(productsCol, where("category", "==", category))
                productsSnapshot = await getDocs(productsCategoryQuery)
            } else {
                productsSnapshot = await getDocs(productsCol)
            }
            const products = productsSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))
            setProducts([...products])
        }

        getProducts(catName)
    }, [catName])

    return (
        <>
            <ItemList products={products} catName={catName} />
        </>
    )
}

export default ItemListContainer
