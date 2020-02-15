import React from "react"
import {Link} from 'gatsby'
import SearchBox from './searchbox'
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const Header = ({callback}) => { 


    const data1 = useStaticQuery(graphql`
    {
      allFile(filter: {absolutePath: {regex: "//content/logo//"}}) {
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
    }
  `)

  console.log("Jajajajajjaja",data1.allFile.edges[0].node.childImageSharp.fluid)
  
  return(
     <div className = "header">
          <Img key = {data1.allFile.edges[0].node.id} fluid = {data1.allFile.edges[0].node.childImageSharp.fluid}/>           
          <SearchBox callback={callback}/> 
          <ul className = "header-buttons">                 
               <Link to="#"><div className="Button">Log in</div></Link>
               <Link to="#"><div className="Button">Sign up</div></Link>                             
          </ul>      
     </div>
     )
}
  
export default Header