let wrapper = document.querySelector('.pockemon__wrapper')

const getPockemon = async () => {
    let pocke = await fetch('https://pokeapi.co/api/v2/pokemon/')
    let data = await pocke.json()
    data.results.forEach((el, idx) => {
        let card = document.createElement('div')
        card.className = 'pockemon__card'
        wrapper.appendChild(card)

        let pockemonContent = document.createElement('div')
        pockemonContent.className = 'pockemon__content'
        card.appendChild(pockemonContent)

        let pockemonName = document.createElement('h3')
        pockemonName.className = 'pockemon__name'
        pockemonContent.appendChild(pockemonName)
        pockemonName.innerText = el.name

        let pockemonImg = document.createElement('div')
        pockemonImg.className = 'pockemon__img'
        pockemonContent.appendChild(pockemonImg)

        let img = document.createElement('img')
        pockemonImg.appendChild(img)
        img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${idx + 1}.png`
    })
    console.log(data);
}
getPockemon()

