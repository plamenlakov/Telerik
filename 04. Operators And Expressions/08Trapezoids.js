function solve(args) {
    var a = args[0] * 1;
    var b = args[1] * 1;
    var h = args[2] * 1;
    var result = ((a + b) / 2) * h;
    console.log(result.toFixed(7));
}
solve(['8.5', '4.3', '2.7']);