

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


function removeInPlace (list) {


    let ptr = list.head;

    while(ptr)
    {
        let prev = ptr;
        let runner = ptr.next;


        while(runner){
            if(runner.data === ptr.data) prev.next = runner.next;
            else prev = runner;
            runner = runner.next;
        }


        ptr = ptr.next;     
    }

    return list;

}





module.exports = {
    remove,
    removeInPlace
}