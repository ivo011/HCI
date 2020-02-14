import React from 'react';

const Notification = ({top}) => {   
    const customStyles = {        
            backgroundColor: '#dff0d8',
            border:'1px solid #d6e9c6', 
            color:'#3c763d', 
            padding: '20px', 
            position: 'absolute',                
            right:'16px',
            zIndex: '999',
            transition: "top 0.5s ease"        
      };
    customStyles.top = top;   

    return (                  
            <div style={customStyles}>Successfully added to cart!</div>        
     );
}
 
export default Notification;