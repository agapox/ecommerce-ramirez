import CartWidget from "../CartWidget/CartWidget"

const NavBar = ({username}) => {
    return (
        <nav>
            <a href="./">home</a>
            <a href="./">link</a>
            <a href="./">link</a>
            <a href="./">link</a>
            <CartWidget username={username} />
        </nav>
    )
}

export default NavBar
