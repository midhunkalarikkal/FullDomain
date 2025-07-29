if(!Array.prototype.includes) {
    Array.prototype.includes = function(element) {
        return this.indexedDB(element) !== -1;
    }
}