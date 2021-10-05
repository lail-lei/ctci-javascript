/**
 * 
 * Sorted Merge: You are given two sorted arrays, A and B, 
 * where A has a large enough buffer at the end to hold B. 
 * Write a method to merge B into A in sorted order.
 */

// modifying (non functional)
function sortedMerge (a, b) {

    let ptrA = 0, ptrB = 0;
    
    while(ptrB < b.length){

        if(ptrA === a.length){
            a.push(b[ptrB]);
            ptrB++;
            continue;
        }

        if(a[ptrA] < b[ptrB] ){
            ptrA++;
        }
        else{
            a.splice(ptrA, 0, b[ptrB]);
            ptrB++;
            ptrA++;
        }
            
    }

    return a; // for testing consistency return a, but this is mutating so no return necessary
}



function sortedMergeNonMutating (a, b) {

    let copy = [...a];

    let ptrA = 0, ptrB = 0;
    
    while(ptrB < b.length){

        if(ptrA === copy.length){
            copy.push(b[ptrB]);
            ptrB++;
            continue;
        }

        if(copy[ptrA] < b[ptrB] ){
            ptrA++;
        }
        else{
            copy.splice(ptrA, 0, b[ptrB]);
            ptrB++;
            ptrA++;
        }
            
    }

    return copy;
}

// better to do this from starting at end!!! less shifting!!!

// a, b are arrays
// lastA is the length of a (remember, buffer exists)
function merge (a, b, lenA, lenB) {

    let indexA = lenA - 1; // index of last element in array a
    let indexB = lenB - 1;  // index of last element in array b
    let indexMerged = lastB + lastA - 1;// end of merged array

    while (indexB >= 0) {
        //  end of a is > than end of b
            if (indexA >= 0 && a[indexA] > b[indexB]) {
                a[indexMerged] = a[indexA]; //copy indexA element into indexMerged
                indexA--; // decrement a
            } else {
                 a[indexMerged] = b[indexB]; // copy indexB element into indexMerged
                 indexB--; // decrement b
            }
            indexMerged--; // move backwards to next position
    }


}



module.exports= {
    sortedMerge,
    sortedMergeNonMutating
}