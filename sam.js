function question1() {
  const dogs = {
    Fido: "Mutt",
    Hunter: "Doberman",
    Snoopie: "Beagle"
  };

  const myDog = "Hunter";
  const myBreed = dogs[myDog];
  console.log(myBreed); // this is how you use variable to access a property
  console.log(dogs.Hunter); // this also do the same trick

  // We do not use quotes around the variable name when using it to access the property 
  // because we are using the value of the variable, not the name.

  // Set the playerNumber variable to 16. Then, use the variable to look up the player's name and assign it to player.
  // Setup
  const testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
  };
  // Only change code below this line
  const playerNumber = "16";  // Change this line
  const player = testObj[playerNumber];   // Change this line
  console.log(player);
}


function question2() {
  // 2  Accessing Nested Objects
  // The sub-properties of objects can be accessed by chaining together the dot or bracket notation.
  // Here is a nested object:

  const ourStorage = {
    "desk": {
      "drawer": "stapler"
    },
    "cabinet": {
      "top drawer": {
        "folder1": "a file",
        "folder2": "secrets"
      },
      "bottom drawer": "soda"
    }
  };

  console.log(ourStorage.cabinet["top drawer"].folder2); //secrets
  console.log(ourStorage.desk.drawer); //stapler

  // Access the myStorage object and assign the contents of the glove box property to the gloveBoxContents variable. 
  // Use dot notation for all properties where possible, otherwise use bracket notation.

  const myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
      },
      "outside": {
        "trunk": "jack"
      }
    }
  };
  const gloveBoxContents = "glove box"; // what a weird way to access things!
  console.log(myStorage.car.inside[gloveBoxContents]);
  console.log(myStorage.car.inside["glove box"]); // this will do the same trick

}
// 3 Accessing Nested Arrays
// Objects can contain both nested objects and nested arrays. 
function question3() {
  const ourPets = [
    {
      animalType: "cat",
      names: [
        "Meowzer",
        "Fluffy",
        "Kit-Cat"
      ]
    },
    {
      animalType: "dog",
      names: [
        "Spot",
        "Bowser",
        "Frankie"
      ]
    }
  ];

  ourPets[0].names[1]; // Fluffy
  ourPets[1].names[0]; // Spot

  const myPlants = [
    {
      type: "flowers",
      list: [
        "rose",
        "tulip",
        "dandelion"
      ]
    },
    {
      type: "trees",
      list: [
        "fir",
        "pine",
        "birch"
      ]
    }
  ];

  const secondTree = myPlants[1].list[1];
  console.log(secondTree);

}

// 4 Iterate with JavaScript While Loops
// A while loop runs while a specified condition is true and stops once that condition is no longer true.
function question4() {
  const ourArray = [];
  let i1 = 0;
  while (i1 < 5) {
    ourArray.push(i1);
    i1++;
  }
  console.log(ourArray);
  // Add the numbers 5 through 0 (inclusive) in descending order to myArray using a while loop.
  const myArray = [];
  let i2 = 5;
  while (i2 > 0) {
    myArray.push(i2);
    i2--;
  }
  console.log(myArray);

}
// 5 Iterate Through an Array with a For Loop. This code will output each element of the array arr to the console:
function question5() {
  const array = [10, 9, 8, 7, 6];

  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }

  // Declare and initialize a variable total to 0. Use a for loop to add the value of each element of the myArr array to total.

  const myArr = [2, 3, 4, 5, 6];
  for (let index = 0; index < array.length; index++) {
    console.log(myArr[index]);
  }
}
function question6() {
  // 6 Generate Random Whole Numbers within a Range
  // Create a function that returns a random whole number that's >= myMin, and is <= to myMax, inclusive.
  function randomRange(myMin, myMax) {
    // Only change code below this line
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
    // Only change code above this line
  }
  console.log(randomRange(15, 30));
}
// 7 Compare Scopes of the var and let Keywords
// When you declare a variable with the var keyword, it is declared globally, or locally if declared inside a function.
// The let keyword behaves similarly, but with some extra features. 
// When you declare with the let inside a block, statement, or expression, its scope is limited to that block, statement, or expression.

