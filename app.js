//1)
//დაწერეთ პატარა ბიოგრაფია თქვენს შესახებ და მაქსიმალურად ჩაშალეთ ცვლადებად და console-ში უნდა მივიღო სრული ტექსტი
//მაგალითად უნდა შეიცავდეს ინფორმაციას(firstName, lastName, age, job, skills,address) გამოიყენეთ template literal მიდგომა

//answer:

let firstName = "Irakli";
let secondName = "Mamulashvili";
let age = 20;
let job = "ünemployed";
let skills = "all"; 
let address = "heaven";

let user = `Hello my name is ${firstName} and my secon name is "${secondName}. I'm ${age} years old and am temporarly ${job}. 
I have ${skills} the skills in this world and my living place is ${address}`;

console.log(user);

//2)
//დაწერეთ პროგრამა, რომელიც იყენებს ლოგიკურ ოპერატორებს (&&, ||, ! ===)
//იმის დასადგენად, არის თუ არა მოცემული წელი 2023 ან უკვე 2024; რამენაირად გამოთვალეთ და დაწერეთ ლოგიკა
// ყველა ინფივიდულაურად დაწერეს წესით!!

//answer:

let lastYear = 2023;
let thisYear = 2024;

let firstBoolean = lastYear > thisYear || lastYear < thisYear;
let secondBoolean = !(lastYear === thisYear);
let thirdBoolean = lastYear > thisYear && lastYear < thisYear;

console.log(firstBoolean);
console.log(secondBoolean);
console.log(thirdBoolean);

//3)ააწყვეთ პატარა counter ლოგიკა სადაც გამოიყენებთ მაგალითად let x = 10; x++, x-- რომლის მიხედვითაც increment ერთ
// console-ში მეორე console-ში კი decrement!!

// answer:

let num = 100;
num++; 
console.log(num);
num = num -30;
console.log(num);


//4)
// let a = 10;
// let b = 12;
//
// let andOperator = a < 9 && b >= 11; //result --> : false
// let orOperator = a > 11 0 || b < 10; //result --> :  false 
// let notOperator = !(a > 10); //result --> : true






