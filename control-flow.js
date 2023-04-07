//write a function that accepts an array of srings and console.log each element using a for loop
//let array=["atarah","mumbi","brenda","miriam"]
let string=["atarah","mumbi","brenda","miriam"];
function nameArray(string){
for(let i =0;i<string.length;i++){
    
}
console.log(string);
}
nameArray(string)

//write a function that accepts an array of numbers and uses the forEach() method to console.log each number by 2

const numbers = [2,4,6,8,10,12];
numbers.forEach(myFunction)

function myFunction(numbers, index) {
  numbers[index] = numbers * 2;
  console.log(numbers*2)
}

     
//write a function that takes in an array of numbers and consoles the first four
// items multiplied by 8 and the last two added by 5.console the array with new value
const arrNumy = [2,4,6,8,10,12];
function table (arrNumy){
  for (i =0; i <4; i++){
    arrNumy[i] *=8
  }
  for(let i=arrNumy.length -2;i<arrNumy.length ; i++) {
    arrNumy[i] +=5
  }
  console.log(arrNumy)
}
table(arrNumy)


//write a function that takes in the following array and use a while loop to the fourth index
let arrNum =[1,2,3,4,5,6,7,7,9];
function miriam(arrNum){
let i = 0;

while (i < arrNum.length) {
    console.log(arrNum[i]);
    if(i ===3){
      break;
  }
    i++;
}
}
miriam(arrNum)

//Write a function that takes in a an array of strings and use a continue statement when the item is at the second index

let fruits= ['apple','plum','banana','strawberries','kiwi']
function names(fruits){
for( i =0; i<fruits.length;i++){
  if(i ===1){
      continue;
  }
  console.log("continue",fruits[i]);
}
}
names(fruits)
