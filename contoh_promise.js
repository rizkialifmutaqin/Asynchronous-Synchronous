// Promise tanpa penggunakan if
const myFunction = () => {
    return new Promise((resolve, reject) => {
        resolve("Hallo, Ini Kondisi True/Berhasil")
    })
}

myFunction()
.then((result) => {
    console.log(result)
})


// Promise dengan menggunakan if
const myFunctionPromise = (param) => {
    return new Promise((resolve, reject) => {
        if (param === 2) {
            resolve("Hallo, Ini Kondisi True/Berhasil")
        }else {
            reject("Hallo, Ini Kondisi False/Gagal")
        }
    })
}

myFunctionPromise(2)
.then((result) => {
    console.log(result)
})
.catch((error) => {
    console.log(error)
})


// Promise dengan menggunakan async dan await
async function myFunction (id) {
    let response = await fetch(endpoint + id)
    response = await response.json()
    console.log(response)
}