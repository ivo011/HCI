import React from 'react'; 
import { MDXRenderer } from "gatsby-plugin-mdx"

const NewsList = ({data, filterValue}) => {      
  
    const filtered = data.allMdx.edges.filter(vijest => {        
        return vijest.node.frontmatter.title.toLowerCase().includes(filterValue.toLowerCase())
    })
       
    return(
        <div className = "news-container"> 
            {filtered.map((node, index) => {                
                return <div className = "news-post" key = {index}>                                 
                            <MDXRenderer>{node.node.body}</MDXRenderer> 
                            <h4>Keywords : {node.node.frontmatter.keywords}</h4> 
                            <div className = "news-info">
                                <h4>Author : {node.node.frontmatter.author}</h4>
                                <h4>Date : {node.node.frontmatter.date}</h4>                          
                            </div>                                                          
                        </div>})}
        </div>
    );
}

export default NewsList; 