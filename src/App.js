import Header from "./components/Header/Header";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CartProvider from "./context/cartContext";

const App = () => {

    /*
        cart => { qtty: number, product[] }
        product => {
            category: string
            description: string
            id: number
            image: string
            price: number
            rating: {
                rate: number,
                count: number
            }
            title: string
        }
    */
    
    const username = {
        name: 'Jose',
        lastname: 'Ramirez'
    }

    return (
        <BrowserRouter>
            <CartProvider>
                <Header username={username} />
                <div id="main-container">
                    <Switch>
                        <Route path="/" exact>
                            <ItemListContainer />
                        </Route>
                        <Route path="/category/:catName">
                            <ItemListContainer />
                        </Route>
                        <Route path="/product/:id" component={ItemDetailContainer}>
                            <ItemDetailContainer />
                        </Route>
                    </Switch>
                </div>
                <Footer />
            </CartProvider>
        </BrowserRouter>
    )
}


export default App;