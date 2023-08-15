"use strict";
class Footer extends HTMLElement {
    constructor() {
        super();
        const title = 'Ini Footernya Make Web Component hehe';
        const desc = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.';
        const links = [
            { icon: `<img class='icon' src='https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Facebook_svg-128.png'/>`, to: 'fruits.html' },
            { icon: `<img class='icon' src='https://cdn3.iconfinder.com/data/icons/social-media-black-white-2/512/BW_Twitter_glyph_svg-128.png'/>`, to: 'vegg.html' },
            { icon: `<img class='icon' src='https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Instagram_svg-128.png'/>`, to: 'others.html' },
        ];
        const shadowRoot = this.attachShadow({ mode: 'open' });
        const content = `
            <style>
                * {
                box-sizing: border-box;
                }
                footer {
                    width: 100%;
                    padding-left:20px;
                    padding-right:20px;

                    border-top: 2px solid #e8e8e8;
                }
                .footer-content-container{
                    max-width: 1240px;
                    margin-left:auto;
                    margin-right:auto;

                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                }
                .title {
                    line-height: 1;
                    color: #c4c4c4;    
                }
                .links-container{
                    display: flex;
                    gap: 20px;
                }
                a {
                    text-decoration: none;
                    height: 40px;
                    width: 40px;
                    display: flex;
                    justify-content:center;
                    align-items:center;
                    border-radius: 50%;
                    border: solid 2px  #ebebeb;
                }
                .icon{
                    max-width: 20px;
                }
                p{
                    line-height:1;
                }
            </style>
            <footer>
                <div class='footer-content-container'>
                    <h2 class='title'>${title}</h2>
                    <p>${desc}</p>
                    <div class='links-container'>
                        ${links.map(link => (`<a href=${link.to}>${link.icon}</a>`)).join('')}
                    </div>
                </div>
            </footer>
        `;
        shadowRoot.innerHTML = content;
    }
}
customElements.define('my-footer', Footer);
