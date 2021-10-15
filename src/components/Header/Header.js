import NavBar from "../NavBar/NavBar";

const Header = ({ username }) => {
    return (
        <header id="main-header" className="clase1 clase2" >
            <h1>E-Commerce</h1>
            <NavBar username={username} />
        </header>
    )
}

export default Header;