// un array fuertemente tipado
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //this is an array of numbers
const numbersAndStrings: (number | string)[] = [1, 2, 3,  '10']; //this is an array of numbers and strings

//But what if we want an array strongly typed with a fixed number of elements?
let tuple: [string, number] 
tuple = ['Agustin', 22] //we strictly need to follow the order of the types
tuple = ['Agustin', 22, 'extra'] //this will throw an error
tuple = [22, 'Agustin'] //this will throw an error


const [myName, age] = tuple //this is called destructuring

console.log(myName, age)