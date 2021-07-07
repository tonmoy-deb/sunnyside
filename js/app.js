const navbar = document.querySelector('.navbar');
const toggler = document.querySelector('.navbar-toggler');
const navbarNav = document.querySelector('.navbar-nav-wrapper')

window.onscroll = () => {
    if(window.pageYOffset >= 100){
        if(!navbar.classList.contains('scrolling')){
            navbar.classList.add('scrolling')
        }
    }else{
        if(navbar.classList.contains('scrolling')){
            navbar.classList.remove('scrolling')
        }
    }
}

toggler.onclick = () => {
    navbarNav.classList.toggle('display');

    if(navbarNav.classList.contains('display')){
        toggler.innerHTML = '<i class="fas fa-times" aria-hidden="true"></i>'
    }else{
        toggler.innerHTML = '<i class="fas fa-bars" aria-hidden="true"></i>'
    }
}