
function Node (data) {
    this.data = data;
    this.next = null;
}


function LinkedList () {
    this.head = null;
    this.tail = null;

    this.addNode = (data) => {
        if(!this.head) {
            this.head = new Node(data);
            this.tail = this.head;
        }
        else {
            this.tail.next = new Node(data);
            this.tail = this.tail.next;
        }
    }

    this.toString = () =>{
        let str = "";
        let ptr = this.head;
       
        while (ptr) {
            str+= ptr.data+ " => ";
            ptr = ptr.next;
        }
    
        str+= "EOL";

        return str;
    }
}


const createList = (arr) =>
{
    let list = new LinkedList();
    return arr.reduce((accum, element) => {accum.addNode(element); return accum;}, list)
}


module.exports = {
    Node,
    LinkedList,
    createList
} 