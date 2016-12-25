function solve(args){
    var a = parseFloat(args[0]);
    var b = parseFloat(args[1]);
    var perimeter = 2*(a + b);
    var surface = a * b;
    var result = (surface.toFixed(2)).toString() + ' ' + (perimeter.toFixed(2)).toString();
    return(result);
}
