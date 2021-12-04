class MyPromise {
  thenFunction;
  catchFunction;
  finallyFunction;
  resolveFunction = (anyValue) => {
    this.thenFunction(anyValue);
    if(this.finallyFunction) this.finallyFunction();
  };
  rejectFunction = (value) => {
    this.catchFunction(value);
    if(this.finallyFunction) this.finallyFunction();
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
    return new MyPromise((resolve, reject)=>{});
  }
  then(thenFunction) {
    this.thenFunction = thenFunction;
    return new MyPromise((resolve, reject)=>{});
  }
  finally(finallyFunction) {
    this.finallyFunction = finallyFunction;
  }
}
