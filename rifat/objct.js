// let information = {
//     name: 'rifat',
//     rool: 44,
//     age: 20,
//     dep: 'cse',
//     'you are a':'rifat,sifat,rakid'
// };
// console.log(information);
// information.name='sifat';
// information["you are a"]='on,tow,tree';
// let user = information.dep;
// let user_Name = information['rool'];
// console.log(information.age);
// console.log(information['name']);
// console.log(user);
// console.log(user_Name);
// console.log(information['you are a']);

// let conputer={
//     hdd: 'hp',
//     name: 'apple',
//     brand: 'toro',
// }
// const keys=Object.keys(conputer);
// console.log(keys);

// const valuse=Object.values(conputer);
// console.log(valuse);

// let brand = {
//     apple: 'hp',
//     tcp: 'ip',
//     logic: 12
// }
// let keys = Object.keys(brand);
// console.log(keys);

// for (let key of keys) {

//     console.log(key.concat(":").concat(brand[key]).concat("|"),key.concat(":").concat(brand[key]));
// }

// const tome=new Object('44,53,64')
// const tote=Object.create({})
// console.log(tote);
// console.log(tome);

// let numbet=[12,22,32,42,11];
// for(let i=0; i<numbet.length; i++){
//     console.log(numbet[i]);
// }


// console.log(numbet);
// numbet.reverse()
// console.log(numbet);


let num=['riat','sifat','akib','dakiv'];
let sum=[22,1,5,9,11,55,77,10];
console.log(num.sort());//sort-
console.log(sum.sort(function(a, b){return(a-b)})); //caract sort 1 
console.log(sum.sort((a, b) => (a - b))); //caract sort 2
console.log(sum.sort(function(a, b){return(b-a)})); //revars sort-
