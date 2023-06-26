// for a given array of size n, 
//find  m consecutive numbers with highest sum

//finding the maximum sum of m consecutive elements of an array.
function MItemsOfHighestSum(input, m){
  const arraySize = input.length;
  // console.log(arraySize)
  let largestSum, largestSumBeginIndex = 0, largestSumEndIndex = m -1;
  let sum = 0
  let windowBeginIndex = 0, windowEndIndex = m-1;
  
  
  for(let i = 0; i < m; i++){
    sum += input[i]
    largestSum = sum;
  }
  

  for(let i = m; i <= arraySize - 1; i++) {
    // console.log('running for index', i);
    let windowSum = sum - input[windowBeginIndex] + input[i]
    
    if(windowSum > largestSum){
      largestSum = windowSum;
      largestSumBeginIndex = windowBeginIndex + 1
      largestSumEndIndex = i;
    }

    sum = windowSum;
    windowBeginIndex++;
    windowEndIndex++;
  }

  console.log(largestSum, largestSumBeginIndex, largestSumEndIndex)

}

function MItemsOfHighestSum2(input, m){
  const arraySize = input.length;
  // console.log(arraySize)
  let largestSum, largestSumBeginIndex = 0, largestSumEndIndex = m -1;
  let sum = 0
  let windowBeginIndex = 0, windowEndIndex = m-1;
  
  for(let i = 0; i <= arraySize - 1; i++) {
    if(i < m){
      sum += input[i]
      largestSum = sum;
    } else {
      // console.log('running for index', i);
      let windowSum = sum - input[windowBeginIndex] + input[i]
      
      if(windowSum > largestSum){
        largestSum = windowSum;
        largestSumBeginIndex = windowBeginIndex + 1
        largestSumEndIndex = i;
      }
  
      sum = windowSum;
      windowBeginIndex++;
      windowEndIndex++;
    }
  }

  console.log(largestSum, largestSumBeginIndex, largestSumEndIndex)

}

const testArray1 = [10,20,30,20,40,10,50,10,20,10,10,20]
const testArray2 = [10,20,30,20,40,10,50,10,50,10,10,20]
const testArray3 = [10,20,30,20,40,10,50,10,50,10,10,900]
const testArray4 = [1000,20,30,20,40,10,50,10,50,10,10,90]

MItemsOfHighestSum(testArray1, 3);
MItemsOfHighestSum(testArray2, 3);
MItemsOfHighestSum(testArray3, 3);
MItemsOfHighestSum(testArray4, 3);

console.log("---------------------")

MItemsOfHighestSum2(testArray1, 3);
MItemsOfHighestSum2(testArray2, 3);
MItemsOfHighestSum2(testArray3, 3);
MItemsOfHighestSum2(testArray4, 3);



// You are given an array of N integers, A1, A2 ,..., AN and an integer B. Return the of count of distinct numbers in all windows of size B.
// Formally, return an array of size N-B+1 where i'th element in this array contains number of distinct elements in sequence Ai, Ai+1 ,..., Ai+B-1.
// NOTE:  if B > N, return an empty array.
// Explanation 1:
//  A=[1, 2, 1, 3, 4, 3] and B = 3
//  All windows of size B are
//  [1, 2, 1]
//  [2, 1, 3]
//  [1, 3, 4]
//  [3, 4, 3]
//  So, we return an array [2, 3, 3, 2].
// Explanation 2:
//  Window size is 1, so the output array is [1, 1, 1, 1].
function distinctIntegersInGroup(input, m){
  if(m > input.length){
    return []
  }

  const numberOfDistinctInts = [];

  const distinctIntMap = {};
  let windowBeginIndex = 0, windowEndIndex = m - 1;
  
  for(let i = 0 ; i < input.length; i++){
    if(i < m){
      // first set
      let numKey = input[i] + ""
      
      if(distinctIntMap[numKey]){
        distinctIntMap[numKey] = distinctIntMap[numKey] + 1;
      } else {
        distinctIntMap[numKey] = 1
      }

      
      if(i == m -1){
        let numOfDistinctNums = Object.keys(distinctIntMap).length
        console.log(Object.keys(distinctIntMap))
        numberOfDistinctInts.push(numOfDistinctNums)
      }

    } else {
      // sliding set
      // delete the num at begining and set the number at the 
      let numPrev = "" + input[windowBeginIndex]
      if(distinctIntMap[numPrev] > 1){
        distinctIntMap[numPrev] = distinctIntMap[numPrev] -1; 
      } else {
        delete distinctIntMap[numPrev];
      }

      distinctIntMap["" + input[i]] = true;

      console.log(Object.keys(distinctIntMap))

      let numOfDistinctNums = Object.keys(distinctIntMap).length
      numberOfDistinctInts.push(numOfDistinctNums)

      windowBeginIndex++;
      windowEndIndex = i
    }
  }

  return numberOfDistinctInts;
}

console.log(distinctIntegersInGroup([1, 2, 1, 3, 4, 3], 3));
console.log(distinctIntegersInGroup([1, 1, 2, 2], 1));