function solve(args){
    var num = Math.floor((args[0] | 0) / 100);
    var result = '';
    if(num == 7)
        result = 'true';
    else
        result = 'false' + ' ' + num.toString();
    return(result);
}