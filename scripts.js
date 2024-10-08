console.log("Hello world");

// document.querySelector('h1').addEventListener('click', hideImageFunction)

// function hideImageFunction(e) {
//     // e.preventDefault();
//     document.querySelector('.food-img').classList.add('hidden')
// }

// ==================
const title = document.querySelector('h1')
const image = document.querySelector('img')

title.addEventListener('click', function() {
    if (image.style.display == 'none') {
        image.style.display = 'block'
    } else {
        image.style.display = 'none'
    }
})