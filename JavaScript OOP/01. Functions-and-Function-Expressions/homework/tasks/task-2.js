/* Task description */
/*
	Write a function that finds all the prime numbers in a range
		1) it should return the prime numbers in an array
		2) it must throw an Error if any on the range params is not convertible to `Number`
		3) it must throw an Error if any of the range params is missing
*/

function solve() {
	function isPrime(value) {
		if(value < 2) {
			return true;
		}
		for(let i = 2; i < value; i += 1) {
			if(value % i === 0) {
				return false;
			}
		}
		return true;
	}
	return function findPrimes() {
		var x = arguments[0];
		var y = arguments[1];
		var primes = [];
		if(isNaN(x) || isNaN(y) || x === undefined || y === undefined) {
			throw 'Error';
		}
		for(let i = x; i <= y; x += 1) {
			if(isPrime(i)) {
				primes.push(i);
			}
		}
	}
}

module.exports = solve;
