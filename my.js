//1.	ფუნქციის საშულებით გამოიტანეთ ყველა რიცხვის ჯამი: არგუმენტად გადაეცით ეს მასივი:
//10, 50, 6, 7, 8, 11, 6, 3, 9

function newArr(arr1) {
  let sum1 = arr1[0];
  for (let x = 0; x < arr1.length; x++) {
    sum1 += arr1[x];
  }
  console.log(sum1);
}
newArr([10, 50, 6, 7, 8, 11, 6, 3, 9]);

//2.	ფუნქციამ უნდა დააბრუნოს სახელი და გვარი ადგილის გამოტოვებით (მაგ: 
//'giorgi saakadze') თუ isloggedin არის true და false თუ 
//isloggedin ფროფერთი არის false;

let user = {
  firstname: 'giorgi',
  lastname: 'saakadze',
  age: 32,
  isloggedin: true
}

let userFnc=(firstname,lastname,age,isloggedin)=>{
  let name=firstname +lastname
if(isloggedin===true){return name}
{return "false"}}

let resltName=userFnc('giorgi','saakadze',32,true)

  
console.log(resltName);








//3.	შექმენით ფუნქცია რომელსაც გადაეცემა ერთი პარამეტრი. ეს პარამეტრი უნდა იყოს
//რიცხვების მასივი და ფუნქციამ უნდა დააბრუნოს ამ რიცხვებიდან მაქსიმალური:

function max(arr) {
  let max = arr[0];
  for (let Index = 1; Index < arr.length; Index++) {
    if (arr[Index] > max) {
      max = arr[Index];
    }
  }

  console.log(max);
}

max([4, 12, 3, 8, 0, 22, 56]);

//4.	დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიიღებს ერთ რიცხვს და
//გამოთვლის გადაცემული მნიშვნელობა კენტია თუ ლუწი; თუ ლუწია დააბრუნოს - this number is even‘;
//თუ კენტია დააბრუნოს - this number is odd‘

function getNumber(number) {
  if (getNumber % 2 == 0) {
    return `this number is even`;
  }
  {
    return `this number is odd`;
  }
}
let resultNumber = getNumber(23);
console.log(resultNumber);

//5. მოცემულია მასივი:
//for ციკლის საშუალებით მიიღეთ reverse ვერისია, ანუ 5,4,3,2,1

let array = [1, 2, 3, 4, 5];
let arrayNew = [];
for (let i = array.length - 1; i >= 0; i--) {
  const Index = array[i];

  arrayNew.push(Index);
}

console.log(arrayNew);

//6.	ფუნქციის საშუალებით გამოთვალეთ იუსერის ასაკი ( არგუმენტად გადაეცით ნებისმიერი რიცხვი)
//და დაამატეთ შემდეგი პირობა, თუ გადაცემული ასაკი მეტია 18- ზე დააბრუნეთ -
//სრულლოვანი, თუ ნაკელებია  დააბრუნეთ არასწულწლოვანი.
//ეს ამოცანა დაწერეთ arrow function-ით და if ის პირობა ჩაწერეთ ახალი სინტაქსით;

let userAge = (date, date1) => {
  let age = date1 - date;
  if (age > 18) {
    return `სრულლოვანი`;
  }
  {
    return `არასრულწლოვანი`;
  }
};

let resultAge = userAge(2000, 2016);
console.log(resultAge);

//7.	მოცემულია მასივი
//ციკლის საშუალებით შეამოწმეთ, თუ ამ მასივში არის რიცხვი 5 - მაშინ დალოგეთ - ‘არის’ და გააჩერეთ ციკლი

let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let item2 of array2) {
  if (item2 === 5) {
    console.log("არის");
    {
      break;
    }
  }
}

//8.	მოცემულია მასივი
//გამოიტანეთ ყველა რიცხვი 7 ის გარდა ( continue)

let array5 = [1, 2, 3, 7, 6, 9];
for (let item of array5) {
  if (item === 7) {
    continue;
  }
  console.log(item);
}
