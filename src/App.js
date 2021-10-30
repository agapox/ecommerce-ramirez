import Header from "./components/Header/Header";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

const App = () => {
    
    const username = {
        name: 'Jose',
        lastname: 'Ramirez'
    }

    return (
        <BrowserRouter>
            <Header username={username} />
            <div id="main-container">
                <Switch>
                    <Route path="/" exact component={ItemListContainer} />
                    <Route path="/category/:catName" component={ItemListContainer} />
                    <Route path="/product/:id" component={ItemDetailContainer} />
                </Switch>
            </div>
            <Footer />
        </BrowserRouter>
    )
}


export default App;