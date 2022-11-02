//This code waits 5 seconds and prints out "Done!" when the 5 seconds are up. Note that this code will not work in the interpreter because it is not designed for handling callbacks.
var callback = function () {
  console.log("React Developer");
};
setTimeout(callback, 5000);

//It is also possible to define callbacks as anonymous functions, like so:
setTimeout(function () {
  console.log("Django Developer");
}, 5000);
//Like regular functions, callbacks can receive arguments and be executed more than once.
