function deleteNode (node, list) {

    if (!list.head) return list;
    
    let ptr = list.head;

    while (ptr){
        if(ptr.next === node){
            ptr.next = node.next; 
            break;
        } 
        ptr = ptr.next;
    }

    return list;
}


function deleteData (node) {
    let data = node.next.data;
    node.data = data;
    node.next = node.next.next;
}







module.exports = {
    deleteNode,
    deleteData
}