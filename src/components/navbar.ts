const navButton = document.querySelector('#navButton')
const openNavIcon = document.querySelector('#openNavIcon')
const closeNavIcon = document.querySelector('#closeNavIcon')
const burgerMenu = document.querySelector('#burgerMenu')

let navIsOpen = false

navButton?.addEventListener('click', () => {
    navIsOpen = !navIsOpen
    manageCloseOrOpenIcon(navIsOpen)
})

function manageCloseOrOpenIcon(navIsOpen:boolean) {
    if (navIsOpen) {
        closeNavIcon?.classList.remove("my-hidden")
        closeNavIcon?.classList.add('my-flex')

        openNavIcon?.classList.remove("my-flex")
        openNavIcon?.classList.add('my-hidden')

        burgerMenu?.classList.remove('hide-burger')
        burgerMenu?.classList.add('show-burger')
    } else {
        closeNavIcon?.classList.remove('my-flex')
        closeNavIcon?.classList.add("my-hidden")

        openNavIcon?.classList.remove('my-hidden')
        openNavIcon?.classList.add("my-flex")
        
        burgerMenu?.classList.remove('show-burger')
        burgerMenu?.classList.add('hide-burger')
    }
}

