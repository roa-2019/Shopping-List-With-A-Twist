let quantities = document.querySelectorAll('.quantity')
let prices = document.querySelectorAll('.price')

let totalPrice = 0
let totalQuantities = 0 

quantities.forEach(element => {
   totalQuantities += parseInt(element.innerHTML)
});


prices.forEach(element => {
   totalPrice += parseInt(element.innerHTML)
});

let totalCost = document.querySelector('#total-cost')
totalCost.innerHTML = totalPrice

let totalQuantity = document.querySelector('#total-quantity')
totalQuantity.innerHTML = totalQuantities

console.log(totalQuantities)
console.log(totalPrice)