function question7() {
  var numArray = [];
  for (var i = 0; i < 3; i++) {
    numArray.push(i);
  }
  console.log(numArray);//[0, 1, 2]
  console.log(i); // 3.

  // With the var keyword, i is declared globally. 
  // So when i++ is executed, it updates the global variable. This code is similar to the following:

  // var numArray = [];
  // var i;
  // for (i = 0; i < 3; i++) {
  //   numArray.push(i);
  // }
  // console.log(numArray);
  // console.log(i);

  // This behavior will cause problems if you were to create a function and store it for later use.
  // This is because the stored function will always refer to the value of the updated global i variable.

  var printNumTwo;
  for (var i = 0; i < 3; i++) {
    if (i === 2) {
      printNumTwo = function () {
        return i;
      };
    }
  }
  console.log("printNumTwo():" + printNumTwo()); // Here the console will display the value 3.

  // As you can see, printNumTwo() prints 3 and not 2 because the printNumTwo() returns the global i 
  // The let keyword does not follow this behavior:

  let printNumTwo2;
  for (let i = 0; i < 3; i++) {
    if (i === 2) {
      printNumTwo2 = function () {
        return i;
      };
    }
  }
  console.log(printNumTwo2()); // console will display the value 2, and an error that i is not defined.
  console.log(i); // i is not defined because it was not declared in the global scope but only within the for loop statement. 

  // Fix the code so that i declared in the if statement is a separate variable than i declared in the first line of the function. 
  // Be certain not to use the var keyword anywhere in your code.
  // This exercise is designed to illustrate the difference between how var and let keywords assign scope to the declared variable. 

  function checkScope() {
    let i = 'function scope';
    if (true) {
      let i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
  }
  checkScope();
}
function question8() {

  // 8 Mutate an Array Declared with const
  // Some developers prefer to assign all their variables using const by default, unless they know they will need to reassign the value. 
  // Only in that case, they use let. However, it is important to understand that 
  // objects (including arrays and functions) assigned to a variable using const are STILL MUTABLE. 
  // Using the const declaration only prevents reassignment of the variable identifier.

  const s = [5, 6, 7];
  // s = [1, 2, 3];
  s[2] = 45;
  console.log(s);

  // s = [1, 2, 3] will result in an error. 
  // The console.log will display the value [5, 6, 45].
  // As you can see, you can mutate the object [5, 6, 7] itself and the variable s will still point to the altered array [5, 6, 45]. 
  // Like all arrays, the array elements in s are mutable. 
  // But because const was used, you cannot use the variable identifier s to point to a different array using the assignment operator.
  // An array is declared as const s = [5, 7, 2]. Change the array to [2, 5, 7] using various element assignments.
  function editInPlace() {
    const s2 = [5, 7, 2];
    s2[0] = 2;
    s2[1] = 5;
    s2[2] = 7;
    return s2;
  }
  console.log(editInPlace());
}

// 9 Prevent Object Mutation
// so const declaration alone doesn't really protect your data from mutation. 
// To ensure your data doesn't change, JavaScript provides a function Object.freeze to prevent data mutation.
// Any attempt at changing the object will be rejected, with an error thrown if the script is running in strict mode.
function question9() {
  // let obj = {
  //   name: "FreeCodeCamp",
  //   review: "Awesome"
  // };
  // Object.freeze(obj);
  // obj.review = "bad";
  // obj.newProp = "Test";
  // console.log(obj);

  // The obj.review and obj.newProp assignments will result in errors, because our editor runs in strict mode by default
  // and the console will display the value { name: "FreeCodeCamp", review: "Awesome" }.
  // You need to freeze the MATH_CONSTANTS object so that no one is able to alter the value of PI, add, or delete properties.

  function freezeObj() {
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    Object.freeze(MATH_CONSTANTS);

    try {
      MATH_CONSTANTS.PI = 99;
      console.log(MATH_CONSTANTS.PI); // still work but will not pass the value 99 - REJECT
    } catch (ex) {
      console.log("something wrong"); // only when weird shit happens
    }
    return MATH_CONSTANTS.PI;
  }
  const PI = freezeObj();
  console.log(PI);

}

function question10() {
  // 10 Set Default Parameters for Your Functions
  // In order to help us create more flexible functions, ES6 introduces default parameters for functions.
  // Check out this code:
  const greeting = (name = "Anonymous") => "Hello " + name;
  console.log(greeting("John")); // Hello John 
  console.log(greeting()); // Hello Anonymous

  // The default parameter kicks in when the argument is not specified (it is undefined). 
  // The parameter name will receive its default value Anonymous when you do not provide a value for the parameter. 
  // You can add default values for as many parameters as you want.
  // Modify the function increment by adding default parameters so that it will add 1 to number if value is not specified.
  // Only change code below this line
  const increment = (number = 0, value = 1) => number + value;
  console.log(increment());
  console.log(increment(7));
  console.log(increment(5, 10));
}

// 11 Use the Rest Parameter with Function Parameters
// With the rest parameter, you can create functions that take a variable number of arguments. 
// These arguments are stored in an array that can be accessed later from inside the function.
// Check out this code:
function question11() {
  function howMany(...args) {
    return "You have passed " + args.length + " arguments.";
  }
  console.log(howMany(0, 1, 2)); // You have passed 3 arguments
  console.log(howMany("string", null, [1, 2, 3], {})); // You have passed 4 arguments

  // The rest parameter eliminates the need to check the args array 
  // and allows us to apply map(), filter() and reduce() on the parameters array.
  // Modify the function sum so that it is able to take any number of arguments and return their sum.
  const sum = (...arguments) => {
    const args = arguments;
    return args.reduce((a, b) => a + b, 0);
  }
  console.log(sum(1, 2, 3, 4, 5, 6));
}

// 12 Use the Spread Operator to Evaluate Arrays In-Place
// ES6 introduces the spread operator, which allows us to expand arrays and other expressions in places 
// where multiple parameters or elements are expected.
// The ES5 code below uses apply() to compute the maximum value in an array:
function question12() {
  var arr = [6, 89, 3, 45];
  var maximus = Math.max.apply(null, arr);
  console.log(maximus); // 89
  // We had to use Math.max.apply(null, arr) because Math.max(arr) returns NaN. 
  // Math.max() expects comma-separated arguments, but not an array. 
  // The spread operator makes this syntax much better to read and maintain.
  const arr3 = [6, 89, 3, 45];
  const maximus2 = Math.max(...arr3);
  console.log(maximus2); // 89, this way we can just use the spread operator and not using the apply ()
  // The spread operator only works in-place, like in an argument to a function or in an array literal. 
  // It will not work like a value that being assigned to variable: const spreaded = ...arr;

  // Copy all contents of arr1 into another array arr2 using the spread operator.
  const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
  let arr2;
  arr2 = [...arr1];  // Change this line
  console.log(arr2);
}



// 13 Create Strings using Template Literals
// This is a special type of string that makes creating complex strings easier.
// Template literals allow you to create multi-line strings and to use string interpolation features to create strings.
function question13() {
  const person = {
    name: "Zodiac Hasbro",
    age: 56
  };

  const greeting2 = `Hello, my name is ${person.name}! 
  I am ${person.age} years old.`;
  console.log(greeting2);
  // Firstly, the example uses backticks (`), not quotes (' or "), to wrap the string. 
  // Secondly, notice that the string is multi-line, both in the code and the output. This saves inserting \n within strings. 
  // The ${variable} syntax used above is a placeholder. Basically, you won't have to use concatenation with the + operator anymore. 
  // To add variables to strings, you just drop the variable in a template string and wrap it with ${ and }. 
  // Similarly, you can include other expressions in your string literal, for example ${a + b}. 

  // Create an array of list element (li) strings. 
  // Each list element's text should be one of the array elements from the "failure" property a class attribute with text-warning. 
  // Use an iterator method (any kind of loop) to get the desired output (shown below).
  // [
  //   '<li class="text-warning">no-var</li>',
  //   '<li class="text-warning">var-on-top</li>',
  //   '<li class="text-warning">linebreak</li>'
  // ]
  const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  console.log("[");
  function makeList(arr) {
    // Only change code below this line
    const failureItems = arr.forEach(element => console.log(`<li class="text-warning">${element}</li>,`))
    return failureItems;
  }
  // Only change code above this line
  const failuresList = makeList(result.failure);
  console.log("]");

  // Write Concise Object Literal Declarations Using Object Property Shorthand:
  const getMousePosition = (x, y) => ({
    x: x,
    y: y
  });

  // ES6 provides the syntactic sugar to eliminate the redundancy of having to write x: x. 
  // You can simply write x once, and it will be converted tox: x under the hood:
  const getMousePosition2 = (x, y) => ({ x, y });
  // Use object property shorthand with object literals to create and return an object with name, age and gender properties.
  const createPerson = (name, age, gender) => ({ name, age, gender });
  console.log(getMousePosition);
  console.log(getMousePosition2);
  console.log(createPerson);
};


// 14 Profile Lookup
// A lookUpProfile function that takes name and a property (prop) as arguments.
// The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.
// If both are true, then return the "value" of that property.
// If name does not correspond to any contacts then return the string No such contact.
// If prop does not correspond to any valid properties of a contact found to match name then return the string No such property.

function question14() {
  const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];

  function lookUpProfile(name, prop) {
    // Only change code below this line 
    for (let x = 0; x < contacts.length; x++) { // this is where we loop through the whole contacts for firstName
      if (contacts[x].firstName === name) { // see if any firstName match our argument
        if (contacts[x].hasOwnProperty(prop)) { // if yes, then does that property has our argument for prop
          return contacts[x][prop]; //if yes, then we display the prop
        } else {
          return "No such property";
        }
      }
    }
    return "No such contact";
    // Only change code above this line
  }
  console.log(lookUpProfile("Akira", "likes"));
  console.log(lookUpProfile("Meep", "likes"));
  console.log(lookUpProfile("Akira", "dislikes"));
}
// 15 Record Collection
// You are given an object literal representing a part of your musical album collection. 
// Each album has a unique id number as its key and several other properties. Not all albums have complete information.
// updateRecords function takes an object literal, records, containing the musical album collection, an id, a prop (like artist or tracks), and a value. 
// Complete the function using the rules below to modify the object passed to the function.

