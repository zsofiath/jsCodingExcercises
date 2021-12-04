class MyPromise {
  resolveValue;
  resolveFunction = (anyValue) => {
    this.thenFunction(anyValue);
  };
  rejectFunction = () => {};
  constructor(executor) {
    executor(this.resolveFunction, this.rejectFunction);
  }
  thenFunction;
  static all() {}
  static allSettled(iterable) {}
  static any(iterable) {}
  static race(iterable) {}
  static reject(reason) {}
  static resolve(value = null) {}

  catch() {}
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
