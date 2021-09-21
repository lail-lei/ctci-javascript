let lib = require("../node.js");
let LinkedList = lib.LinkedList;

function sumLists (list1, list2) {
    let sum = getInteger(list1) + getInteger(list2);
    
    let result = new LinkedList();
    if(!sum) return result;

    getDigits(sum, result); 
    return result;
}

function getDigits (num, list) {

    if(num < 10) {
        list.addNode(num);
    }
    else{
        getDigits(Math.floor(num/10), list)
        list.addNode(num%10)
    }
}



function getInteger (list) {

    let ptr = list.head;
    let str = "";

    while(ptr){
        str += ptr.data;
        ptr=ptr.next
    }

    return str === "" ? 0 :parseInt(str);
}


module.exports = {
    sumLists
}



