function swapArrayElem(arr, pos1, pos2) {
  const temp = arr[pos1];
  arr[pos1] = arr[pos2];
  arr[pos2] = temp;
  return arr;
}

function selectionSort(arr) {
  for (let outerIndex = 0; outerIndex < arr.length - 1; outerIndex++) {
    let smallest = null;
    for (
      let innerIndex = outerIndex;
      innerIndex <= arr.length - 1;
      innerIndex++
    ) {
      if (smallest === null) {
        smallest = arr[innerIndex];
      } else {
        if (arr[innerIndex] < smallest) {
          smallest = arr[innerIndex];
          swapArrayElem(arr, outerIndex, innerIndex);
          innerIndex++;
        }
      }
    }
  }
}

const arr = [3, 89, 67, 78, 79, 34, 99, 1, 99];
selectionSort(arr);

console.log("sorted result: ");
console.log(arr);
