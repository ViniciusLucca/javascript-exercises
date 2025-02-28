const removeFromArray = function(_array) {
    let a_length = arguments.length;
    let result = [];
    startloop : for (let i = 0; i < _array.length; i++){
        for (let j = 1; j < a_length; j++)
        {
            if(_array[i] === arguments[j]){
                continue startloop;
            }
        }
        result.push(_array[i]);
    }
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
