let wrapper = document.querySelector('.sw__wrapper')
let intro = document.createElement('div')
intro.className = 'sw__intro'
wrapper.appendChild(intro)

const getRemoved = (a) => {
   a.remove()
}

let frList = Array.from(document.querySelectorAll('li'))

frList.forEach((el) => {
    el.addEventListener('click', () => {

        const getInfo = async () => {
            let info = await fetch(`https://swapi.dev/api/${el.classList[0]}/`)
            let data = await info.json()

            getRemoved(intro)

            intro = document.createElement('div')
            intro.className = 'sw__intro'
            wrapper.appendChild(intro)

            if (el.classList[0] === 'people') {
                data.results.forEach((elem) => {
                    let card = document.createElement('div')
                    card.className = 'sw__card animate__animated animate__fadeInUp'
                    intro.appendChild(card)
                    let title = document.createElement('h2')
                    title.className = 'sw__title'
                    card.appendChild(title)
                    title.innerText = elem.name

                    card.addEventListener('click', () => {
                        let modal = document.createElement('div')
                        card.appendChild(modal)
                        modal.className = 'sw__modal animate__animated animate__fadeInUp'
                        let birthDay = document.createElement('p')
                        modal.appendChild(birthDay)
                        birthDay.className = 'sw__char'
                        birthDay.innerText = `Birth year: ${elem.birth_year}`
                        let gender = document.createElement('p')
                        modal.appendChild(gender)
                        gender.className = 'sw__char'
                        gender.innerText = `Gender: ${elem.gender}`
                        let height = document.createElement('p')
                        modal.appendChild(height)
                        height.className = 'sw__char'
                        height.innerText = `Height: ${elem.height}`      
                        let hairColor = document.createElement('p')
                        modal.appendChild(hairColor)
                        hairColor.className = 'sw__char'
                        hairColor.innerText = `Hair color: ${elem.hair_color}`      
                        let eyeColor = document.createElement('p')
                        modal.appendChild(eyeColor)
                        eyeColor.className = 'sw__char'
                        eyeColor.innerText = `Eye color: ${elem.eye_color}`

                        modal.addEventListener('click', () => {
                            modal.remove()
                        })
                    })
                })
            }
            if (el.classList[0] === 'planets') {
                data.results.forEach((elem) => {
                    let card = document.createElement('div')
                    card.className = 'sw__card animate__animated animate__fadeInUp'
                    intro.appendChild(card)
                    let title = document.createElement('h2')
                    title.className = 'sw__title'
                    card.appendChild(title)
                    title.innerText = elem.name

                    card.addEventListener('click', () => {
                        let modal = document.createElement('div')
                        card.appendChild(modal)
                        modal.className = 'sw__modal animate__animated animate__fadeInUp'

                        let climate = document.createElement('p')
                        modal.appendChild(climate)
                        climate.className = 'sw__char'
                        climate.innerText = `Climate: ${elem.climate}`
                        let diameter = document.createElement('p')
                        modal.appendChild(diameter)
                        diameter.className = 'sw__char'
                        diameter.innerText = `Diameter: ${elem.diameter}`
                        let gravity = document.createElement('p')
                        modal.appendChild(gravity)
                        gravity.className = 'sw__char'
                        gravity.innerText = `Gravity: ${elem.gravity}`
                        let population = document.createElement('p')
                        modal.appendChild(population)
                        population.className = 'sw__char'
                        population.innerText = `Population: ${elem.population}`
                        let terrain = document.createElement('p')
                        modal.appendChild(terrain)
                        terrain.className = 'sw__char'
                        terrain.innerText = `Terrain: ${elem.terrain}`

                        modal.addEventListener('click', () => {
                            modal.remove()
                        })
                    })
                })
            }
            if (el.classList[0] === 'starships') {
                data.results.forEach((elem) => {
                    let card = document.createElement('div')
                    card.className = 'sw__card animate__animated animate__fadeInUp'
                    intro.appendChild(card)
                    let title = document.createElement('h2')
                    title.className = 'sw__title'
                    card.appendChild(title)
                    title.innerText = elem.name

                    card.addEventListener('click', () => {
                        let modal = document.createElement('div')
                        card.appendChild(modal)
                        modal.className = 'sw__modal animate__animated animate__fadeInUp'
                        let manufacturer = document.createElement('p')
                        modal.appendChild(manufacturer)
                        manufacturer.className = 'sw__char'
                        manufacturer.innerText = `Manufacturer: ${elem.manufacturer}`
                        let model = document.createElement('p')
                        modal.appendChild(model)
                        model.className = 'sw__char'
                        model.innerText = `Model: ${elem.model}`
                        let starshipClass = document.createElement('p')
                        modal.appendChild(starshipClass)
                        starshipClass.className = 'sw__char'
                        starshipClass.innerText = `Starship class: ${elem.starship_class}`      
                        let passangers = document.createElement('p')
                        modal.appendChild(passangers)
                        passangers.className = 'sw__char'
                        passangers.innerText = `Passangers: ${elem.passangers}`      
                        let crew = document.createElement('p')
                        modal.appendChild(crew)
                        crew.className = 'sw__char'
                        crew.innerText = `Crew: ${elem.crew}`

                        console.log(elem);
                        modal.addEventListener('click', () => {
                            modal.remove()
                        })
                    })
                })
            }
            if (el.classList[0] === 'vehicles') {
                data.results.forEach((elem) => {
                    let card = document.createElement('div')
                    card.className = 'sw__card animate__animated animate__fadeInUp'
                    intro.appendChild(card)
                    let title = document.createElement('h2')
                    title.className = 'sw__title'
                    card.appendChild(title)
                    title.innerText = elem.name

                    card.addEventListener('click', () => {
                        let modal = document.createElement('div')
                        card.appendChild(modal)
                        modal.className = 'sw__modal animate__animated animate__fadeInUp'
                        let manufacturer = document.createElement('p')
                        modal.appendChild(manufacturer)
                        manufacturer.className = 'sw__char'
                        manufacturer.innerText = `Manufacturer: ${elem.manufacturer}`
                        let model = document.createElement('p')
                        modal.appendChild(model)
                        model.className = 'sw__char'
                        model.innerText = `Model: ${elem.model}`
                        let vehicleClass = document.createElement('p')
                        modal.appendChild(vehicleClass)
                        vehicleClass.className = 'sw__char'
                        vehicleClass.innerText = `Vehicle class: ${elem.vehicle_class}`      
                        let cargo = document.createElement('p')
                        modal.appendChild(cargo)
                        cargo.className = 'sw__char'
                        cargo.innerText = `Cargo capacity: ${elem.cargo_capacity}`      
                        let crew = document.createElement('p')
                        modal.appendChild(crew)
                        crew.className = 'sw__char'
                        crew.innerText = `Crew: ${elem.crew}`

                        console.log(elem);
                        modal.addEventListener('click', () => {
                            modal.remove()
                        })
                    })
                })
            }
            if (el.classList[0] === 'species') {
                data.results.forEach((elem) => {
                    let card = document.createElement('div')
                    card.className = 'sw__card animate__animated animate__fadeInUp'
                    intro.appendChild(card)
                    let title = document.createElement('h2')
                    title.className = 'sw__title'
                    card.appendChild(title)
                    title.innerText = elem.name

                    card.addEventListener('click', () => {
                        let modal = document.createElement('div')
                        card.appendChild(modal)
                        modal.className = 'sw__modal animate__animated animate__fadeInUp'
                        let height = document.createElement('p')
                        modal.appendChild(height)
                        height.className = 'sw__char'
                        height.innerText = `Average height: ${elem.average_height}`
                        let lifespan = document.createElement('p')
                        modal.appendChild(lifespan)
                        lifespan.className = 'sw__char'
                        lifespan.innerText = `Average lifespan: ${elem.average_lifespan}`
                        let lang = document.createElement('p')
                        modal.appendChild(lang)
                        lang.className = 'sw__char'
                        lang.innerText = `Language: ${elem.language}`      
                        let classif = document.createElement('p')
                        modal.appendChild(classif)
                        classif.className = 'sw__char'
                        classif.innerText = `Classification: ${elem.classification}`      
                        let skin = document.createElement('p')
                        modal.appendChild(skin)
                        skin.className = 'sw__char'
                        skin.innerText = `Skin colors: ${elem.skin_colors}`

                        console.log(elem);
                        modal.addEventListener('click', () => {
                            modal.remove()
                        })
                    })
                })
            }
            if (el.classList[0] === 'films') {
                data.results.forEach((elem) => {
                    let card = document.createElement('div')
                    card.className = 'sw__card animate__animated animate__fadeInUp'
                    intro.appendChild(card)
                    let title = document.createElement('h2')
                    title.className = 'sw__title'
                    card.appendChild(title)
                    title.innerText = elem.title
                    console.log(elem);

                    card.addEventListener('click', () => {
                        let modal = document.createElement('div')
                        card.appendChild(modal)
                        modal.className = 'sw__modal-films animate__animated animate__fadeInUp'
                        let director = document.createElement('p')
                        modal.appendChild(director)
                        director.className = 'sw__char'
                        director.innerText = `Director: ${elem.director}`
                        let episode = document.createElement('p')
                        modal.appendChild(episode)
                        episode.className = 'sw__char'
                        episode.innerText = `Episode: ${elem.episode_id}`     
                        let release = document.createElement('p')
                        modal.appendChild(release)
                        release.className = 'sw__char'
                        release.innerText = `Release date: ${elem.release_date}`      
                        let producer = document.createElement('p')
                        modal.appendChild(producer)
                        producer.className = 'sw__char'
                        producer.innerText = `Producer: ${elem.producer}`

                        console.log(elem);
                        modal.addEventListener('click', () => {
                            modal.remove()
                        })
                    })
                })
            }



        }
        getInfo()

    })

})










