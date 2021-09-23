/**
 * Loop Detection: Given a circular linked list, 
 * implement an algorithm that returns the node at the beginning of the loop.
 * DEFINITION Circular linked list: A (corrupt) linked list in which a node's 
 * next pointer points to an earlier node, so as to make a loop in the linked list.
 * EXAMPLE
 * Input: A -> B -> C -> D -> E -> C[the same C as earlier]
 * Output: C
 */

function detectLoopNaive (list) {


    let encountered = new Set();
    let ptr = list.head;

    while (ptr){
        if(encountered.has(ptr)) return ptr;
        else encountered.add(ptr);
        ptr=ptr.next;
    }

    return null;

}


function floydsAlgorithm (list) {

    let fast = list.head;
    let slow = list.head;

    while(fast && fast.next){ // if loop, this will go on indefinitely
        slow = slow.next; // increment by one
        fast = fast.next.next; 
        if(slow === fast) // collision
            break;
    }

    if (!fast || !fast.next) return null; // no cycle, nothing to return


    // find cycle start
    // Move slow to Head. Keep fast at Meeting Point. Each are k steps from the
    // Loop Start. If they move at the same pace, they must meet at Loop Start.
    slow = list.head;
    while (slow !== fast)
    {
        slow = slow.next;
        fast = fast.next;
    }


    return fast;


} 

module.exports={
    detectLoopNaive,
    floydsAlgorithm
}