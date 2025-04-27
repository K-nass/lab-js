function sum(x, y = 2) {
    if(isNaN(x) || isNaN(y)) {
        console.log("enter valid numbers");
        return;
    };
    return x + y
}

console.log(printVariables(1000, 1500, 2000)); //undefined


function printVariables(value1, value2, value3 = 7) {
    if (value3 == undefined) {
        return arguments;
    }
    return [value1, value2, value3];
}

// let res = printVariables(900,1000,1100);
// console.log(res[0]);//900

let res2 = printVariables(3, 5);
console.log("this res2", res2);


//e- What if you call the function with too many parameters ?
// (more than 3)
// nothing  happened because in js extra parameters will be ignored


function testLocal() {
    var local = 3;
    var testingVar = 5;
    return [local, testingVar]
}

// console.log(local); //ReferenceError:
// console.log(testingVar); //ReferenceError:

console.log(testLocal()[0]);//3
console.log(testLocal()[1]);//5



const expPrintVariables = function () {
    if (value3 == undefined) {
        return arguments;
    }
    return [value1, value2, value3];
}




