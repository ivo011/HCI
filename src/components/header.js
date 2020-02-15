import React from "react"
import {Link} from 'gatsby'
import SearchBox from './searchbox'
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const Header = ({callback,seachFilter}) => { 


    const data1 = useStaticQuery(graphql`
    {
      allFile(filter: {absolutePath: {regex: "//content/logo//"}}) {
        edges {
          node {
            id
            childImageSharp {
                fluid {
                src
              }
            }
          }
        }
      }
    }
  `)

  
  return(
     <div className = "header">
          <img className="logo" src= {data1.allFile.edges[0].node.childImageSharp.fluid["src"]} alt="Logo" />           
          { seachFilter ? <SearchBox callback={callback}/>: false}
          <ul className = "header-buttons">                 
               <Link to="#"><div className="Button">Log in</div></Link>
               <Link to="#"><div className="Button">Sign up</div></Link>                             
          </ul>      
     </div>
     )
}
  
export default Header