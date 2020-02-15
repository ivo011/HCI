import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'
import {useState} from 'react'
import "../components/news.css"
import NewsList from "../components/newsList"

const News = ({data}) => {

    // Hook za state filterValue News komponente 
    const [filterValue, setFilterValue] = useState("") // hook za state filterValue News komponente 

    // Funkcija koja se pokrece kad se pise te uzima vrijednost iz searchboxa i sa setFilterValue postavlja
    // Vrijednost statea filterValue na ono sta je upisano -> e.target.value
    function callback(e){            
        setFilterValue(e.target.value) 
    }

    // Ispis vrijednosti za search ??
    console.log(filterValue); 
 
    return(
        <div>
            <SEO title="News"/>
            <Layout layoutFilter = {0} callback = {callback} seachFilter={1}> 
                <NewsList data = {data} filterValue = {filterValue}/>
            </Layout>  
        </div>
    )
}
 
export default News

// Querry za dohvat informacija o news postovima
export const query = graphql`
  {
    allMdx(filter: {fileAbsolutePath: {regex: "/content/newspost/"}}) {
      edges {
        node {
            body
          frontmatter {
            author
            date(formatString: "DD. MMMM YYYY")
            keywords
            title
          }
        }
      }
    }
  }
`