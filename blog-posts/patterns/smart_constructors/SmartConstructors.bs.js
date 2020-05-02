

import * as Caml_option from "bs-platform/lib/es6/caml_option.js";

function make(email) {
  return Caml_option.some(email);
}

var Email = {
  make: make
};

var me = "reasonsthlm";

var me2 = "reasonsthlm_me2";

console.log("ME:None?", me);

console.log("ME2:None?", me2);

function is_valid(email) {
  return email.length > 3;
}

var EmailValid = {
  is_valid: is_valid
};

var me$1 = "reasonsthlm";

var isFalse = me$1.length > 3 === false;

console.log("ME:EmailValid?", me$1);

console.log("ME:isFalse?", isFalse);

function make$1(email) {
  return Caml_option.some(email);
}

function to_string(email) {
  return email;
}

var EmailToString = {
  make: make$1,
  to_string: to_string
};

var me$2 = "leandro@reasonsthlm.se";

var me2$1 = "leandro@reasonsthlm.se";

Caml_option.valFromOption(me$2) === "leandro@reasonsthlm.se";

Caml_option.valFromOption(me2$1) === "leandro@reasonsthlm.se";

export {
  Email ,
  EmailValid ,
  isFalse ,
  EmailToString ,
  me$2 as me,
  me2$1 as me2,
  
}
/*  Not a pure module */
