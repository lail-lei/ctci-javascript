let lib = require("../node.js");
let LinkedList = lib.LinkedList;


function sumLists (list1, list2) {
    let sum = getInteger(list1) + getInteger(list2);
    
    let result = new LinkedList();

    while (sum > 0){
        result.addNode(sum%10)
        sum = Math.floor(sum / 10);
    }
    
    return result;
}

function getInteger (list) {

    let ptr = list.head;
    let str = "";

    while(ptr){
        str = ptr.data + str;
        ptr=ptr.next
    }

    return str === "" ? 0 : parseInt(str);
}

module.exports = {
    sumLists
}



