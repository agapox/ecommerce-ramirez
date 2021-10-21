import Header from "./components/Header/Header";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer/Footer";
import { useState } from "react";

const App = () => {

    const [cart, setCart] = useState([])

    const [products, setProducts] = useState([
        { name: 'Stratocaster', stock: 11, img: 'https://www.fmicassets.com/Damroot/ZoomJpg/10001/0147312323_fen_ins_frt_1_rr.jpg' },
        { name: 'Telecaster', stock: 15, img: 'https://www.fmicassets.com/Damroot/LgJpg/10001/0110180800_gtr_frt_001_rr.jpg' },
        { name: 'Jazzmaster', stock: 3, img: 'https://www.fmicassets.com/Damroot/LgJpg/10001/0118050732_gtr_frt_001_rr.jpg' },
        { name: 'Jaguar', stock: 0, img: 'https://www.fmicassets.com/Damroot/LgJpg/10002/0146303513_gtr_frt_001_rr.jpg' },
    ])
    
    const username = {
        name: 'Jose',
        lastname: 'Ramirez'
    }

    const addToCart = (product) => {

    }

    const removeFromCart = (product) => {

    }

    return (
        <>
            <Header username={username} />
            <div id="main-container">
                <ItemListContainer products={products} />
            </div>
            <Footer />
        </>
    )
}


export default App;