/*
Syntax
for (counter,condition,expression){
    //code goes here
}
*/

//elevator going dowm
// for loop
for(let floor=3; floor>1; floor--) {
    console.log("Going down");
    if(floor==1){
        console.log("You have arrived at your destination")
    }
}
for(let num=1; num<=10; num++){
    console.log("Hi there!")
}

//while loop
const REQUIRED_AGE=18;
let currentAge=2;
while(currentAge<REQUIRED_AGE){
    console.log("you are under age");
    //currentAge+=1;
}

//do while loop
let num=0;
do {
    num++;
    console.log("Hi there number: ", num)
//     
} while (num < 10);





//Assignment Elevator going up
for (let floor=0; floor<=4; floor++){
    console.log("elevator going up")
}