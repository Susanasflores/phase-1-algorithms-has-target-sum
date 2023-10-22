function hasTargetSum(array, target) {
  // Write your algorithm here
//sort the array from smallest to largest to make it easier
// to iterate through the integers.   
//set up 2 pointers, one for beginning or array one for
//end of array.
//set up a while loop where- if left is smaller than 
//the right, we will continue iterating through the array
//pointers on both sides.
//establish a variable that adds the left and right side
//of the array.
//if the sum = target, return true.  if sum is too small, increase pointer on the left.  if sum is too large, decrease the pointer on the right.  if the sum does not return equal to target, return false.
array.sort((a, b) => a - b);

let left = 0;
let right = array.length - 1;

while(left < right){
  const sum = array[left] + array[right];
  if (sum === target){
    return true;
  } else if(sum < target) {
    left++;
  } else{
    right--;
  }
}
return false; 
}
/* 
  Write the Big O time complexity of your function here
/* 
This has a time complexity of O(nlog(n)) in the sorting step of the array 
& in the worst case, O(n) for the while loop.  Since the
sorting step dominates the time complexity, overall 
this is a O(log (n)) function.  Organizing the array in order prior to iterating is important to time complexity.  


  Add your pseudocode here
*/
//use a sorting method for the array in accending order
//extablish pointers on both sides of the array
//use a while loop where if one side is smaller than the right, keep iterating and moving the pointers in opposite dirrection toward each other
//etablish a variable that  equals addition of left side of array and right side of array
//use an if statement to look for sum being equal to target.  return true if so.
//if not establish moving the pointer to the right if sum is too small
//if sum is too large, establish moving the pointer to the left
//return false if the target sum is not found in the array
/*
  Add written explanation of your solution here
*/
//sorting the array in accending order is a good first step in time complexity and optimizing the code.
//iteration will stop if the integers in the array are larger than the target.
//a while loop iterates through the loop.  It's time complexity is O(n), so this would be a con 
//in the function.  But the strength of it lies mainly on the sorting of the array prior to the search.
//All in all, there is some optimizing pros and cons to this funciton, mainly lead by O(log (n)) complexity approach.

if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
