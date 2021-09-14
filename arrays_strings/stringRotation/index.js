// String Rotation:
// Assume you have a method isSubstring which checks if one word is a substring of another. 
// Given two strings, sl and s2, write code to check if s2 is a rotation of sl using 
// only one call to isSubstring (e.g.,"waterbottle" is a rotation of"erbottlewat").


function isSubstring (str1, str2) {
    return str1.includes(str2); // for simplicity, since this is already given to me
}


function stringRotation (s1, s2) {

    // must be same length if rotation
    if (s1.length !== s2.length) return false;

    // a rotation must occur within the space of a word doubled 
    // waterbottlewaterbottle 
    // can contain aterbottlew, terbottlewa, erbottlewat, rbottlewate, bottlewater, etc.
    let doubled = s1.concat(s1);
    
    // the second string must be present in doubled 
    return isSubstring(doubled, s2);
}


module.exports = {
    stringRotation
}

