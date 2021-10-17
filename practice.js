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

function titleCase(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.substr(1, word.length)).join(' ');
}

console.log(titleCase("I am the hero of Azeroth"));

// ----------------------------------------------

function repeadWordXTimes(word, times) {
    let res = '';
    while(times > 0) {
        times--;
        //res+=word;
        res = res.concat(word);
    }

    return res;
}

console.log(repeadWordXTimes('word', 4));

function repeadWordXTimes2(word, times) {
    return word.repeat(times);
}

console.log(repeadWordXTimes2('word', 4));

function repeadWordXTimesReq(word, times) {
    if(times === 1) return word;
    return repeadWordXTimesReq(word, (Math.floor(times/2))) + repeadWordXTimesReq(word, (Math.floor(times/2) + times%2));
}

console.log(repeadWordXTimesReq('o ', 10));
console.log(repeadWordXTimesReq('o ', 3));
console.log(repeadWordXTimesReq('o ', 1));
console.log(repeadWordXTimesReq('o ', 2));

// ---------------------------------------

function isDigit(char) {
    let digits = [0,1,2,3,4,5,6,7,8,9];
    return digits.includes(+char);
}

console.log(isDigit(1));
console.log(isDigit('1'));
console.log(isDigit('t'));
console.log(isDigit('.'));
console.log(isDigit('.,iji'));


function isDigit2(char) {
    return char.length == 1 && !isNaN(char);
}

console.log(isDigit2(1));
console.log(isDigit2('1'));
console.log(isDigit2('14'));
console.log(isDigit2('t'));
console.log(isDigit2('.'));
console.log(isDigit2('.,iji'));

// ---------------------------------------

function getLongestWord(words){
    return words.split(',').map(word => {
        return word.replace(/[\W]/g, '')
    }).sort((a, b) => {
        return b.length - a.length;
    })[0];
}

// nem a legjobb, mert a sort túl költséges művelet

console.log(getLongestWord('Ready, steady, go!'));
console.log(getLongestWord('Ready[[[, steady, go!'));
console.log(getLongestWord('ABCd'));


function getLongestWord2(words){
    words = words.replace(/[\W]/g, ' ');
    let largest ='';
    words.split(' ').forEach(word => {
        largest = largest.length < word.length ? word : largest;
    });

    return largest;
}

console.log(getLongestWord2('Ready, steady, go!'));
console.log(getLongestWord2('Ready[[[, steady, go!'));
console.log(getLongestWord2('ABCd'));

// -----------------------------------

function isTimeValid(time) {
    let timeArr = time.split(':');
    return (Number(timeArr[0]) < 24) && (Number(timeArr[1]) < 60);
}

console.log(isTimeValid('24:00'));
console.log(isTimeValid('23:31'));
console.log(isTimeValid('22:00'));
console.log(isTimeValid('22:60'));

// --------------------------------------

// Only one number is missing
function getMissingNumber(...nums) {
    nums.sort((a, b) => a-b);
    let i = 0;
    while(i < nums.length-1 && nums[i+1]-nums[i] == 1){
        i++;
    }

    return i+1;
}

// sort() is an insertion sort

console.log(getMissingNumber(0,3,5,8,4,6,1,9,7));
console.log(getMissingNumber(1,2,5,0,7,6,9,3,4));

// more numbers might be missing
function getMissingNumbers(...nums) {
    missing = [];
    nums.sort((a, b) => a-b);
    let i = 0;
    while(i < nums.length-1) {
        if(nums[i+1]-nums[i] > 1) {
            let j = nums[i];
            while(j < nums[i+1]-1) {
                j++;
                missing.push(j);
            }
        }
        i++;
    }

    return missing;
}

console.log(getMissingNumbers(0,5,8,4,6,1,9,7));
console.log(getMissingNumbers(1,2,0,7,9,3,4));

// -----------------------------------------

function isDuplicated(...numbers) {
    let duplicated = false;
    numbers.sort((a, b) => {
        if(a-b === 0) duplicated = true;
        return a-b;
    });
    return duplicated;
}

console.log(isDuplicated(1,2,3,1));
console.log(isDuplicated(1,3));
console.log(isDuplicated(0,4,5,0,3,6));

// ------------------------------------------

function sumDigits(str) {
    return (str.match(/\d+/g) || [])
    .reduce((currentVal, currentIndex) => { 
        return +currentIndex + currentVal;
    }, 0);
}

console.log(sumDigits('2 apples, 12 oranges'));
console.log(sumDigits('123450'));
console.log(sumDigits('Your payment method is invalid'));

// -----------------------------------------

function getFirstDuplicant(numberArray) {
    let arr = [];
    let i = 0;
    while( !arr.find(el => numberArray[i] == el)  && i < numberArray.length) {
        arr.push(numberArray[i]);
        i++;
    }
    return numberArray[i] || -1;
}
console.log(getFirstDuplicant([2,3,3,1,5,2]));
console.log(getFirstDuplicant([2,2]));
console.log(getFirstDuplicant([1,2,3]));

function getFirstDuplicantFaster(numberArray) {
    let nums = {};

    for (const num of numberArray) {
        if(nums.hasOwnProperty(num)) return num;
        nums[num]=null;
    }
    return -1;
}
console.log(getFirstDuplicantFaster([2,3,3,1,5,2]));
console.log(getFirstDuplicantFaster([2,2]));
console.log(getFirstDuplicantFaster([1,2,3]));
// --------------------------------------------------

function amendTheSentence(string){
    return string.match(/[A-Z][a-z']*/g).join(' ').toLowerCase();
}

console.log(amendTheSentence('CodingGodDoesWorkSon'));
console.log(amendTheSentence("Ain'tNotFunIfTheHomieDon'tCodeNone"));

// ----------------------------------------------------

function sumOfDifferences(...nums) {
    const min = Math.min(...nums);
    const max = Math.max(...nums);
    let summary = 0;
    for (let i = min; i <= max; i++) {
        summary+=i;     
    }
    return summary;
}

console.log(sumOfDifferences(10, 5));
console.log(sumOfDifferences(3,  7));

// ------------------------------------











