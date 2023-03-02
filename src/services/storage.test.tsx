import { changeLocalStorage, createLocalStorage, getAllLocalStorage } from "./storage";

const dioBank ={ 
    login: false
}

describe("Storage", () => {   
    const mockSetItem = jest.spyOn(Storage.prototype, "setItem");

    it("Deve retornar o objeto no localStorage com a chave diobank", ()=> {
        const mockGetItem = jest.spyOn(Storage.prototype, "getItem");
        getAllLocalStorage();
        expect(mockGetItem).toHaveBeenCalledWith("diobank");
    });

    it("Deve criar o objeto no localstorage", () => {
        createLocalStorage();
        expect(mockSetItem).toHaveBeenCalledWith("diobank", JSON.stringify(dioBank));
    });

    it("Deve alterar o valor do objeto no localstorage", () => {
        changeLocalStorage(dioBank);
        expect(mockSetItem).toHaveBeenCalledWith("diobank", JSON.stringify(dioBank));
    });
})