function solve(args) {
    var num = args[0] | 0;
    var arrOne = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
    var arrTwo = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    var arrThree = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    var result = '';

    if(num == 0) {
        result += 'zero';
    }
    else if(((num / 100) % 10) | 0 != 0) {
        result += arrOne[((num / 100) % 10) | 0] + ' hundred ';
        if(num % 100 > 0) {
            result += 'and ';
        }
    }
    num %= 100;
    if(num >= 20 && num <= 99) {
        result += arrThree[((num / 10) | 0) - 2];
        result += ' ' + arrOne[num % 10];
    }
    else if(num >= 11 && num <= 19) {
        result += arrTwo[(num % 10) - 1];
    }else{
        result += arrOne[num];
    }
    console.log(result.charAt(0).toUpperCase() + result.slice(1));
}

