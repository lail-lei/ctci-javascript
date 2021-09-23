/**
 * Sum Lists: You have two numbers represented by a linked list, 
 * where each node contains a single digit. 
 * The digits are stored in reverse order, such that the 1's digit 
 * is at the head of the list. Write a function that adds the two numbers
 * and returns the sum as a linked list.
 * 
 * FOLLOW UP
 * Suppose the digits are stored in forward order. Repeat the above problem. 
 * EXAMPLE
 * Input:(6 -> 1 -> 7) + (2 -> 9 -> 5). That is, 617 + 295. 
 * Output:9 -> 1 -> 2. That is, 912.
 */

let lib = require("../node.js");
let LinkedList = lib.LinkedList;

function sumLists (list1, list2) {
    let sum = getInteger(list1) + getInteger(list2);
    
    let result = new LinkedList();
    if(!sum) return result;

    getDigits(sum, result); 
    return result;
}
// recursive to get leftmost digit
function getDigits (num, list) {

    if(num < 10) { // base case (left most digit)
        list.addNode(num); // add left most to list
    }
    else{
        getDigits(Math.floor(num/10), list) // recurs to left most digit first
        list.addNode(num%10) // now add rightmost (current right most) digit
    }
}



function getInteger (list) {

    let ptr = list.head;
    let str = "";

    while(ptr){
        str += ptr.data; // add to end of string
        ptr=ptr.next
    }

    return str === "" ? 0 :parseInt(str);
}


module.exports = {
    sumLists
}



