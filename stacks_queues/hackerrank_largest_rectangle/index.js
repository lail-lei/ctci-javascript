/*
 * Complete the 'largestRectangle' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts INTEGER_ARRAY h as parameter.
 */

function largestRectangle(h) {
    
    let curPos; // position of current building
    let curHeight; // height of current building
    let maxSize = Number.MIN_VALUE; // largest possible rectangle
    let hStack = [], pStack = [];
    
    let tempHeight, tempPos; // height and starting position of a closed rectangle
    
    
    function processFoundRectangle(){
        
        tempHeight = hStack.pop(); 
        tempPos = pStack.pop(); 
        let size = tempHeight * (curPos - tempPos); // the length of the rectangle found by taking nunber of buildings between starting position and current position (parent function scope)
        
        maxSize = Math.max(maxSize, size); 
        
    }
    
    // let's iterate over every building
    for (curPos = 0; curPos < h.length; curPos++){
        
        curHeight = h[curPos]; // current building
        
        if(hStack.length === 0  // if height stack is empty or
           || curHeight >  hStack[hStack.length -1]) // the current height is greater than the top of the hStack 
           {
               // With these conditions, we are starting a new rectangle and/or continuing an existing one 
               
               hStack.push(curHeight); // can add height to stack
               pStack.push(curPos) // can add position to stack   
           }
         // if the current height is less than previous rectangle
         // we've reached the end of the previous rectanlge 
         // (hit right edge)  
         else if (curHeight < hStack[hStack.length-1]){
             
             // while the current height is less than 
             // the top of the stack, process and pop all 
             // rectangles closed by the right edge
             while(hStack.length && curHeight < hStack[hStack.length-1]) processFoundRectangle();
             
             // now, add the new rectangle's height and starting position
             hStack.push(curHeight); 
             pStack.push(tempPos);
           
         }   
    }
    
    // reached end of block, close and process all open rectangles
    while(hStack.length) processFoundRectangle();
    
    return maxSize;
 
 }