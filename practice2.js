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