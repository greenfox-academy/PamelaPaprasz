'use strict';

var a = 3 + 10;
// make it bigger by 10

console.log(a);


var b = 100 - 7;
// make it smaller by 7

console.log(b);


var c = 44 * 2;
// double c's value

console.log(c);


var d = 125 / 5;
// divide d's value by 5

console.log(d);


var e = Math.pow(8, 2);
// what's the cube of e's value?

console.log(e);


var f1 = 123;
var f2 = 345;
console.log(f1 > f2);
// tell if f1 is bigger than f2 (as a boolean)


var g1 = 350;
var g2 = 200;
console.log(g2*2 > g1);
// tell if the double of g2 is bigger than g1 (pras a boolean)


var h = 1357988018575474;
if (h % 11 === 0) {
    console.log(true);   
} else{
    console.log(false);
};
// tell if h has 11 as a divisor (as a boolean)


var i1 = 10;
var i2 = 3;
if (i1 > Math.pow(i2, 2) && i1 < Math.pow(i2, 3)) {
    console.log(true);
} else{
    console.log(false);
};
// tell if i1 is higher than i2 squared and smaller than i2 cubed (as a boolean)


var j = 1521;
if (j % 3 === 0 || j % 5 === 0) {
    console.log(true);
} else{
    console.log(false);
};
// tell if j is dividable by 3 or 5 (as a boolean)


var k = 'Apple';
while (k.length < 20) {
    k += ' Apple';
};
console.log(k);
// fill the k variable with its content 4 times
