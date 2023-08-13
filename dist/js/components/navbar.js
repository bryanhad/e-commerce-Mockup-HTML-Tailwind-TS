"use strict";
class Navbar extends HTMLElement {
    constructor() {
        super();
        const title = 'LOGO';
        const links = [
            { name: 'Fruits', to: 'fruits.html' },
            { name: 'Veggetables', to: 'vegg.html' },
            { name: 'Others', to: 'others.html' },
        ];
        const shadowRoot = this.attachShadow({ mode: 'open' });
        const content = `
            <style>
                * {
                    box-sizing: border-box;
                }
                nav {
                    width: 100%;
                    padding-left:20px;
                    padding-right:20px;
                }
                .nav-content-container{
                    max-width: 1240px;
                    margin-left:auto;
                    margin-right:auto;

                    display: flex;
                    align-items: center;
                    gap: 30px;
                }
                .links-container{
                    display: flex;
                    gap: 20px;
                }
                a {
                    text-decoration: none;
                    padding-top: 10px;
                    padding-bottom: 10px;
                    padding-inline: 30px;
                    border-radius: 15px;
                    color: #878787;
                    background-color: #ebebeb;
                }
            </style>
            <nav>
                <div class='nav-content-container'>
                    <h1>${title}</h1>
                    <div class='links-container'>
                        ${links.map(link => (`<a href=${link.to}>${link.name}</a>`)).join('')}
                    </div>
                </div>
            </nav>
        `;
        shadowRoot.innerHTML = content;
    }
}
customElements.define('my-navbar', Navbar);
