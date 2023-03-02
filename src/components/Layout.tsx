import { Header } from "./Header/Header";
import { 
  Box,
} from '@chakra-ui/react';

export const Layout = ({ children }: any) => {
  return(
    <>
    <Box minHeight="100vh" paddingTop="5%" bgGradient='linear(to-b, #1d1828, #530f7a)'>
      <Header />
      { children}
    </Box>
    </>
  )
}
