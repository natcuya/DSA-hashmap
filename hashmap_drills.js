let HashMap = require('./HashMap');
const { sepChain } = require('./sepChain');

  MAX_LOAD_RATIO = 0.5;
  SIZE_RATIO = 3;

function main(){
  let lotr = new HashMap();
    lotr.set('Hobbit', 'Bilbo');
    lotr.set('Hobbit', 'Frodo');
    lotr.set('Wizard', 'Gandolf');
    lotr.set('Human', 'Aragon');
    lotr.set('Elf', 'Legolas');
    lotr.set('Maiar', 'The Necromancer');
    lotr.set('Maiar', 'Sauron');
    lotr.set('RingBearer', 'Gollum');
    lotr.set('LadyOfLight', 'Galadriel');
    lotr.set('HalfElven', 'Arwen');
    lotr.set('Ent', 'Treebeard');
    console.log(lotr);
    console.log(lotr.get("Maiar"));
    console.log(lotr.get("Hobbit"));
//What are the values of Maiar and Hobbit that you have? Is there a discrepancy? Explain your answer.
//Sauron - Frodo
//What is the capacity of your hash table after you have hashed all the above items? Explain your answer.
// 8 bc of doubles and initial capacity didnt change

//*2 whatthisdo */
// makes 2 hashmaps
//// this function is creating a collision, therefore duplicate keys will overwrite previous data values
//map1.get(str1) will have 20
//map2.get(str2) will have 10
const WhatDoesThisDo = function(){
    let str1 = 'Hello World.';
    let str2 = 'Hello World.';
    let map1 = new HashMap();
    map1.set(str1,10);
    map1.set(str2,20);
    let map2 = new HashMap();
    let str3 = str1;
    let str4 = str2;
    map2.set(str3,20);
    map2.set(str4,10);

    console.log(map1.get(str1));
    console.log(map2.get(str3));
}
WhatDoesThisDo();
//4 Remove Duplicates:
//a function to delete all duplicated characters in a string and keep only the first occurrence of each character. 
//For example, if the input is string “google”, the result after deletion is “gole”
function removeDuplicates(string) {
    const map = new Map();
    let newStr = '';
    string.split('').forEach(letter => {
        if (!map.has(letter)) {
            map.set(letter, '');
            newStr += letter;
        }
    });
    return newStr;
}

console.log(removeDuplicates('google')); // gole
console.log(removeDuplicates('google all that you think can think of'));
//5 Palindrome write an algorithm to check whether any anagram of some string is a palindrome. Given some string, "acecarr", the algorithm should return true
function palindrome(string) {
    const result = new Map();
    for (let i = 0; i < string.length; i++) {
        //console.log(result);
        if (!result.delete(string[i])) {
            result.set(string[i], 1);
        }
    }
   console.log(result.size, result);
    if (result.size <= 1) {
        return true;
    } return false;
}

console.log(palindrome('acecarr')) // true;
console.log(palindrome('north')) // false;
}
main();

// = Separate Chaining =
//Write another hash map implementation as above, but use separate chaining as the collision resolution mechanism.
//Test your hash map with the same values from the lor hash map.
sepChain.MAX_LOAD_RATIO = 0.5;
sepChain.SIZE_RATIO = 3;

function sepMain() {
    const lotr = new sepChain;
    const data = [{ 'Hobbit': 'Bilbo' }, { 'Hobbit': 'Frodo' },
    { 'Wizard': 'Gandolf' }, { 'Human': 'Aragon' }, { 'Elf': 'Legolas' }, { 'Maiar': 'The Necromancer' },
    { 'Maiar': 'Sauron' }, { 'RingBearer': 'Gollum' }, { 'LadyOfLight': 'Galadriel' }, { 'HalfElven': 'Arwen' },
    { 'Ent': 'Treebeard' }];
    data.forEach(obj => {
        const key = Object.keys(obj)[0];
        lotr.set(key, obj[key]);
    });
    console.log(lotr);
}

sepMain();