/* Task Description */
/* 
	Write a function that sums an array of numbers:
		numbers must be always of type Number
		returns `null` if the array is empty
		throws Error if the parameter is not passed (undefined)
		throws if any of the elements is not convertible to Number	

*/


function solve() {
	return function sum(arr) {
		var nums = arr.map(Number);
		var result = 0;
		if(arr === undefined){
			throw 'Error';
		}
		else if(nums.length == 0){
			return null;
		}
		for(let i = 0; i < nums.length; i += 1) {
			if(isNaN(nums[i])) {
				throw 'Error';
			}
			result += nums[i];
		}
		return result;
	}
}

module.exports = solve;
