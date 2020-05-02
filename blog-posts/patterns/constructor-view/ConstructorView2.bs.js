

import * as Caml_option from "bs-platform/lib/es6/caml_option.js";

function make(name, age) {
  return {
          name: name,
          age: age
        };
}

function name(user) {
  return user.name;
}

function age(user) {
  return user.age;
}

var User = {
  make: make,
  name: name,
  age: age
};

var me = {
  name: "leandro",
  age: 27
};

Caml_option.valFromOption(me).name === "leandro";

var checkMe = Caml_option.valFromOption(me).name === "leandro";

console.log(checkMe);

export {
  User ,
  me ,
  checkMe ,
  
}
/*  Not a pure module */
