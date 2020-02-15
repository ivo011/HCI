import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/cart.css"
import CartItem from '../components/cartItem'

const Cart = () => {
  
    return(
        <div>
            <SEO title = "Cart"/>
            <Layout layoutFilter = {0}>         
               
                <div className="cart-page">
                    <h1 className="inCart">In cart:</h1>
                    <div className="cart-grid">
                        <CartItem name={"Civilization VI"} price={"250 HRK"}/>
                        <CartItem name={"Fallout 76"} price={"230 HRK"}/>
                        <CartItem name={"Skyrim 5"} price={"140 HRK"}/>                        
                        <CartItem name={"Diablo 3"} price={"200 HRK"}/>                    
                    </div>
                    <h1 className="total">total:</h1>
                </div>
            </Layout>           
        </div>
    ) 
}

export default Cart
