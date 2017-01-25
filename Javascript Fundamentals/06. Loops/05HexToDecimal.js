function solve (args) {
    var num = args[0];
    var result = 0;
    //reverse the string
    num = num.split('').reverse().join('');

    for(var i = 0; i < num.length; i++){
        var char = num.charAt(i);
        if(isNaN(char)){
            result += Math.pow(16, i) * (char.charCodeAt(0) - 'A'.charCodeAt(0) + 10);
        }else{
            result += Math.pow(16, i) * (char | 0);
        }
    }
    console.log(result);
}