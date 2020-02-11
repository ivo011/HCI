import React from "react"
import "./home.css"
import Card from "./card"
import {useState, useEffect} from "react"
import HomeItemPage from "../components/HomeItemPage"

const Home = ({data}) => {

    // Testni ispod podataka koje su dosle s Index stranice
    console.log("HOME - Ovo je data koja je dosla s Index stranice: ",data)

    // Stateovi za storeItemPage za svaki proizvod
    // Prvi state je za stanje kad se klikaje a drugi postavlja datu kliknutog proizvoda
    const [redirect,setRedirect]= useState(0)
    const [redirectData, setRedirecData]=useState(0)

    const setProductData = (data) => { setRedirecData(data); setRedirect(1) }
    const setButtonState = () => { setRedirect(0) }

    function renderRedirect ()  {
        console.log(setButtonState)
        if (redirect === 1) {
          return <div><HomeItemPage productData={redirectData} setButtonState={setButtonState}></HomeItemPage></div>
        }
      }

    return (
        <div className="home-grid" > {redirect ? renderRedirect() :
        <div>
            <div className="offers">
            {data.imagesrc.edges.map((node) => {
                return <Card key ={node.node["id"]} data = {node} metadata={data.imagedata.edges[0].node.childrenDataYaml} setProductData={setProductData} /> })}
            </div>
        </div>}
        </div>
    )
}
  
export default Home