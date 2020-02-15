import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/cart.css"
import CartItem from '../components/cartItem'
import { graphql } from "gatsby"

const Cart = ({data}) => {

    return(
        <div>
            <SEO title = "Cart"/>
            <Layout layoutFilter = {0} seachFilter={0}>                    
                <div className="cart-page">
                    <h1 className="inCart">In cart:</h1>
                    <div className="cart-grid">
                        <CartItem name={"Civilization VI"} price={"250 HRK"} data={data}/>
                        <CartItem name={"Fallout 76"} price={"230 HRK"} data={data}/>
                        <CartItem name={"Skyrim 5"} price={"140 HRK"} data={data}/>                        
                        <CartItem name={"Diablo 3"} price={"200 HRK"} data={data}/>                    
                    </div>
                    <h1 className="total">total:</h1>
                </div>
            </Layout>           
        </div>
    ) 
}

export default Cart

export const query = graphql`
{
    allFile(filter: {absolutePath: {regex: "//content/cartimages//"}}) {
      edges {
        node {
          id
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
              originalName
            }
          }
        }
      }
    }
}`


