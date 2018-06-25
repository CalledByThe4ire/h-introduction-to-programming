// BEGIN (write your solution here) (write your solution here)
// @flow
const fizzBuzz = (begin: number, end: number) => {
  for (let i: number = begin; i < end; i += 1) {
    if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    }
    console.log(i);
  }
};

// END

export default fizzBuzz;
