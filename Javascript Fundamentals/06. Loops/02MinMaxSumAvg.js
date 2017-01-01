function solve(args) {
    var a = args[0] | 0,
        b = args[1] | 0,
        c = args[2] | 0;

    console.log('min=' + Math.min(a, b, c).toFixed(2));
    console.log('max=' + Math.max(a, b, c).toFixed(2));
    console.log('sum=' + (a + b + c).toFixed(2));
    console.log('avg=' + ((a + b + c) / 3).toFixed(2)); 
}