/**
 * Binary search works on a sorted list.
 * To search for a number "x", Take the min and max index and find the mid point. 
 * If the min and max are not equal then:
  * If the value at mid point is higher than "x", set the max to mid - 1.
  * If the value at mid point is lower than "x", set the min to min + 1.
  * If the value at mid point is neither high nor low - you have found what you are looking for.
 * If the min is greater than or equal to the max - the value is not in the list.
*/

function binarySearch(list, value) {
  if (list.length === 0) { 
    return -1;
  }

  let min = 0, max = list.length;
  while (min < max) {
    let mid = Math.floor((min + max) / 2);
    let valueAtMid = list[mid];
    if (value < valueAtMid) {
      max = mid - 1;
    } else if (value > valueAtMid) {
      min = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
}


function logResult(list, item) { 
  let searchRes = binarySearch(list, item);
  console.log(`searching in: ${list} for ${item} and got ${searchRes}`);
}

let testArr1 = [10];
logResult(testArr1, 4)
logResult(testArr1, 0);

let testArr2 = [2, 10];
logResult(testArr2, 4);
logResult(testArr2, 0);

let testArr3 = [33, 37, 48, 56, 78, 79, 79, 80, 92, 94];
logResult(testArr3, 56);
logResult(testArr3, 33);
logResult(testArr3, 94);
logResult(testArr3, 0);
logResult(testArr3, -1);
logResult(testArr3, 100);
