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
                        <CartItem price={"250 HRK"} data={data.allFile.edges[0]}/>
                        <CartItem price={"230 HRK"} data={data.allFile.edges[1]}/>
                        <CartItem price={"140 HRK"} data={data.allFile.edges[2]}/>                        
                        <CartItem price={"200 HRK"} data={data.allFile.edges[3]}/>                    
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


