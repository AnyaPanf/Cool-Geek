let wrapper = document.querySelector('.movies__wrapper')

const getMovie = async () => {
    let movie = await fetch('https://api.themoviedb.org/3/discover/movie?language=ru-RUS&api_key=baacee587b52679e93f67d12424c4cb3')
    let data = await movie.json()

    data.results.forEach((el) => {
        let card = document.createElement('div')
        card.className = 'movies__card'
        wrapper.appendChild(card)
        let img = document.createElement('img')
        card.appendChild(img)
        img.src = `https://image.tmdb.org/t/p/w500/${el.poster_path}`

        card.addEventListener('mouseover', () => {
            let moviesInfo = document.createElement('div')
            moviesInfo.className = 'movies__info animate__animated animate__fadeInUp'
            card.appendChild(moviesInfo)
        })

        console.log(el);
    })
}
getMovie()

