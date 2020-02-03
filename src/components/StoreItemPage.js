import React from 'react';
import Layout from "./layout"
import SEO from "./seo"
import Img from "gatsby-image"
import "./storeItem.css"

const StoreItemPage = ({productData, setButtonState}) => {   

    return (
        <div>
            <SEO title = {productData[0]["name"]}/>
            <Layout>  
                <div className = "store">
                    <div className="item">
                        <div className="itemPicture"><Img key = {222} fluid={productData.node.childImageSharp.fluid}/></div> 
                        <div className="itemInfo"> 
                            <h1>{productData[0]["name"]}</h1> 
                            <h1>{productData[0]["price"]}</h1>
                            <button onClick={() => setButtonState(0)}> BACK </button>   
                            <button > BUY </button>  
                         </div>                                    
                        
                    </div>        
                    
                </div> 
            </Layout>  
        </div>
    )
}

export default StoreItemPage;