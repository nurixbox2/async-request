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

    renderGiphy(response.data)
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