
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

  var forbidden = [Product.leftObject, Product.centerObject, Product.rightObject];

  do {

    Product.leftObject = jumana();

  } while (forbidden.includes(Product.leftObject))

  forbidden.push(Product.leftObject);

  do {

    Product.centerObject = jumana();

  } while (forbidden.includes(Product.centerObject));
  forbidden.push(Product.centerObject);

  do {

    Product.rightObject = jumana();

  } while (forbidden.includes(Product.rightObject));


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
  rightProductImageElement.setAttribute('src', Product.rightObject.src);
  rightProductImageElement.setAttribute('alt', Product.rightObject.title);

  Product.leftTitle.textContent = Product.leftObject.title;
  Product.centerTitle.textContent = Product.centerObject.title;
  Product.rightTitle.textContent = Product.rightObject.title;
}


function jumana() {
  var index = Math.floor(Math.random() * Product.all.length);
  return Product.all[index];
}

function updateTotals() {

  var body = document.getElementById('report');

  body.innerHTML = '';
  for (var jum  = 0; jum < Product.all.length; jum++) {
    var product = Product.all[jum];
    var section = addElement('section', body);
    addElement('p', section, product.title + ' had ' + product.clickCtr + ' votes and was shown ' + product.shownCtr + ' times.');

  }
}
function addElement(tag, container, text) {
  var element = document.createElement(tag);
  container.appendChild(element);
  if (text) {
    element.textContent = text;
  }
  return element;
}
function clickHandler(event) {

  var clickedId = event.target.id;
  var productClicked;

  if (clickedId === 'left-img') {
    productClicked = Product.leftObject;
  } else if (clickedId === 'center-img') {
    productClicked = Product.centerObject;
  } else if (clickedId === 'right-img') {
    productClicked = Product.rightObject;
  } else {
  }

  if (productClicked) {
    productClicked.clickCtr++;
    Product.roundCtr++;


    if (Product.roundCtr === Product.roundLimit) {

      alert(' thank for you, No more clicking for you!');

      Product.container.removeEventListener('click', clickHandler);
      updateclicked();
      updateTotals();

      renderChart();

      renderChart2();

    } else {

      renderNewProduct();
    }
  }
}
Product.container.addEventListener('click', clickHandler);

// updateTotals();

renderNewProduct();

function getProductTitles() {

  var productTitles = [];

  for (var jum = 0; jum < Product.all.length; jum++) {
    var productInstance = Product.all[jum];
    productTitles.push(productInstance.title + ' clicked');

  }
  return productTitles;
}
function getClickedScore() {

  var ClickedScore = [];

  for (var  jum = 0; jum  < 20; jum++) {
    var ClickedInstance = Product.all[jum];
    ClickedScore.push(ClickedInstance.clickCtr);

  }
  return ClickedScore;
}

function renderChart() {

  var ctx = document.getElementById('myChart').getContext('2d');

  var chart = new Chart(ctx, {

    type: 'bar',

    data: {
      labels: getProductTitles(),

      datasets: [
        {
          label: 'Products',
                   backgroundColor: [
            'rgba(255, 99, 132, 0.4)',
            'rgba(54, 162, 235, 0.4)',
            'rgba(255, 206, 86, 0.4)',
            'rgba(75, 192, 192, 0.4)',
            'rgba(153, 102, 255, 0.4)',
            'rgba(255, 159, 64, 0.4)',
            'rgba(255, 99, 132, 0.4)',
            'rgba(54, 162, 235, 0.4)',
            'rgba(255, 206, 86, 0.4)',
            'rgba(75, 192, 192, 0.4)',
            'rgba(153, 102, 255, 0.4)',
            'rgba(255, 159, 64, 0.4)',
            'rgba(255, 99, 132, 0.4)',
            'rgba(54, 162, 235, 0.4)',
            'rgba(255, 206, 86, 0.4)',
            'rgba(75, 192, 192, 0.4)',
            'rgba(153, 102, 255, 0.4)',
            'rgba(255, 159, 64, 0.4)',
            'rgba(255, 99, 132, 0.4)',
            'rgba(54, 162, 235, 0.4)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)'
          ],
          data: getClickedScore(),
        }
      ]
    },
    options: {}
  })
}



function getProductTitles2() {

  var productTitles = [];

  for (var jum = 0; jum < Product.all.length; jum++) {
    var productInstance = Product.all[jum];
    productTitles.push(productInstance.title + ' shown');

  }
  return productTitles;
}
function getshownnumber() {

  var shownScore = [];

  for (var jum = 0; jum < Product.all.length; jum++) {
    var shownInstance = Product.all[jum];
    shownScore.push(shownInstance.shownCtr);

  }
  return shownScore;
}

function renderChart2() {

  var ctx = document.getElementById('theotherone').getContext('2d');

  var chart = new Chart(ctx, {

    type: 'bar',

    data: {
      labels: getProductTitles2(),

      datasets: [
        {
          label: 'Products',
         
          backgroundColor: [
            'rgba(255, 99, 132, 0.4)',
            'rgba(54, 162, 235, 0.4)',
            'rgba(255, 206, 86, 0.4)',
            'rgba(75, 192, 192, 0.4)',
            'rgba(153, 102, 255, 0.4)',
            'rgba(255, 159, 64, 0.4)',
            'rgba(255, 99, 132, 0.4)',
            'rgba(54, 162, 235, 0.4)',
            'rgba(255, 206, 86, 0.4)',
            'rgba(75, 192, 192, 0.4)',
            'rgba(153, 102, 255, 0.4)',
            'rgba(255, 159, 64, 0.4)',
            'rgba(255, 99, 132, 0.4)',
            'rgba(54, 162, 235, 0.4)',
            'rgba(255, 206, 86, 0.4)',
            'rgba(75, 192, 192, 0.4)',
            'rgba(153, 102, 255, 0.4)',
            'rgba(255, 159, 64, 0.4)',
            'rgba(255, 99, 132, 0.4)',
            'rgba(54, 162, 235, 0.4)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)'
          ],
          data: getshownnumber(),
        }
      ]
    },
    options: {}
  })
}




function updateclicked(){
  var datastring=JSON.stringify( Product.all);
  localStorage.setItem('reports',datastring);
  console.log('datastring' , datastring);
}
function getClicked(){
  var data =localStorage.getItem('reports');
  console.log('data' , data);

  var dataoriginal=JSON.parse(data);
  console.log('dataoriginal' , dataoriginal);

  if(dataoriginal){
    for (var jum =0;jum <dataoriginal.length;jum ++){
      var rawObject = dataoriginal[jum];
      var currentProduct =Product.all[jum ];
      currentProduct.clickCtr=rawObject.clickCtr;
      currentProduct.shownCtr=rawObject.shownCtr; 
    }

    console.log('rawobject', dataoriginal[0].clickCtr);
    console.log('product', Product.all[0].clickCtr);

    renderNewProduct();  
  }
  }
  
  renderNewProduct();

  getClicked();
  // updateTotals();