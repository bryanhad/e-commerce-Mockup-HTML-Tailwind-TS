import { priceFormatter } from '../lib/priceFormatter.js';
let products = [
    {
        id: 0,
        image: 'https://media.cnn.com/api/v1/images/stellar/prod/120604032828-fresh-ripe-bananas.jpg?q=w_3590,h_2774,x_0,y_0,c_fill',
        title: 'Pisang Cavendish',
        desc: 'Pisang yang sangat enak dan berserat tinggi 2m',
        price: 12000
    },
    {
        id: 1,
        image: 'https://www.themilefarmshop.co.uk/images/shop/more/951x951_430_6bf9229788bcd61537c82667de9084c2_1595000371PinkLadyApple.jpg',
        title: 'Apel Gala',
        desc: 'Apel dari gunung Gala yang bikin galang-galang kapala',
        price: 15000
    },
    {
        id: 2,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Watermeloen.jpg/800px-Watermeloen.jpg',
        title: 'Semangka Allsweet',
        desc: 'Semangka yang sangat manis melebihi dari si dia',
        price: 16000
    },
    {
        id: 3,
        image: 'https://balidirectstore.com/wp-content/uploads/2014/12/pineapple-ariesta.jpg',
        title: 'Nanas Cirebon',
        desc: 'Rumahnya Spongebob ada di Cirebon??',
        price: 21000
    },
    {
        id: 4,
        image: 'https://www.narayanahealth.org/blog/wp-content/uploads/2022/03/shutterstock_622663796.jpg',
        title: 'Kepala eh Kelapa',
        desc: 'Suka dijadiin beha sama orang-orang tertentu',
        price: 13000
    },
    {
        id: 5,
        image: 'https://preview.redd.it/z1y5qdgkfi471.png?width=474&format=png&auto=webp&s=994a9f5c4144dfc11f10c4c0ef61927aeecbe39e',
        title: 'Kiwi',
        desc: 'Kayanya gambarnya salah deh..',
        price: 1500000
    },
];
class Products extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        const content = `
        <link rel="stylesheet" href="styles/products.css">
        <section id='products-list' class='products-list'>
            ${products.map(product => {
            const { image, title, desc, price } = product;
            const formattedPrice = priceFormatter(price);
            return `
                <div id="product" class='product-container'>
                    <img src="${image}"/>
                    <h1>${title}</h1>
                    <p>${desc}</p>
                    <h5>Rp ${formattedPrice}</h5>
                    <button id='addToCartButton'>Masukkan Keranjang</button>
                </div>
                `;
        }).join('')}
        </section>
        `;
        shadowRoot.innerHTML = content;
    }
}
customElements.define('products-list', Products);
