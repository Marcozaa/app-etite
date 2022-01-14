import React from 'react'
import './card.css'
export default function Card({image , header, text}) {
    return (
        <div className='image'>
            <img src={image} />
            <h2>{header}</h2>
            <p>{text}</p>
        </div>
    )
}
