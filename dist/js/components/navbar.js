"use strict";
const navButton = document.querySelector('#navButton');
const openNavIcon = document.querySelector('#openNavIcon');
const closeNavIcon = document.querySelector('#closeNavIcon');
const burgerMenu = document.querySelector('#burgerMenu');
let navIsOpen = false;
navButton === null || navButton === void 0 ? void 0 : navButton.addEventListener('click', () => {
    navIsOpen = !navIsOpen;
    manageCloseOrOpenIcon(navIsOpen);
});
function manageCloseOrOpenIcon(navIsOpen) {
    if (navIsOpen) {
        closeNavIcon === null || closeNavIcon === void 0 ? void 0 : closeNavIcon.classList.remove("my-hidden");
        closeNavIcon === null || closeNavIcon === void 0 ? void 0 : closeNavIcon.classList.add('my-flex');
        openNavIcon === null || openNavIcon === void 0 ? void 0 : openNavIcon.classList.remove("my-flex");
        openNavIcon === null || openNavIcon === void 0 ? void 0 : openNavIcon.classList.add('my-hidden');
        burgerMenu === null || burgerMenu === void 0 ? void 0 : burgerMenu.classList.remove('hide-burger');
        burgerMenu === null || burgerMenu === void 0 ? void 0 : burgerMenu.classList.add('show-burger');
    }
    else {
        closeNavIcon === null || closeNavIcon === void 0 ? void 0 : closeNavIcon.classList.remove('my-flex');
        closeNavIcon === null || closeNavIcon === void 0 ? void 0 : closeNavIcon.classList.add("my-hidden");
        openNavIcon === null || openNavIcon === void 0 ? void 0 : openNavIcon.classList.remove('my-hidden');
        openNavIcon === null || openNavIcon === void 0 ? void 0 : openNavIcon.classList.add("my-flex");
        burgerMenu === null || burgerMenu === void 0 ? void 0 : burgerMenu.classList.remove('show-burger');
        burgerMenu === null || burgerMenu === void 0 ? void 0 : burgerMenu.classList.add('hide-burger');
    }
}
class Navbar extends HTMLElement {
    constructor() {
        super();
        const links = [
            { title: 'Home', to: 'home.html' },
            { title: 'Shop', to: 'Shop.html' },
            { title: 'Blog', to: 'Blog.html' },
            { title: 'Contact', to: 'Contact.html' },
        ];
        const shadowRoot = this.attachShadow({ mode: 'open' });
        const content = `
        <link rel="stylesheet" href="style.css">
        <nav class="w-full px-4 h-[80px] flex justify-center border-2 border-b-slate-300">
            <div class="max-w-[1240px] w-full flex justify-between md:justify-start items-center">
                <a href="index.html" class="font-bold">
                    LogoGue.
                </a>

                <div class="hidden md:flex" data->
                    ${links.map(link => (`<a class="px-6 py-2 rounded-md " href="${link.to}">${link.title}</a>`)).join('')}
                    <a class="px-6 py-2 rounded-md " href="link5">
                        Cart (<span id="" class=""></span>)
                    </a>
                </div>

                <button id="navButton" class="h-[50px] w-[50px] rounded-full border-2 border-slate-300 flex md:hidden justify-center items-center">
                    <div id="openNavIcon" class="w-[22px] aspect-[1/1] flex-col justify-evenly my-flex">
                        <div class="bg-black h-[3px] w-full rounded-xl"></div>
                        <div class="bg-black h-[3px] w-full rounded-xl"></div>
                        <div class="bg-black h-[3px] w-full rounded-xl"></div>
                    </div>
                    <div id="closeNavIcon" class="w-[35px] aspect-[1/1] text-[25px] font-bold justify-center items-center my-hidden ">
                        &#10005;
                    </div>
                </button>
                
            </div>
        </nav>
        <div id="burgerMenu" class="w-full px-4 flex md:hidden flex-col items-center bg-slate-100 duration-300 overflow-hidden hide-burger">
        ${links.map(link => (`<a class="px-6 py-2 rounded-md " href="${link.to}">${link.title}</a>`)).join('')}
        </div>
        `;
        shadowRoot.innerHTML = content;
    }
}
customElements.define('my-navbar', Navbar);
