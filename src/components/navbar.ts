class Navbar extends HTMLElement {
    constructor() {
        super()

        const logo = 'LogoGue.'
        const links = [
            {title:'Home', to:'home.html'},
            {title:'Shop', to:'Shop.html'},
            {title:'Blog', to:'Blog.html'},
            {title:'Contact', to:'Contact.html'},
        ]
        const shadowRoot = this.attachShadow({mode: 'open'})

        const content = `
        <link rel="stylesheet" href="styles/navbar.css">
        <nav>
            <div class="navbar-content-container">
                <a href="index.html" class="logo">${logo}</a>

                <div class="links-container">
                    ${links.map(link => (
                            `<a class="link" href="${link.to}">${link.title}</a>`
                        )).join('')
                    }
                    <a class="cart" href="link5">
                        Cart (<span id="cartItem" class="">0</span>)
                    </a>
                </div>

                <button id="navButton" class="nav-button">
                    <div id="openNavIcon" class="burger-icon bryans-flex">
                        <div class="burger-line"></div>
                        <div class="burger-line"></div>
                        <div class="burger-line"></div>
                    </div>
                    <div id="closeNavIcon" class="close-icon bryans-hidden">
                        &#10005;
                    </div>
                </button>
            </div>
        </nav>
        <div id="burgerMenu" class="burger-menu hide-burger">
        ${
            links.map(link => (
                `<a class="link" href="${link.to}">${link.title}</a>`
            )).join('')
        }
        </div>
        `
        shadowRoot.innerHTML = content 
        
        const navButton = shadowRoot.querySelector('#navButton')
        const openNavIcon = shadowRoot.querySelector('#openNavIcon')
        const closeNavIcon = shadowRoot.querySelector('#closeNavIcon')
        const burgerMenu = shadowRoot.querySelector('#burgerMenu')

        function manageCloseOrOpenIcon(navIsOpen:boolean) {
            if (navIsOpen) {
                closeNavIcon?.classList.remove("bryans-hidden")
                closeNavIcon?.classList.add('bryans-flex')
        
                openNavIcon?.classList.remove("bryans-flex")
                openNavIcon?.classList.add('bryans-hidden')
        
                burgerMenu?.classList.remove('hide-burger')
                burgerMenu?.classList.add('show-burger')
            } else {
                closeNavIcon?.classList.remove('bryans-flex')
                closeNavIcon?.classList.add("bryans-hidden")
        
                openNavIcon?.classList.remove('bryans-hidden')
                openNavIcon?.classList.add("bryans-flex")
                
                burgerMenu?.classList.remove('show-burger')
                burgerMenu?.classList.add('hide-burger')
            }
        }

        let navIsOpen = false

        navButton?.addEventListener('click', () => {
            navIsOpen = !navIsOpen
            manageCloseOrOpenIcon(navIsOpen)
        })

    }
}

customElements.define('my-navbar', Navbar)