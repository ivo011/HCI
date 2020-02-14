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
          width:'400px',
                  
        }
      };

    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        <div>
            <SEO title = {productData[0]["name"]}/>
            <Layout layoutFilter = {0}>  
                <div className = "store">
                    <div className="item">
                        <div className="itemPicture"><Img key = {222} fluid={productData.node.childImageSharp.fluid}/></div> 
                        <div className="itemInfo"> 
                            <div>
                                <h1>{productData[0]["name"]}</h1> 
                                <h1>{productData[0]["price"]}</h1>
                            </div>
                            <div className="itemButtons"> 
                                <button className="buy" onClick={()=>setModalIsOpen(true)}> BUY </button>
                                <button className="back" onClick={() => setButtonState(0)}> BACK </button>   
                                
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
                </div> 
            </Layout>  
        </div>
    )
}

export default StoreItemPage;