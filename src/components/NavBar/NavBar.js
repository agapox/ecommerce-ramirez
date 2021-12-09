import { useState, useEffect, useRef, useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { app } from "../../firebase/firebase"
import CartWidget from "../Cart/CartWidget/CartWidget"
import Backdrop from "../Backdrop/Backdrop";
import { CartContext } from "../../context/cartContext";

const NavBar = ({ username }) => {

    const cartContext = useContext(CartContext)
    const [categories, setCategories] = useState([])
    const [menuClose, setMenuClose] = useState(true)

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

    const handleMenuClick = () => {
        window.innerWidth <= 768 && setMenuClose(!menuClose)
    }

    const navLinks = categories.length ? categories.map((cat, i) => {
        return <NavLink 
            to={cat.name === 'home' ? '' : `/category/${cat.url}` } 
            key={`cat${i}`}
            onClick={() => handleMenuClick()}>
            {cat.name}
        </NavLink>
    }) : null

    const wrapperRef = useRef(null);

    const ref = wrapperRef

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                console.log('clikc afuera')
                !menuClose && setMenuClose(!menuClose)
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
    }, [ref, menuClose]);

    return (
        <>
            <nav ref={wrapperRef}>
                <div className="main-menu">
                    { navLinks }
                    <CartWidget username={username} />
                </div>
                <div className="mobile-menu">
                    <span className="material-icons mobile-menu__icon" onClick={() => handleMenuClick()}>
                        menu
                    </span>
                    <div className={ 'nav-links ' +  (menuClose ? 'closed' : 'open') } >
                        { navLinks }
                        <Link to={'/cart'} className="go-to-checkout" onClick={() => handleMenuClick()}>
                            Checkout ({ cartContext.getProductsQttyInCart() })
                            <span className="material-icons">
                                shopping_cart_checkout
                            </span>
                        </Link>
                    </div>
                </div>
            </nav>
            { !menuClose && <Backdrop /> }
        </>
    )
}

export default NavBar
