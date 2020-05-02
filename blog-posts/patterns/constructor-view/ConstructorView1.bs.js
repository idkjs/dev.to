


function make(name, age) {
  return {
          name: name,
          age: age
        };
}

var User = {
  make: make
};

var me = {
  name: "leandro",
  age: 27
};

export {
  User ,
  me ,
  
}
/* No side effect */
