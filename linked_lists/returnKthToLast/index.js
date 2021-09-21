function  naive (list, k) {

    if (k === 1) return list.tail;
    if (k <= 0) return null;

    let ptr = list.head;
    let size = 0;

    while (ptr)
    {
        size++;
        ptr = ptr.next;
    }


    if (k > size) return null;
    if (k === size) return list.head;

    let index = 0; 
    let stopIndex = size - k;

    ptr = list.head;

    while (ptr && index < stopIndex){
        ptr = ptr.next;
        index++;
    }
    
    return ptr;
}

module.exports = {
    naive
}