import { FormControl, FormHelperText, FormLabel, Input, Flex, Box, Heading, Button } from '@chakra-ui/react';
import React from 'react';
import './containerRegistrazioneRider.css'
import { ArrowForwardIcon } from '@chakra-ui/icons';
import Requisiti from './Requisiti';
import { Link } from 'react-router-dom';
export default function ContainerRegistrazioneRider() {
  return <div className='container'>
    <div className="innerContainer">


      
      
        <div className="innerRight">
        <h2>Decidi tu dove, decidi tu quando</h2> 
        <Button background='#ffc244' size='lg'>
          <Link to="formRider"> Candidati subito</Link>
        </Button>
        </div>
                
        </div>
        
          </div>
          
  
}
