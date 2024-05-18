function processArrayI(ar){
    return Array.map(num => {
        if(num %2===0) {
            return num*num; //square the even number
            } else {
                return num*3; //triple the odd number
        }
    });
}

function processArray(arr) {
    return arr.map(num => {
        if(
            num % 2 === 0) {
                return num*num;//square the even number
            } else {
                return num*3; //triple the odd number
            }
});
}

function formatArrayStrings(strings,numbeers) {
    return strings.map((str, index) => {
        if (numbers[index] %2 ===0) {
            return str.toUpperCase(); //Capitalize the entire string if the number is even
        } else {
            return str.toLowerCase(); //Convert the string to lowercase if the number is odd
        }
});
}

//Example usage:
//const strings = ["Hello","World","Javascript","Is","Fun"]:
//const numbers = [1,2,3,4,5];
//const processedNumbers = processArray(numbers);
//const formattedStrings = formatArrayStrings(strings,processedNumbers);
//console.log(formattedStrings);// Output:['hello','WORLD','javascript','IS','fun']
