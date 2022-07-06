window.onscroll = () => {
    let nav = document.querySelector('nav');
    if (window.pageYOffset > 8) {
        nav.classList.add('sticky')
    }
    else {
        nav.classList.remove('sticky')
    }
}