import { useEffect } from "react"
import { useParams } from "react-router"
import { useState } from "react/cjs/react.development"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = () => {

    const { catName } = useParams()
    console.log(catName)

    const [products, setProducts] = useState([])

    useEffect(() => {
        const URL = 'https://fakestoreapi.com'
        const getProductsFromAPI = () => {
            setProducts([])
            console.log('getProductsFromAPI')
            fetch(`${URL}/products`)
                .then(res=>res.json())
                .then(json=> {
                    const items = json
                    items.map(el => el.stock = Math.floor(Math.random()*10))
                    console.log(items)
                    setProducts([...items])
                })
        }
        const getProductsCategoryFromAPI = () => {
            setProducts([])
            console.log('getProductsCategoryFromAPI')
            fetch(`${URL}/products/category/${catName}`)
                .then(res=>res.json())
                .then(json=> {
                    const items = json
                    items.map(el => el.stock = Math.floor(Math.random()*10))
                    console.log(items)
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
