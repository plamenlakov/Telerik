function solve(args) {
    var a = args[0] | 0;
    var b = args[1] | 0;
    var c;
    if(a > b) {
        c = a;
        a = b;
        b = c;
    }
    return(a + ' ' + b);
}