const CartWidget = ({ username }) => {
    
    const { name, lastname } = username

    return (
        <a className="shopping-carg" href="./">
            <span className="username">{name} {lastname}</span>
            <span className="material-icons">
                shopping_cart
            </span>
            {/* <span>8</span> */}
        </a>
    )
}

export default CartWidget
