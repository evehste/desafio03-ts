import { useContext, useState } from 'react';
import { 
    Input,  
    Center,
    Stack,
    Heading,
    InputLeftElement,
    InputGroup,
} from '@chakra-ui/react';
import {EmailIcon, LockIcon} from '@chakra-ui/icons'
import { login } from '../services/login';
import { ButtonDefault } from '../components/Button/ButtonDefault';
import { Card } from '../components/Card';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../components/AppContext';
import { changeLocalStorage } from '../services/storage';


const Home = () => {
    const [email, setEmail ] = useState<string>("");
    const [senha, setSenha] = useState<string>("");

    const {SetIsLoggedIn} = useContext(AppContext);

    const natigate = useNavigate();

    const validateUser = async  (email: string) => {
        const loggendIn = await login(email);

        if(!loggendIn){
            SetIsLoggedIn(false);
            return alert("Email inválido!");
        }

        SetIsLoggedIn(true);
        changeLocalStorage({ login: true });
        natigate("/conta/1");
    }

    return (
        <Card>
            <Center>
                <Heading color='#805ad5' as='h2' size='lg' marginBottom="20px">Login</Heading>
            </Center>
            <Stack spacing={5}>
                <InputGroup>
                    <InputLeftElement pointerEvents='none' children={<EmailIcon color='gray.300' />} />
                    <Input placeholder={"Email"} type={"email"} 
                        value={email} 
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </InputGroup>
                <InputGroup>
                    <InputLeftElement pointerEvents='none' children={<LockIcon color='gray.300' />} />
                    <Input placeholder={"Senha"} type={"senha"}
                    value={senha}
                    onChange={(event) => setSenha(event.target.value)}
                    />
                </InputGroup>
            </Stack>
            <Center>
                <ButtonDefault actionButton={() => validateUser(email)} />
            </Center>
        </Card>
    )
}

export default Home;