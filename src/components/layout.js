import React from 'react'
import Navigation from "./navigation"
import Header from "./header"
import "./layout.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Layout = ({children, callback}) => {  
  
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

    // Tesni ispis varijable koja dolazi iz querija gore
    console.log("LAYOUT - Rezultat querrija za navigaciju i cover: ", nav)

    // Varijabla layoutFilter je varijabla pomocu koje se odreduje koji layout ce biti prikazan i hoce li se prikazat cover image
    // Children vraca elemente koji se prikazuju pa je to ili Home ili nesto drugo
    // Ako je Home ide layout za home i cover image , a za bilo sta drugo ide obicni layout bez covera
    // Layout za home je layoutHome, a za ostalo je layoutMain
    var layoutFilter = (children["type"]).toString()
    var layout;
    var className;
    if (layoutFilter.includes("Home")) {
        layout = 1;
        className = "layoutHome"
    }
    else {
        layout = 0;
        className = "layoutMain"
    }

    // Tesni ispis varijable koja filtrira layout
    console.log("LAYOUT - Varijabla koja odreduje layout: ", children["type"])

    // Raspakirava se dohvacena data u navitems koji se salje u navigation
    const { navItems } = nav.site.siteMetadata

    return(
        <div  className = {className}>
            <Header callback = {callback}/>               
            <div className = "NavContainer"><Navigation navItems = {navItems}/></div>
            {layout ? <div className = "home-cover"><Img key = {nav.allFile.edges[0].node.id} fluid = {nav.allFile.edges[0].node.childImageSharp.fluid}/></div>: false}
            {children}
            <div className = "footer">FOOTER</div>
        </div>
    )
}

export default Layout

