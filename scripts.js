console.log("Hello world");

document.querySelector(".title-link").addEventListener('click', hideImageFunction)

function hideImageFunction(e) {
    // e.preventDefault();
    document.querySelector('.food-img').classList.add('hidden')
}

