const { Observable } = require('rxjs');

const observable = new Observable((subscriber) => {
    setTimeout(() => {
        subscriber.next("One");
        subscriber.next("two");
        subscriber.next("three");
        subscriber.complete();
    },1000)
})


const subscription = observable.subscribe({
    next(value){
        console.log(value);
    },
    complete(){
        console.log("Observable completed")
    }
})

setTimeout(() => {
    subscription.unsubscribe();
},2000);