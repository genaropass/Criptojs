//usamos fetch para llamar a la api
let endpoint = 'https://api.binance.com/api/v3/ticker/price'
fetch(endpoint)
    .then( response => response.json())
    .then( data => mostrarData(data))
    .catch( e => console.log(e))


const mostrarData = (data) =>{
    //console.log(data)
    let body  = ''
    //data.lenght
    for (let i = 0; i < 15; i++){
        body += `<tr><td>${data[i].symbol}</td><td>${data[i].price}</td></tr>`
    }
    document.getElementById('data').innerHTML = body;
}