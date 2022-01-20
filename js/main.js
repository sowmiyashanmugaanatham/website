// SHOW MENU
console.log("js working")


const showmenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId)
    const nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')


        });
    }
}
showmenu('nav_toggle', 'nav_menu')



//ACTIVE &REMOVE ACTIVE
const nav_link = document.querySelectorAll('.nav_link')
nav_link.forEach(n => n.classList.remove('active'))
function linkaction() {
    nav_link.forEach(n => n.classList.remove('active'))
    this.classList.add('active')


    const navMenu = document.getElementById('nav_menu')
    navMenu.classList.remove('show')
}

nav_link.forEach(n => n.addEventListener('click', linkaction))

