/**
 * Mark and Jane are very happy after having their first child.
 * Their son loves toys, so Mark wants to buy some. 
 * There are a number of different toys lying in front of him, 
 * tagged with their prices. Mark has only a certain amount to spend, 
 * and he wants to maximize the number of toys he buys with this money. 
 * Given a list of toy prices and an amount to spend, determine the 
 * maximum number of gifts he can buy
 */

function maximumToys(prices, k) {
    // sort the array
    prices.sort((a, b) => {return a - b});
    
    //variables to hold the spend and count
    let spent = 0; // how much they've spent spending
    let count = 0; // number of toys 
     
     // iterate over each toy
    for(let i = 0; i < prices.length; i++){
        spent+= prices[count]; 
        if(spent > k) break; // if over budget, quit loop
        count++; // only increment count if we can buy the toy
    }
    // return number of toys purchased
    return count;

}