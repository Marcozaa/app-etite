import { Box, Stack } from '@chakra-ui/react'
import * as React from 'react'
import { Copyright } from './Copyright.tsx'
import { Logo } from './Logo.tsx'
import { SocialMediaLinks } from './SocialMediaLinks.tsx'

export default function Footer(){
  return(
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#ffc244" fill-opacity="1" d="M0,288L80,288C160,288,320,288,480,272C640,256,800,224,960,213.3C1120,203,1280,213,1360,218.7L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
</svg>
<div className="content">
  <Box as="footer" role="contentinfo" mx="auto" maxW="7xl" py="12" px={{ base: '4', md: '8' }}>
    <Stack>
      <Stack direction="row" spacing="4" align="center" justify="space-between">
        <Logo />
        <SocialMediaLinks />
      </Stack>
      <Copyright alignSelf={{ base: 'center', sm: 'start' }} />
    </Stack>
  </Box>
  </div>
  </div>
  )
}