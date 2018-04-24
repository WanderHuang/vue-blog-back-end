title: Partition Equal Subset Sum
date: 2018-03-06 18:00:00
tags: LeetCode Problem - Partition Equal Subset Sum
category: LeetCode
---

# Question
> Given a *non-empty* array containing <strong>only positive integers</strong>, find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal.

```
Example 1:
Input: [1, 5, 11, 5]

Output: true

Explanation: The array can be partitioned as [1, 5, 5] and [11].
```

```
Example 2:
Input: [1, 2, 3, 5]

Output: false

Explanation: The array cannot be partitioned into equal sum subsets.
```

# Solution

```javascript
/**
 * Partition Equal Subset Sum
 * @author wander
 */

 /**
  * @param {number[]} nums
  * @return {boolean}
  */
 var canPartition = function(nums) {
     var total = 0;
     var len = nums.length;
     // calc total
     for(var i = 0; i < len; i++) {
         total += nums[i];
     }

     // total is odd
     if(total % 2 !== 0) return false;
     total = Math.floor(total / 2);

     // use dynamic programming to calc if there is one array that sum is tatal/2
     var store = [];
     for(i = 0; i < len; i++) {

         var temp = new Array(total + 1);
         for(var t = 0; t<= total; t++){
             temp[t] = 0;
         }
         store.push(temp);
     }

     for(i = nums[0]; i <= total; i++) {
         store[0][i] = nums[0]; // empty array
     }

     /**
      * dynamic programming:
      * j : current count. sub-array's length.
      * k : current value. sum of sub-array.
      */
     for(var j = 1; j < len; j++) {
         for(var k = nums[j]; k <= total; k++) {
             //decide if current number(nums[j]) will be added to sub-array
             store[j][k] = Math.max(store[j - 1][k], store[j - 1][k - nums[j]] + nums[j]);
         }
     }

     //now, store has a relationship between number count and value
     //if the largest value is equals to total/2, seems that there is sub-array whose sum is equals to total/2

     if(store[len - 1][total] == total) return true;
     else return false;


 };

 // console.log(canPartition([1, 2, 3, 5]));
 // console.log(canPartition([1, 5, 11, 5]));


```



# Solution(Better Code)

> I think this solution is better than mine. And performance is better too.

```javascript
/**
 * Partition Equal Subset Sum
 * @author unknown
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    const sum = nums.reduce((sum, i) => sum+i);

    if ((sum % 2) > 0) {
        return false;
    }
    const target = sum/2;

    function backTracking(arr, n) {
        if(arr.length < 1) {
            return false;
        }
        const len = arr.length;
        for(let i=0; i < len; i++) {
            if (arr[i] === n) {
                return true;
            }
            if (arr[i] > n) {
                return false;
            }
            if (backTracking(arr.slice(0, i).concat(arr.slice(i+1, len)), n - arr[i])) {
                return true;
            }
        }
        return false;
    }

    return backTracking(nums.sort((a,b) => a < b), target);
};

```
