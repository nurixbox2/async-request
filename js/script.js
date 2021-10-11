//Promise

// console.log('Request data...');

// setTimeout(() => {
//     console.log('Preparing data...');
//     const backendData = {
//         server: 'AAA',
//         status: 'working'
//     }
//     setTimeout (() => {
//         backendData.modified = true
//         console.log('Data recieved', backendData);
//     }, 2000)
// }, 2000)

// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Preparing data...');
//         const backendData = {
//             server: 'AAA',
//             port: 2000,
//             status: '200 - OK'
//             // status: '500 - server not working'
//         }
//         // resolve(backendData)
//         reject(backendData)
//     }, 2000)
// })

// p.then((data) => {
//     console.log('Promise resolve', data);
// })

// p 
//     .then((data) => console.log('OK', data))
//     .catch((err) => console.log('Error', err))
//     .finally((data) => console.log('Final'))

//============Fetch, async, await===============

// const search = async () => {
//     let url = 'https://wwww.samurai.com/users'
//     let request = await fetch(url)
//     let response = await request.json()
//     console.log(response);
// }

//================================================

const API = 'https://api.giphy.com/v1/gifs/search?'
const KEY = 'api_key=bSiU6bh2SCzD09DtLcI4HmRlURL2Zzkb'
const secondParams = '&limit=25&q='

const input = document.getElementById('searchGiphy')
const btn = document.getElementById('btn')
const output = document.getElementById('output')

const search = async () => {
    let text = input.value
    let url = API + KEY + secondParams + text
    const request = await fetch(url)
    const response = await request.json()

    output.innerHTML = ''
    input.value = ''

    renderGiphy(response.data);
}

const renderGiphy = (data) => {
    data.forEach(element => {
        let ifrm = document.createElement('iframe')
        ifrm.src = element.embed_url
        let h3 = document.createElement('h3')
        h3.innerHTML = element.title 
        output.append(ifrm, h3)
    })
}

btn.addEventListener('click', search)