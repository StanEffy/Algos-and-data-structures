// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

// Examples:

// validAnagram('', '') // true
// validAnagram('aaz', 'zza') // false
// validAnagram('anagram', 'nagaram') // true
// validAnagram("rat","car") // false) // false
// validAnagram('awesome', 'awesom') // false
// validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
// validAnagram('qwerty', 'qeywrt') // true
// validAnagram('texttwisttime', 'timetwisttext') // true
// Note: You may assume the string contains only lowercase alphabets.

// Time Complexity - O(n)

function validAnagram(str1, str2) {
  if (str1.length != str2.length) {
    return false;
  }
  // add whatever parameters you deem necessary - good luck!
  let str_arr_1 = str1.split("");
  let str_arr_2 = str2.split("");

  let obj_1 = {};
  let obj_2 = {};

  str_arr_1.forEach((char) =>
    obj_1[char] ? obj_1[char]++ : (obj_1[char] = 1)
  );
  str_arr_2.forEach((char) =>
    obj_2[char] ? obj_2[char]++ : (obj_2[char] = 1)
  );

  for (let key in obj_1) {
    if (!obj_2[key]) {
      return false;
    }
    if (obj_1[key] !== obj_2[key]) {
      return false;
    }
  }
  return true;
}
