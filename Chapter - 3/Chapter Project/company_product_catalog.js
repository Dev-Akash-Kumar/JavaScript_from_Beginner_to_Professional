const inv = [];

let item1 = {
    name:'LG',
    model:'XA1',
    cost:199,
    quantity:1
};
let item2 = {
    name:'xG',
    model:'aA1',
    cost:19,
    quantity:11
};
let item3 = {
    name:'LaG',
    model:'A1',
    cost:199,
    quantity:1
};

inv.push(item1,item2,item3);
console.log(inv);   

console.log(inv[2].quantity);
console.log(inv[1].quantity = 5);
console.log(inv);   
