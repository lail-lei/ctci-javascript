
function MyQueue () {

    this.input = new Stack();
    this.output = new Stack();

    //O(1)
    this.enqueue = (data) => {
       
       this.input.push(data);
    }

    // O(n)
    this.dequeue = () => {
  
       if(this.input.isEmpty() && this.output.isEmpty()) return null;

       if(this.output.isEmpty())
       {
           while(!this.input.isEmpty()){
               let popped = this.input.pop();
               this.output.push(popped);

           }
       }

       return this.output.pop();
       
    }

}



function Stack () {

    this.array = new Array();
    this.frontier = 0;
    this.size = 0;

    this.push = (data) => {
        this.array[frontier] = data;
        this.frontier++;
        this.size++;
    }

    this.pop = () => {
        let popped = this.array[frontier];
        this.frontier--;
        this.size--;
        return popped;
    }

    this.isEmpty = () => {return size === 0}
}