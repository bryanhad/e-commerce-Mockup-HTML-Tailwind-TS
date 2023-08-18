"use strict";
class Navbar extends HTMLElement {
    constructor() {
        super();
        const logo = 'LogoGue.';
        const links = [
            { title: 'Home', to: 'home.html' },
            { title: 'Shop', to: 'Shop.html' },
            { title: 'Blog', to: 'Blog.html' },
            { title: 'Contact', to: 'Contact.html' },
        ];
        const shadowRoot = this.attachShadow({ mode: 'open' });
        const content = `
        <link rel="stylesheet" href="styles/navbar.css">
        
        <nav>
            <div class="navbar-content-container">
                <a href="index.html" class="logo">${logo}</a>

                <div class="links-container">
                    ${links.map(link => (`<a class="link" href="${link.to}">${link.title}</a>`)).join('')}
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
        ${links.map(link => (`<a class="link" href="${link.to}">${link.title}</a>`)).join('')}
        </div>
        `;
        shadowRoot.innerHTML = content;
        const navButton = shadowRoot.querySelector('#navButton');
        const openNavIcon = shadowRoot.querySelector('#openNavIcon');
        const closeNavIcon = shadowRoot.querySelector('#closeNavIcon');
        const burgerMenu = shadowRoot.querySelector('#burgerMenu');
        function manageCloseOrOpenIcon(navIsOpen) {
            if (navIsOpen) {
                closeNavIcon === null || closeNavIcon === void 0 ? void 0 : closeNavIcon.classList.remove("bryans-hidden");
                closeNavIcon === null || closeNavIcon === void 0 ? void 0 : closeNavIcon.classList.add('bryans-flex');
                openNavIcon === null || openNavIcon === void 0 ? void 0 : openNavIcon.classList.remove("bryans-flex");
                openNavIcon === null || openNavIcon === void 0 ? void 0 : openNavIcon.classList.add('bryans-hidden');
                burgerMenu === null || burgerMenu === void 0 ? void 0 : burgerMenu.classList.remove('hide-burger');
                burgerMenu === null || burgerMenu === void 0 ? void 0 : burgerMenu.classList.add('show-burger');
            }
            else {
                closeNavIcon === null || closeNavIcon === void 0 ? void 0 : closeNavIcon.classList.remove('bryans-flex');
                closeNavIcon === null || closeNavIcon === void 0 ? void 0 : closeNavIcon.classList.add("bryans-hidden");
                openNavIcon === null || openNavIcon === void 0 ? void 0 : openNavIcon.classList.remove('bryans-hidden');
                openNavIcon === null || openNavIcon === void 0 ? void 0 : openNavIcon.classList.add("bryans-flex");
                burgerMenu === null || burgerMenu === void 0 ? void 0 : burgerMenu.classList.remove('show-burger');
                burgerMenu === null || burgerMenu === void 0 ? void 0 : burgerMenu.classList.add('hide-burger');
            }
        }
        let navIsOpen = false;
        navButton === null || navButton === void 0 ? void 0 : navButton.addEventListener('click', () => {
            navIsOpen = !navIsOpen;
            manageCloseOrOpenIcon(navIsOpen);
        });
    }
}
customElements.define('my-navbar', Navbar);
