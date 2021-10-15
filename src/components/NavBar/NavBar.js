const NavBar = ({username}) => {
    const { name, lastname } = username
    return (
        <nav>
            <a href="./">home</a>
            <a href="./">link</a>
            <a href="./">link</a>
            <a href="./">link</a>
            <a className="shopping-carg" href="./">
                <span className="username">{name} {lastname}</span>
                <span className="material-icons">
                    shopping_cart
                </span>
            </a>
        </nav>
    )
}

export default NavBar
