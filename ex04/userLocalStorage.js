function dados() {
    let name = prompt("Informe um nome. ");
    let age = prompt("Informe idade. ");
    let email = prompt("Informe e-mail." );

    const userInfo = {
        "name": name,
        "age": age,
        "email": email
    };
    console.log(userInfo);

    localStorage.setItem('user', JSON.stringify(userInfo));
}


dados();