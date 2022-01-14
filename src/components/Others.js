import React from 'react'
import './others.css'
import { Tag } from '@chakra-ui/react'
import { HStack } from '@chakra-ui/react'
export default function Others() {
    return (
        <div className='others'>
            <div className="container">
            <h1>Cerchi qualcos'altro?</h1>
            </div>
            <div className="container2">
                
                {['Vegetariano', 
                'Messicano', 
                'Dessert', 
                'Indiano', 
                'Greco', 
                'Giapponese', 
                'Cinese', 
                'Libanese', 
                'Americano',
                'Italiano',
                'Vegano', 
                'Sushi', 
                'Gelato',
                'Thailandese', 
                'Pizza', 
                'Colazione', 
                'Brasiliano'].map((tipoCucina) => (
                    <Tag className='tipo' borderRadius={'1rem'} size={'lg'} key={tipoCucina} variant='solid' background='#3080e8'>
                    {tipoCucina}
                    </Tag>
                ))}
               
            </div>
        </div>
    )
}
