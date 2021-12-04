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
  
  
let myFirstPromise = new MyPromise((resolve, reject) => {
    // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
    // In this example, we use setTimeout(...) to simulate async code.
    // In reality, you will probably be using something like XHR or an HTML5 API.
    setTimeout( function() {
      resolve("Success!")  // Yay! Everything went well!
    }, 250)
  })
  
  myFirstPromise.then((successMessage) => {
    // successMessage is whatever we passed in the resolve(...) function above.
    // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
    console.log("Yay! " + successMessage)
  });