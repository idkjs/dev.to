

import * as Caml_option from "bs-platform/lib/es6/caml_option.js";

function is_admin(user) {
  return user.role === /* Admin */0;
}

var User = {
  is_admin: is_admin
};

function from_user(user) {
  if (user.role === /* Admin */0) {
    return user;
  }
  
}

var Admin = {
  from_user: from_user
};

var user = {
  name: "Joe Camel",
  role: /* User */1
};

var admin = from_user(user);

function do_user_stuff(user) {
  console.log("Doing " + (user.name + " `User` Stuff"));
  
}

if (admin !== undefined) {
  console.log("Doing admin.nameStuff", Caml_option.valFromOption(admin));
} else {
  do_user_stuff(user);
}

var user$1 = {
  name: "Joe Camel",
  role: /* Admin */0
};

var admin$1 = from_user(user$1);

function do_admin_stuff(admin) {
  console.log("Doing admin.nameStuff", admin);
  
}

function do_user_stuff$1(user) {
  console.log("Doing " + (user.name + " `User` Stuff"));
  
}

if (admin$1 !== undefined) {
  console.log("Doing admin.nameStuff", Caml_option.valFromOption(admin$1));
} else {
  do_user_stuff$1(user$1);
}

export {
  User ,
  Admin ,
  do_user_stuff$1 as do_user_stuff,
  do_admin_stuff ,
  
}
/* admin Not a pure module */
