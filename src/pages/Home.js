import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import './home.css'
import { Navbar } from '../components/Navbar';
import Header from '../components/Header';
import Cards from '../components/Cards';
import About from '../pages/About';
import MiddleContent from '../components/MiddleContent';
import Others from '../components/Others';
import { Reviews } from '../components/Review';
import Informazioni from '../components/Informazioni';
import Footer from '../components/Footer';
export default function Home() {
  return (<ChakraProvider theme={theme}>

      
   
   
        <Header />
    
          <Cards/>
        
        
        <Reviews />
        {/*
        <Link href="/about">
          <About />
        </Link>
        */}
        <MiddleContent />
        <Informazioni />
        <Others />
        <Footer />
   
    </ChakraProvider>
  )
}
