// let num=['red','blue','green','yellow','orang'];
// let sum=num.reverse()
// console.log(num);

let number=[12,98,5,41,23,78,46];
let cont = [];
for(let i=0; i<number.length; i++){
      if(number[i]%2===0){
        cont.push(number[i]);
      } 
}
console.log(cont);
