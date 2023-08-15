"use strict";
class Footer extends HTMLElement {
    constructor() {
        super();
        const title = 'Ini Footernya Make Web Component hehe';
        const desc = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.';
        const links = [
            { icon: `<img class='icon max-w-[20px]' src='https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Facebook_svg-128.png'/>`, to: 'fruits.html' },
            { icon: `<img class='icon max-w-[20px]' src='https://cdn3.iconfinder.com/data/icons/social-media-black-white-2/512/BW_Twitter_glyph_svg-128.png'/>`, to: 'vegg.html' },
            { icon: `<img class='icon max-w-[20px]' src='https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Instagram_svg-128.png'/>`, to: 'others.html' },
        ];
        const shadowRoot = this.attachShadow({ mode: 'open' });
        const content = `
            <link rel="stylesheet" href="style.css">
            <footer class='w-full flex justify-center'>
                <div class='max-w-[1240px] bg-red-500 flex flex-col items-center'>
                    <h2 class='title'>${title}</h2>
                    <p>${desc}</p>
                    <div class='flex'>
                        ${links.map(link => (`<a class='max-w-[20px] px-4' href=${link.to}>${link.icon}</a>`)).join('')}
                    </div>
                </div>
            </footer>
        `;
        shadowRoot.innerHTML = content;
    }
}
customElements.define('my-footer', Footer);
