function solve(args){
		var x = args[0] * 1;
        var y = args[1] * 1;
        var circleResult;
        var rectangleResult;
		if (Math.sqrt((x - 1)*(x - 1) + (y - 1)*(y - 1)) <= 1.5)
			circleResult = 'inside circle';
		else
			circleResult = 'outside circle';

		if (x >= -1 && x <= 5 && y <= 1 && y >= -1)
			rectangleResult = 'inside rectangle';
		else
			rectangleResult = 'outside rectangle';

        return(circleResult + ' ' + rectangleResult);
}