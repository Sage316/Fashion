const product = [
    {
        id: 0,
        image: 'image/gg-1.jpg',
        title: 'Z Flip Foldable Mobile',
        price: 120,
    },
    {
        id: 1,
        image: 'image/hh-2.jpg',
        title: 'Air Pods Pro',
        price: 60,
    },
    {
        id: 2,
        image: 'image/ee-3.jpg',
        title: '250D DSLR Camera',
        price: 230,
    },
    {
        id: 3,
        image: 'image/aa-1.jpg',
        title: 'Head Phones',
        price: 100,
    }
 ];
 const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
 document.getElementById('root').innerHTML = categories.map((item)=>
 {
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>R ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
 }).join('')
 
 var cart =[];
 
