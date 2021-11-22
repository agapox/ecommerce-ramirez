const OrderPlaced = ({ order }) => {
    console.log(order)
    return (
        <div className="order-place placed">
            <p className="description"><strong>{order.buyer.firstname}</strong> your order have been</p>
            <h2 className="title">Successfully placed</h2>
                
            <div className="icon">
                <span className="material-icons">
                    check_circle
                </span>
            </div>
            <h2 style={{marginTop: '32px'}}>Order ID <span style={{color: '#ca0377'}}>{order.id}</span></h2>
        </div>
    )
}

export default OrderPlaced
