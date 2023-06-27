let wrapper = document.querySelector('.pockemon__wrapper')
let pockeArr = []
let modal = document.createElement('div')

const getPockemon = async () => {
    let pocke = await fetch('https://pokeapi.co/api/v2/pokemon/')
    let data = await pocke.json()
    data.results.forEach((el, idx) => {
        const getInfo = async () => {
            let pocke2 = await fetch(`${data.results[idx].url}`)
            let data2 = await pocke2.json()
            pockeArr = [...pockeArr, data2]
            console.log(pockeArr);

            if (pockeArr.length === 20) {
                pockeArr.forEach((el) => {
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

                    let pockeId = el.id

                    let pockemonImg = document.createElement('div')
                    pockemonImg.className = 'pockemon__img'
                    pockemonContent.appendChild(pockemonImg)

                    let img = document.createElement('img')
                    pockemonImg.appendChild(img)
                    img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pockeId}.png`

                    pockemonImg.addEventListener('click', () => {
                        modal = document.createElement('div')
                        wrapper.appendChild(modal)
                        modal.className = 'pockemon__modal'

                        let pockemonInfo = document.createElement('div')
                        pockemonInfo.className = 'pockemon__info'
                        modal.appendChild(pockemonInfo)

                        let close = document.createElement('i')
                        pockemonInfo.appendChild(close)
                        close.className = 'pockemon__close fa-sharp fa-solid fa-circle-xmark fa-2xl'
                        close.style.color = '#e10e0e'
                        close.addEventListener('click', () => {
                            modal.remove()
                        })

                        let pockemonPic = document.createElement('div')
                        pockemonInfo.appendChild(pockemonPic)
                        pockemonPic.className = 'pockemon__pic'

                        let img = document.createElement('img')
                        pockemonPic.appendChild(img)
                        img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pockeId}.png`

                        let pockemonText = document.createElement('div')
                        pockemonInfo.appendChild(pockemonText)
                        pockemonText.className = 'pockemon__text'

                        let title = document.createElement('h2')
                        pockemonText.appendChild(title)
                        title.className = 'pockemon__title'
                        title.innerText = el.name
                        let pokeExp = document.createElement("p")
                        pockemonText.appendChild(pokeExp)
                        pokeExp.className = "pockemon__experience"
                        pokeExp.innerText = `Base Experience: ${el.base_experience}`
                        el.abilities.forEach((el) => {
                            let pokeAbility = document.createElement("p")
                            pockemonText.appendChild(pokeAbility)
                            pokeAbility.className = "pockemon__ability"
                            pokeAbility.innerText = `Ability: ${el.ability.name}`
                        })


                    })

                })
            }
        }
        getInfo()
    })
}
getPockemon()

