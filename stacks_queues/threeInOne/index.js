/** Describe how you could use a single array to implement three stacks. */

// assumption: stack capacity is fixed and equal (arr/3)
// pro - simple implementation, O(1) pushing and popping 
// cons- wastes memory space if one stack is significantly longer/shorter than others 

// a more involved implementation would include a class to keep track of stacks starts and frontiers
// and would shift all stacks when one stack exceeded it's capacity- would be good to use a circular 
// array for that 


function ThreeStacks () {

        this.array = new Array();

        this.frontier0 = 0;
        this.frontier1 = 1;
        this.frontier2 = 2;


        //stack param is stack to add element (data) to
        this.push = (data, stack) => {
            if(stack > 2 || stack < 0) return; // 0 indexed list of stacks
           
            // push the data and update the frontier (ahead by 3 indices)
            if(stack === 0){
                this.array[this.frontier0] = data;
                this.frontier0+=3;
            } 
            else if (stack === 1) {
                this.array[this.frontier1] = data;        
                this.frontier1+=3;
            }
            else{
                this.array[this.frontier2] = data;        
                this.frontier2+=3;
            } 


        }


        //stack param is stack to add element to
        this.pop = (stack) => {
            if(stack > 2 || stack < 0) return; // 0 indexed list of stacks
           
            let popped; 

            // update the frontier (behind by 3 indices) (old data can be overwritten)
            if(stack === 0){
                popped = this.array[this.frontier0];
                this.frontier0-=3;
            } 
            else if (stack === 1) {
                popped = this.array[this.frontier1];       
                this.frontier1-=3;
            }
            else{
                popped = this.array[this.frontier2];        
                this.frontier2-=3;
            } 

            return popped;
        }


        this.toString = (stack) =>{

            let str = "";

            let frontier = stack === 0 ? this.frontier0 
                : stack === 1 ? this.frontier1 
                : this.frontier2;

            for(let i = stack; i < frontier; i+=3){
                str += this.array[i];

                if(frontier - i > 3) str+= " => "; 
            }

            return str;

        }

}















let stacks = new ThreeStacks();

stacks.push(1, 0);
stacks.push(2, 0);
stacks.push(3, 0);
stacks.push(4, 0);
stacks.push(5, 0);
stacks.push(6, 0);

stacks.push(1, 1);
stacks.push(2, 1);
stacks.push(3, 1);
stacks.push(4, 1);
stacks.push(5, 1);
stacks.push(6, 1);

stacks.push(1, 2);
stacks.push(2, 2);
stacks.push(3, 2);
stacks.push(4, 2);
stacks.push(5, 2);
stacks.push(6, 2);

console.log(stacks.toString(0))
console.log(stacks.toString(1))
console.log(stacks.toString(2))

stacks.pop(2)
stacks.pop(2)
stacks.pop(2)
stacks.pop(2)
stacks.pop(2)
stacks.pop(2)
stacks.pop(2)

console.log(stacks.toString(0))
console.log(stacks.toString(1))
console.log(stacks.toString(2))

stacks.pop(1)
stacks.pop(1)
stacks.pop(1)
stacks.push(7, 1)
stacks.push(8, 1)
stacks.push(9, 1)
stacks.push(10, 1)

console.log(stacks.toString(0))
console.log(stacks.toString(1))
console.log(stacks.toString(2))

stacks.push(0, 0)
stacks.push(6, 0)
stacks.push(8675, 0)

console.log(stacks.toString(0))
console.log(stacks.toString(1))
console.log(stacks.toString(2))




