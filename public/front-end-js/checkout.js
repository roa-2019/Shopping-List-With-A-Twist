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

console.log(totalQuantities)
console.log(totalPrice)