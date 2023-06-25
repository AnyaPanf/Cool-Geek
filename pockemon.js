let wrapper = document.querySelector('.pockemon__wrapper')
let card = document.createElement('div')
card.className = 'pockemon__card'

const getPockemon = async () => {
    fetch('https://pokeapi.co/api/v2/pokemon/')
    let pocke = await fetch('https://pokeapi.co/api/v2/pokemon/')
    let data = await pocke.json()
    console.dir(data);
}
getPockemon()