import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Home from "../components/home"
import { graphql } from 'gatsby'


const IndexPage = ({data}) => {

    return(
        <div>
            <SEO title = "Homepage"/>      
            <Layout layoutFilter = {2}>             
                <Home data = {data}/>
            </Layout>    
        </div>
    )
}

export default IndexPage

// Querry za dohvat imagesrc tj HomeImages slika. Takoder dohvat metadate o tim slikama.
export const query = graphql`
  {
    imagesrc:allFile(filter: {absolutePath: {regex: "//content/homeimages//"}}) {
      edges {
        node {
          id
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  imagedata:allFile(filter: {absolutePath: {regex: "//pagedata/homedata//"}}) {
    edges {
      node {
        id
        childrenDataYaml {
          name
          price
          key
          description
          link
          producer
          class
          age
        }
      }
    }
  }
}
`