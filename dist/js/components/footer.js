"use strict";
class Footer extends HTMLElement {
    constructor() {
        super();
        const title = 'Ini Footernya Make Web Component hehe';
        const desc = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.';
        const links = [
            { icon: '<i class="fa-brands fa-facebook-f"></i>', to: 'fruits.html' },
            { icon: '<i class="fa-brands fa-instagram"></i>', to: 'vegg.html' },
            { icon: '<i class="fa-brands fa-twitter"></i>', to: 'others.html' },
        ];
        const shadowRoot = this.attachShadow({ mode: 'open' });
        const content = `
            <style>
                * {
                box-sizing: border-box;
                }
                footer {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 10px;
                    padding-inline: 30px;
                    max-width: 1240px;
                    text-align: center;
                    background-color: #c4c4c4;
                }
                .title {
                    color: #c4c4c4;    
                }
                .links-container{
                    display: flex;
                    gap: 20px;
                }
                a {
                    text-decoration: none;
                    padding: 20px;
                    border-radius: 50%;
                    color: white;
                    background-color: #ebebeb;
                }
            </style>
            <footer>
                <h1 class='title'>${title}</h1>
                <p>${desc}</p>
                <div class='links-container'>
                    ${links.map(link => (`<a href=${link.to}>${link.icon}</a>`)).join('')}
                </div>
            </footer>
        `;
        shadowRoot.innerHTML = content;
    }
}
customElements.define('my-footer', Footer);
