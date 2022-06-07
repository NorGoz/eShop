import './cart-item.style.scss';

export const CartItem = ({cartItem}) => {
    const {name, imageUrl, price, quantity} = cartItem
    return (
        <div className='cart-item-container'>
            <img src={imageUrl} alt={`${imageUrl}`}/>
            <div className='item-details'>
            <span className='name'>{name}</span>
            <span className='price'>{quantity} x ${price}</span>
            </div>
        </div>
    )
}
