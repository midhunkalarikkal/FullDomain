// Polyfill for Array.prototype.includes()
if (!Array.prototype.includes) {
    Array.prototype.includes = function(element) {
        return this.indexOf(element) !== -1;
    };
}

// Now you can use includes() in older browsers
const arr = [1, 2, 3, 4];
console.log(arr.includes(3)); // true
console.log(arr.includes(5)); // false