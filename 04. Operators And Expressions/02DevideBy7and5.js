function solve(args){
    var num = args[0] | 0;
    var result = '';
    if(num % 7 == 0 && num % 5 == 0)
        result = 'true';
    else
        result = 'false';
    result += ' ' + num;
    return(result);
}