import React from "react"
import {Link} from 'gatsby'
import SearchBox from './searchbox'

const Header = ({callback}) => { 
  
  return(
     <div className = "header">           
          <SearchBox callback={callback}/> 
          <ul className = "header-buttons">                 
               <button ><Link to="/news"><div className = "navButton">LOGIN</div></Link></button>   
               <button ><Link to="/blog"><div className = "navButton">LOGIN</div></Link></button>                              
          </ul>      
     </div>
     )
}
  
export default Header