function question15() {

  // Setup
  const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };

  // Only change code below this line
  function updateRecords(records, id, prop, value) {
    if (prop !== 'tracks' && value !== "") {
      records[id][prop] = value
    } else if (prop === 'tracks' && records[id].hasOwnProperty('tracks') === false) {
      records[id][prop] = [value]
    } else if (prop === 'tracks' && value !== "") {
      records[id][prop].push(value)
    } else if (value === "") {
      delete records[id][prop]
    }
    return console.log(records);
  }
  updateRecords(recordCollection, 5439, 'artist', 'ABBA');
}

// 16 Replace Loops using Recursion
// Task: multiply the first n elements of an array to create the product of those elements. 
// Using a for loop, you could do this:
function question16() {
  function multiply(arr, n) {
    let product = 1;
    for (let i = 0; i < n; i++) {
      product *= arr[i];
    }
    return product;
  }
  // However, notice that multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]. 
  // That means you can rewrite multiply in terms of itself and never need to use a loop.
  function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }
  // In the base case, where n <= 0, it returns 1. 
  // For larger values of n, it calls itself, but with n - 1. 
  // Then function will call itself until n <= 0 (the base case). 
  // Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.

  function sum2(arr, n) {
    // Only change code below this line
    if (n <= 0) {
      return 0;
    } else {
      return sum2(arr, n - 1) + arr[n - 1];
    }
  }
  let result = sum2([2, 3, 4], 1) // Returns 2
  console.log(result);
  // Only change code above this line
  // Something extra: Fibonacci Series using Dynamic Programming
  function fib(n) {
    /* Declare an array to store Fibonacci numbers. */
    let f = new Array(n + 2); // 1 extra to handle case, n = 0
    let i;
    /* 0th and 1st number of the series are 0 and 1*/
    f[0] = 0;
    f[1] = 1;
    for (i = 2; i <= n; i++) {
      /* Add the previous 2 numbers in the series
      and store it */
      f[i] = f[i - 1] + f[i - 2];
    }
    return f[n];
  }
  let n = 9;
  console.log(fib(n));
}

