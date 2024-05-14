// practice of if else

// let marks=prompt("Enter your marks");
// let grade;

// if(marks>=80 && marks<=100){
//     grade="A";
// }else if (marks>=70 && marks<=89){
//     grade="B";
// }else if (marks>=60 && marks<=69){
//     grade="C";
// }else if (marks>=50 && marks<=59){
//     grade="D";
// }else if (marks>=0 && marks<=49){
//     grade="F";
// }

// console.log("According to your marks your grade was :",grade)

// practice of loops
// for(i=0; i<=100; i++){
//     if(i%2!==0){
//         console.log(i)
//     }
// }

// let number=25;
// let guess=prompt("Enter your Number");
// while(guess!=number){
//     user= prompt("Enter correct number!");
// }
// console.log("Congratulation you won!");

// practice of strings

// let userName=prompt("Enter your Name");
// let userDetail= userName;
// let passName = "@" + userDetail + userDetail.length;
// console.log(passName)

// practice of arrays

// question no 1

// let studentMarks = [85,97,44,37,76,60,56,85,25,47];
//  let sum=0;
//  for (let i=0; i<studentMarks.length; i++){
//     sum += studentMarks[i];
//  }
//  console.log(sum)

// let average = sum / studentMarks.length;
//  console.log(`your average marks is ${average}`)

// question no 2

// let items = [665,885,1025,654,999,599,449];
// for(let i=0; i<items.length; i++){
//     let offer = items[i]/10 ;
//     let discountOffer = items[i] - offer;
//     console.log(`my  final offer is = ${discountOffer}`)
// }

// practice arrays methods

// let campanies= ["bloomberg","microsoft","uber","Google","IBM","Netflix"]

// let remove =campanies.splice(2,1,"Ola")
// console.log(remove)
// let add = campanies.push("Amazone")
// console.log(add)
// console.log(campanies)

// practice of function in js 

// arrow function

// const multiply = (a,b) =>{ 
//     console.log (a*b)
// };

// practice question 1

// function countvowel(str){
//     let count =0;
//     for (const char of  str){
//     if (char ==="a"|| char ==="e"|| char ==="i" || char ==="o"|| char ==="u"){
//         count++
//     }
// }
// return count;
// }

// const arrowFunction = (str) => {
//     let count = 0;
//     for (const val of str) {
//         if (val === "a" || val === "e" || val === "i" || val === "o" || val === "u") {
//             count++;
//         }
//     }
//     return count;

// }

// practice question no 2

// let psl_teams = ["karachi kings", "lahore laqandar", "islamabad united", "quetta gladiators", "peshawar zalmi", "multan sultan"];
// psl_teams.forEach((element,idx)=> {
//     console.log(element.toUpperCase(),idx, psl_teams)
// });

// question no 3

// let num =[28,55,97,61,25,99,91,95];
// let newMarks=num.filter((val)=>{
//     return val>90;
// });

//  console.log(newMarks)

// qustion no 4

let n = prompt("enter your number :")
let arr =[];
for(let i=1; i<=n; i++){
    arr[i-1]=i;
}
let newSum=arr.reduce((prev , curr)=>{
    return prev + curr;
})
console.log(newSum)

let factorial =arr.reduce((res,curr)=>{
    return res*curr;
})
console.log(factorial)