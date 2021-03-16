const functions = require('./functions')
const MyFirstClass = require('./classes')

let lengthOfAString1 = 'Hola'

console.log(functions)

// const lengthOfAString2 = {};
// // const lengthOfAString = [];
const myFirstClass = new MyFirstClass();
myFirstClass.print();

// console.log(lengthOfAString1);
console.log(functions.myFirstFunction('Jose'))

const newfunction = async () => {
  const data = await functions.myPromiseFunction()
  console.log(data.data)
  // setTimeout(() => {
  //     console.log(data.data);
  // }, 300)
}
newfunction()
