const hamburger = document.getElementById('ham_menu');
const navMenu = document.getElementById('nav_menu');

hamburger.addEventListener('click', toggleHamMenu)
navMenu.addEventListener('click', toggleHamMenu)

function toggleHamMenu () {
    hamburger.classList.toggle('active')
    navMenu.classList.toggle('active')
}

fetch('https://dummyjson.com/products')
  .then(response => response.json())
  .then(rawData => {
    const products = rawData.products;

    const ourProduct = rawData.products[25]
    console.log(ourProduct);

// Or it can be done in another way, in separate lines: 
    // const firstProduct = products[0]
    // console.log(firstProduct);

    const productPhotos = ourProduct.images;
    console.log('Product photos', productPhotos);

    




})