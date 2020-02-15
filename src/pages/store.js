import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import "../components/store.css"
import Pagination from "../components/pagination"
import Card from "../components/card"
import {useState, useEffect} from "react"
import StoreItemPage from "../components/StoreItemPage"
import Notification from "../components/notification"


const Store = ({data}) => {

    // Stateovi za storeItemPage ya svaki proizvod
    // Prvi state je za stanje kad se klikaje a drugi postavlja datu kliknutog proizvoda
    const [redirect,setRedirect]= useState(0)
    const [redirectData, setRedirecData]=useState(0)

    //state za notifikaciju
    const [top, setTop ] = useState(-100); 

    const ShowNotification = () =>{
        setTop(60);
        setTimeout(()=>{
            setTop(-100);
        },2000)
    }

    const setProductData = (data) => { setRedirecData(data); setRedirect(1); window.scrollTo(0,0); }
    const setButtonState = () => { setRedirect(0) ; window.scrollTo(0,0); 
    }

    function renderRedirect ()  {
        console.log(setButtonState)
        if (redirect === 1) {
          return <div><StoreItemPage productData={redirectData} setButtonState={setButtonState} ShowNotification={ShowNotification}></StoreItemPage></div>
        }
      }

    // Ovaj dio sluzi za pagination moze se minjat moj podeseni broj od 8 postova po str
    const [posts,setPosts]=useState([])
    const [currentPage,setCurrentPage]=useState(1)
    const [postsPerPage]=useState(8)

    // U temp idu svi proizvodi koi su se prije dole prikazivali odjednom
    let temp= data.imagesrc.edges.map((node) => {
        return <Card key={node.node["id"]} data = {node} metadata = {data.imagedata.edges[0].node.childrenDataYaml} setProductData={setProductData}/>})

    // U posts se upisuje temp varijabla s postovima
    useEffect(() => {setPosts(temp)},[]);

    // Matematika za izracun prve zadnje stranice i trenutnih postova za prikazat
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost- postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return(
        <div>
        {redirect ? renderRedirect()  :<div>
            <SEO title = "Store"/>
            <Layout layoutFilter = {0} seachFilter ={1}>  
                <div className = "store"> 
                    <Notification top={top}/>
                    <div className = "store-grid">                       
                        {currentPosts}                                       
                    </div>
                    <div className = "pagination-element"><Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/></div>
                </div> 
            </Layout>  
        </div> }
        </div>
    )
}

export default Store

// Querry za dohvat podataka o slikama i informacijama o njima
export const query = graphql`
{
    imagesrc:allFile(filter: {absolutePath: {regex: "//content/storeimages//"}}) {
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
  imagedata:allFile(filter: {absolutePath: {regex: "//pagedata/storedata//"}}) {
    edges {
      node {
        id
        childrenDataYaml{
          name
          price
          key
          tag
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
