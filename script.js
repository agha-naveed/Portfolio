let searchBtn = document.querySelector('.search-btn-click')
let respSearch = document.querySelector('.resp-search')
let searchCloseBtn = document.querySelector('.search-close-btn')

searchBtn.addEventListener('click', () => {
    respSearch.classList.add('search-cover-show')
})
searchCloseBtn.onclick = () => {
    respSearch.classList.remove('search-cover-show')
}

let menuBtn = document.querySelector('.menu-bar > .menu-open-bar')
let menuCloseBtn = document.querySelector('.menu-bar > .menu-close-btn')
let menu = document.querySelector('.navbar > nav > ul')

menuBtn.addEventListener('click', () => {
    menu.classList.add('r-show')
    menuCloseBtn.classList.add('r-show')
    menuCloseBtn.style.right = '40px'
})

menuCloseBtn.addEventListener('click', () => {
    menu.classList.remove('r-show')
    menuCloseBtn.classList.remove('r-show')
    menuCloseBtn.style.right = 0
})


let fbLogo = document.querySelectorAll('.fb-logo')
let twitterLogo = document.querySelectorAll('.twitter-logo')
let instaLogo = document.querySelectorAll('.insta-logo')
let githubLogo = document.querySelectorAll('.github-logo')

fbLogo.forEach(elem => {
    elem.addEventListener('click', () => {
        window.open('https://facebook.com/naveedbalti31', 'Facebook Page', 'width=900, height=900').moveBy(200, 200)
    })
});
twitterLogo.forEach(elem => {
    elem.addEventListener('click', () => {
        window.open('https://twitter.com/naveed_kazmi31', 'Twitter Page', 'width=900, height=900').moveBy(200, 200)
    })
});
instaLogo.forEach(elem => {
    elem.addEventListener('click', () => {
        window.open('https://instagram.com/aghanaveed_', 'Instagram Page', 'width=900, height=900').moveBy(200, 200)
    })
});
githubLogo.forEach(elem => {
    elem.addEventListener('click', () => {
        window.open('https://github.com/agha-naveed', 'Github Page', 'width=900, height=900').moveBy(200, 200)
    })
});


let skillsRow1 = document.querySelectorAll('.skills-row')[0]
let skillsRow2 = document.querySelectorAll('.skills-row')[1]

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4;

    const boxTop = skillsRow1.getBoundingClientRect().top;
    const boxBottom = skillsRow1.getBoundingClientRect().bottom;

    if(boxTop < triggerBottom && boxTop > 0) {
        skillsRow1.classList.add('l-show')
        skillsRow2.classList.add('r-show')
    }
    else {
        skillsRow1.classList.remove('l-show')
        skillsRow2.classList.remove('r-show')
    }
}

checkBoxes()
window.addEventListener('scroll', checkBoxes)

const myPic = document.querySelector('.my-pic > img')
const myDetails = document.querySelector('.front-details')

window.addEventListener('mousemove', (e) => {
    myPic.style.right = (e.clientX / 100) + 'px'
    myDetails.style.left = (e.clientX / 100) + 'px'
})

const projectDetails = document.querySelector('.pr-details')

projectDetails.addEventListener('mouseover', () => {
    
})