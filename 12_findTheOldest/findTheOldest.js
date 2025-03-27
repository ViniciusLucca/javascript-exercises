const findTheOldest = function(peopleObj) {
    console.log(peopleObj);
    let oldest = 0;
    let personObj;
    let currentYear = new Date().getFullYear();
    peopleObj.forEach(p => {
        let age = (p['yearOfDeath'] ? p['yearOfDeath'] : currentYear) - p['yearOfBirth'];
        if (age > oldest){
            oldest = age;
            console.log(age);
        }
    });

    peopleObj.forEach(p => {
        let age = (p['yearOfDeath'] ? p['yearOfDeath'] : currentYear) - p['yearOfBirth'];
        if(age == oldest){
            console.log("p: ", p);
            personObj = p;
        }
    })

    return personObj;
};

// Do not edit below this line
module.exports = findTheOldest;
