const sumAll = function(num1,  num2, ...args) {
    let result = 0;
    if (num1 > num2) [num1, num2] = [num2, num1];
    for (let i in [num1, num2]){
        if ([num1, num2][i] < 0 ||
            [num1, num2][i] !== +([num1, num2][i]) ||
            [num1, num2][i] % 1 != 0
        )
        {
            return 'ERROR';
        }
    }
    for (num2; num2 >= num1; num2--){
        result += num2;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
