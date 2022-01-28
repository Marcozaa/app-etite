import { Button } from '@chakra-ui/react'
import React from 'react'
import './headerleft.css'
import { Input } from '@chakra-ui/react' 
import { InputRightElement } from '@chakra-ui/react'
import { InputGroup } from '@chakra-ui/react'
import { FaSearchLocation } from 'react-icons/fa'
import { motion } from 'framer-motion'
import axios from "axios"
import Typewriter  from 'typewriter-effect'
export default function Headerleft() {
    const sendRequest = () => {
    console.log("sent")
    axios.get("https://serpapi.com/search.json?q=Coffee&location=Austin%2C+Texas%2C+United+States&hl=en&gl=us&google_domain=google.com&api_key=9846677ab79cff161e8de3c28f95f20c30d348ac07ac1bb793bfcc28fe869663", {
        headers: {
	  'Access-Control-Allow-Origin': '*',
	},
    })
    .then(data => {
        console.log(data)
    })
    .catch(err => console.log(err))
    }
    return (
         <motion.div className='containerLeft'
  animate={{  opacity: [0,1] }}
  transition={{ duration: 0.8 }}
  >
     
          
            <h1>Ordina cosa vuoi mangiare,  <Typewriter
  options={{
    strings: ['A casa tua.', 'A lavoro.', 'All’estero.' ],
    autoStart: true,
    loop: true,
  }}
/></h1>
            <p>Lorem ipsium lorem ipsium lorem placeholder ipsium.</p>
            <div className="indirizzo">
                <InputGroup marginRight={'1rem'}>
                    <InputRightElement
                    pointerEvents='none'
                    children={<FaSearchLocation color='white.300' />}
                    />
                    <Input className='indirizzoInput' variant={'filled'}  type='text' placeholder='Inserisci il tuo indirizzo' />
                </InputGroup>
                 <Button onClick={ sendRequest} >Trova pasto</Button>
                
            </div>
            
           </motion.div>
    )
}
