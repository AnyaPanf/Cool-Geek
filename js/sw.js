let wrapper = document.querySelector('.sw__wrapper')

const getInfo = async () => {
    let data = await fetch('https://swapi.dev/api/people')
let result = await data.json()
console.log(result);
}
getInfo()