import { BrowserRouter, Switch, Route } from "react-router-dom";

import CartProvider from "./context/cartContext";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/Item/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/Item/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";

const App = () => {
    
    const username = {
        name: 'Jose',
        lastname: 'Ramirez'
    }

    return (
        <BrowserRouter>
            <CartProvider>
                <Header username={username} />
                <main>
                    <Switch>
                        <Route path="/" exact component={ItemListContainer} />
                        <Route path="/category/:catName" component={ItemListContainer} />
                        <Route path="/product/:id" component={ItemDetailContainer} />
                        <Route path="/cart" component={Cart} />
                    </Switch>
                </main>
                <Footer />
            </CartProvider>
        </BrowserRouter>
    )
}


export default App;