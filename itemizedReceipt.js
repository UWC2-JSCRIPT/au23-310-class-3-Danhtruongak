// create function logReceipt that accepts menu items (1 or many) as objects
// with these properties: {descr, price}
// i.e. {descr: 'Coke', price: 1.99}
// function should log each item to the console and log a total price

//create objects//
const Burito = {
  name: 'Burrito',
  price: 5.99
};
const Chips_Salsa = {
  name: 'Chip & Salsa',
  price: 2.99
};

const Soda = {
  name: 'Sprite',
  price: 1.99
};

const HotDog = {
  name: 'HotDog',
  price: 4.99
};

let total =0;
const logReceipt = function(...ItemOrder){ 
ItemOrder.forEach((item)=>{
console.log(`Order: ${item.name} -> Price $${item.price}`)
let price = item.price;
total +=price

  });
  console.log(`The total is: $${total}`);
};




logReceipt(Burito,Soda, Soda,Chips_Salsa);
// Check
/*logReceipt(
  { descr: 'Burrito', price: 5.99 },
  { descr: 'Chips & Salsa', price: 2.99 },
  { descr: 'Sprite', price: 1.99 }
);*/
// should log something like:
// Burrito - $5.99
// Chips & Salsa - $2.99
// Sprite - $1.99
// Total - $10.97
