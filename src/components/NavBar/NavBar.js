import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { app } from "../../firebase/firebase"
import CartWidget from "../Cart/CartWidget/CartWidget"

const NavBar = ({ username }) => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        const db = getFirestore(app);
        const categoriesCol = collection(db, 'categories')
        const getCategoriesFromAPI = async () => {
            const productsSnapshot = await getDocs(categoriesCol)
            const categories = productsSnapshot.docs.map(doc => doc.data())
            let cat = [...categories];
            cat = cat.map(el => ({ name: el.name.split("'")[0], url: encodeURIComponent(el.name) }))
            setCategories([{name: 'home', url: ''}, ...cat])
        }
        getCategoriesFromAPI()
    },[])

    return (
        <nav>
            {
                categories.length ? categories.map((cat, i) => {
                    return <NavLink to={cat.name === 'home' ? '' : `/category/${cat.url}` } key={`cat${i}`}>{cat.name}</NavLink>
                }) : null
            }
            <CartWidget username={username} />
        </nav>
    )
}

export default NavBar
