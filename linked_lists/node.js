
function Node (data) {
    this.data = data;
    this.next = null;
    this.toString = () => {
        return "data: "+ this.data + ", next: " + this.next.data;
    }
}


function LinkedList () {
    this.head = null;
    this.tail = null;
    this.size = 0;

    this.addNode = (data) => {
        if(!this.head) {
            this.head = new Node(data);
            this.tail = this.head;
        }
        else {
            this.tail.next = new Node(data);
            this.tail = this.tail.next;
        }

        this.size++;
    }


    this.toString = () =>{
        let str = "";
        let ptr = this.head;
    
        for(let i = 0; i < this.size; i++){ // avoid infinite loop if cycle (vs while(ptr))
            
            if(ptr) // TODO- add delete method to Node class to change size on delete
            {
                str+= ptr.data+ " => ";
                ptr = ptr.next;
            }
           
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