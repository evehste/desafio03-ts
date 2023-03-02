const conta = {
    id:"1",
    email: "evelin@dio.com",
    password: "123",
    name: "Evelin",
    balance: 2000,
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 1500);
})