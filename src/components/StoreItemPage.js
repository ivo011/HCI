import React from 'react';
import Layout from "./layout"
import {useState} from 'react'
import Modal from 'react-modal'; 
import SEO from "./seo"
import Img from "gatsby-image"
import "./storeItem.css"
import "./Modal.css"

Modal.setAppElement('body'); 
const StoreItemPage = ({productData, setButtonState, ShowNotification}) => { 

    const customStyles = {        
        content : {
          top:'50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',  
          padding:'20px',        
          
        }
      };

    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        <div>
            <SEO title = {productData[0]["name"]}/>
            <Layout layoutFilter = {0}>  
                <div className = "store">
                    <div className="item">
                        <div className="PROBA123">
                        <div className="itemPicture"><Img key = {222} fluid={productData.node.childImageSharp.fluid}/></div> 
                        <div className="itemInfo"> 
                                <h1>Name: <span>{productData[0]["name"]}</span></h1> 
                                <h1>Price: <span>{productData[0]["price"]}</span></h1>
                                <h1>Produces: <span>{productData[0]["producer"]}</span></h1> 
                                <h1>Category: <span>{productData[0]["class"]} </span></h1>
                                <h1>Age restriction: <span> {productData[0]["age"]} </span></h1>
                                <div className="itemButtons"> 
                                    <button className="buy" onClick={()=>setModalIsOpen(true)}> BUY </button>
                                    <button className="back" onClick={() => setButtonState(0)}> BACK </button> 
                                </div>
                                </div>
                        </div>  
                        <div className="TEST">
                            <h2>Description: <span>{productData[0]["description"]}</span></h2> 
                            <iframe className="trailer" src={productData[0]["link"]}/>
                        </div>  
                    </div> 
                </div>  
                                                        
                    <Modal isOpen={modalIsOpen} style={customStyles}>
                        <div className="modalInfo">
                            <h1>{productData[0]["name"]}</h1>
                            <h3>Add {productData[0]["name"]} to cart?</h3>
                            <div className="Buttons">
                                <button  className="ModalButton yes" onClick={()=>{setModalIsOpen(false); setButtonState(0); ShowNotification();}}>Yes</button> 
                                <button  className="ModalButton no" onClick={()=>setModalIsOpen(false)}>No</button> 
                            </div>
                          </div>                          
                    </Modal>             
            </Layout>  
        </div>
    )
}

export default StoreItemPage;
