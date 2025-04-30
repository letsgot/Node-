// In nodejs environment global is defined global keyword and in browser(google) global is defined by window,self,this keywords 
// console.log(global)

// console.log(globalThis)

// console.log(global===globalThis);


// module is a collection of javascript code which is seprate and private to it self.
// In Node.js, modules are encapsulated by default, which is why variables and functions defined in one module aren't accessible in another unless explicitly exported and imported. This encapsulation prevents global namespace pollution, ensuring that code in different modules doesn't interfere with each other.
// How it works in Node.js:
// 1. Encapsulation of Modules:
// Each file in Node.js is treated as a separate module.
// Variables and functions declared inside a module are local to that module by default. This means they aren't automatically accessible to other modules.
// 2. Exporting and Importing:
// If you want to share variables, functions, or objects between modules, you need to export them from one module and import them into another.

// test case 1 -----------------------------------------------------

// require('./test1') // this line will print code from test1 file 
// require('./test2') // this will run the code of test2 file  

// console.log("this will be worked - same module");

// console.log(sum(2,5)); // without importing from test2 file -- this will create an error of sum is not defined -- we can't use function and variable of different module without importing them 


//test case 2 ---------------------------------------------------------
// require('./test1') // this line will print code from test1 file 
// require('./test2') 
// const {sum} = require('./test2')

// console.log("this will be worked - same module");

// console.log(sum(2,5)); // with importing from test2 file -- this will work 


// test case 3

// for similar kind we can make one module here is calculate, importing of every function is not good practice 

// that's why - we will import things from calculate folder 

const {sum,multiply} = require('./calculate')

let a = 10;
let b = 10;

console.log(sum(a,b));
console.log(multiply(a,b));

