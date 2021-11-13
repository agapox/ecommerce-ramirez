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
        const getProductsFromFB = async () => {
            setProducts([])
            const productsSnapshot = await getDocs(productsCol)
            const products = productsSnapshot.docs.map(doc => doc.data())
            setProducts([...products])
        }

        const getProductsCategoryFromFB = async () => {
            setProducts([])
            // Create a query against the collection.
            const productsCategoryQuery = query(productsCol, where("category", "==", catName))
            const querySnapshot = await getDocs(productsCategoryQuery)
            const products = querySnapshot.docs.map(doc => doc.data())
            setProducts([...products])
        }
        if (catName !== undefined) {
            getProductsCategoryFromFB()
        } else {
            getProductsFromFB()
        }
    }, [catName])

    return (
        <>
            <ItemList products={products} catName={catName} />
        </>
    )
}

export default ItemListContainer
