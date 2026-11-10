// function add(a,b){
//     return a+b;
// }
// console.log(add(3,4));

// const numbers = [10,20,30];
// for (let i=0;i<numbers.length;i++){
//     console.log(numbers[i]);
// }

// const prices = [100, 250, 75];
// for (let i=0;i<prices.length;i++){
//     console.log(prices[i]);
// }


// const numbers=[10,20,30,40,50];
// const bignumbers=numbers.filter(function(n){
//     return n>30;
// });
// console.log(bignumbers);

// const num=[10,20,30,40,50];
// const bignum=num.map(function(n){
//     return n*2;
// });
// console.log(bignum);

// const names = ["alice", "bob"];
// const upperNames=names.map(function(name){
//     return name.toUpperCase();
// });
// console.log(upperNames);

// const ages = [12, 18, 25, 15, 30];
// const adults=ages.filter(function(age){
//     return age >= 18;
// });
// console.log(adults);

// const user=[
//     {name:"Alice",age:21,isAdmin:false},
//     {name:"Bob",age:22,isAdmin:true},
//     {name:"Charlie",age:23,isAdmin:false},
// ];
// const adult=user.filter(function(ages){
//     return ages.age>18;
// });
// const names=adult.map(function(ages){
//     return ages.name;
// });
// console.log(names);
// for (let i=0;i<user.length;i++){
//     console.log(user[i].name);
//     console.log(user[i].age);
// }

// const products = [
//   { name: "pen", price: 10, inStock: true },
//   { name: "book", price: 50, inStock: false },
//   { name: "bag", price: 200, inStock: true }
// ];
// const inStockProducts = products.filter(function(product){return product.inStock && product.price<100;})
// .map((product)=> product.name);                                
// // .map(function(product){return product.name;});
// console.log(inStockProducts);


// Async await

// function wait(ms){
//     return new Promise((resolve)=>{
//         setTimeout(resolve,ms);
//     });
// }
// async function main(){
//     console.log("start");
//     await wait(1000);
//     console.log("after 1 second");
//     await wait(2000);
//     console.log("after 2 seconds");
// }
// main();

// function delayedGreeting(name){
//     return new Promise((resolve)=>{
//         setTimeout(() => resolve("Hello, " + name), 500);
//     });
// }
// async function greet(){
//     console.log("Hello");
//     const message= await delayedGreeting("chandini");
//     console.log(message);
// }
// greet();


//try catch
function mightFail(shouldFail){
    return new Promise((resolve,reject)=>{
        if(shouldFail){
            reject(new Error("Something went wrong"));
        }else{
            resolve("Success");
        }
    });
}
async function my(){
    try{
        const result=await mightFail(true);
        console.log(result);
    } catch (error){
        console.log("Caught:",error.message);
    }
}
my();