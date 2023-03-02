import { 
  Center,
  Box,
} from '@chakra-ui/react';

export const Card = ({ children } : any) => {
  return(
    <Center>
      <Box backgroundColor="#fff" borderRadius="10px" padding="3%" width="50%">
        {children}
      </Box>
    </Center>
  )
}