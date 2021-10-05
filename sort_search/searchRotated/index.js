/**
 * Search in Rotated Array: Given a sorted array of n integers that 
 * has been rotated an unknown number of times, write code to find 
 * an element in the array. You may assume that the array was 
 * originally sorted in increasing order.
 * 
 * EXAMPLE
 * Input: find 5 in 
 * {15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14} 
 * Output: 8 (the index of 5 in the array)
 */

// O(n + log(n)) O(n)
function searchRotatedArrayNaive (a, value) {

    let numShifted = countShifts(a);

    // if need to shift to get original, shift the array
    let sorted = numShifted === 0 ? a : shiftArray(a, numShifted);

    let index = binarySearch(sorted, 5, 0, sorted.length -1)

    return index + numShifted; 
}


// O(n)
function countShifts (a){

   let count = 0;
   for (let i = 0; i < a.length-1; i++)
   {
       // if encountered a smaller number after large number
       // can stop counting array shifts
       if(a[i] > a[i+1]){
           count++; // make sure to count last element
           break;
       }

       //reached end of array, no shifts found
       if(i === a.length-2) count = 0;
       else count++;
   }
        
    return count;
}

function shiftArray (a, shiftBy){
    return [...a.slice(shiftBy), ...a.slice(0, shiftBy)];
}


function binarySearch (a, value, low, high) {

    if(low > high) return -1; // not found

    let mid = Math.floor((low+high)/2);

    if(a[mid] === value) return mid;

    if(a[mid] < value) return binarySearch(a, value, mid+1, high);

    if(a[mid] > value) return binarySearch(a, value, low, mid-1);
} 














console.log(searchRotatedArray([15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14], 5));
console.log(searchRotatedArray([1, 3, 4, 5, 7, 10, 14, 15, 16, 19, 20, 25], 5));
console.log(searchRotatedArray([25, 1, 3, 4, 5, 7, 10, 14, 15, 16, 19, 20], 5));
console.log(searchRotatedArray([25, 25, 1, 3, 3, 4, 5, 7, 10, 14, 15, 16, 19, 20], 5));