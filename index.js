// VAriable Declaration
const shop = document.getElementById('shop');

// Data
const shopItemsData = [{
     id: '01',
     img: 'images/img-1.jpg',
     name: 'Casual Shirt',
     description: 'Cool Man Shirt.Cool Man Shirt.Cool Man Shirt.Cool Man Shirt',
     price: 45

}, {
     id: '02',
     img: 'images/img-2.jpg',
     name: 'Office Shirt',
     description: 'Cool Man Shirt.Cool Man Shirt.Cool Man Shirt.Cool Man Shirt',
     price: 100

}, {
     id: '03',
     img: 'images/img-3.jpg',
     name: 'T-Shirt',
     description: 'Cool Man Shirt.Cool Man Shirt.Cool Man Shirt.Cool Man Shirt',
     price: 25

}, {
     id: '04',
     img: 'images/img-4.jpg',
     name: 'Mans Suit',
     description: 'Cool Man Shirt.Cool Man Shirt.Cool Man Shirt.Cool Man Shirt',
     price: 300

},
];
// Generate Shop

const basket = [];

const generateShop = () => {
     return (shop.innerHTML = shopItemsData.map((x) => {
          const { id, name, price, description, img } = x;
          return ` 
     <div id='product-id-$[id}' class="item">
        <img width="220" src="${img}" alt="" />
        <div class="details">
          <h3>${name}</h3>
          <p>${description}</p>
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
      `}).join(''))
}
generateShop()

// Increment, Decrement & Update

const increment = (id) => {
     let selectedItem = id;
     let search = basket.find((x) => x.id === selectedItem);

     if (search === undefined) {
          basket.push({
               id: selectedItem,
               item: 1
          });
     } else {
          search.item += 1;
     }

     // console.log(basket);
     update(selectedItem);
};

const decrement = (id) => {
     let selectedItem = id;
     let search = basket.find((x) => x.id === selectedItem);
     if (search.item === 0) return
     else {
          search.item -= 1;
     }
     // console.log(basket);
     update(selectedItem);
};

const update = (id) => {
     let search = basket.find((x) => x.id === id);
     document.getElementById(id).innerHTML = search.item;
     console.log(search.item);
};