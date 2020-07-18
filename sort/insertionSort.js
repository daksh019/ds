function swapArrayElem(arr, pos1, pos2) {
  const temp = arr[pos1];
  arr[pos1] = arr[pos2];
  arr[pos2] = temp;
  return arr;
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
      // console.log(arr);
    }
    console.log(arr);
  }
}

// const arr = [3, 89, 67, 78, 79, 34, 99, 1, 99];
const arr = [6,10,0,6,5,8,7,4,2,7];
insertionSort(arr);

console.log("sorted result: ");
console.log(arr);
console.log("\n\n");

function insertionSort2(dataStore) {
  var temp, inner;
  for (var outer = 1; outer <= dataStore.length-1; ++outer) {
    temp = dataStore[outer];
    inner = outer;
    console.log("for outer as", outer, "temp is", temp);
    while (inner > 0 && (dataStore[inner-1] >= temp)) {
      dataStore[inner] = dataStore[inner-1];
      --inner;
      console.log(dataStore);
    }
    console.log("broke out of while, the inner is", inner);
    dataStore[inner] = temp;
    console.log(dataStore)
  }
}

const arr2 = [6,10,0,6,5,8,7,4,2,7];
insertionSort2(arr2);

console.log("sorted result: ");
console.log(arr2);