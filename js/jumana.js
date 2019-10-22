'use strict';
function Product(title, src) {
    this.title = title;
    this.src = src;
    this.clickCtr = 0;
    this.shownCtr = 0;
    Product.all.push(this);
  }
Product.roundCtr = 0;
Product.roundLimit = 25;
Product.all = [];
Product.container = document.getElementById('product-container');
Product.leftImage = document.getElementById('left-img');
Product.centerImage = document.getElementById('center-img');
Product.rightImage = document.getElementById('right-img');

Product.leftTitle = document.getElementById('left-title');
Product.centerTitle = document.getElementById('center-title');
Product.rightTitle = document.getElementById('right-title');
Product.leftObject = null;
Product.centerObject = null;
Product.rightObject = null;
new Product('bag', 'img/bag.jpg');
new Product('banana', 'img/banana.jpg');
new Product('bathroom', 'img/bathroom.jpg');
new Product('boots', 'img/boots.jpg');
new Product('breakfast', 'img/breakfast.jpg');
new Product('bubblegum', 'img/bubblegum.jpg');
new Product('chair', 'img/chair.jpg');
new Product('cthulhu', 'img/cthulhu.jpg');
new Product('dog-duck', 'img/dog-duck.jpg');
new Product('dragon', 'img/dragon.jpg');
new Product('pen', 'img/pen.jpg');
new Product('pet-sweep', 'img/pet-sweep.jpg');
new Product('scissors', 'img/scissors.jpg');
new Product('shark', 'img/shark.jpg');
new Product('sweep', 'img/sweep.png');
new Product('tauntaun', 'img/tauntaun.jpg');
new Product('unicorn', 'img/unicorn.jpg');
new Product('usb', 'img/usb.gif');
new Product('water-can', 'img/water-can.jpg');
new Product('win-glass', 'img/wine-glass.jpg');
function renderNewProduct() {

    var forbidden = [Product.leftObject , Product.centerObject ,Product.rightObject ];
  
    do {
  
        Product.leftObject = jumana();
  
    } while (forbidden.includes(Product.leftObject))
  
    forbidden.push(Product.leftObject);
  
    do {
  
        Product.centerObject = jumana();
  
    } while(forbidden.includes( Product.centerObject));
    forbidden.push(Product.centerObject);
  
    do {
  
        Product.rightObject = jumana();
  
    } while(forbidden.includes( Product.rightObject ));
    
    
    Product.leftObject.shownCtr++;
    Product.centerObject.shownCtr++;
    Product.rightObject.shownCtr++;

  
    var leftProductImageElement = Product.leftImage;
    var centerProductImageElement = Product.centerImage;
    var rightProductImageElement = Product.rightImage;
  
    leftProductImageElement.setAttribute('src', Product.leftObject.src);
    leftProductImageElement.setAttribute('alt', Product.leftObject.title);
    centerProductImageElement.setAttribute('src', Product.centerObject.src);
    centerProductImageElement.setAttribute('alt', Product.centerObject.title);
    rightProductImageElement .setAttribute('src', Product.rightObject.src);
    rightProductImageElement .setAttribute('alt', Product.rightObject.title);
  
    Product.leftTitle.textContent = Product.leftObject.title;
    Product.centerTitle.textContent = Product.centerObject.title;
    Product.rightTitle.textContent = Product.rightObject.title;
  }


  function jumana() {
    var index = Math.floor(Math.random() * Product.all.length);
    return Product.all[index];
  }

  function updateTotals() {

    var body= document.getElementById('report');

    body.innerHTML = '';
    for (var jum = 0; jum < Product.all.length; jum++) {
      var product = Product.all[jum];
      var section = addElement('section', body);
      addElement('p', section, product.title+' had '+ product.clickCtr+' votes and was shown '+ product.shownCtr+' times.');
   
    }
  }
  function addElement(tag, container, text) {
    var element = document.createElement(tag);
    container.appendChild(element);
    if(text) {
      element.textContent = text;
    }
    return element;
  }
  function clickHandler(event) {

    var clickedId = event.target.id;
    var productClicked;
  
    if(clickedId === 'left-img') {
      productClicked = Product.leftObject;
    } else if (clickedId === 'center-img') {
      productClicked = Product.centerObject;
    }else if (clickedId === 'right-img') {
        productClicked = Product.rightObject;
      }else {
      console.log(' , what was clicked on???', clickedId);
    }
  
    if(productClicked) {
      productClicked.clickCtr++;
      Product.roundCtr++;
  
      updateTotals();
  
      if(Product.roundCtr === Product.roundLimit) {
  
        alert('thank for you  No more clicking for you!');
  
        Product.container.removeEventListener('click', clickHandler);
  
      } else {
  
        renderNewProduct();
      }
    }
  }
  Product.container.addEventListener('click', clickHandler);

  updateTotals();
  
  renderNewProduct();