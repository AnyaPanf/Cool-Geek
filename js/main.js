let mainFr = Array.from(document.querySelectorAll('.main__fr'))
mainFr.className = 'main__fr'
let mainContent = document.querySelectorAll('.main__content')
mainContent.className = 'main__content'

mainFr.forEach((el, idx) => {
    el.addEventListener('mouseover', () => {
        mainContent[idx].style.visibility = 'visible'
    })
    el.addEventListener('mouseout', () => {
        mainContent[idx].style.visibility = 'hidden'
    })
});

console.log(mainContent);