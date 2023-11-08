function receivesAFunction(callback) {
    const spy = "results"
    callback(spy);
}

const returnsANamedFunction = function () {
    return function namedFunction() {
      console.log("This is a named function");
    };
};
const returnsAnAnonymousFunction = function(){
    return function () {

    }
}