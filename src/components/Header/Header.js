import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Logo from "./Logo";

const Header = ({ username }) => {
    return (
        <header>
            <div id="main-header" className="container">
                <Link to={'/'}>
                    <Logo />
                </Link>
                <NavBar username={username} />
            </div>
        </header>
    )
}

export default Header;