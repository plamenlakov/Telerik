function solve(args) {
    var nums = args.map(Number),
        max = nums[0],
        min = nums[0],
        sum = nums[0];
    
    for(var i = 1; i < nums.length; i++) {
        if(nums[i] > max) {
            max = nums[i];
        }
        if(nums[i] < min) {
            min = nums[i];
        }
        sum += nums[i];
    }

    console.log('min=' + min.toFixed(2));
    console.log('max=' + max.toFixed(2));
    console.log('sum=' + sum.toFixed(2));
    console.log('avg=' + (sum / nums.length).toFixed(2)); 
}