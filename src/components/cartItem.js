import React from "react"
import './cart.css'
import Img from "gatsby-image"
import { graphql } from 'gatsby'

const CartItem = ({name, price, data}) => {

    console.log("TEST TES TEST",data)

    return ( 
        <div className="cart-item">
            <div className="left">
                <Img className="cart-item-picture" key = {data.allFile.edges[0].node.id} fluid = {data.allFile.edges[0].node.childImageSharp.fluid}/>
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


/*<Img key = {data.allFile.edges[0].node.id} fluid = {data.allFile.edges[0].node.childImageSharp.fluid}/> */