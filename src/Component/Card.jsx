import React from 'react'

const Card = ({name,descritpion,imgSrc,btn,version,date}) => {

 
  
  return (
    
    <div className="wrapper">
    <h2>{version} {`(${date})`}</h2>
    <div className="name-wrapper">
      <button id="new-btn">{btn}</button>
      <img
        src={imgSrc}
        alt="Profile picture"
      />
      <h2>{name}</h2>
    </div>
    <p>
      {descritpion}
    </p>
    <button>Download</button>
  </div>
  )
}

export default Card
