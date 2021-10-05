/** How would you design a stack which, in addition to push and pop, 
has a function min which returns the minimum element? 
Push, pop and min should all operate in 0(1) time. */

function MinStack () {

    this.stack = new Array();
    this.frontier = 0;
    this.minSoFar = new Array();  
    this.minFrontier = 0;


    this.push = (data) => { 

        // first element is min
        if(this.frontier === 0 ){
            this.minFrontier = 0;
            this.minSoFar[this.minFrontier] = data;
            this.minFrontier++;
        }
            
        // basic functions
        this.stack[this.frontier] = data; // add data
        this.frontier++; // increment frontier

        // update min stack 
        if(data <= this.minSoFar[this.minFrontier-1]){
            this.minSoFar[this.minFrontier] = data;
            this.minFrontier++;
        }
    } 


    this.pop = () => { 

        if(this.frontier === 0) return null;
         // basic functions
        let popped = this.stack[this.frontier-1]; // remove at top
        this.frontier--; // decrement frontier
       
        // decrement min frontier
        if(popped === this.minSoFar[this.minFrontier-1]) this.minFrontier--;
        return popped; // return popped value;

    }

    this.min = () => {
        if(this.frontier === 0) return null; // if empty return nothing
        return this.minSoFar[this.minFrontier-1];
      
    }


  this.toString = () =>{

        let str = "";   

        if(this.frontier === 0) return "empty stack";

        for(let i = 0; i < this.frontier; i++){
            str += this.stack[i];

            if(i !== this.frontier-1) str+= " => "; 
        }

        return str;

    }

}


let stack = new MinStack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(-1000)
stack.push(-10001)

console.log(stack.toString())
console.log(stack.min())

stack.pop();

console.log(stack.toString())
console.log(stack.min())

stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();

console.log(stack.toString())
console.log(stack.min())

stack.push(5);

console.log(stack.toString())
console.log(stack.min())

stack.push(-100000453)
stack.push(1)
stack.push(56)
stack.push (55)

stack.pop();
stack.pop();

console.log(stack.toString())
console.log(stack.min())

