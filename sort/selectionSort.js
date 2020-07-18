function swapArrayElem(arr, pos1, pos2) {
  const temp = arr[pos1];
  arr[pos1] = arr[pos2];
  arr[pos2] = temp;
  return arr;
}


/**
 * The selection sort is basically position based sort.
 * The first pos in the list must contain the lowest value and so on.
 * So each pos beginning from first pos 
 * is compared to all other pos in the array and in each comparison the smaller value is kept at this pos. 
 * This happens for all pos - so total iterations is length - 1 coz the last pos has no one to be compared to.
 * In each iteration comparison must happen from first pos for that iteration to the last pos - (lenght - 1) of the list.
*/
function selectionSort(arr) {
  for (let posToCompare = 0; posToCompare < arr.length - 1; posToCompare++) {
    let smallest = null;
    for (
      let innerIndex = posToCompare;
      innerIndex <= arr.length - 1;
      innerIndex++
    ) {
      if (smallest === null) {
        smallest = arr[innerIndex];
      } else {
        if (arr[innerIndex] < smallest) {
          smallest = arr[innerIndex];
          swapArrayElem(arr, posToCompare, innerIndex);
          innerIndex++;
        }
      }
    }
    console.log(arr);
  }
}

const arr = [3, 89, 67, 78, 79, 34, 99, 1, 99];
selectionSort(arr);

console.log("sorted result: ");
console.log(arr);
