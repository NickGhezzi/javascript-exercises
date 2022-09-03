const sumAll = function(start, end) {
    //const nums = [];
    let sum = 0;
    const range = Math.abs(end - start);
    for(let i = 0; i <= range; i++){
        sum += Math.abs(end - (range - i));
        //console.log(sum);
    }

    // for(let num of nums){
    //     sum += num;
    // }
    return sum;

    //nums[i] = Math.abs(end - (range - i));
};

// Do not edit below this line
module.exports = sumAll;
