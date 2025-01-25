const cart = ["one", "two", "three"];

function createCart(cart,callback){
    setTimeout(() => {
        console.log("Cart created", cart);
        callback();
    },1000)
}

function createPayment(cart, callback) {
    setTimeout(() => {
        console.log("Payment created for cart:", cart);
        callback();
    }, 1000);
}

function createOrders(cart, callback) {
    setTimeout(() => {
        console.log("Order created for cart:", cart);
        callback();
    }, 1000);
}

createCart(cart, () => {
    createPayment(cart, () => {
        createOrders(cart, () => {
            console.log("All tasks completed.")
        })
    })
})