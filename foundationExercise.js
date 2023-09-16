// 1. mapRevertSign(arr) takes in an array of numbers, and returns a new array of numbers containing opposite signs of the original array.

const arrTest1 = [1, -4, 2, 0];

const mapRevertSign = (arrTest1) => {
  const resault = [];

  arrTest1.forEach((element) => {
    resault.push(0 - element);
  });

  return resault;
};

// console.log(mapRevertSign(arrTest1)); // <<<--- Log of 1.

// 2. reverse(arr) returns a new array which is arr reversed.

const arrTest2 = [1, 2, 3, 4, 5];

const reverse = (arrTest2) => {
  const result = [];
  for (let i = arrTest2.length - 1; i > -1; i--) {
    result.push(arrTest2[i]);
  }
  return result;
};

// console.log(reverse(arrTest2)); // <<<--- Log of 2.

// 3. isMember(mem, arr) returns a boolean indicating whether mem is a member of arr

const isMember = (mem, arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (mem === arr[i]) {
      return true;
    }
  }
  return false;
};

// console.log(isMember(5, [1, 3, 7, 12])); // <<<--- Log of 3.
// console.log(isMember("john", ["jane", "jim", "john"])); // <<<--- Log of 3.

// 4. unique(arr) takes in an array of numbers arr and returns a new array whose elements are unique.

const arrTest4 = [10, 20, 10, 20, 30, 50, 60, 100];

const unique = (arrTest4) => {
  const result = [];
  for (let i = 0; i < arrTest4.length; i++) {
    if (!isMember(arrTest4[i], result)) {
      result.push(arrTest4[i]);
    }
  }
  return result;
};

// console.log(unique(arrTest4)); // <<<--- Log of 4.

// 5. draw(n) takes in a number n, and prints the stars (*) into the console

const draw = (n) => {
  let star = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      star += "*";
    }
    star += "\n";
  }
  console.log(star);
};

// draw(5); // <<<--- Log of 5.

// 6. Re-write draw(n) as drawNg(n) (-ng suffix is usually used for next-gen) Like draw(n), but this time drawNg(n)

const drawNg = (n) => {
  let star = "";
  if (n <= 0) {
    return;
  }
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      star += "*";
    }
    star += "\n";
  }
  console.log(star);
}; // Neseted loop

/* const drawNg = (n) => {
  let star = "";
  for (let i = 0; i < n; i++) {
    star += "*";
    console.log(star);
  }
}; */ // No nested loop

drawNg(0); // <<<--- Log of 6.

// 7. mutual(arr1, arr2) returns a new array containing all mutual members of arr1 and arr2

const class1 = ["Alice", "Bob", "John", "Jane"];
const class2 = ["John", "Foobar", "Barbaz", "Foobaz", "Bob"];

const mutual = (arr1, arr2) => {
  let resault = [];

  for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr1.length; j++)
      if (arr2[i] === arr1[j]) {
        resault.push(arr2[i]);
      }
  }
  return resault;
};

// console.log(mutual(class1, class2)); // <<<--- Log of 7.

/* 8. fizzBuzz(n) iterates over inclusive range [1, n], and for each element in the range, fizzBuzz(n) prints Fizz if the element is divisible by 3, Buzz if the element is divisible by 5, and FizzBuzz if the element is divisible by 3 and 5.

If no conditions are met, fizzBuzz(n) prints the element. */

const fizzBuzz = (n) => {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};

// fizzBuzz(20); // <<<--- Log of 8.

// 9. gcd(a, b) returns greatest common divisor (GCD / หรม.) between the pair a, b

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
};

// console.log(gcd(10, 15)); // <<<--- Log of 9.

// 10. filterLt(n, arr) takes in an a number n and an array of numbers arr, and returns a new array containing all elements of arr that is lesser than (lt) n.

const arrTest10 = [120, 112, 111, 130, 169, 101];

const filterLt = (n, arr) => {
  const resault = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < n) {
      resault.push(arr[i]);
    }
  }
  console.log(resault);
};

// filterLt(112, arrTest10); // <<<--- Log of 10.

// 11. filterGt(n, arr) performs similar business logic to filterLt(n, arr) above, but instead of doing a lesser-than test, it does a greater-than test

const arrTest11 = [120, 112, 111, 130, 169, 101];
const filterGt = (n, arr) => {
  const resault = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > n) {
      resault.push(arr[i]);
    }
  }
  console.log(resault);
};

// filterGt(0, arrTest11); // <<<--- Log of 11.

/* 12. Compounded returns are an investment strategy in which the interest income earned from the previous period is also invested into the current period.
This is like how we earn interests from savings accounts.
The interface (function signature) to this logic should be as simple as compoundedReturn(amount, interest, n) 
where amount is the amount of fund invested in the 1st period, interest is an interest percentage per period, and n is the number of periods of the investment.*/

const compoundedReturn = (amount, interest, n) => {
  return Math.round(amount * (1 + interest / 100) ** n);
};

// console.log(compoundedReturn(100, 10, 1)); // <<<--- Log of 12.

/* 13. mean(arr) returns the mean average value of arr dataset (represented as an array).

If any one of arr members are of non-number type, mean(arr) returns null */

