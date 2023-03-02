import { login } from "./login";
import { api } from "../api";

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

    it('Deve exibir um alert com boas vindas caso o email é valido', async () => {
        const response = await login(mockEmail);
        expect(response).toBeTruthy();
       // expect(mockSetIsLoggedIn).toHaveBeenCalledWith(true);
        //expect(mockNavigate).toHaveBeenCalledWith('/1');
    });

    it("Deve exibir um erro caso o email seja invalido", async () => {
        const response = await login("email@invalido.com");
        expect(response).toBeFalsy();
        //expect(mockSetIsLoggedIn).not.toBeCalled();
        //expect(mockNavigate).not.toHaveBeenCalled();
    });
})