import React from 'react'
import '../css/style.css';



const Realisation = ({image, lien}) => {
  return (
    
    <div className="rea-item">
      <img src={image} alt="Site migniature" />
      <div className='overlay'>
        <a href={lien} target='_blank'>Cliquer pour en savoir plus</a>
      </div>
    </div>
    
  )
}

export default Realisation