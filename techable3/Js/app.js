// 1. Find maximum between two numbers
function findMaxTwo(num1, num2) {
    console.log("maximul este=", num1 > num2 ? num1 : num2);
    //return num1 > num2 ? num1 : num2;
}
findMaxTwo(3, 5);

//1.Find maximum between two numbers with if else

function findMaxTwo2(num1, num2) {
    if (num1 > num2) {
        console.log("maximul este=", num1);
    } else {
        console.log("maximul este=", num2);
    }
   
}
findMaxTwo2(3, 5);

// 2. Find maximum between three numbers
(function findMaxThree(num1, num2, num3) {
    return console.log(Math.max(num1, num2, num3));
})(3, 5, 9);



// 3. Check if a character is vowel or consonant
function checkVowelOrConsonant(char) {
    switch (char.toLowerCase()) {
        case 'a': case 'e': case 'i': case 'o': case 'u':
            return `${char} is a vowel`;
        default:
            return `${char} is a consonant`;
    }
}

// 4. Get number of days in a month
function daysInMonth(month) {
    if ([1, 3, 5, 7, 8, 10, 12].includes(month)) return '31 days';
    if ([4, 6, 9, 11].includes(month)) return '30 days';
    if (month === 2) return '28 or 29 days';
    return 'Invalid month';
}

// 5. Sum multiples of 3 and 5 under 100
function sumMultiples3And5() {
    let sum = 0;
    for (let i = 1; i < 100; i++) {
        if (i % 3 === 0 || i % 5 === 0) sum += i;
    }
    return sum;
}

// 6. Average of an array
function averageArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}


function averageArray(arr) {
    return arr.reduce((a, b) => a + b, 0) / arr.length;  
    
}
console.log(averageArray([1, 2, 3, 4, 5])); // 3

const numbers = [1, 2, 3, 4, 5];
/////
function averageArray2(number){
    let sum=number.reduce(myFunc);
    let average= sum/number.length;
    return average;
}


function myFunc(total, num) {
  return total + num;
}
console.log(averageArray2(numbers));

// 7. Get only positive numbers from an array
function getPositiveNumbers(arr) {
    return arr.filter(num => num > 0);
}

// 8. Print multiplication table of 9
function multiplicationTable9() {
    for (let i = 1; i <= 10; i++) {
        console.log(`${i} x 9 = ${i * 9}`);
    }
}

// 9. Sum of odd numbers between 10 and 30
function sumOddNumbers() {
    let sum = 0;
    for (let i = 11; i < 30; i += 2) {
        sum += i;
    }
    return sum;
}

// 10. Convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// 11. Reverse an array
function reverseArray(arr) {
    return arr.reverse();
}

// 12. Reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// 13. Reverse a positive number
function reverseNumber(num) {
    return parseInt(num.toString().split('').reverse().join(''), 10);
}

// 14. Check if a number is prime
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// 15. Sum of digits of a positive integer
function sumOfDigits(num) {
    return num.toString().split('').reduce((sum, digit) => sum + parseInt(digit, 10), 0);
}

// 16. Print first 100 prime numbers
function first100Primes() {
    let primes = [];
    let num = 2;
    while (primes.length < 100) {
        if (isPrime(num)) primes.push(num);
        num++;
    }
    return primes;
}

// 17. Merge two arrays
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f","a"];
const array3 = array1.concat(array2);

console.log(array3);
// 18. Get distinct elements from an array
function distinctElements(arr) {
    return [new Set(arr)];
}
console.log(distinctElements(array3));
// 19. Count words in a text
function wordCount(text) {
    return text.trim().split(/\s+/).length;
}

// 20. Capitalize first letter of each word
function capitalizeWords(text) {
    return text.replace(/\b\w/g, char => char.toUpperCase());
}

function capitalizeWords(text) {
    return text
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')};