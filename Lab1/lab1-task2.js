//PART
//TWO

//1
let greeter = (myArray) => {
  for (i of myArray) {
    console.log(`Hello ${i}`)
  }
}

greeter(["a","b","c"])

//2
const capitalize = ([first,...rest]) => first.toUpperCase() + rest.join('').toLowerCase();

console.log(capitalize("djfFFd"))
console.log(capitalize("sjrk"))

//3
const colors = ['red', 'blue', 'green']
let capitalizedColors = colors.map(x => capitalize(x));

console.log(capitalizedColors);

//4
const num = [0, 1, 2, 4, 8, 16, 32, 64];
const filterLessThan20 = num.filter(n => n < 20);

console.log(filterLessThan20);

//5
const array1 = [1, 2, 3, 4];
const add = (accumulator, currentValue) => accumulator + currentValue;
const calculateSum = array1.reduce(add);
const multiply = (accumulator, currentValue) => accumulator * currentValue;
const calculateProduct = array1.reduce(multiply);

console.log(calculateSum);
console.log(calculateProduct);

//6
class Car {
  constructor(model, year) {
    this.model = model;
    this.year = year;
  }

  details() {
    return this.model + ", " + this.year;
  }
}

class Sedan extends Car {
  constructor(model, year, balance) {
    super(model, year);
    this.balance = balance;
  }

  info() {
    return this.model + " has a balance of " + this.balance;
  }
}

const car2 = new Car('Pontiac Firebird', 1976);
console.log(car2.details());

const sedan = new Sedan('Volvo SD', 2018, 30000);
console.log(sedan.info());
console.log(sedan.details());
