/**
 * 
 * Partition: Write code to partition a linked list around a value x, 
 * such that all nodes less than x come before all nodes greater 
 * than or equal to x. If x is contained within the list, 
 * the values of x only need to be after the elements less than x (see below).
 * The partition element x can appear anywhere in the "right partition"; 
 *  it does not need to appear between the left and right partitions.
 * EXAMPLE
 * Input: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 [partition=5]
 * Output: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8
 */

// O(N)
function partition (list, value)
{

    let ptr = list.head;
    let prev = null;
    let stopAt = list.tail; // to know when all nodes have been processed

    while (ptr && ptr !== stopAt){

        if(ptr.data >= value){
        
            let next = ptr.next; // store the next to be checked
            ptr.next = null; // set ptr.next to be null in prep to make new tail
            list.tail.next = ptr; // move to end
            list.tail = list.tail.next; // make list.tail point to last. 
            ptr = next; // move to next pointer
            if(prev) prev.next = ptr; // connect new pointer to previous pointer (if exists) 
            
        }
        else {
            if(!prev) list.head = ptr; // make list.head point to new head of list
            prev = ptr; // increment prev
            ptr = ptr.next; // increment ptr
        }
    }

}



module.exports = {

    partition
}