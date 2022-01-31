import React from 'react';
import './normalContainer.css'
export default function NormalContainer({immagine, heading, testo, colore}) {
  return <div className='normalContainer' >
      <div className="left">
        <img src={immagine} />
      </div>
      <div className="right">
        <h2>{heading}</h2>
        <p>{testo}</p>
      </div>
  </div>;
}
