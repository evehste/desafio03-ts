interface IDiobank {
    login: boolean
}

const keyStorage = "diobank";


const dioBank ={ 
    login: false
}

export const getAllLocalStorage = (): string | null => {
    return localStorage.getItem(keyStorage);
}

export const createLocalStorage = (): void => {
    localStorage.setItem(keyStorage, JSON.stringify(dioBank));
}

export const changeLocalStorage = (value: IDiobank): void => {
    localStorage.setItem(keyStorage, JSON.stringify(value));
}