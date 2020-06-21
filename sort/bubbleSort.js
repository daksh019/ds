function swapArrayElem(arr, pos1, pos2) {
  const temp = arr[pos1];
  arr[pos1] = arr[pos2];
  arr[pos2] = temp;
  return arr;
}

function bubbleSort(arr) {
  for (let outer = arr.length; outer > 1; outer--) {
    for (let inner = 0; inner <= outer - 1; inner++) {
      let currElem = arr[inner];
      let nextElem = arr[inner + 1];
      if (currElem > nextElem) {
        swapArrayElem(arr, inner, inner + 1);
      }
    }
    console.log(arr);
  }
}

const arr = [3, 89, 67, 78, 79, 34, 99, 1];
bubbleSort(arr);

console.log("sorted result: ");
console.log(arr);

// the comparison is always going to happen.
// only the swap is conditional so the
// best case scenario is O(n2)
