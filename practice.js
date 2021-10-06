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

