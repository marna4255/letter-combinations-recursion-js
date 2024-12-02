let setOfValues = new Set(["T", "R", "A", "I", "N", "S", "G"]);

// Convert the Set to an Array
let convertSetToArray = Array.from(setOfValues);

function possibleCombinations(arr) {
  if (arr.length === 0) {
    return [""];
  }

  let results = [];

  for (let i = 0; i < arr.length; i++) {
    const currentLetter = arr[i];
    const remainingLetters = arr.slice(0, i).concat(arr.slice(i + 1));

    const subCombinations = possibleCombinations(remainingLetters);

    for (const subCombination of subCombinations) {
      results.push(currentLetter + subCombination);
    }
  }

  return results;
}

let combinations = possibleCombinations(convertSetToArray);

// Display combinations in the HTML
let combinationList = document.getElementById("combinationList");
combinations.forEach((combination) => {
  let li = document.createElement("li");
  li.textContent = combination;
  combinationList.appendChild(li);
});

let totalCount = document.getElementById("totalCount");
totalCount.textContent = combinations.length;
