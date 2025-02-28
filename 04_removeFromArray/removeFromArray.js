const removeFromArray = function(_array) {
    a_length = arguments.length;
    for (let i = 0; i < _array.length; i++){
        for (let j = 1; j < a_length; j++)
        {
            if(_array[i] === arguments[j]){
                _array.splice(_array[i - 1], 1);
                i = i - 1;
            }
        }
    }
    return _array;
};

// Do not edit below this line
module.exports = removeFromArray;
// sou lindo