function question17() {
  // 17 Use Recursion to Create a Countdown
  // In a previous challenge, you learned how to use recursion to replace a for loop. 
  // Now, let's look at a more complex function that returns an array of consecutive integers 
  // starting with 1 through the number passed to the function.
  // The base case tells the recursive function when it no longer needs to call itself. 
  // It is a simple case where the return value is already known. 
  // There will also be a recursive call which executes the original function with different arguments. 
  // If the function is written correctly, eventually the base case will be reached.
  // For example, say you want to write a recursive function that returns an array containing the numbers 1 through n. 

  function countup(n) {
    if (n < 1) {
      return [];
    } else {
      const countArray = countup(n - 1);
      countArray.push(n);
      return countArray;
    }
  }
  console.log(countup(5)); //output is [1, 2, 3, 4, 5]

  // At first, this seems counterintuitive since the value of n decreases, but the values in the final array are increasing. 
  // As the push happens last, after the recursive call, countup(n - 1) has already returned [1, 2, ..., n - 1].
  // The function should use recursion to return an array containing the integers n through 1 based on the n parameter. 
  // If the function is called with a number less than 1, the function should return an empty array. 
  // For example, calling this function with n = 5 should return the array [5, 4, 3, 2, 1]. 
  // Your function must use recursion by calling itself and must not use loops of any kind.
  // Only change code below this line
  function countdown(n) {
    if (n < 1) {
      return [];
    } else {
      const arr = countdown(n - 1);
      arr.unshift(n);
      return arr;
    }
  }
  console.log(countdown(5));
  // Only change code above this line
}
// 18
// We have defined a function named rangeOfNumbers with two parameters. 
// The function should return an array begins with startNum and ends with endNum. 
// The starting number will always be <= to ending number. 
// Your function must use recursion by calling itself and not use loops of any kind. 
// It should also work for cases where both startNum and endNum are the same.
function question18() {
  function rangeOfNumbers(startNum, endNum) {
    if (startNum === endNum) {
      return [startNum]; // or endNum, doesnt matter
    } else {
      const numbers = rangeOfNumbers(startNum, endNum - 1);
      numbers.push(endNum);
      return numbers;
    };
  }
  console.log(rangeOfNumbers(1, 5));
}
// So our stack will end up looking like this:
// rangeOfNumbers(1,1) → returns [1]
// rangeOfNumbers(1,2) → returns [1,2]
// rangeOfNumbers(1,3) → returns [1,2,3]
// rangeOfNumbers(1,4) → returns [1,2,3,4]
// rangeOfNumbers(1,5) → returns [1,2,3,4,5]