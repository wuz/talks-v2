// JSX transform statement
/** @jsx createElement */

// No jsx transform

// JSX example page

const Header = ({ className, children }) => {
  return <header className={className}>{children}</header>;
};

const page = (
  <div>
    <Header className="myCoolHeader">
      <h1>My Cool Site</h1>
    </Header>
  </div>
);

document.body.appendChild(page);

// Table Example
<ConsoleTable>
  <Sort>
    <Integer num={2} />
    <Integer num={1} />
    <Integer num={15} />
    <Integer num={12} />
    <Integer num={100} />
    <Integer num={93} />
    <Integer num={2} />
    <Integer num={111} />
  </Sort>
</ConsoleTable>;

//Canvas

const CreateSquiggles = ({ canvas }) => {
  const ctx = canvas.getContext("2d");
};

//weird

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

// This is equiavelent to the following:
var sum_no_jsx = curry(reduce, { initial: 0, func: (a, b) => a + b });

// We do one final "curry", but then actually call the function with parentheses.
<sum array={[1, 2, 3, 4, 5]} />();
