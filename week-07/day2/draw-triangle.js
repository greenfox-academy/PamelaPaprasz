'use strict';

var lineCount = 4;

// Write a program that draws a
// triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is

var star1 = '';

for (var i = 0; i < lineCount; i++){
    star1 += '*';
    console.log(star1);
};
