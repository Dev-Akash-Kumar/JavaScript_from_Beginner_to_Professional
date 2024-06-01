let heightInInches = 72;
let weightInPounds = 180;

let heightInCms = heightInInches * 2.54;
let weightInKgs = weightInPounds / 2.2046;

let BMI = weightInKgs / (heightInCms/100 * heightInCms/100);
console.log(BMI);
