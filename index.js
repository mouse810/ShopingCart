// Define Variables
const shop = document.getElementById('shop')

// Shot Items Array

let shopItemsData = [{
     id: '01',
     name: 'Casual Shirt',
     price: 45,
     disc: 'Cool Shirts for Man.Cool Shirts for Man.',
     img: 'images/img-1.jpg'
}, {
     id: '01',
     name: 'Office Shirt',
     price: 100,
     disc: 'Cool Shirts for Man.Cool Shirts for Man.',
     img: 'images/img-2.jpg'
}, {
     id: '01',
     name: 'T-Shirt',
     price: 30,
     disc: 'Cool Shirts for Man.Cool Shirts for Man.',
     img: 'images/img-3.jpg'
}, {
     id: '01',
     name: 'Man Suit',
     price: 300,
     disc: 'Cool Shirts for Man.Cool Shirts for Man.',
     img: 'images/img-4.jpg'
},]

// Arrow function

const generateShop = () => {
     return (shop.innerHTML = shopItemsData.map((x) => {
          return `
     <div class="item">
        <img width="220" src=${img} alt="" />
        <div class="details">
          <h3>${name}</h3>
          <p>${disc}</p>
          <div class="price-quantity">
            <h2>$ ${price}</h2>
            <div class="buttons">
              <i class="bi bi-dash-lg"></i>
              <div class="quantity">0</div>
              <i class="bi bi-plus-lg"></i>
            </div>
          </div>
        </div>
      </div>
     `
     }).join(''))
}

generateShop()