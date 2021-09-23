
// no list size available, no indexing, 
// iterate over ever element once, O(n) 
// space is O(2n) stack and list both contain n
function isPalindromeNaive (list){

    let stack = new Array(); // use stack to reverse order

    if(!list.head) return true; // empty list a palindrome

    let ptr = list.head;

    while (ptr){
        stack.push(ptr.data);
        ptr = ptr.next;
    }

    ptr = list.head;

    while(stack.length > 0){
        let top = stack.pop(); 
        if(top !== ptr.data) return false;
        ptr = ptr.next;
    }

    return true; // reached end, is palindrome
}

// iterate over all elements once, O(n)
// space is O(n + n/2) => O(n) 
function isPalindromeHalfStack (list) {

    let stack = new Array();

    let ptr = list.head; // to add to stack
    let runner = list.head; // to find end/middle of list

    while(runner && runner.next) {// while runner is not at last element of end of list 
        stack.push(ptr.data); // add front half of list, element by element
        ptr = ptr.next; // increment pointer
        runner = runner.next.next; // move runner at twice the speed of ptr
    }

    if(runner) // if there is a runner element (landed on element rather than null)
        ptr = ptr.next; // there is odd number of elements, so skip middle

    
    // now continuing iterating to see if same elements from end of list and stack
    while(ptr){
        if(ptr.data !== stack.pop()) return false;
        ptr = ptr.next;
    }

    return true;
}

function isPalindrome (list) {
    let res = recursePalindrome(list.head, list.size)
    return res.bool;
}

function recursePalindrome (head, size) {

    if(!head || size <= 0) return {bool: true, node: head}; // got to middle of even list
    if(size === 1) return {bool: true, node: head.next}; // got to midde of odd list 


    let result = recursePalindrome(head.next, size - 2);
    
    // if not a palindrome later in list, return result now
    if(!result.bool || !result.node) return result;


    // check nodes 
    result.bool = result.node.data === head.data; // if current node is equal to returned node
    result.node = result.node.next; // increment node
    return result;

}

module.exports = {

    isPalindrome,
    isPalindromeNaive,
    isPalindromeHalfStack

}


    
 

    