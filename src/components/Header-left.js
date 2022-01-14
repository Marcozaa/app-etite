import { Button } from '@chakra-ui/react'
import React from 'react'
import './headerleft.css'
import { Input } from '@chakra-ui/react' 
import { InputRightElement } from '@chakra-ui/react'
import { InputGroup } from '@chakra-ui/react'
import { FaSearchLocation } from 'react-icons/fa'
export default function Headerleft() {
    return (
        <div className='containerLeft'>
            <h1>Ordina cosa vuoi mangiare, a casa tua.</h1>
            <p>Lorem ipsium lorem ipsium lorem placeholder ipsium.</p>
            <div className="indirizzo">
                <InputGroup  marginRight={'1rem'}>
                    <InputRightElement
                    pointerEvents='none'
                    children={<FaSearchLocation color='white.300' />}
                    />
                    <Input className='indirizzoInput' variant={'filled'}  type='text' placeholder='Inserisci il tuo indirizzo' />
                </InputGroup>
                 <Button>Trova pasto</Button>
                
            </div>
            
           
        </div>
    )
}
