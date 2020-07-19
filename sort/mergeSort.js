/**
 * Merge sort is implemented as recursive strategy to sort the smallest arrays of one unit each.
 * Then merging back the sorted arrays using comparison. 
 * It can be done by both recursive calls as well as iterative calls. 
 * Due to high memory requirements it is implemented as iterative or bottom up way in js. 
 * However for small array it is also fine to adopt the recursive approach.
 * 
*/

function takeValuesTillMax(startPos, sourceArray, tgtArray, maxValue) { 
  while (startPos <= sourceArray.length - 1 && sourceArray[startPos] < maxValue) {
    tgtArray.push(sourceArray[startPos]);
    startPos++;
  }
  return startPos;
}


function mergeSortedArrays(arr1, arr2) {
  // console.log("merging arrays", arr1, arr2);
  const mergedArray = [];
  let pos1 = 0, pos2 = 0;
  let maxValue = null;
  while (pos1 < arr1.length || pos2 < arr2.length) {
    if (pos1 > arr1.length - 1 || pos2 > arr2.length - 1) {
      maxValue = Infinity;
      pos1 = takeValuesTillMax(pos1, arr1, mergedArray, maxValue);
      pos2 = takeValuesTillMax(pos2, arr2, mergedArray, maxValue);
    } else {
      if (arr1[pos1] > arr2[pos2]) {
        maxValue = arr1[pos1];
        pos2 = takeValuesTillMax(pos2, arr2, mergedArray, maxValue);
        mergedArray.push(maxValue);
        pos1++;
      } else { 
        maxValue = arr2[pos2];
        pos1 = takeValuesTillMax(pos1, arr1, mergedArray, maxValue);
        mergedArray.push(maxValue);
        pos2++;
      }
    }
  }
  return mergedArray;
}

function mergeSort(arr) { 
  if (arr.length <= 0) { 
    return arr;
  }

  // break the array into smallest units. 
  // every two units must merge to get a larger array. 
  // this must continue till the only array left is one.
  let subArrays = arr.map(elem => {
    const singleUnitArr = [];
    singleUnitArr.push(elem);
    return singleUnitArr;
  });

  // console.log("broken arrays", subArrays);

  while (subArrays.length > 1) {
    let iteratedMerged = [];

    for (let i = 0; i <= subArrays.length - 1;) {
      if (i + 1 <= subArrays.length - 1) {
        const mergedArray = mergeSortedArrays(subArrays[i], subArrays[i + 1]);
        iteratedMerged.push(mergedArray);
        i = i + 2;
      } else if (i <= subArrays.length - 1) { 
        iteratedMerged.push(subArrays[i]);
        i++;
      }
    }
    // console.log(iteratedMerged);
    subArrays = iteratedMerged;
  }
  return subArrays[0];
}

const arr = [6, 10, 0, 6, 5, 8, 7, 4, 2, 7, 44];
const sorted = mergeSort(arr);
console.log(sorted);

console.log(mergeSort([0]));
console.log(mergeSort([-1, 0]));
console.log(mergeSort([-1, 0, 1]));
console.log(mergeSort([100, 0, -1, -100]));
console.log(mergeSort([]));
console.log(mergeSort([0,0,0,0]));
console.log(mergeSort([1,1,1]));

console.log("logging merge sorted array results");
console.log(mergeSortedArrays([33, 8, 98], [0, 8, 8]));
console.log(mergeSortedArrays([6,10], [0,6]));
console.log(mergeSortedArrays([8,10], [0,8]));
console.log(mergeSortedArrays([8,10], []));
console.log(mergeSortedArrays([], [8,10]));
console.log(mergeSortedArrays([-8, -10], [8,10]));
