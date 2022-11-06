const number = [3, 4, 5, 6, 7];
const output = [];
for(let i = 0; i < number.length; i++){
    const element = number[i];
    const result = element * element;
    output.push(result);
}
console.log(output);

function square(element){
    return element * element;
}
const result = number.map(function(element){
    return element * element;
})
console.log(result);

const isThere = number.find( x => x < 5);
console.log(isThere);

const number1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result1 = [];
for(let i = 0; i < number1.length; i++){
    const element = number1[i];
    const result = element * element;
    result1.push(result);
}
console.log(result1);

function square(element){
    return element * element;
}
const result2 = number.map(function(element){
    return element * element;
})
console.log(result2);

const number2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const square2 = element => element * element;
const result3 = number2.map(element => element * element);
console.log(result3);

const evenNumber = a => a + a;
const newNumber = number2.map(a => a + a);
console.log(newNumber);