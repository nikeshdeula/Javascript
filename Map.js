// Map in Javascript

// let Cars = ["volvo", "Lambourgini", "Bugati", "Ford" ];

// let num = [1, 5, 10, 20, 30];

// let newArray = num.map((currValue, index, array) => {
// return (`its value is ${currValue} its index ${index} ${array}`);
// });
// console.log(newArray);


//Map method is used

// let num = [4, 9, 25, 36, 100];

// let newArray = num.map((currValue, index, array) => {
//     return (Math.sqrt(currValue));
// })

// console.log(newArray);



//used map method with the combination of filter & Reduce 
//reduce() method use Accumulator

// methods gets the value of

//currValue
//index
//array

let mult = [4, 9, 25, 36];

let newArray = mult.map((currValue, index, array) => {
return (currValue * 2);
}).filter((currValue, index, array) => {
    return (currValue > 9);
}).reduce((Accumulator, currValue) => {
return (Accumulator * currValue);
})
console.log(newArray);










