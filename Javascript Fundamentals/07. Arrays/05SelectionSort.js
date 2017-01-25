
function solve(args) {
    var nums = args.map(Number),
        len = nums.length,
        min;
    
    for(var i = 0; i < len; i++) {
        min = i;
        for(var j = i + 1; j < len; j++) {
            if(nums[j] < nums[min]){ 
                min = j; //if there is a smaller get its position
            }
        }
        if(i != min) { //if possitions are different swap
            var temp = nums[i];
            nums[i] = nums[min];
            nums[min] = temp;
        }
    }
    console.log(nums[0]);
    for(var k = 1; k < len; k++) {
        if(nums[k] == nums[k - 1]) {
            continue;
        }
        console.log(nums[k]);
    }
}