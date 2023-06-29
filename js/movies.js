let wrapper = document.querySelector('.movies__wrapper')
let movies = document.querySelector('.movies')

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

        let rating = document.createElement('div')
        rating.className = 'movies__rating'
        card.appendChild(rating)
        let star = document.createElement('i')
        star.className = 'fa-sharp fa-regular fa-star'
        star.style.color = '#fdb068'
        rating.appendChild(star)
        let ratingText = document.createElement('p')
        rating.appendChild(ratingText)
        ratingText.innerText = el.vote_average

        img.addEventListener('mouseover', () => {
            let moviesInfo = document.createElement('div')
            moviesInfo.className = 'movies__info animate__animated animate__fadeInUp'
            card.appendChild(moviesInfo)

            let title = document.createElement('h2')
            title.className = 'movies__title'
            moviesInfo.appendChild(title)
            title.innerText = el.title

            let date = document.createElement('p')
            date.className = 'movies__date'
            moviesInfo.appendChild(date)
            date.innerText = `Дата выхода: ${el.release_date}`

            let btn = document.createElement('button')
            btn.className = 'movies__btn'
            moviesInfo.appendChild(btn)
            btn.innerText = 'Подробнее'

            card.addEventListener('mouseleave', () => {
                moviesInfo.remove()
            })

            btn.addEventListener('click', () => {
                let modal = document.createElement('div')
                movies.appendChild(modal)
                modal.className = 'movies__modal'

                let moviesDetails = document.createElement('div')
                moviesDetails.className = 'movies__details'
                modal.appendChild(moviesDetails)

                let close = document.createElement('i')
                moviesDetails.appendChild(close)
                close.className = 'movies__close fa-sharp fa-solid fa-x fa-2xl fa-beat'
                close.style.color = '#faa1ca'
                close.addEventListener('click', () => {
                    modal.remove()
                })

                let moviesPic = document.createElement('div')
                moviesDetails.appendChild(moviesPic)
                moviesPic.className = 'movies__pic'

                let img = document.createElement('img')
                moviesPic.appendChild(img)
                img.src = `https://image.tmdb.org/t/p/w500/${el.backdrop_path}`

                let moviesText = document.createElement('div')
                moviesDetails.appendChild(moviesText)
                moviesText.className = 'movies__text'

                let detailsTitle = document.createElement('h2')
                moviesText.appendChild(detailsTitle)
                detailsTitle.className = 'movies__name'
                detailsTitle.innerText = el.title

                let genre = document.createElement('p')
                moviesText.appendChild(genre)
                genre.className = 'movies__genre'
                let a = ''
                let b = el
                const getGenre = async () => {
                    let genreData = await fetch('http://api.themoviedb.org/3/genre/movie/list?api_key=baacee587b52679e93f67d12424c4cb3')
                    let newGenreData = await genreData.json()
                    console.log(newGenreData)
                    newGenreData.genres.forEach((item) => {
                        b.genre_ids.forEach((i) => {
                            if (i === item.id) {
                                a = `${a} ${item.name}`
                                genre.innerText = `Жанр: ${a}`
                            }
                        })
                    })
                }
                getGenre()

                let lang = document.createElement('p')
                lang.className = 'movies__lang'
                moviesText.appendChild(lang)
                if (el.original_language === 'en') {
                    lang.innerText = `Язык оригинала: английский`
                } else if (el.original_language === 'es') {
                    lang.innerText = `Язык оригинала: испанский`
                }

                let detailsText = document.createElement('p')
                detailsText.className = 'movies__desc'
                moviesText.appendChild(detailsText)
                detailsText.innerText = el.overview
            })
        })
    })
}
getMovie()

