/**
 * 
 * Return Kth to Last: Implement an algorithm to find the kth to last 
 * element of a singly linked list. k = 1, return last element, k = 2, return second to last, etc
 */


// no fancy optimizations, O(n)
function  naive (list, k) {

    if (k === 1) return list.tail; // if have tail pointer in list, do this
    if (k <= 0) return null; // return null if nonsensical input

    // assuming no access to list size
    let ptr = list.head; 
    let size = 0;

    // get size of list
    while (ptr)
    {
        size++;
        ptr = ptr.next;
    }

    // return null if nonsensical input
    if (k > size) return null;
    if (k === size) return list.head; // for optimization, return head if want length of list from end

    let index = 0; 
    let stopIndex = size - k; // this is the node to return

    ptr = list.head;
    // increment to the stopping node and return
    while (ptr && index < stopIndex){
        ptr = ptr.next;
        index++;
    }
    
    return ptr;
}

module.exports = {
    naive
}