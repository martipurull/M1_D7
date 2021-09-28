const changeH1 = function () {
    let h1 = document.querySelector('h1')
    h1.innerText = 'THE SHOP IS CLOSED'
}

const changeBg = function () {
    let randomColour = `#${ Math.floor(Math.random() * 16777215).toString(16) }`
    let mainContainer = document.getElementById("main-container")
    mainContainer.style.backgroundColor = randomColour
}

// const changeBgImg = function () {
//     let mainContainer = document.getElementById('main-container')
//     if (mainContainer.className = "bgImg1") {
//         mainContainer.className = 'bgImg2'
//     } else {
//         mainContainer.className = "bgImg1"
//     }
// }

const changeFooter = function () {
    let footerToChange = document.querySelector('footer')
    footerToChange.innerText = 'WE DO NOT WANT YOU TO FIND US'
}

const changeLinks = function () {
    let links = document.getElementsByTagName('a')
    for (let link of links) {
        link.classList.toggle('blackLinks')
    }
}

const toggleImgs = function () {
    let images = document.getElementsByTagName('img')
    for (let img of images) {
        img.classList.toggle('display-none')
    }
}

const changePriceColour = function () {
    let randomColour = `#${ Math.floor(Math.random() * 16777215).toString(16) }`
    let prices = document.getElementsByClassName('price-element')
    for (let price of prices) {
        price.style.color = randomColour
    }
}