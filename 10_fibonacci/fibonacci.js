const fibonacci = function(num) {
    num = +num;
    if(num < 0 || num == NaN) return "OOPS";
    if(num == 0) return 0;
    if(num < 3) return 1;
    
    let fiboArray = [0, 1, 1];
    let result = 0;
    for (let i = 0; i < num - 1; i++)
    {
        fiboArray[2] = fiboArray[1] + fiboArray[0];
        fiboArray[0] = fiboArray[1];
        fiboArray[1] = fiboArray[2];
    }
    return fiboArray[2];

};

// Do not edit below this line
module.exports = fibonacci;
