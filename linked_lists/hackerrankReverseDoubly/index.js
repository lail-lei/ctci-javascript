/**
 * Given the pointer to the head node of a doubly 
 * linked list, reverse the order of the nodes in place. 
 * That is, change the next and prev pointers of the nodes 
 * so that the direction of the list is reversed. 
 *  Return a reference to the head node of the reversed list.
 **/


/*
 * For your reference:
 *
 * DoublyLinkedListNode {
 *     int data;
 *     DoublyLinkedListNode next;
 *     DoublyLinkedListNode prev;
 * }
 *
 */

function reverse(current) {


    // we want to iterate to end of list
    while(current)
    {
        let temp = current.prev;
        current.prev = current.next;
        current.next = temp;
        
        // if we aren't at the end of the list, increment to "previous" node
        if (current.prev !== null) current = current.prev;
        else break; // we are at end of list, but to return reference to head,
        // let's keep current assigned to last node
    }
    
    return current;

}

