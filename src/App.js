import Header from "./components/Header/Header";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer/Footer";

const App = () => {
    const username = {
        name: 'Jose',
        lastname: 'Ramirez'
    }
    return (
        <>
            <Header username={username} />
            <div id="main-container">
                <ItemListContainer />
            </div>
            <Footer />
        </>
    )
}


export default App;