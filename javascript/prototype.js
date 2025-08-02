// var o = {};

// // non-writable data property
// Object.defineProperty(o, 'x', { value: 'old' });

// // setter-less accessor property
// Object.defineProperty(o, 'y', {
//     get: function() { return 'old'; }
// });

// o.x = 'new';
// console.log('o.x:', o.x);

// o.y = 'new';
// console.log('o.y:', o.y);



// var o = {};

// // non-writable data property
// Object.defineProperty(o, 'x', { value: 'old' });

// // setter-less accessor property
// Object.defineProperty(o, 'y', {
//     get: function() { return 'old'; }
// });

// var a = Object.create(o);

// a.x = 'new';
// console.log('a.x:', a.x);

// a.y = 'new';
// console.log('a.y:', a.y);

// console.log(a);


// var o = {};

// // non-writable data property
// Object.defineProperty(o, 'x', { value: 'old' });

// // setter-less accessor property
// Object.defineProperty(o, 'y', {
//     get: function() { return 'old'; },
//     set: function(value) {
//         console.log('Setter called with value:', value);
//     }
// });

// var a = Object.create(o);

// a.x = 'new';
// console.log('a.x:', a.x);

// a.y = 'new';
// console.log('a.y:', a.y);

// console.log(a);


// var proto = { z: 0 };

// var a = Object.create(proto);
// a.x = 0;
// a.y = 0;

// console.log(a.hasOwnProperty('x'));
// console.log(a.hasOwnProperty('y'));
// console.log(a.hasOwnProperty('z'));

// console.log(proto.hasOwnProperty('z'));




// var proto = { y: 0 }

// var o = Object.create(proto);
// o.x = 0;

// console.log('x' in o);
// console.log('y' in o);

// console.log('hasOwnProperty' in o);

// console.log('nonExistent' in o);



// function Item(sellingPrice, actualPrice) {
//     this.sellingPrice = sellingPrice;
//     this.actualPrice = actualPrice;

//     Object.defineProperty(this, 'discount', {
//         get: function() {
//             return (this.actualPrice - this.sellingPrice)
//                      / this.actualPrice * 100;
//         },
//         set: function(perc) {
//             this.sellingPrice = this.actualPrice
//                                       - perc / 100 * this.actualPrice;
//         },
//         configurable: true,
//         enumerable: true
//     })
// }

// var item = new Item(25, 50)

