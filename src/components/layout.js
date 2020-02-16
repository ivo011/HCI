import React from 'react'
import Navigation from "./navigation"
import Header from "./header"
import "./layout.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Layout = ({children, callback,layoutFilter,seachFilter}) => {  
  
    // Ovaj query dohvaca podatke za navigaciju i za cover image
    const nav = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          navItems {
            text
            link
          }
        }
      }
      allFile(filter: {absolutePath: {regex: "//content/cover//"}}) {
        edges {
          node {
            id
            childImageSharp {
                fluid(maxWidth: 700) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
    `)

    // Varijabla layoutFilter je varijabla pomocu koje se odreduje koji layout ce biti prikazan i hoce li se prikazat cover image
    // Children vraca elemente koji se prikazuju pa je to ili Home ili nesto drugo
    // Ako je Home ide layout za home i cover image , a za bilo sta drugo ide obicni layout bez covera
    // Layout za home je layoutHome, a za ostalo je layoutMain
    let layout=undefined;
    let className=undefined;

    if (layoutFilter === 2) {
        layout = 1;
        className = "layoutHome"
    }
    else {
        layout = 0;
        className = "layoutMain"
    }

    // Raspakirava se dohvacena data u navitems koji se salje u navigation
    const { navItems } = nav.site.siteMetadata

    return(
        <div  className = {className}>
            <Header callback = {callback} seachFilter={seachFilter} />               
            <div className = "NavContainer"><Navigation navItems = {navItems}/></div>
            {layout ? <div className = "home-cover"><Img key = {nav.allFile.edges[0].node.id} fluid = {nav.allFile.edges[0].node.childImageSharp.fluid}/></div>: false}
            {children}
            <div className = "footer">
                <div>Location: Split, Croatia</div>
                <div>Contact: support-gaming@gmail.com</div>
            </div>
        </div>
    )
}

export default Layout

