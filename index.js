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
// Basket

const basket = []

// Arrow function

const generateShop = () => {
     return (shop.innerHTML = shopItemsData.map((x) => {
          let { id, name, desc, price, img } = x
          return `
     <div id='product-id-${id}' class="item">
        <img width="220" src=${img} alt="" />
        <div class="details">
          <h3>${name}</h3>
          <p>${desc}</p>
          <div class="price-quantity">
            <h2>$ ${price}</h2>
            <div class="buttons">
              <i onclick='decrement(${id})' class="bi bi-dash-lg"></i>
              <div id='${id}' class="quantity">0</div>
              <i onclick='increment(${id})' class="bi bi-plus-lg"></i>
            </div>
          </div>
        </div>
      </div>
     `
     }).join(''))
}

generateShop()

// Increment, Decrement and Update

const increment = (id) => {
     const selectedItem = id;
     let search = basket.find((x) => x.id === selectedItem.id)
     if (search === undefined) {
          basket.push({
               id: selectedItem.id,
               item: 1
          })
     } else {
          search.item += 1;
     }
     console.log(basket);
}

const decrement = (id) => {
     const selectedItem = id;
     let search = basket.find((x) => x.id === selectedItem.id)
     if (search === undefined) {
          basket.push({
               id: selectedItem.id,
               item: 1
          })
     } else {
          search.item -= 1;
     }
     console.log(basket);
}
const update = () => { }