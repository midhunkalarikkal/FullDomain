function async1(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("async 1 :", data);
      resolve(data + " -> procecced by async1");
    },1000);
  });
}

function async2(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("async 2 :", data);
      resolve(data + " -> procecced by async2");
    },1000);
  });
}

function async3(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("async 3 :", data);
      resolve(data + " -> procecced by async3");
    },1000);
  });
}

async1("Initial data")
  .then((result1) => async2(result1))
  .then((result2) => async3(result2)).then(result3 => {
    console.log(result3);
  }).catch(error => {
    console.log(error);
  })
