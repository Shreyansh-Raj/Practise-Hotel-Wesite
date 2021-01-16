var nav_height = document.querySelector('#navbar').clientHeight
function bookNow() {
    location.href = "/book"
}

function homeFunction(){
    scrollTo(0,0)
}

function servicesFunction(){
    let height = (window.scrollY + document.querySelector('.services').getBoundingClientRect().top)-(nav_height)
    scrollTo(0,height)
}

function ourClientsFunction() {
    let height = (window.scrollY + document.querySelector('.our-clients').getBoundingClientRect().top)-(nav_height)
    scrollTo(0,height)
}

function contactUsFunction(){
    let height = (window.scrollY + document.querySelector('.contact-us').getBoundingClientRect().top)-(nav_height)
    scrollTo(0,height)
}