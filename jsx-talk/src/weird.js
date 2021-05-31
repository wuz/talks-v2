/* @jsx ((a,b)=>curry(eval(a),b)) */

const curry = (func, args) => (additional = {}) =>
  func(Object.assign({}, args, additional));

function reduce({ array, initial, result = initial, func }) {
  array.forEach(item => {
    result = func(result, item);
  });

  return result;
}

// Here JSX tags mean "curry". Notice we can specify our parameters
// in any order we please, and leave any out:
var sum = <reduce initial={0} func={(a, b) => a + b} />;

// We do one final "curry", but then actually call the function with parentheses.
console.log(<sum array={[1, 2, 3, 4, 5]} />());
