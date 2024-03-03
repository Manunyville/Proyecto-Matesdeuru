const abrirNav = document.getElementById('iconHamb');
const navList = document.getElementById('listaNav');
const navBar = document.getElementById('navContainer')
const closeNav = document.getElementById('closeNav')


abrirNav.addEventListener ("click", () => {
    navBar.classList.add('visibility')
})

closeNav.addEventListener("click", () => {
    navBar.classList.remove('visibility')
})