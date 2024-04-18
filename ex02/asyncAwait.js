debugger;

async function getUserInfo() {
    await new Promise(resolve => setTimeout(resolve, 2000));

    return {
        name: "Gabriel",
        age: 36,
        email: "gabriel@email.com"
    };
};

async function mostraUserInfo() {
    try {
        const userInfo = await getUserInfo();

        console.log("Nome: ", userInfo.name);
        console.log("Idade: ", userInfo.age);
        console.log("E-mail: ", userInfo.email);
    } catch (error) {
        console.error("Ocorreu um erro inesperado.")
    }
}

mostraUserInfo();