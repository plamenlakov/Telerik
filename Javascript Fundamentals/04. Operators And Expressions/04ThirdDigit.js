function solve(args){
    var num = Math.floor((args[0] | 0) / 100) | 0;
    var thirdDigit = num % 10;
    var result = '';
    if(thirdDigit == 7)
        result = 'true';
    else
        result = 'false' + ' ' + thirdDigit.toString();
    return(result);
}