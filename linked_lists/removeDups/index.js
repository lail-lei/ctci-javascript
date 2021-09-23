/**
 * Remove Dups: 
 * Write code to remove duplicates from an unsorted linked list.
 * FOLLOW UP: How would you solve this problem if a temporary buffer 
 * is not allowed? 
 */
// O(n), with O(n2)
function remove (list) {

    if (!list.head) return list;
    
    let buffer = new Set(); // store data (ints)
    buffer.add(list.head.data); // add first item
    
    let prev = list.head; // pointer to keep track of previous node (know where deletion starts)
    let ptr = list.head.next; // pointer of node to evaulate

    while (ptr){
        if(buffer.has(ptr.data)) prev.next = ptr.next; // if encountered data, delete current pointer
        else {
            prev = ptr; // move previous pointer (ptr node is ok to include in final list)
            buffer.add(ptr.data) // add encountered data to buffer
        }
        ptr = ptr.next; // always iterate pointer to next position
    }

    return list;
}

// O(n2)
function removeInPlace (list) {


    let ptr = list.head;
    // for each node, 
    while(ptr)
    {
        let prev = ptr; // for keeping track of previous position for deletion
        let runner = ptr.next; // for analyzing the node- only need to check nodes after current one 
        // (the arrived node at ptr must be unqiue, since it has not yet been deleted)

        // compare with all other nodes
        while(runner){
            if(runner.data === ptr.data) prev.next = runner.next; // delete runnner node
            else prev = runner; // if nothing to delete, set runner as previous (include in final list)
            runner = runner.next; // always increment runner
        }


        ptr = ptr.next;  // always increment pointer
    }

    return list;

}





module.exports = {
    remove,
    removeInPlace
}