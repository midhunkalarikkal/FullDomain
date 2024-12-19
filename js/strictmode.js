"use strict";

x = 10; // Error: x is not defined

function test() {
    console.log(this); // Logs `undefined` otherwise window
}
test();

function test(a, a) {
    console.log(a); // Error: Duplicate parameter name not allowed otherwise no error
}