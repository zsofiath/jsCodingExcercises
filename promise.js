class MyPromise {
    thenFunction;
    catchFunction;
  resolveFunction = (anyValue) => {
    this.thenFunction(anyValue);
  };
  rejectFunction = (value) => {
      this.catchFunction(value)
  };


  constructor(executor) {
    executor(this.resolveFunction, this.rejectFunction);
  }
  static all() {}
  static allSettled(iterable) {}
  static any(iterable) {}
  static race(iterable) {}
  static reject(reason) {}
  static resolve(value = null) {}

  catch(catchFunction) {
    this.catchFunction = catchFunction;
  }
  then(thenFunction) {
    this.thenFunction = thenFunction;
  }
  finally() {}
}

// -------------------- Usage -------------------
let promise = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("any value");
  }, 3000);
});

promise.then((value) => {
  console.log(value);
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
