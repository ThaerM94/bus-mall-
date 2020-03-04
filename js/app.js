'use strict';

// Cart constructor.
var Cart = function(items) {
  // this.items is an array of CartItem instances.
  this.items = items;
  // this.render = function (){
  //   var liEl = document.createElement('li');
  //   liEl.textContent = this.item;
  //   cartList.appendChild(liEl);
  // }
};

Cart.prototype.addItem = function(product, quantity) {
  // TODO: Fill in this instance method to create a new CartItem and add it to this.items
  // var cartItem1 = new CartItem (product, quantity);
  // var List
  cartArray.push(CartItem(product, quantity));

};

Cart.prototype.saveToLocalStorage = function() {
  // TODO: Fill in this instance method to save the contents of the cart to localStorage
  localStorage.setItem('item',JSON.stringify(this.items));
};

Cart.prototype.removeItem = function(item) {
  // TODO: Fill in this instance method to remove one item from the cart.
  // Note: You will have to decide what kind of parameter to pass in here!
  // var List = document.getElementById("copy");
  // List.removeChild(item);
  cartArray.removeItem(item);
  
};

var CartItem = function(product, quantity) {
  this.product = product;
  this.quantity = quantity;

};

// Product contructor.
var Product = function(filePath, name) {
  this.filePath = filePath;
  this.name = name;
  Product.allProducts.push(this);
};
Product.allProducts = [];

function generateCatalog() {
  new Product('img/bag.jpg', 'Bag');
  new Product('img/banana.jpg', 'Banana');
  new Product('img/bathroom.jpg', 'Bathroom');
  new Product('img/boots.jpg', 'Boots');
  new Product('img/breakfast.jpg', 'Breakfast');
  new Product('img/bubblegum.jpg', 'Bubblegum');
  new Product('img/chair.jpg', 'Chair');
  new Product('img/cthulhu.jpg', 'Cthulhu');
  new Product('img/dog-duck.jpg', 'Dog-Duck');
  new Product('img/dragon.jpg', 'Dragon');
  new Product('img/pen.jpg', 'Pen');
  new Product('img/pet-sweep.jpg', 'Pet Sweep');
  new Product('img/scissors.jpg', 'Scissors');
  new Product('img/shark.jpg', 'Shark');
  new Product('img/sweep.png', 'Sweep');
  new Product('img/tauntaun.jpg', 'Taun-Taun');
  new Product('img/unicorn.jpg', 'Unicorn');
  new Product('img/usb.gif', 'USB');
  new Product('img/water-can.jpg', 'Water Can');
  new Product('img/wine-glass.jpg', 'Wine Glass');
}

// Initialize the app by creating the big list of products with images and names
generateCatalog();
