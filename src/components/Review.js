import { Box, Circle, Flex, HStack, Text, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'
import { Quotee } from './Quotee.tsx'
import { QuoteIcon } from './QuoteIcon.tsx'

export function Reviews  () {
  function changeQuote(){
    console.log("hu")
  }
  return (
  <Box as="section" bg={useColorModeValue('white', 'gray.800')}>
    <Box maxW="3xl" mx="auto" px={{ base: '6', md: '8' }} pt="12" pb="16">
      <Flex direction="column" align="center" textAlign="center">
        <QuoteIcon
          color={useColorModeValue('gray.300', 'gray.600')}
          fontSize={{ base: '3xl', md: '6xl' }}
        />
        <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="medium" mt="6">
          &ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas
          culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.&rdquo;
        </Text>
        <Quotee
          name="Carlo Cracco"
          jobTitle="Chef"
          imageSrc="https://primochef.it/wp-content/uploads/2019/06/CS_Carlo_Cracco-1200x800.jpg"
          mt="8"
        />
      </Flex>
      <HStack justify="center" spacing="4" mt="8" color={useColorModeValue('gray.300', 'gray.600')}>
        <Circle w="3" h="3" bg="blue.500"  />
        <Circle w="2" h="2" bg="currentColor" style={{cursor:'pointer'}} onClick={changeQuote} />
        <Circle w="2" h="2" bg="currentColor" />
      </HStack>
    </Box>
  </Box>
  )
  }