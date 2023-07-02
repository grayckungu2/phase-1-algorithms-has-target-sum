function hasTargetSum(array, target) {
  // Write your algorithm here
  // Sort the array in ascending order.
  // Initialize two pointers, "left" and "right", pointing to the first and last elements of the array, respectively.
  // While the "left" pointer is less than the "right" pointer, do the following steps:
     //a. Calculate the sum of the elements at the "left" and "right" pointers.
     //b. If the sum is equal to the target, return true.
     //c. If the sum is less than the target, move the "left" pointer one step to the right.
     //d. If the sum is greater than the target, move the "right" pointer one step to the left.
  // If no pair of elements is found with the target sum, return false.
  

}

/* 
  Write the Big O time complexity of your function here
*/
// The time complexity of the given code is O(n), where n is the length of the input array.

//In the code, a set is used to keep track of the numbers encountered so far. 
//The for loop iterates through each number in the array, which takes O(n) time.
//Inside the loop, the code checks if the set already contains the complement of 
//the current number with respect to the target. This check is done using the `set.has()` method, which has an average time complexity of O(1) for a set. T
//herefore, this operation also takes O(1) time.
/* 
  Add your pseudocode here
*/START
//FUNCTIONmultiply(num1, num2)
//SET result = num1 * num2
//RETURN result
//END FUNCTION

//FUNCTION random()
//SET randomNum = generateRandomNumber()
//WHILE randomNum <= 0
  //SET randomNum = generateRandomNumber()
//END WHILE
//RETURN randomNum
//END FUNCTION

//FUNCTION mod(num3, num4)
//SET result = num3 % num4
//RETURN result
//END FUNCTION

//FUNCTION max(numbers)
//SET maxNum = numbers[0]
//FOR i = 1 TO length of numbers
 // IF numbers[i] > maxNum
   // SET maxNum = numbers[i]
  //END IF
//END FOR
//RETURN maxNum
//END FUNCTION

//FUNCTION generateRandomNumber()
//SET randomNum = random number between 1 and 100
//RETURN randomNum
//END FUNCTION

//TEST multiply
//SET num1 = 5
//SET num2 = 62
//SET expected = 62
//SET result = multiply(num1, num2)
//IF result = expected
  //PRINT "Test passed"
//ELSE
  //PRINT "Test failed"
//END IF
//END TEST

//TEST random
S//ET randomNum = random()
//IF randomNum > 0 AND Number.isInteger(randomNum)
  //PRINT "Test passed"
//ELSE
  //PRINT "Test failed"
//END IF
//END TEST

//TEST mod
//SET num3 = 20
//SET num4 = 8
S//ET expected = 4
//SET result = mod(num3, num4)
//IF result = expected
  //PRINT "Test passed"
//ELSE
  //PRINT "Test failed"
//END IF
//END TEST

//TEST max
//SET numbers = [5, 10, 20, 15]
//SET expected = 20
//SET result = max(numbers)
//IF result = expected
 // PRINT "Test passed"
//ELSE
 // PRINT "Test failed"
//END IF
//END TEST
//END


/*
/*

function hasTargetSum(array, target) {
  const set = new Set();
  for (let num of array) {
    if (set.has(target - num)) {
      return true;
    }
    set.add(num);
  }
  return false;
*/

// You can run `node index.js` to view these console logs


function hasTargetSum(arr, target) {
  let complementSet = new Set();
  
  for (let i = 0; i < arr.length; i++) {
    let complement = target - arr[i];
    
    if (complementSet.has(complement)) {
      return true;
    }
    
    complementSet.add(arr[i]);
  }
  
  return false;
}
// You can run `node index.js` to view these console logs
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
