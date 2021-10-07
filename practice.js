/**
 * Quokka is used for testing
 */


// template literal
function introduction1(firstName, lastName){
    return `Hi my name is ${firstName} ${lastName}.`;
}

// rest parameter with array.join
function introduction2(...names){
    return `Hi my name is ${names.join(' ')}.`;
}

//rest parameter with string.concat
function introduction3(...names){
    return `Hi my name is `.concat(names[0], ' ', names[1], '.');
}

console.log(introduction1('e', '2'));
console.log(introduction2('e', '3'));
console.log(introduction3('e', '3'));

// --------------------------------------------------------

function convertToFarenheit(celsius){
    return celsius * 9 / 5 + 32;
}

console.log(convertToFarenheit(30));
console.log(convertToFarenheit(-30));

//---------------------------------------------------------

function fizzbuzz(number) {
    if(number % 3 == 0 && number % 5 == 0) return "fizzbuzz";
    else if(number % 5 == 0) return "buzz";
    else if(number % 3 == 0) return "fizz";
    return '';
}

console.log(fizzbuzz(3));
console.log(fizzbuzz(6));
console.log(fizzbuzz(4));
console.log(fizzbuzz(5));
console.log(fizzbuzz(15));

function fizzbuzz2(number) {
    let res ='';
    if(number % 3 == 0) res+='fizz';
    if(number % 5 == 0)  res+='buzz';
    return res;
}

console.log(fizzbuzz2(3));
console.log(fizzbuzz2(6));
console.log(fizzbuzz2(4));
console.log(fizzbuzz2(5));
console.log(fizzbuzz2(15));

// ------------------------------------

function factorialiseNumber(num) {
    let result = 1;
    for (let index = 2; index <= num; index++) {
        result *= index;
    }
    return result;
}

console.log(factorialiseNumber(3));
console.log(factorialiseNumber(5));
console.log(factorialiseNumber(0));
console.log(factorialiseNumber(10));

function factorialiseNumberByRecursion(num) {
    if(num <= 1) return 1;
    else return num * factorialiseNumberByRecursion(num-1);
}

console.log(factorialiseNumberByRecursion(3));
console.log(factorialiseNumberByRecursion(5));
console.log(factorialiseNumberByRecursion(0));
console.log(factorialiseNumberByRecursion(10));

// ----------------------------------------

function reverseString1(str){
    return str.split('').reverse().join('');
    // it means 3 itrations --> slow
}
console.log(reverseString1('javascript'));

function reverseString2(str){
    let rts = '';
    let i = str.length;
    while(i > 0) {
        i--;
        rts += str[i];
    }
    return rts;
}
console.log(reverseString2('javascript'));

// not working because js strings are immutable
function reverseString3(str){

    if(str.length % 2 == 0){}
    if(str.length % 2 == 1){
        let temp = str[0];
        str[0] = str[str.length-1];
        str[str.length-1] = temp;
    }

    return str
}
console.log(reverseString3('javascript'));

// immutable example
let t = '0123';
t[0] = 'r';

console.log(t); // 0123

// -------------------------------------------

function isPalindrome(text) {
    // let normalText = text.split(' ').join('').split('.').join('').split(',').join('').toLowerCase(); lot of loops
    let normalText = text.toLowerCase().replace(/[\W]/g, '');
    let reverseText = normalText.split('').reverse().join('');

    return reverseText === normalText;
}

console.log(isPalindrome('pop'));
console.log(isPalindrome('horse'));
console.log(isPalindrome('A man , a plan, a canal. Panama.'));
console.log(isPalindrome('0_0(:/-\:)'));


// string is primitive therefore its value checked and not its reference
console.log("u" === 'u'); // true

// here the string is not primitive
console.log(new String("u") === new String('u')); // false
// new does this:
console.log({} === {}); // false
// then fills the objects with data

//------------------------------------------

function getLongestWordLength(str){
    let words = str.split(' ');
    let longest = words[0].length;

    // for (let index = 1; index < words.length; index++) {
    //     // if(words[index].length > longest) longest = words[index].length;
    //     longest = words[index].length > longest ? words[index].length: longest;
    // }

    words.forEach(word => {
        longest = word.length > longest ? word.length: longest;
    });

    return longest;
}

console.log(getLongestWordLength('123 1234 123456 123'));

// width sort
function getLongestWordLength2(str){
    return str.split(' ').sort((current, next) => next.length - current.length)[0].length;  
}

console.log(getLongestWordLength2('123 1234 123456 123'));

// without splitting the string
function getLongestWordLength3(str){
    let i = 0;
    let j = 0;
    let longest = 0;
    while( i < str.length) {
        if(str[i] != ' ') {
            j++;
        } else {
            if(longest < j) longest = j;
            j = 0;
        }
        i++;
    }

    return longest;
}

console.log(getLongestWordLength3('123 1234 123456 123'));

// ---------------------------------------------