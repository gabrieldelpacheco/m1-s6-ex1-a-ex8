fetch("./data.json")
.then((responseObj) =>{
    return responseObj.json();
    document.body.innerHTML = "<h2> Dados do usuario: " +responseObj;
})
.then((responseApi)=> {
    console.log(responseApi);
})
.catch((error)=>{
    console.log(error);
});