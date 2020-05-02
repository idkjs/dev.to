


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

var UserWithView = {
  make: make,
  view: view
};

function make$1(name, age) {
  return {
          name: name,
          age: age
        };
}

var PrivateUser = {
  make: make$1
};

export {
  UserWithView ,
  PrivateUser ,
  
}
/* No side effect */
