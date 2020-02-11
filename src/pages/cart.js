import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Cart = () => {
  
    return(
        <div>
            <SEO title = "Cart"/>
            <Layout layoutFilter = {0}>
                <h1>CART PAGE</h1>
            </Layout>           
        </div>
    ) 
}

export default Cart
