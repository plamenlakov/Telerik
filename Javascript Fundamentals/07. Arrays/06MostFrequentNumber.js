function solve(args) {
    var nums = args.map(Number);
    var num = 0;
    var maxfreq = 0;

    for(var i = 0; i < nums.length; i++) {
        var currnum = nums[i];
        var currfreq = 0;
        for(var j = 0; j < nums.length; j++) {
            if(currnum == nums[j]) {
                currfreq++;
            }
        }
        if(currfreq > maxfreq) {
            maxfreq = currfreq;
            num = currnum;
        }
    }

    console.log(num + ' (' + maxfreq + ' times)')
}