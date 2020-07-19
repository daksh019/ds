function swapArrayElem(arr, pos1, pos2) {
  const temp = arr[pos1];
  arr[pos1] = arr[pos2];
  arr[pos2] = temp;
  return arr;
}


/**
 * Each element in the list is compared to the rest of the sub array in left direction.
 * The comparison begins from second element and compares to first element. 
 * Then moves to third elment to compare to first two elements and so on.
 * Calling this element as "pegged" element.
 * Inside each iteration comparison is made between "pegged" element value to "pegged" -n position.
 * Until a value less than "pegged" element is found or the comparison reaches zeroth place.
 * If the "pegged" element is lower than the nth element then the left side element is moved to right.
 * The comparison moves to next set one. 
 * In the end, the pegged element is placed at the nth place where this inner comparison loop breaks.
*/
function insertionSortInPlace(arr) { 
  let totalIterations = 0;
  for (let peggedPosition = 1; peggedPosition <= arr.length - 1; peggedPosition++) {
    let peggedValue = arr[peggedPosition];
    let comparePos = peggedPosition - 1;
    while (comparePos > 0 && arr[comparePos - 1] >= peggedValue) { 
      arr[comparePos] = arr[comparePos - 1];
      comparePos--;
      totalIterations++;
    }
    arr[comparePos] = peggedValue;
  }
  console.log("total iterations for inplace operation", totalIterations);
}

/** 
 * This one is shift based sort. 
 * Each element in the list is compared to the first pos and if this element is smaller then 
 * the array is shifted to make it the first pos element. 
 * This moves to second element in next set of iterations.
 * So the total iterations required will be equal to the total length - 1 to include the last element. 
 * And each iteration will compare from iter element to last.
*/
function insertionSort(arr) {
  let totalIterations = 0;
  for (let outerIndex = 0; outerIndex < arr.length - 1; outerIndex++) {
    for (
      let innerIndex = outerIndex + 1;
      innerIndex <= arr.length - 1;
      innerIndex++
    ) {
      if (arr[innerIndex] < arr[outerIndex]) {
        let elemToRemove = arr[innerIndex];
        arr.splice(innerIndex, 1);
        arr.splice(outerIndex, 0, elemToRemove);
      }
      totalIterations++;
      // console.log(arr);
    }
    console.log(arr);
  }
  console.log("total iterations for shift operation", totalIterations);
}

let arr = [6,10,0,6,5,8,7,4,2,7];
insertionSort(arr);

console.log("sorted result: ");
console.log(arr);
console.log("\n\n");

arr = [6,10,0,6,5,8,7,4,2,7];

insertionSortInPlace(arr);
console.log("sorted result: ");
console.log(arr);
// conclusion - inplace method is way cheaper than the shift on each detect.