let promise = new MyPromise((resolve, reject) => {
    setTimeout(() => {
      resolve("any value");
    }, 3000);
  });
  
  promise.then((value) => {
    console.log(value);
  });
  promise.finally((value) => {
    console.log("Finally");
  });
  
  let promise2 = new MyPromise((resolve, reject) => {
    setTimeout(() => {
      reject("reject");
    }, 3000);
  });
  
  promise2.then((value) => {
    console.log(value);
  });
  promise2.catch((value) => {
    console.log(value);
  });
  promise2.finally((value) => {
    console.log("Finally");
  });
  
  