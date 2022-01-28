import React from 'react'
import { Link } from 'react-router-dom'
import './card.css'
export default function Card({image , header, text, link}) {
    return (
        <div className='image'>
            <img src={image} />
            <h2>{header}</h2>
            <Link to={link}><p>{text}</p></Link>
        </div>
    )
}
