import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'
import { MDXRenderer } from "gatsby-plugin-mdx"
import "../components/blog.css"
import Pagination from "../components/pagination"
import {useState, useEffect} from "react"


const Blog = ({data}) => {

    // Testni ispos podataka koji dolaze iz querija na dnu. Rijec je o podacima za blogove
    console.log("BLOG - Podaci za blogove: ", data)

    // Ovaj dio sluzi za pagination moze se minjat moj podeseni broj od 8 postova po str
    const [posts,setPosts]=useState([])
    const [currentPage,setCurrentPage]=useState(1)
    const [postsPerPage]=useState(4)

    let data1=data.allMdx.edges
    let proba =data1.sort((a, b) => (Date.parse(a.node.frontmatter.date) < Date.parse(b.node.frontmatter.date)) ? 1 : -1)
    console.log(proba)

    let temp= data.allMdx.edges.map((node, index) => {                
        return <div className = "blog-post" key = {index}>
                    <div className = "blog-info">
                        <h2>{node.node.frontmatter.title}</h2>
                        <h4>Author: {node.node.frontmatter.author}</h4>
                        <h4>Date: {node.node.frontmatter.date}</h4>                          
                    </div>                                    
                    <MDXRenderer>{node.node.body}</MDXRenderer>                                                      
    </div>})

    // U posts se upisuje temp varijabla s postovima
    useEffect(() => {setPosts(temp)},[]);

    // Matematika za izracun prve zadnje stranice i trenutnih postova za prikazat
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost- postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    return(
        <div>
            <SEO title = "Blog"/>
            <Layout seachFilter={0}>
                <div className = "blog-container"> 
                    <button className="addBlog-button">ADD BLOG</button>
                    <div className="blog-grid">{currentPosts}</div>
                    <div className = "pagination-element"><Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/></div>
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
            date(formatString: "DD. MMMM YYYY")
            keywords
            title
          }
        }
      }
    }
  }
`
