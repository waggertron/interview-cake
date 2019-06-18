const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function getRandomIntInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function swap(arr, indexOne, indexTwo) {
  const temp = arr[indexOne];
  arr[indexOne] = arr[indexTwo];
  arr[indexTwo] = temp;
}

function shuffleArrInPlace(arr) {
  const endIndex = arr.length - 1;
  for (let i = 0; i < endIndex; i += 1) {
    const randomInt = getRandomIntInRange(i, endIndex);
    swap(arr, i, randomInt);
  }
  console.log(arr);
}

shuffleArrInPlace(array);
// O(n) time O(1) space
