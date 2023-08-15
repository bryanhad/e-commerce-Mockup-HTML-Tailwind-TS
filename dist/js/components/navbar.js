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
