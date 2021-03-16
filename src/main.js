const functions = require('./functions');
const MyFirstClass = require('./classes');

let lengthOfAString1 = 'Hola';

const myFirstClass = new MyFirstClass();
myFirstClass.print();

console.log(lengthOfAString1);
console.log(functions.myFirstFunction('Jose'));

const newFunction = async () => {
  const data = await functions.myPromiseFunction();
  console.log(data.data);
}

newFunction();
