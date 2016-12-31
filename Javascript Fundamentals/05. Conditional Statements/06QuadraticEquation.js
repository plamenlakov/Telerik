function solve(args) {
	var a = +args[0];
	var b = +args[1];
	var c = +args[2];
	var D = b * b - 4 * a * c;

	if(D < 0) {
		return('no real roots');
	} else {
		var xOne = (-b - Math.sqrt(D)) / (2 * a);
		var xTwo = (-b + Math.sqrt(D)) / (2 * a);
		if(xOne === xTwo) {
			return('x1=x2=' + xOne.toFixed(2));
		} else {
			return('x1=' + xOne.toFixed(2) + ';' + ' ' + 'x2=' + xTwo.toFixed(2));
		}
	}
}