/* const mean = (arr) => {
  let sum = 0;
  const allIsNum = arr.every((value) => {
    return typeof value === "number";
  });
  if (allIsNum) {
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum / arr.length;
  }
  return null;
}; */

const mean = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      sum += arr[i];
    } else {
      return null;
    }
  }
  return sum / arr.length;
};

// console.log(mean([1, 2, 3]));
// console.log(mean([1, "foo", 3])); // <<<--- Log of 13.

/* 14. mid(arr) returns the array containing middle element(s) of array arr.

If the array length is an even number, mid returns the 2 middle elements. */

const mid = (arrTest14) => {
  const resault = [];
  const midCal = Math.floor(arrTest14.length / 2);
  if (arrTest14.length % 2 === 0) {
    resault.push(arrTest14[midCal - 1], arrTest14[midCal]);
  } else {
    resault.push(arrTest14[midCal]);
  }
  return resault;
};

// console.log(mid([1, 2, 3, 4])); // <<<--- Log of 14.

// 15. Try learning Array.sort method (function) with this snippet

const arrTest15 = [3, 2, 1, 12, 13, 11];

arrTest15.sort((a, b) => {
  return a - b;
});

// console.log(arrTest15); // <<<--- Log of 15.

/* 16. median(arr) returns the statistical median from the dataset arr (represented as an array).
A dataset's median is the element at the middle of the sorted list. You are allowed to use Array.sort method for this implementation */

const median = (arr) => {
  arr.sort((a, b) => {
    return a - b;
  });
  const midArr = mid(arr);

  if (midArr.length === 1) {
    return midArr[0];
  } else {
    return mean(midArr);
  }
};

// console.log(median([2, 1, 5, 3, 4])); // <<<--- Log of 16.

// 17. initArr(val, len) returns an array of length len with all members initialized to val.

const initArr = (val, len) => {
  const resault = [];
  for (let i = 0; i < len; i++) {
    resault.push(val);
  }
  return resault;
};

// console.log(initArr(0, 5)); // <<<--- Log of 17.

// 18. flatMap(arr) takes in an array of arrays, and returns the flattened array.

const arrTest18 = [
  [1, 2, 3],
  [100, 200],
  [10, 20],
];

const flatMap = (arr) => {
  const flattened = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      flattened.push(arr[i][j]);
    }
  }
  return flattened;
};

/* const flatMap = (arr) => {
  const flattened = [];
  arr.forEach((elem) => {
    flattened.push(...elem);
  });
  return flattened;
}; */

/* const flatMap = (arr) => {
  return arr.flat();
};
 */

// console.log(flatMap(arrTest18)); // <<<--- Log of 18.

// 19. mapMean(arr) takes in an array of arrays, and returns an array of numbers whose element at index i maps to the mean average value of arr[i].

const arrTest19 = [
  [1, 2, 3],
  [100, 200],
  [10, 20],
];

const mapMean = (arr) => {
  const resault = [];
  for (let i = 0; i < arr.length; i++) {
    const midArr = mid(arr[i]);
    if (midArr.length === 1) {
      resault.push(midArr[0]);
    } else {
      resault.push(mean(midArr));
    }
  }
  return resault;
};

// console.log(mapMean(arrTest19)); // <<<--- Log of 19.

// 20. fib(n) prints the Fibonacci series up to n terms.

const fib = (n) => {
  let firstNum = 0;
  let secondNum = 1;
  const resault = [];
  for (let i = 0; i < n; i++) {
    resault.push(firstNum);
    let temp = firstNum;
    firstNum = secondNum;
    secondNum = temp + secondNum;
    if (resault.length === n) {
      return resault.join(", ");
    }
  }
};

// console.log(fib(10)); // <<<--- Log of 20.

/* 21. toBytes(s) takes in a string s and returns an array of ASCII bytes formed by s.

If a character in s is invalid ASCII, the character is omitted from the returned array. */

const bar = "Bar";
const foo = "Foo";
const fooFire = "Foo🔥";

const toBytes = (s) => {
  const result = [];
  for (let i = 0; i < s.length; i++) {
    if (s.charCodeAt(i) <= 127 && s.charCodeAt(i) >= 0) {
      result.push(s.charCodeAt(i));
    }
  }
  return result;
};

/* console.log(toBytes(bar)); // [ 66, 97, 114 ]
console.log(toBytes(foo)); // [ 70, 111, 111 ]
console.log(toBytes(fooFire)); // [ 70, 111, 111 ] because the emoji is invalid ASCII */ // <<<--- Log of 21.

// (Medium) 1. maxNegMinPos(arr) takes in an array arr, and it prints the max negative value (maxNeg) as well as the min positive value (minPos)

const arrTestMedium1 = [12, -13, 14, 4, 2, -1, -18];

const maxNegMinPos = (arr) => {
  arr.sort((a, b) => {
    return a - b;
  });
  const maxNeg = [];
  const minPos = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      maxNeg.push(arr[i]);
    } else {
      minPos.push(arr[i]);
    }
  }
  console.log(`Max negative value = ${maxNeg[maxNeg.length - 1]}`);
  console.log(`Min positive value = ${minPos[0]}`);
};

// maxNegMinPos(arrTestMedium1); // <<<--- Log of 1.(Medium)
