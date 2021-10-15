import Header from "./components/Header/Header";
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
                
            </div>
            <Footer />
        </>
    )
}


export default App;