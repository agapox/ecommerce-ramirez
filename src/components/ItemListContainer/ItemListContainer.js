import { useEffect } from "react"
import { useState } from "react/cjs/react.development"
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"
import ItemList from "../ItemList/ItemList"
import Loading from "../Loading/Loading"

const ItemListContainer = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const getProductsFromAPI = () => {
            fetch('https://fakestoreapi.com/products')
                .then(res=>res.json())
                .then(json=> {
                    const items = json
                    items.map(el => el.stock = Math.floor(Math.random()*10))
                    setProducts([...items])
                })
        }
        getProductsFromAPI()
      }, []);
    return (
        <>
            <ItemList products={products} />
            {
                products.length > 0 ? <ItemDetailContainer product={products[0]}/> : <Loading />
            }
        </>
    )
}

export default ItemListContainer
