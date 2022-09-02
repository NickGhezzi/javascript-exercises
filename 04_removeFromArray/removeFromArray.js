const removeFromArray = function(array, ...badArgs) {
    
    for(let i = 0; i < badArgs.length; i++){
        for(let j = 0; j < array.length; j++){
            if(array[j] === badArgs[i]){
                array.splice(j, 1);
            }
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
