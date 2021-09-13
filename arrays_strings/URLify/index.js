/**
 * URLify: Write a method to replace all spaces in a string with '%20'.
 * You may assume that the string has sufficient space at the end to hold the additional characters,
 * and that you are given the "true" length of the string. 
 * (Note: If implementing in Java,please use a character array so that you can perform this operation in place.)
 **/

// Time = O(n) if linear search
function URLify (s){
    return s.replace(/ /g, "%20");
} 


// functional programing style, no side effects
function URLifyFunctional(s){
    let copy = "";
    for(let i = 0; i< s.length; i++){
        if(s.charAt(i) === " " ) copy+= "%20";
        else copy+= s.charAt(i)
    } 
    return copy;
}

module.exports= {
    URLify,
    URLifyFunctional
}