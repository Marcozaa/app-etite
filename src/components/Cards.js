import React from 'react'
import Card from './Card'
import './cards.css'
import { motion } from 'framer-motion'
export default function Cards() {
    return (
        <motion.div className='cards'
  animate={{ x: [400,0], opacity: [0,1] }}
  transition={{ duration: 1 }}
  >
        
            <Card 
            image={'https://cdn.dribbble.com/users/713003/screenshots/13494057/media/fa59e42f5a551a3cf3cb0d8a0adabc7d.png'}
            header={'Consegna con Appetite'}
            text={'registrati per consegnare'} 
            link={'registrazioneRider'}
            />
    
            <Card 
            image={'https://cdn.dribbble.com/users/466099/screenshots/10011568/media/a0489b19c3f98b96b193d8b9b7099380.png'}
            header={'Il tuo ristorante, a domicilio'}
            text={'aggiungi il tuo ristorante'} 
            link={'registrazioneRistorante'}
            /> 
                 
            <Card 
            image={'https://cdn.dribbble.com/users/541128/screenshots/6895591/ride_coordinator_horz_2x.png'}
            header={'Ordina ovunque, senza vincoli'}
            text={'Effettua un ordine'} 
            link={'ordina'}
            />

        </motion.div>
    )
}
