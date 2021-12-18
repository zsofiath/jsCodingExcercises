/**
 * You have written an anonymous love letter and you don’t want your handwriting to be recognized.
 * Since you don’t have a printer within reach, you are trying to write this letter by copying and
 * pasting characters from a newspaper.
 * 
 * Given a string L representing the letter and a string N representing the newspaper, 
 * return true if the L can be written entirely from N and false otherwise. The letter includes only ascii characters.
 */

function isPrintable(L, N) {
    let handLetters = {};
    
    L.split('').forEach(letter => {
      if(handLetters.hasOwnProperty(letter)) {
        handLetters[letter]++;
      } else {
        handLetters[letter] = 1;
      }
    });
    
    for (const letter of N.split('')) {
        handLetters[letter]--;
    }
    
    for (const letter of Object.keys(handLetters)) {
        if(handLetters[letter] > 0) return false;
    }

    return true;
  }

  console.log(isPrintable('12345', '11223344'));
  console.log(isPrintable('1234', '11223344'));

  /**
   * Get the first 50 element of a fibonacci sequence and mummarise
   * the 5th elmeents.
   * 
   * Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.
   */

  function sum5thsOfFibonacci(elementNumber) {
    let sum = 0;
    let fibonacci = [];

    let i = 0;
    while(i < elementNumber) {
      if(i == 0) fibonacci.push(0);
      else if(i == 1) fibonacci.push(1);
      else {
        fibonacci.push(fibonacci[i-2] + fibonacci[i-1]);
        sum += (i+1)%5 == 0 ? fibonacci[i-2] + fibonacci[i-1] : 0;
      }
      i++;
    }
    return sum;
  }


  console.log(sum5thsOfFibonacci(50));
  // 8549664847

  function sum5thsOfFibonacci2(elementNumber) {
    let sum = 0;
    let i = 0;
    let p;
    let pp;
    let fibNum;
    while(i < elementNumber) {
      if(i == 0) fibNum = 0;
      else if(i == 1) fibNum = 1;
      else if(i == 2) {
        pp = 0;
        p = 1;
        fibNum = p+pp;
      }
      else {
        pp = p;
        p = fibNum;
        fibNum = p+pp;
        sum += (i+1)%5 == 0 ? fibNum : 0;
      }
      i++;
    }
    return sum;
  }

  console.log(sum5thsOfFibonacci2(50));
  // 8549664847

function getLengthOfLongestSequence(str) {
  let chars = {};
  let prevChar = '';
  let currentSequenceCount = 0;

  str?.split('').forEach(char => {
    if(!chars[char]) {
      currentSequenceCount = 1;
    } else {
      if(prevChar != char) {
        currentSequenceCount = 0;
      }
      currentSequenceCount++;
    }

    if(!chars[char]) chars[char] = currentSequenceCount;
    chars[char] = currentSequenceCount > chars[char] ? currentSequenceCount : chars[char];
    prevChar = char;
  });

  let counts = Object.values(chars);
  return counts.length > 0 ?Math.max(...counts) : 0;
}

console.log(getLengthOfLongestSequence(''));
console.log(getLengthOfLongestSequence());
console.log(getLengthOfLongestSequence('vg'));
console.log(getLengthOfLongestSequence('gg'));
console.log(getLengthOfLongestSequence('ggooooouuooo'));