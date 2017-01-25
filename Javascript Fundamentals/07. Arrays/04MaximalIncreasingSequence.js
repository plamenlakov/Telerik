function solve(args) {
    var nums = args.map(Number),
        max = 1,
        cmax = 1;
        
    for(var i = 1; i < nums.length; i++) {
        if(nums[i] > nums[i - 1]) {
            cmax++;
        } else {
            cmax = 1;
        }
        if(cmax > max) {
            max = cmax;
        }
    }
    console.log(max);
}