/**
 * Delete Middle Node: Implement an algorithm to delete a 
 * node in the middle (i.e., any node but the first and last node, 
 * not necessarily the exact middle) of a singly linked list, 
 * given only access to that node.
 * EXAMPLE
 * lnput:the node c from the linked lista->b->c->d->e->f
 * Result: nothing is returned, but the new linked list looks likea->b->d->e- >f
 */

// if have access to list and want to delete entire node O(n)
function deleteNode (node, list) {

    if (!list.head) return; // return empty list
    
    let ptr = list.head;

    while (ptr){ // iterate to find node before deleted node
        if(ptr.next === node){ 
            ptr.next = node.next; 
            break;
        } 
        ptr = ptr.next; // delete the node
    }
}

// if deleting and replacing data is acceptable O(1)
function deleteData (node) {
    let data = node.next.data; // get the data of the next node
    node.data = data; // replace the data in the current node
    node.next = node.next.next; // delete the redunant next node
}



module.exports = {
    deleteNode,
    deleteData
}