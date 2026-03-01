// function one() {
//     return 'one'
// }
// let value = one();
// console.log(typeof value);

// function two() {
//     return function() {
//         console.log(two);
//     }
// }
// let myFunction = two();
// myFunction()

// function one() {
//     console.log('one');
//     two()
// }
// function two() {
//     console.log('two');
//     three()
// }
// function three() {
//     console.log('three');
//     four()
// }
// function four() {
//     console.log('four');
//     five()
// }
// function five() {
//     console.log('five'); 
//     one();
// }
// one();

// function cheChen() {
//     return egg()
// }
// function egg() {
//     return cheChen()
// }
// egg()


// function sayHello() {
//     let one = 'Salom';
//     console.log(one);

//     if(true) {
//         let two = 15;
//     }
// }
// for(  let i = 0; i<5; i++) {
//     console.log(i);
// }
// sayHello()


// let a = 'hello';

// function sayHello() {
//     let one = 'one'
// }


// function salom() {
//     let one = 'salom'
// }

// sayHello()

function start() {
    for(let i = 0; i < 5; i++) {
        console.log(i);
    }
}
start();


var x = 'global';
let y = 'global';
console.log(this.x);
var x = 10;
var x = 12;
console.log(x);


