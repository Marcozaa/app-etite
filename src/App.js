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

import { Navbar } from './components/Navbar';
import Header from './components/Header';
import Cards from './components/Cards';
import Link from 'next/link';
import About from './pages/About';
import MiddleContent from './components/MiddleContent';
import Others from './components/Others';

function App() {
  return (
    <ChakraProvider theme={theme}>

      <Navbar />
   
   
        <Header />
        <Cards/>
        {/*
        <Link href="/about">
          <About />
        </Link>
        */}
        <MiddleContent />
        <Others />
   
    </ChakraProvider>
  );
}

export default App;
