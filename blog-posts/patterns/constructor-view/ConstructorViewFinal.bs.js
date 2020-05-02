

import * as Caml_option from "bs-platform/lib/es6/caml_option.js";

console.log("leandro", "is pattern_matching!");

function make(name, age) {
  return {
          name: name,
          age: age
        };
}

function view(t) {
  return {
          name: t.name,
          age: t.age
        };
}

var User = {
  make: make,
  view: view
};

var me = {
  name: "leandro",
  age: 27
};

var __x = view(Caml_option.valFromOption(me)).name;

console.log("it's", __x);

export {
  User ,
  me ,
  
}
/*  Not a pure module */
