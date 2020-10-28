const BUTTON = document.querySelector('.btn')
const IMG = document.getElementById('gif-img')
let word = document.getElementById('current-word')

const API_KEY = "YOUR GIPHY API KEY"
// Fetch Giphy
async function getGif() {
    let input = document.getElementById('word').value
    word.innerHTML = input

    try {
        let res = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${input}&limit=25&offset=0&rating=g&lang=en`)
        let data = await res.json()

        // Returns random gifs everytime button is pressed
        let randomNum = Math.floor(Math.random() * data.data.length)
        return data.data[randomNum].images.original.url

    } catch {
        console.error();
    }
}

BUTTON.addEventListener('click', (e) => {
    // Prevents the browser from refreshing the page
    e.preventDefault()

    getGif()
        .then((data) => {
            IMG.setAttribute('src', data)
        })
        .catch((err) => {
            console.error(err);
        })
})