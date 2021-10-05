

// mutates input stack, and returns different stack with correct order
function sortStackNaive (input) {

   let output = new Stack();
   while(!input.isEmpty()){

        let inpop = input.pop(); // initial input value
        
        // if top of output stack is less than current initial input
        while (output.peek() && inpop > output.peek())
            input.push(output.pop()); // add back to input stack
        
        output.push(inpop); // now add the inital input
   }

    return output;
}

// this is void function, mutates original array
function sortStack (input) {

    let output = new Stack();
    // order output in reverse order (top largest)
    while(!input.isEmpty()){
 
         let inpop = input.pop(); // initial input value
         
         // if top of output stack is greater than current initial input
         while (output.peek() && output.peek() > inpop)
             input.push(output.pop()); // add back to input stack
         
         output.push(inpop); // now add the inital input
    }
 
    //pop back into input stack
     while(!output.isEmpty()) input.push(output.pop());
 }



function Stack () {

    this.array = new Array();
    let frontier = 0; // private
    let size = 0; // private

    this.push = (data) => {
        this.array[frontier] = data;
        frontier++;
        size++;
    }

    this.pop = () => {
        let popped = this.array[frontier-1];
        frontier--;
        size--;
        return popped;
    }

    this.isEmpty = () => size === 0;

    this.peek = () => size === 0 ? null : this.array[size-1];
}


const createStack = (arr) =>
{   
    return arr.reduce((accum, element) => {

        accum.push(element);
        return accum;

    }, new Stack());
}

let unsorted = createStack([1000, 33, 16, 8, 27, 749, 14, 3, 50, 10, 330, 2, 1, -100, 5456, 9])

sortStack(unsorted)

console.log(unsorted.array)

