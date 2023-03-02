import { login } from "./login";

/*const mockSetIsLoggedIn = jest.fn();
const mockNavigate = jest.fn();

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useContext: () => ({
        //isLoggedIn: true,
        SetIsLoggedIn: mockSetIsLoggedIn
    })
}));

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom') as any,
    useNavigate: () => mockNavigate
})) */

describe('login', () => {
    const mockEmail = "evelin@dio.com";
    const mockSenha = "123";

    it('Deve exibir um alert com boas vindas caso o email e senha sejam válidos', async () => {
        const response = await login(mockEmail, mockSenha);
        expect(response).toBeTruthy();
    });

    it("Deve exibir um erro caso o email seja invalido", async () => {
        const response = await login("email@invalido.com", mockSenha);
        expect(response).toBeFalsy();
    });

    it("Deve exibir um erro caso a senha seja inválida",async () => {
        const response = await login(mockEmail, "1234");
        expect(response).toBeFalsy();
    });

    it("Deve exibir um erro caso a o email e senha sejam inválidos", async () => {
        const response = await login("email@invalido.com", "1234");
        expect(response).toBeFalsy();
    });

    it("Deve exibir um erro caso o email e senha estejam em branco", async () => {
        const response = await login("", "");
        expect(response).toBeFalsy();
    });


})