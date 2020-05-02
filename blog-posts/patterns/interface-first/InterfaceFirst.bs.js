

import * as List from "bs-platform/lib/es6/list.js";

var SmallBakery = { };

var BakeryLimited = { };

var BakeryLists = {
  has_in_stock: List.mem,
  add: List.cons
};

export {
  SmallBakery ,
  BakeryLimited ,
  BakeryLists ,
  
}
/* No side effect */
