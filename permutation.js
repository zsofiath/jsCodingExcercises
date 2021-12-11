function permutation(array) {
    let permutations = [];
  
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
        for (let k = 0; k < array.length; k++) {
          if (array[i] !== array[j] && array[j] != array[k] && array[i] != array[k] && !permutations.includes(array[i] + array[j] +array[k])) {
              permutations.push(array[i] + array[j] + array[k]);
          }
        }
      }
    }
  
    return permutations;
  }
  
  console.log(permutation(["a", "b", "c"]));
  