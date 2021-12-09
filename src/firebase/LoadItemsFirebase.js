// Add a second document with a generated ID.
/**
 * This component is for loading dinamycly all the products, it assign stock to every product
 */
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { useEffect } from "react";
import { app } from "./firebase";

const LoadItemsFirebase = () => {

    const URL = 'https://fakestoreapi.com'

    useEffect(() => {
        const getProductsFromAPI = () => {
            const db = getFirestore(app)
            fetch(`${URL}/products`)
                .then(res=>res.json())
                .then(json=> {
                    const items = json
                    items.forEach((el, i) => {
                        el.stock = Math.floor(Math.random()*24)
                        el.id = i
                        try {
                            const docRef = async () => await addDoc(collection(db, "products"), { ...el })
                            docRef()
                            docRef.id && console.log("Document written with ID: ", docRef.id)
                        } catch (e) {
                            console.error("Error adding document: ", e);
                        }
                    })
                    
                })
        }

        const getCategoriesFromAPI = () => {
            const db = getFirestore(app)
            fetch('https://fakestoreapi.com/products/categories')
                .then(res=>res.json())
                .then(json=>{
                    const categories = json
                    console.log(categories)
                    categories.forEach((el, i) => {
                        try {
                            const docRef = async () => await addDoc(collection(db, "categories"), {
                                id: i,
                                name: el
                            })
                            docRef()
                            docRef.id && console.log("Document written with ID: ", docRef.id)
                        } catch (e) {
                            console.error("Error adding document: ", e);
                        }
                    })
                })
        }
        getCategoriesFromAPI()
        getProductsFromAPI()
      }, []);

    return (
        <div>
            <button>Load data to firebase</button>
        </div>
    )
}

export default LoadItemsFirebase
