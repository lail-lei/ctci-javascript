/**
 * Intersection: Given two (singly) linked lists, determine if the two lists intersect.
 *  Return the inter­ secting node. Note that the intersection is defined based on reference,
 *  not value. That is, if the kth node of the first linked list is the exact same node 
 *  (by reference) as the jth node of the second linked list, then they are intersecting.
 */

let lib = require("../node.js");


// O(A+B)
function intersection (listA, listB){

    if(listA.tail !== listB.tail) return null; // must have same ending

    let sizeA = getSize(listA.head);
    let sizeB = getSize(listB.head);

    let maxCommonSize = Math.min(sizeA, sizeB);
    let indexA = Math.abs(sizeA - maxCommonSize)
    let indexB = Math.abs(sizeB - maxCommonSize)

    //iterate to beginning of possible common list
    let ptrA = listA.head, ptrB = listB.head;

    for(let i = 0; i < indexA; i++)
        ptrA = ptrA.next;
    
    for(let i = 0; i < indexB; i++)
        ptrB = ptrB.next;
    

    while(ptrA && ptrB){
        if(ptrA === ptrB) return ptrA;
        
        ptrA = ptrA.next;
        ptrB = ptrB.next;
    }
    

    return null;
}



function getSize (head){
    let size = 0;
    while (head)
    {
        size++;
        head = head.next;
    }
    return size;
}


module.exports= {
    intersection
}