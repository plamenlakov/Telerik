function solve(args) {
	var biggest = args[0] * 1;
	for(var i = 1; i < 3; i++) {
		if(args[i] * 1 > args[i - 1] * 1) {
			biggest = args[i] * 1;
		}
	}
	return(biggest);
}