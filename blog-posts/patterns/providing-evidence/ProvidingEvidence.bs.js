

import * as Caml_option from "bs-platform/lib/es6/caml_option.js";

function is_admin(user) {
  return user.role === /* Admin */0;
}

var User = {
  is_admin: is_admin
};

function from_user(user) {
  return Caml_option.some(user);
}

var Admin = {
  from_user: from_user
};

var admin = {
  name: "Joe Camel",
  role: /* User */1
};

console.log("Doing adminStuff", Caml_option.valFromOption(admin));

export {
  User ,
  Admin ,
  
}
/*  Not a pure module */
