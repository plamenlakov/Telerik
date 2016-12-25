function solve(args){
    var a = args[0] * 1;
    var b = args[1] * 1;
    var c = Math.sqrt(a * a + b * b);
    if(c <= 2)
        return('yes' + ' ' + c.toFixed(2));
    else
        return('no' + ' ' + c.toFixed(2));
}