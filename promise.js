class MyPromise {
  thenFunction;
  catchFunction;
  finallyFunction;
  resolveFunction = (anyValue) => {
    this.thenFunction(anyValue);
    this.finallyFunction();
  };
  rejectFunction = (value) => {
    this.catchFunction(value);
    this.finallyFunction();
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
  finally(finallyFunction) {
    this.finallyFunction = finallyFunction;
  }
}
