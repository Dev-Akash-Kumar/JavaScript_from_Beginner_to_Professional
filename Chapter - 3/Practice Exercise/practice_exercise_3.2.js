let shoopingList = [];

shoopingList.splice(0,0,"Milk","Bread","Apples");

shoopingList.splice(1,1,"Banana","Eggs");

let lastElement = shoopingList.pop();
console.log(lastElement);

shoopingList.sort();

let search = shoopingList.indexOf("Milk");
console.log(search);

console.log(shoopingList);
shoopingList.splice(1,0,"Carrots","Lettuce");

let newList = ["Juice","Pop"];

let combineList = shoopingList.concat(newList , newList);

let lastIndexValue = combineList.lastIndexOf("Pop");
console.log(lastIndexValue);

console.log(combineList);