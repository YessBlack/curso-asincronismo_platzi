const somethingWillHappen = () => {
    return new Promise((resolve,reject) => {
        if(true) {
            resolve('Hey!')
        }else {
            console.log('Algo fallo')
        }
    })
}

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.log(err))

const somethingWillHappen2 = () => {
    return new Promise((resolve,reject) => {
        (true) ? setTimeout(() => {resolve(true)},2000) : reject('Whooops!')
    })
}

somethingWillHappen2()
    .then(response =>console.log(response))
    .catch(err => console.log(err))


    Promise.all([somethingWillHappen(),somethingWillHappen2()])
    .then(response => {
        console.log('Array de resultados ',response)
    })
    .catch(err => {
        console.log(err)
    })