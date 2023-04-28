const product = [
    {
        id: 0,
        image: 'image/md-salman-tWOz2_EK5EQ-unsplash.jpg',
        title: 'T-shirts',
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
    },
    {
        id: 0,
        image: 'image/ali-muhamad-hT1R6Z5pY5I-unsplash.jpg',
        title: 'Shirts',
        price: 150,
    },
    {
        id: 1,
        image: 'image/nikhil-8Al2ylhlCYk-unsplash.jpg',
        title: 'Socks',
        price: 60,
    },
    {
        id: 2,
        image: 'image/brian-hall-x5aavOm7PFc-unsplash.jpg',
        title: 'Shoes',
        price: 1250,
    },
    {
        id: 3,
        image: 'image/kelly-sikkema-CNjfgzoY8JU-unsplash.jpg',
        title: 'scarves',
        price: 100,
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
   
        <div class='bottom'>
        <img class='images' src=${image}></img>

        <p>${title}</p>
        <h2>R ${price}.00</h2>` +
        "<button onclick='addtocart(" + (i++) + ")'>Add to cart</button>" +
        `</div>
        </div>`
    )
}).join('')

var cart = [];

// sticky navbar funtion
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("header");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

