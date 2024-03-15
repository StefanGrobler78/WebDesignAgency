let menuBox = document.querySelector('.nav__list')
let menuIcon = document.querySelector('.toggle__icon')

menuIcon.addEventListener('click', () => {
    menuBox.classList.toggle('open-menu')
    console.log('hello');
    
})

let links = document.querySelectorAll('.nav__link')
console.log(links);
links.forEach(element => {
    element.addEventListener('click', () => {
        menuBox.classList.toggle('open-menu')
    })
});