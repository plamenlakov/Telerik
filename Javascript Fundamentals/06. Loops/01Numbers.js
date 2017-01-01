function solve(args) {
    var num  = args[0] | 0;
    var result = '';
    for(var i = 1; i <= num; i++) {
        result += i + ' ';
    }
    console.log(result);
}