/**
 * Stack of Plates: Imagine a (literal) stack of plates. If the stack gets too high,
 * it might topple. Therefore, in real life, we would likely start a new stack 
 * when the previous stack exceeds some threshold. 
 * Implement a data structure SetOfStacks that mimics this. SetOfStacks should be
 * composed of several stacks and should create a new stack once the previous one 
 * exceeds capacity. SetOfStacks.push() and SetOfStacks.pop() should behave 
 * identically to a single stack (that is, pop() should return the same 
 * values as it would if there were just a single stack).
 * 
 */

const THRESHOLD = 3;

 function SetOfStacks () {

    this.plates = -1;
    this.stacks = -1;
    this.set = new Array();

    this.push = (data) => {

        this.plates+=1;
        if(this.plates % THRESHOLD === 0) 
        {
            this.stacks++;
            this.set.push([data]);
        }
        else {
            this.set[this.stacks].push(data);
        }
    }

    this.pop = () => {

        if(this.set[this.stacks].length > 0) return this.set[this.stacks].pop();

        else{
            this.stacks--;
            return this.set[this.stacks].pop();
        }
    }

    this.popAt = (index) => { 
        
        // if it's ok to leave at less than full capacity
        // better time efficency to just return this.set[index].pop();

        // removing from last stack
        if(index === this.set.length-1) return this.set[index].pop();

    
        let popped = this.set[index].pop(); // remove the item;

        while(index < this.set.length-1) {
                
                let shifted = this.set[index+1].shift();
                this.set[index].push( shifted);
                index++;
        }
        
        return popped;
   
    }

 } 

 let pancakes = new SetOfStacks();

pancakes.push(1);
pancakes.push(2);
pancakes.push(3);
pancakes.push(4);
pancakes.push(5);
pancakes.push(6);
pancakes.push(7);
pancakes.push(8);
pancakes.push(9);
pancakes.push(10);

console.log(pancakes.set)


console.log(pancakes.popAt(2)) // 9
console.log(pancakes.pop()) // 10
console.log(pancakes.pop()) // 8
console.log(pancakes.pop()) // 7
console.log(pancakes.pop()) // 6
console.log(pancakes.pop()) // 4
console.log(pancakes.pop()) // 5
console.log(pancakes.pop()) // 3
console.log(pancakes.pop()) // 2
console.log(pancakes.pop()) // 1