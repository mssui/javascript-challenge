import dimension from "./dimensions.js";

class Assessment {
  constructor(name, options) {
    this.name = name;
    this.options = options;
    this.asked = [];
  }
  getRandomNum() {
    return Math.floor(Math.random() * 10);
  }
  showRandomChoice() {
    // Pick a number between 0 to 9 due to 10 answers on each question
    let randNum = this.getRandomNum();

    //check if this index of question already used
    let notAskAgain = this.asked.includes(randNum);

    // If the question already asked, run the function
    if (!notAskAgain) {
      this.asked.push(randNum);
    } else if (notAskAgain) {
      return this.showRandomChoice();
    }
    return randNum;
  }
}

//Create new classes with the given array, add the new data to dimensionObj
var dimensionObj = {};

dimension.map(item => {
  return (dimensionObj[item.name] = new Assessment(item.name, item.answers));
});

// Results will be updated in this object
var results = {
  Adaptive: 0,
  Integrity: 0,
  Collaborative: 0,
  Result: 0,
  Customer: 0,
  Detail: 0
};

function findCombination(list) {
  if (list.length < 2) {
    return [];
  }
  var first = list[0],
    rest = list.slice(1),
    pairs = rest.map(x => {
      return [first, x];
    });
  return pairs.concat(findCombination(rest));
}

// Create combinations
var possibleCombins = findCombination(dimension);

// Creates permutation from the combination
function findPermutation(list) {
  var reverseIt = list.map(item => {
    var innerData = [];
    innerData.push(item[1], item[0]);
    return innerData;
  });
  // combine the arrays
  return list.concat(reverseIt);
}

// Create permutations through the combination result
var possiblePermutations = findPermutation(possibleCombins);
console.log("Possible permutasyon length", possiblePermutations.length);

// We have a combination array now, All I need to map it and select random questions from objects
function showChoices(someArrData) {
  someArrData.map(item => {
    // Take the names first
    var firstCatName = item[0].name;
    var secondCatName = item[1].name;

    /*  We do not have UI interection.
      So the following line will randomly pick one of these options for me. 
      imitate a user */
    let randomPick = Math.floor(Math.random() * 2);

    /* Random pick truns 0 or 1. 
      Whichever is selected, the code below, will set the the choice to result's Object */
    if (randomPick === 0) {
      return (results[dimensionObj[firstCatName].name] += 1);
    } else {
      return (results[dimensionObj[secondCatName].name] += 1);
    }
  });
  console.log(results);
  return results;
}

showChoices(possiblePermutations);

export {
  Assessment,
  findCombination,
  findPermutation,
  possibleCombins,
  possiblePermutations,
  results,
  dimensionObj
};
