/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
  let result = ""
  let ptr1 = 0;
  let ptr2 = 0;
    while(ptr1 < word1.length && ptr2 < word2.length){
      result += word1.charAt(ptr1) + word2.charAt(ptr2)
      ptr1++
      ptr2++
    }

    if(ptr1 < word1.length){
      result += word1.substring(ptr1)
    }
    if(ptr2 < word2.length){
      result += word2.substring(ptr2)
    }
    return result
};