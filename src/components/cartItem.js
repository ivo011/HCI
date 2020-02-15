import React from "react"
import './cart.css'


const CartItem = ({name, price}) => {

    return ( 
        <div className="cart-item">
            <div className="left">
                <div className="cart-item-picture" > </div>
                <div className="cart-item-info">
                    <h3 className="cart-item-name" >{name}</h3>
                    <h3 className="cart-item-price" >{price}</h3>
                </div>
            </div>
            <button className="cart-item-remove" > Remove </button>
        </div>
     );
}
 
export default CartItem;