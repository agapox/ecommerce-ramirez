import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import CartWidget from "../Cart/CartWidget/CartWidget"

const NavBar = ({ username }) => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        const getCategoriesFromAPI = () => {
            fetch('https://fakestoreapi.com/products/categories')
                .then(res=>res.json())
                .then(json=> {
                    let cat = json;
                    cat = cat.map(el => ({ name: el.split("'")[0], url: encodeURIComponent(el) }))
                    setCategories([{name: 'home', url: ''}, ...cat])
                })
        }
        getCategoriesFromAPI()
    }, [])
    return (
        <nav>
            {
                categories.length && categories.map((cat, i) => {
                    return <NavLink to={cat.name === 'home' ? '' : `/category/${cat.url}` } key={`cat${i}`}>{cat.name}</NavLink>
                })
            }
            <CartWidget username={username} />
        </nav>
    )
}

export default NavBar
