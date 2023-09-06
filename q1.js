// //tamrin aval//
// function Hello(){
//     console.log("Hello");
// }
// setInterval(Hello ,2000);
    





// //tamrin dovom//
// console.log("bye bye World");
// setTimeout (function(){
//     console.log('bye bye World')
// },3000)

// //tamrin sevom//

// function add(a,b){
   
    
//     return a+b;
// }   
// function calcsum(a,b,displaySum){
//     console.log(displaySum(a,b));
   
// }
// calcsum(5,7,add)
 
 

// //tamrin chahar//
// function city(rasht){
//     console.log(rasht);
// }

// city('rain,sun,cloudy,snow');



//tamrin panjom//
let time=10;
let intervalId;

intervalId= setInterval(timer,1000);

function timer(){
    time -= 1;
    console.log(time);
    if (time <= 0){
        clearInterval(intervalId);
    }
}


