function solve(args) {
    var num = args[0] * 1;
    var result = true;
    for(var i = 2; i < num; i++) {
        if(num % i == 0) {
            result = false;
        }
    }
    if(num < 2) {
        result = false;
    }
    return(result);
}