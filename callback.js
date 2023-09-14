/* const callMe = () => {
  console.log("Hello from callback function !");
}; */

const greeting = (callback, howAreYou) => {
  console.log("Hello world !");
  callback();
  howAreYou();
};

// greeting(callMe);

/* greeting(function () {
  console.log("Hello from annonymous!");
}); */

/* greeting(
  () => {
    console.log("Hello from annonymous !");
  },
  () => {
    console.log("How are you ?");
  }
); */

const calculator = (num1, num2, operator) => {
  return operator(num1, num2);
};

const add = (num1, num2) => {
  return num1 + num2;
};

const reduce = (num1, num2) => {
  return num1 - num2;
};

/* const value = calculator(12, 5, reduce);
console.log(value);
 */

const originalArr = [1, 2, 3, 4];

const loopThroughArrayV2 = (arr, cb) => {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i]);
  }
};

/* loopThroughArrayV2(originalArr, (item) => {
  console.log(item);
}); */

const mapArray = (arr, cb) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const newItem = cb(arr[i]);
    result.push(newItem);
  }
  return result;
};

const newArr = mapArray(originalArr, (item) => {
  return item * 2;
});

// console.log(newArr);
// console.log(originalArr);

// * Exercise: Create a function called "filterArray" to filter only positive number
// * 1. This function receive 2 parameters, arr and cb.
// * 2. cb function must receive 1 parameter, which is each item from the array
// * 3. cb must return only boolean, if it return true, keep that item, otherwise, don't keep it.
// * 4. filterArray must return a new array that keeps all true items

function filterArray(arr, cb) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const isKeeping = cb(arr[i]);
    if (isKeeping) {
      result.push(arr[i]);
    }
  }

  return result;
}

const beforeFilter = [-1, 3, 20, -24];

const afterFilter = filterArray(beforeFilter, (item) => {
  return item >= 0;
});

console.log(afterFilter);
