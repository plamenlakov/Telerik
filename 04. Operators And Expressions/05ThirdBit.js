function solve(args) {
    var num = args[0] | 0;
    var result = ((num >> 3) & 1) == 0 ? '0' : '1';
    return(result);
}