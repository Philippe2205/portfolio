import React from 'react'
import '../css/style.css';



const Competance = ({ image, titre ,text ,tags}) => {
  return (
    
    <div className="comp-item">
          <h3>{titre}</h3>
      <div className='contenue'>
        <img src={image} alt="logo" />
        <div className='cont-text'>
          <p>{text}</p>
          <h4>{tags}</h4>
        </div>
      </div>
    </div>
    
  )
}

export default Competance