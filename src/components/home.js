import React from "react"
import "./home.css"
import Card from "./card"

const Home = ({data}) => {

    // Testni ispod podataka koje su dosle s Index stranice
    console.log("HOME - Ovo je data koja je dosla s Index stranice: ",data)
    
    return (
        <div className="home-grid">
            <div className="offers">
            {data.imagesrc.edges.map((node) => {
                return <Card key ={node.node["id"]} data = {node} metadata={data.imagedata.edges[0].node.childrenDataYaml}/> })}
            </div>
        </div>
    )
}
  
export default Home