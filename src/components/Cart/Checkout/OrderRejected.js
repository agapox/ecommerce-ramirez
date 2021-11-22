const OrderRejected = () => {
    return (
        <div className="order-place rejected">
            <p className="description">We had an issue trying to place your order</p>
            <h2 className="title">Please try to place your order again</h2>
            <div className="icon">
                <span className="material-icons">
                    production_quantity_limits
                </span>
            </div>
        </div>
    )
}

export default OrderRejected
