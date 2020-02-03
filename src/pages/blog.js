import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'
import { MDXRenderer } from "gatsby-plugin-mdx"
import "../components/blog.css"


const Blog = ({data}) => {

    // Testni ispos podataka koji dolaze iz querija na dnu. Rijec je o podacima za blogove
    console.log("BLOG - Podaci za blogove: ", data)
    
    return(
        <div>
            <SEO title = "Blog"/>
            <Layout>
                <div className = "blog-container"> 
                    <h1>BLOG PAGE</h1>
                    {data.allMdx.edges.map((node, index) => {                
                    return <div className = "blog-post" key = {index}>                                 
                                <MDXRenderer>{node.node.body}</MDXRenderer> 
                                <h4>Keywords : {node.node.frontmatter.keywords}</h4> 
                                <div className = "blog-info">
                                    <h4>Author : {node.node.frontmatter.author}</h4>
                                    <h4>Date : {node.node.frontmatter.date}</h4>                          
                                </div>                                                          
                            </div>})}
                </div>
            </Layout>    
        </div>
    )
}

export default Blog

// Querry koji dohvava podatke o blogovima
// Trenutno su to postovi isti kao i news
export const query = graphql`
  {
    allMdx(filter: {fileAbsolutePath: {regex: "/content/blogpost/"}}) {
      edges {
        node {
            body
          frontmatter {
            author
            date
            keywords
            title
          }
        }
      }
    }
  }
`
