function solve(args) {
    var N = args[0] | 0;
    for(var i = 1; i <= N; i++){
        var num = i;
        var result = '';
        for(var j = 1; j <= N; j++){
            result += num++ + ' '; 
        }
        console.log(result);
    }
}