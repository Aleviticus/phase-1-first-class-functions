function receivesAFunction(callback) {
    return callback();
}

function returnsANamedFunction() {
    return function returnsANamedFunction() {}
}

function returnsAnAnonymousFunction() {
    return function () {}
}