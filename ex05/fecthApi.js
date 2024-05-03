fetch("https://api.thecatapi.com/v1/images/search?limit=10")
.then(response => response.json())
.then(data => {
    data.forEach(imagem => {
        const imageUrl = imagem.url;
        document.write(`<img src='${imageUrl}' width='200'/> <br />`);
    });
})
.catch(error => {
    console.error('Ocorre um erro ao processar a imagem:', error);
});