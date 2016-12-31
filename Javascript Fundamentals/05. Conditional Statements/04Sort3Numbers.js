function solve(args) {
	var a = +args[0];
	var b = +args[1];
	var c = +args[2];
	var result = '';
	
	if(a > b && a > c) {
		result += a + ' ';
			if(b > c) {
				result += b + ' ' + c;
			} else {
				result += c + ' ' + b;
			}
	}
	
	else if(b > a && b > c) {
		result += b + ' ';
			if(a > c) {
				result += a + ' ' + c;
			} else {
				result += c + ' ' + a;
			}
	} else {
		result += c + ' ';
			if(a > b) {
				result += a + ' ' + b;
			} else {
				result += b + ' ' + a;
			}
	}
	return(result);
}

