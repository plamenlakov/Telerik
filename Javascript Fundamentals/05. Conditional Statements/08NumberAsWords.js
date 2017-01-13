function solve(args) {
	var num = args[0] | 0;
	var result = '';


	var arrOne = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
	var arrTwo = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
	var arrThree = ['twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

	if(num == 0) {
		return('Zero');
	}
	else if(num <= 9) {
		result += arrOne[num];
	}
	console.log(result);
}

solve(['100']);
