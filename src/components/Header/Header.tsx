import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Flex, Spacer } from '@chakra-ui/react'
import { AppContext } from '../AppContext';
import { changeLocalStorage } from '../../services/storage';
import './Header.css'

export const Header  = () => {

  const {isLoggedIn, SetIsLoggedIn } =  useContext(AppContext);
  const navigate = useNavigate();

  const logout = () => {
    changeLocalStorage({login: false});
    SetIsLoggedIn(false);
    navigate("/");
  }

  return(
    <div className='header'>
      <Box>
        <div className='header-logo'></div>
      </Box>
      {
        isLoggedIn && 
          <>
            <Spacer/>
            <Button colorScheme='red' size='sm' margin={2} variant='outline' onClick={logout}>Sair</Button>
          </>
      }
    </div>
  )
}
