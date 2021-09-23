/**
 * Sum Lists: You have two numbers represented by a linked list, 
 * where each node contains a single digit. 
 * The digits are stored in reverse order, such that the 1's digit 
 * is at the head of the list. Write a function that adds the two numbers
 * and returns the sum as a linked list.
 * EXAMPLE
 * Input:(7-> 1 -> 6) + (5 -> 9 -> 2).That is, 617 + 295. 
 * Output:2 -> 1 -> 9. That is, 912.
 */


let lib = require("../node.js");
let LinkedList = lib.LinkedList;

function sumLists (list1, list2) {
    let sum = getInteger(list1) + getInteger(list2);
    
    let result = new LinkedList();

    while (sum > 0){
        result.addNode(sum%10) //add the remainder of sum and 10 (rightmost number) to list
        sum = Math.floor(sum / 10); // floor (integer) division to chop off rightmost number
    }
    
    return result;
}

function getInteger (list) {

    let ptr = list.head;
    let str = "";

    while(ptr){
        str = ptr.data + str; // add data to front of string
        ptr=ptr.next
    }

    return str === "" ? 0 : parseInt(str);
}

module.exports = {
    sumLists
}



