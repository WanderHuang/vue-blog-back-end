title: Base 7
date: 2018-03-06 18:00:00
tags: LeetCode Problem - Base 7
category: LeetCode
---
# Question
> Given an integer, return its base 7 string representation.

```
Example 1:
in: 100
out: "202"
```

```
Example 1:
in: -7
out: "-10"
```

Note:

* The input will be in range of [-1e7, 1e7].




# Solution

```javascript
/**
 * Base 7
 * @author wander
 */

 /**
  * @param {number} num
  * @return {string}
  */
 var convertToBase7 = function(num) {
     var trueNum = Number(num);
     // if string numbers (es6: isNaN)
     if(Number.isNaN(trueNum)) {
         return '';
     }
     // recursion
     if(num < 0) return '-'+ convertToBase7(-num);
     if(num < 7) return '' + num;
     return convertToBase7(Math.floor(num / 7)) * 10 + num % 7 + '';
 };

 /**
  *
  *  console.log(typeof convertToBase7(100));
  *  console.log(convertToBase7(100));
  *  console.log(typeof convertToBase7(-7));
  *  console.log(convertToBase7(-7));
  *  console.log(typeof convertToBase7('aaa1111'));
  *  console.log(convertToBase7('aaa1111'));
  */


```
