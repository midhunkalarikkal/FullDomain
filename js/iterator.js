const myObject = {
    data: [10, 20, 30],
  
    // Define the iterator method
    [Symbol.iterator]: function() {
      let index = 0;
      const data = this.data;
  
      // Return the iterator object
      return {
        next: function() {
          if (index < data.length) {
            return { value: data[index++], done: false };
          } else {
            return { done: true };
          }
        }
      };
    }
  };
  
  // Using the custom iterator
  for (const value of myObject) {
    console.log(value);  // Output: 10, 20, 30
  }
  