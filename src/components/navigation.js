import React from 'react'
import {Link} from 'gatsby'
import "./layout.css"

const Navigation = ({ navItems}) => {
        
    return(
        <ul className = "navigation">{               
                navItems.map(({text, link})  =>(
                    <Link key={link} to={link} activeStyle={{border: '1px solid #66FCF1', color:'#66FCF1'}}><div className="navButton">{text}</div></Link>
                ))
            }
        </ul>
    )
}

export default Navigation