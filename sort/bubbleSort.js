function swapArrayElem(arr, pos1, pos2) {
  const temp = arr[pos1];
  arr[pos1] = arr[pos2];
  arr[pos2] = temp;
  return arr;
}


/** 
 * The essence of bubble sort is in swapping the two adjacent values,
 * smaller to the left and greater to the right. 
 * This is done starting from left most side.
*/
function bubbleSort(arr) {
  // each iteration will reduce on node to inspect.
  for (let nodesToInspect = arr.length; nodesToInspect > 1; nodesToInspect--) {
    // start comparison from 0th element and go till the remaining nodeToInspect.
    // since the nodeToInspect will be reached by the "next" element inner can remain 
    // <= nodesToInspect - 1
    for (let inner = 0; inner <= nodesToInspect - 1; inner++) {
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
