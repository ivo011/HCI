import React from "react"
import Img from "gatsby-image"
import "./card.css"

const Card = ({data,metadata,setProductData}) => {

    // Ispis date i metadate koja je dosla ovdi
    let metadata_filtered = undefined;
    let postFilter = undefined
    console.log("CARD - Ovo je data koja je dosla na Card: " ,data)
    console.log("CARD - Ovo je metadata koja je dosla na Card: ", metadata)
    

    if(metadata !== undefined){

        // Filtrira se sve po kljucu u metadati i tako se izbace sve nebitne informacije koji se ne ticu trenutnog posta
        metadata_filtered = metadata.filter((metadata => metadata['key'] === data.node.childImageSharp.fluid.src));
        console.log("CARD - Ovo je filtrirana metadata: ", metadata_filtered)

        // Ova if petlja provjerava da li je rijec o store ili home postu
        if(metadata_filtered !== undefined){
            if(metadata_filtered[0]['tag'] === 'store'){
                postFilter=1;
            }
        }
    }
    
    // Sprema se data o card u cardData i dodaje joj se jedno polje neznam tocno zasto
    let cardData = metadata_filtered;
    cardData["node" ] = data["node"]

    return (
        <div className="card">
            <div className="card-img"><Img key = {data.node.id} fluid = {data.node.childImageSharp.fluid}/> </div>
            <div className="card-info">
                {metadata ? metadata_filtered[0] ? metadata_filtered[0]['name'] ? postFilter ? <h1>{metadata_filtered[0]["name"]}</h1> : <h1 onClick = {() => setProductData(cardData)}>{metadata_filtered[0]["name"]}</h1>: false :  false : false}
                {metadata ? metadata_filtered[0] ? metadata_filtered[0]['price'] ? <h3>{metadata_filtered[0]["price"]}</h3> : false :  false : false}
                {postFilter ? <h2 onClick = {() => setProductData(cardData)}>BUY NOW</h2> : false}
            </div>
       </div>        
    )
}
      
export default Card