const product = [
    {
        id: 0,
        image: 'image/md-salman-tWOz2_EK5EQ-unsplash.jpg',
        title: 'T-shits',
        price: 120,
    },
    {
        id: 1,
        image: 'image/tobias-tullius-Fg15LdqpWrs-unsplash.jpg',
        title: 'Jackets',
        price: 300,
    },
    {
        id: 2,
        image: 'image/mnz-m1m2EZOZVwA-unsplash.jpg',
        title: 'Jeans',
        price: 250,
    },
    {
        id: 3,
        image: 'image/johnstons-of-elgin-dMqbaI2IbHs-unsplash.jpg',
        title: 'Jersey',
        price: 170,
    }
];

const categories = [...new Set(product.map((item) => {
    return item
}
)
)
]
let i = 0;
document.getElementById('root').innerHTML = categories.map((item) => {
    var { image, title, price } = item;
    return (
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>R ${price}.00</h2>` +
        "<button onclick='addtocart(" + (i++) + ")'>Add to cart</button>" +
        `</div>
        </div>`
    )
}).join('')

var cart = [];

