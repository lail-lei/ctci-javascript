function partition (list, value)
{

    let ptr = list.head;
    let prev = null;
    let stopAt = list.tail;

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