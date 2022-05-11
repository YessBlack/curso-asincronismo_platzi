const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

const fetchData = (API) => {
    return new Promise((resolve,reject) => {
        const xhttp = new XMLHttpRequest()
        xhttp.open('GET',API,true);
        xhttp.onreadystatechange = (() => { 
            (xhttp.readyState === 4 && xhttp.status === 200) 
              ? resolve(JSON.parse(xhttp.responseText))
              : reject(new Error('Ha ocurrido un error ',API))
        });
        xhttp.send()    
    })
}

module.exports = fetchData