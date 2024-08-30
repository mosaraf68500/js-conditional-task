/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/


let weight=60;
let height=3.1;
let BMI=weight/(height)^2;
if(BMI<18.5){
    console.log(  BMI + " = YOU are underweight.")

}
 else if(BMI>=18.5 && BMI<=24.9){
    console.log(  BMI +" = you are normal.")
 }

 else if(BMI>=25 && BMI<=29.0){
    console.log(  BMI +" = you are overweight.")
 }
 else{
    console.log( BMI +" = you are obese.")
 }

 
/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

let marks=75;
if(marks>=90 && marks<101){
    console.log("Grade: A")
}
else if (marks>=80 && marks<90){
    console.log("Grade: B")
}

else if(marks>=70 && marks<80){
    console.log("Grade: C")
}

else if(marks>=60 && marks<70){
    console.log("Grade: D")
}

else{
    console.log("Grade: F")
}


/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/
let myScore =89;
let myFriendScore =70;
if(myScore>80){
    if(myFriendScore>80){
        console.log('go for a lunch.');
    }
    else if(myFriendScore<80 && myFriendScore>=60){
        console.log("good luck for the next time.");
    }

    else if (myFriendScore<60 && myFriendScore>=40){
        console.log('keep your friend message unseen.');
    }
    else if (myFriendScore<40){
        console.log("block your frend")
    }

}
else {
    console.log("sleep and act sad");
}

/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let age=70;
let students=false
let treket=500;
if(age<10){
    console.log("Free ticket")
}
else if (students){
    let discount=50/100 * treket;
    let discountPrice=treket-discount;
    console.log(discountPrice);
}
else if (age>=60){
    let discount=15/100 * treket;
    let totalPrice=treket-discount;
    console.log(totalPrice);

}


let a=4;
let b=6;
b>a ? "b is grether than a":"a is grether than b";