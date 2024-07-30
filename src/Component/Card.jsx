import React from 'react'

const Card = ({name,descritpion,imgSrc,btn,version,date}) => {

 
  let cssId = 'new-btn'
  if(btn=='New'){
   cssId='new-btn'
  }else if(btn == 'Fix') {
    cssId = 'fix-btn'
  }else {
    cssId='improvment-btn'
  }
  return (
   
    <div className="wrapper">
    <h2>{version} {`(${date})`}</h2>
    <div className="name-wrapper">
      <button id={cssId}>{btn}</button>
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
