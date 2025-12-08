var str1="hello";
var str2="heoll";

function anagramstr(str1,str2){
    return str1.split('').sort().join('')==str2.split('').sort().join('')
}

console.log(anagramstr(str1,str2))



var name="shussbhampatil"

function charoccur(name){
    var freq={}

    for(var char of name){
        freq[char]=freq[char] ? freq[char]+1 : 1
    }
   return freq
    
}

console.log(charoccur(name))




function firstUniqueChar(str) {
  const freq = {};
  for (let ch of str) freq[ch] = (freq[ch] || 0) + 1;
  for (let ch of str) if (freq[ch] === 1) return ch;
  return null;
}

console.log(firstUniqueChar("swiss"));


function removeDuplicates(str) {
  let result = "";
  let seen = {};

  for (let char of str) {
    if (!seen[char]) {
      seen[char] = true;
      result += char;
    }
  }

  return result;
}

console.log(removeDuplicates("programming")); 