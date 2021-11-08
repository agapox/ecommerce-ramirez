import { useState, useEffect } from "react"
import { useParams } from "react-router"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = () => {

    const { catName } = useParams()

    const [products, setProducts] = useState([])

    useEffect(() => {
        const URL = 'https://fakestoreapi.com'
        const getProductsFromAPI = () => {
            setProducts([])
            fetch(`${URL}/products`)
                .then(res=>res.json())
                .then(json=> {
                    const items = json
                    items.map(el => el.stock = Math.floor(Math.random()*10))
                    setProducts([...items])
                })
        }
        const getProductsCategoryFromAPI = () => {
            setProducts([])
            fetch(`${URL}/products/category/${catName}`)
                .then(res=>res.json())
                .then(json=> {
                    const items = json
                    items.map(el => el.stock = Math.floor(Math.random()*10))
                    setProducts([...items])
                })
        }
        if (catName !== undefined) {
            getProductsCategoryFromAPI()
        } else {
            getProductsFromAPI()
        }
      }, [catName]);
    return (
        <>
            <ItemList products={products} catName={catName} />
        </>
    )
}

export default ItemListContainer
